<!--
DESIGN READ: brutalist-terminal, GitHub-flavored markdown.
GitHub strips <style> from profile README, so visual styling lives in inline HTML
attributes + a self-rendered SVG terminal block (GitHub SVG passthrough).
DIALS: variance 9 / motion 4 / density 5
PALETTE LOCK (inlined per-element since global CSS is stripped):
  ink    #0a0a0a   paper #f4f1ea   mute  #6b6862
  rule   #1a1a1a   acid  #39ff14
TYPOGRAPHY LOCK: JetBrains Mono / IBM Plex Mono (loaded via @import for
SVG <foreignObject>; for raw README viewing, monospace fallback applies).
-->

<div align="center">

<img src="https://img.shields.io/badge/STATUS-OPEN_TO_OFFER-39ff14?style=for-the-badge&labelColor=0a0a0a&color=39ff14" alt="status: open to offer" />
<img src="https://img.shields.io/badge/ROLE-SE_INTERN__BACKEND_+_DEVOPS-0a0a0a?style=for-the-badge&labelColor=f4f1ea&color=0a0a0a" alt="role: SE intern backend + devops" />
<img src="https://img.shields.io/badge/LOCATION-HANOI__VN-f4f1ea?style=for-the-badge&labelColor=0a0a0a&color=f4f1ea" alt="location: Hanoi VN" />

</div>

<br/>

