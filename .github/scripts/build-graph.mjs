#!/usr/bin/env node
/**
 * build-graph.mjs
 *
 * Brutalist contribution-graph generator for AzureAbalone/azureabalone.github.io.
 *
 * Reads live GitHub contribution data via GraphQL, renders a 26-week
 * mono-color SVG (cell = solid #0a0a0a if any commit on that day,
 * otherwise empty), and inlines it into index.html between the markers
 * <!--CONTRIB_GRAPH:START--> ... <!--CONTRIB_GRAPH:END-->.
 *
 * Used by .github/workflows/contrib.yml. Designed to be re-entrant and
 * safe on no-op re-runs (same SVG → same file → no diff).
 *
 * Behavior:
 *   - Runs without throwing when GITHUB_TOKEN is missing: writes a
 *     deterministic stub SVG so the page never 404s on the placeholder.
 *   - Uses Node 20 built-in fetch (no npm install needed).
 *   - Logs each step to stdout for the Actions log.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(process.cwd());
const INDEX = resolve(ROOT, "index.html");
const MARKER_START = "<!--CONTRIB_GRAPH:START-->";
const MARKER_END = "<!--CONTRIB_GRAPH:END-->";
const WEEKS = 26;          // 26 tuần ~ 6 tháng gần nhất
const CELL = 11;           // px
const GAP = 2;             // px
const PAD_X = 4;
const PAD_Y = 4
const STROKE = "var(--rule, #1a1a1a)";

if (!existsSync(INDEX)) {
  console.error(`[build-graph] index.html not found at ${INDEX}`);
  process.exit(1);
}

const token = process.env.GITHUB_TOKEN || process.env.GITHUB_API_TOKEN || "";
const login = process.env.GITHUB_LOGIN || "AzureAbalone";

/* ---------------------------------------------------------------
 * GraphQL
 * ----------------------------------------------------------- */
const query = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks(first: 53) {
          contributionDays {
            contributionCount
            weekday
            date
          }
        }
      }
    }
  }
}`;

async function fetchContribs() {
  if (!token) {
    console.warn("[build-graph] no GITHUB_TOKEN; using empty calendar (deterministic stub).");
    return null;
  }
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "azureabalone-pages-bot",
    },
    body: JSON.stringify({ query, variables: { login } }),
  });
  if (!res.ok) {
    console.warn(`[build-graph] GraphQL HTTP ${res.status}; using stub.`);
    return null;
  }
  const json = await res.json();
  if (json.errors) {
    console.warn(`[build-graph] GraphQL errors: ${JSON.stringify(json.errors)}; using stub.`);
    return null;
  }
  const cc = json?.data?.user?.contributionsCollection;
  if (!cc) {
    console.warn("[build-graph] empty contributionCollection; using stub.");
    return null;
  }
  return cc.contributionCalendar;
}

/* ---------------------------------------------------------------
 * Render
 * ----------------------------------------------------------- */
function buildSvg(calendar) {
  const weeks = calendar?.weeks || [];
  // GitHub weeks[] newest-first; ensure chronological asc for slicing.
  const flat = weeks
    .flatMap((w) => w.contributionDays)
    .sort((a, b) => a.date.localeCompare(b.date));
  if (flat.length === 0) {
    return svgStub("no data");
  }
  // take last WEEKS * 7 days
  const slice = flat.slice(-WEEKS * 7);
  const cols = WEEKS;
  const rows = 7;
  const w = PAD_X * 2 + cols * CELL + (cols - 1) * GAP;
  const h = PAD_Y * 2 + rows * CELL + (rows - 1) * GAP;

  const cells = [];
  for (let i = 0; i < slice.length; i++) {
    const day = slice[i];
    const col = Math.floor(i / 7);
    const row = i % 7;
    const x = PAD_X + col * (CELL + GAP);
    const y = PAD_Y + row * (CELL + GAP);
    const isFuture = day.date > todayIso();
    if (isFuture) continue;
    if (day.contributionCount > 0) {
      cells.push(
        `<rect x="${x}" y="${y}" width="${CELL}" height="${CELL}" fill="#0a0a0a"><title>${escapeXml(day.date)} (${day.contributionCount})</title></rect>`,
      );
    } else {
      cells.push(
        `<rect x="${x}" y="${y}" width="${CELL}" height="${CELL}" fill="none" stroke="${STROKE}" stroke-width="0.5"><title>${escapeXml(day.date)} (0)</title></rect>`,
      );
    }
  }

  const total = calendar.totalContributions ?? slice.reduce((s, d) => s + d.contributionCount, 0);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="26-week contribution graph, ${total} contributions" class="contrib-svg"><g>${cells.join("")}</g></svg>`;
}

function svgStub(reason) {
  const w = PAD_X * 2 + WEEKS * CELL + (WEEKS - 1) * GAP;
  const h = PAD_Y * 2 + 7 * CELL + 6 * GAP;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="contribution graph unavailable" class="contrib-svg"><g>${`<rect x="${PAD_X}" y="${PAD_Y}" width="${w - PAD_X * 2}" height="${h - PAD_Y * 2}" fill="none" stroke="${STROKE}" stroke-dasharray="2 2"/><text x="${w / 2}" y="${h / 2}" text-anchor="middle" dominant-baseline="middle" font-family="ui-monospace,monospace" font-size="9" fill="#1a1a1a">graph unavailable :: ${escapeXml(reason)}</text>`}</g></svg>`;
}

function escapeXml(s) {
  return String(s).replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]),
  );
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

/* ---------------------------------------------------------------
 * Patch index.html
 * ----------------------------------------------------------- */
const html = readFileSync(INDEX, "utf8");
const startIdx = html.indexOf(MARKER_START);
const endIdx = html.indexOf(MARKER_END);
if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
  console.error(`[build-graph] markers not found. Add ${MARKER_START} / ${MARKER_END} around the contrib block.`);
  process.exit(1);
}
const before = html.slice(0, startIdx + MARKER_START.length);
const after = html.slice(endIdx);
const calendar = await fetchContribs();
const svg = buildSvg(calendar);
const fallbackLink = `<p class="contrib-fallback">graph generated ${new Date().toISOString().slice(0, 10)} :: ${calendar ? "live" : "stub"} :: <a href="https://github.com/${login}" target="_blank" rel="noopener">@${login} on GitHub</a></p>`;
const replacement = `\n      <div class="graph-frame">${svg}</div>\n      ${fallbackLink}\n      `;
const next = `${before}${replacement}${after}`;
writeFileSync(INDEX, next);
console.log(`[build-graph] patched index.html :: svg source = ${calendar ? "live GraphQL" : "stub"}`);