<!-- TERMINAL HERO: inline SVG with foreignObject so GitHub renders HTML inside -->
<div align="center">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 360" width="100%" style="max-width:900px;font-family:'JetBrains Mono','IBM Plex Mono',ui-monospace,monospace">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&amp;display=swap');
      .bg{fill:#f4f1ea}
      .ink{fill:#0a0a0a}
      .mute{fill:#6b6862}
      .acid{fill:#39ff14}
      .rule{stroke:#1a1a1a;stroke-width:1}
      .rule2{stroke:#1a1a1a;stroke-width:2}
      .h{font:700 13px 'JetBrains Mono',ui-monospace,monospace;letter-spacing:.06em;text-transform:uppercase}
      .k{font:500 14px 'JetBrains Mono',ui-monospace,monospace;fill:#6b6862}
      .v{font:500 14px 'JetBrains Mono',ui-monospace,monospace;fill:#0a0a0a}
      .va{font:700 14px 'JetBrains Mono',ui-monospace,monospace;fill:#0a0a0a}
      .name{font:800 38px 'JetBrains Mono',ui-monospace,monospace;fill:#0a0a0a;letter-spacing:-.02em}
      .tag{font:500 12px 'JetBrains Mono',ui-monospace,monospace;fill:#6b6862;letter-spacing:.08em;text-transform:uppercase}
      .bar-text{font:700 11px 'JetBrains Mono',ui-monospace,monospace;fill:#f4f1ea;letter-spacing:.04em}
    </style>
  </defs>

  <rect class="bg" width="900" height="360"/>
  <rect class="ink" x="0" y="0" width="900" height="32"/>
  <text class="bar-text" x="14" y="21">azure@abalone:~/profile — bash</text>
  <circle cx="868" cy="16" r="5" fill="#39ff14"/>

  <text class="tag" x="32" y="72">SOFTWARE ENGINEERING INTERN · BACKEND + DEVOPS</text>
  <text class="name" x="32" y="118">Pham Ho Bao</text>
  <text class="tag" x="32" y="148">@AZUREABALONE · HANOI, VN · OPEN TO SE INTERN LATE 2026</text>

  <line class="rule" x1="32" y1="172" x2="868" y2="172"/>

  <!-- terminal block, left column -->
  <text class="h" x="32" y="198">// PROFILE.STATUS</text>

  <text class="k" x="32" y="222">01</text><text class="k" x="60" y="222">name</text>
  <text class="v" x="148" y="222">"Pham Ho Bao"</text>

  <text class="k" x="32" y="244">02</text><text class="k" x="60" y="244">handle</text>
  <text class="v" x="148" y="244">"@AzureAbalone"</text>

  <text class="k" x="32" y="266">03</text><text class="k" x="60" y="266">role</text>
  <text class="v" x="148" y="266">"SE Intern / Backend + DevOps"</text>

  <text class="k" x="32" y="288">04</text><text class="k" x="60" y="288">school</text>
  <text class="v" x="148" y="288">"VNU-IS / Applied IT"</text>

  <text class="k" x="32" y="310">05</text><text class="k" x="60" y="310">year</text>
  <text class="v" x="148" y="310">"3 / expected 2027"</text>

  <text class="k" x="32" y="332">06</text><text class="k" x="60" y="332">gpa</text>
  <text class="v" x="148" y="332">"3.64 / 4.0"</text>

  <text class="k" x="430" y="222">07</text><text class="k" x="458" y="222">email</text>
  <text class="v" x="546" y="222">"phambao281005@gmail.com"</text>

  <text class="k" x="430" y="244">08</text><text class="k" x="458" y="244">location</text>
  <text class="v" x="546" y="244">"Hanoi, VN"</text>

  <text class="k" x="430" y="266">09</text><text class="k" x="458" y="266">open_to</text>
  <text class="v" x="546" y="266">"SE Intern, late 2026"</text>

  <text class="k" x="430" y="288">10</text><text class="k" x="458" y="288">stack</text>
  <text class="v" x="546" y="288">"Java · Spring · Postgres · Docker"</text>

  <text class="k" x="430" y="310">11</text><text class="k" x="458" y="310">ops</text>
  <text class="v" x="546" y="310">"Coolify · Woodpecker · Caddy"</text>

  <text class="k" x="430" y="332">12</text><text class="k" x="458" y="332">signal</text>
  <text class="va" x="546" y="332" fill="#39ff14" stroke="#0a0a0a" stroke-width="0.5">"AVAILABLE"</text>

  <line class="rule2" x1="0" y1="358" x2="900" y2="358"/>
</svg>

</div>

<br/>

<!-- CTA buttons as markdown links with badge styling -->
<div align="center">

[![Email](https://img.shields.io/badge/EMAIL-phambao281005%40gmail.com-0a0a0a?style=for-the-badge&logo=gmail&logoColor=f4f1ea)](mailto:phambao281005@gmail.com)
&nbsp;
[![GitHub](https://img.shields.io/badge/GITHUB-AzureAbalone-39ff14?style=for-the-badge&logo=github&logoColor=0a0a0a)](https://github.com/AzureAbalone)
&nbsp;
[![CV (EN)](https://img.shields.io/badge/CV_EN-PDF-f4f1ea?style=for-the-badge&logo=adobeacrobatreader&logoColor=0a0a0a)](https://drive.google.com/file/d/1C4jRi4NZbTO_zMn3Ze_SOgNe1ALywZgy/view?usp=drive_link)
&nbsp;
[![CV (VI)](https://img.shields.io/badge/CV_VI-PDF-f4f1ea?style=for-the-badge&logo=adobeacrobatreader&logoColor=0a0a0a)](https://drive.google.com/file/d/1AomxLMRi_E2tlb4fM_3kKvfcJEhxL5FE/view?usp=drive_link)

</div>

---

## `// stack.tools`

<div align="center">

| **Backend** | **DevOps** | **Frontend** | **Data** | **Security** |
|:---:|:---:|:---:|:---:|:---:|
| ![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white) | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) | ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) | ![Postgres](https://img.shields.io/badge/Postgres-316192?style=flat-square&logo=postgresql&logoColor=white) | ![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white) |
| ![Spring](https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=spring&logoColor=white) | ![Coolify](https://img.shields.io/badge/Coolify-1A1A1A?style=flat-square) | ![Next.js](https://img.shields.io/badge/Next.js-000?style=flat-square&logo=nextdotjs&logoColor=white) | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) | ![Turnstile](https://img.shields.io/badge/Turnstile-F38020?style=flat-square) |
| ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) | ![Woodpecker](https://img.shields.io/badge/Woodpecker-4CAF50?style=flat-square) | ![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | ![R2](https://img.shields.io/badge/R2-F38020?style=flat-square&logo=cloudflare&logoColor=white) | ![Altcha](https://img.shields.io/badge/Altcha-0a0a0a?style=flat-square) |
| ![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white) | ![Caddy](https://img.shields.io/badge/Caddy-1F88C0?style=flat-square&logo=caddy&logoColor=white) | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | ![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white) | ![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white) |

</div>

---

## `// projects.shipped`

> Production or near-production. Each card maps to a real repo or live deployment.

<table>
<tr>
<td width="50%" valign="top">

### `ragagent` — KMS + LMS + AI Chatbot

Spring Boot + Postgres + RAG embeddings. CI/CD via GitHub Actions → Coolify.
Multi-tenant document store, exam module, AI tutor. Built solo + 1 dev.

**Stack:** `Java 21 · Spring Boot 3 · Postgres 16 · pgvector · R2`

</td>
<td width="50%" valign="top">

### `ops-notes` — Self-hosted Online Exam

Spring Boot exam platform. Cloudflare Turnstile + Altcha anti-bot.
GitHub Actions → Coolify on every push. R2 for static assets.
Full lifecycle with one other dev.

**Scale:** `4,000 students · 300 concurrent`

</td>
</tr>
<tr>
<td width="50%" valign="top">

### `rag-chatbot-demo` — Personal RAG

Embeddings + retrieval + Spring Boot backend. Mirrors the Traphaco
proxy pattern at home. End-to-end demo pipeline.

**Status:** `1 demo · end-to-end`

</td>
<td width="50%" valign="top">

### `trafup-anti-bot` — Anti-automation Defense

Cloudflare Turnstile + Altcha proof-of-work + behavioral analytics.
Multi-layer visible challenge for trafup.com.

**Layers:** `2 visible + server-side heuristics`

</td>
</tr>
<tr>
<td width="50%" valign="top">

### `ops-notes` — DevOps Notebook

Coolify, Docker Compose patterns, Woodpecker CI snippets,
Nginx reverse-proxy, Cloudflare + TLS recipes.

**Status:** `live ops reference`

</td>
<td width="50%" valign="top">

### `url-shortener-cicd` — CI/CD Practice

Compact shortener built to exercise the full
GitHub Actions → Docker → Woodpecker → VPS rollout path.

**Result:** `0-downtime redeploys`

</td>
</tr>
</table>

---

## `// contribution.activity`

<!-- STATS: hardcoded snapshot for first render; auto-updated daily by .github/workflows/contrib.yml -->
<div align="center">

| `<div class="stat-num" data-stat="last-year-contribs">324</div>` | `<div class="stat-num" data-stat="commits-in-july-2026">312</div>` | `<div class="stat-num" data-stat="active-repositories">7</div>` | `<div class="stat-num" data-stat="pull-requests-merged">3</div>` |
|:---:|:---:|:---:|:---:|
| **contributions** last year | **commits** July 2026 | **active** repositories | **PRs** merged |

</div>

<br/>

<!-- TOP REPOS BY COMMITS: stripped-text block, brutalist-terminal style -->
```

```

01  hoangtrieu123/Knowledge-Center-BE    68  ████████████████████ 100%
02  AzureAbalone/Telebot                  7  ██                      10%
03  hoangtrieu123/knowledge-center-fe     5  █                       7%
04  azure-abalone/pkg-mng                 4  █                       6%
05  hoangtrieu123/aic-svc                 3  █                       4%

```

```

<!-- ACTIVITY GRAPH: github-readme-activity-graph, theme matched to brutalist slab -->
<div align="center">

<img src="https://github-readme-activity-graph.vercel.app/graph?username=AzureAbalone&theme=github-dark&area=true&hide_border=true&radius=0&custom_title=AzureAbalone+%2F+yearly+contribution+activity" alt="GitHub yearly contribution activity graph for @AzureAbalone" />

</div>

<div align="center">

<sub>Stats auto-refreshed daily via <code>.github/workflows/contrib.yml</code> · graph via <a href="https://github.com/2003scott/github-readme-activity-graph">github-readme-activity-graph</a></sub>

</div>

---

<div align="center">

```
END OF DOCUMENT · signal: brutalist-terminal · github highlight only
```

<sub>Built with `<3` and too much terminal at 02:00 UTC · Hanoi, VN</sub>

</div>
