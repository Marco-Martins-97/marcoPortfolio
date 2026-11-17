# Marco Martins — Web Development

Bilingual (`pt-PT` default / `EN`) developer portfolio and freelance web studio built with **React 19**, **Vite 8**, **Tailwind CSS v4**, and an API-ready two-stage architecture.

**Live Production:** [builtbymarco.dev](https://builtbymarco.dev)

---

## Key Features

- **Bilingual (`pt-PT` / `EN`) Architecture:** Instant switching via React Context (`LanguageContext`) with persistent `localStorage` state, dynamic `<html lang>` syncing, and schema-mirrored `{ en, pt }` copy.
- **Responsive Pure Cobalt Dark System:** Strict mobile-first design scaling from `320px` phones through `4K` (`2200px+`) displays, with a sticky top navbar and custom cropped WebP brand assets.
- **Two-Tier Projects Showcase (`/projects` & `/projects/:slug`):**
  - **Primary Projects (4):** Full-bleed `16:9` WebP cover cards, status badges (`Live` / `Building`), uniform `react-icons` tech grids, and deep-dive case studies (*Root Studio Fitness*, *BuiltByMarco.dev*, *HomeLab*, *Obelisk*).
  - **Secondary Projects (6):** Curated REST APIs, frontend apps, and WordPress/PHP plugins.
  - **Versioned Releases & Lightbox:** Collapsible release changelogs (`versions[]`) with lazy-loaded miniature thumbnails opening an accessible `<dialog>` `ScreenshotLightbox` (arrow keys + `Esc`).
- **Two-Step Contact Composer (`EmailModal`):**
  - Accessible `<dialog>` modal (fullscreen on mobile, `80dvh` on tablet/desktop+) with 4 bilingual templates (`Business Website`, `Custom Web Tool`, `Full-Stack Role`, `General Question`).
  - Launches either a local `mailto:` client or Gmail web compose, followed by a Step 2 confirmation view that preserves the user's draft and provides 1-click clipboard recovery.
- **SEO & AIEO Ready:** Dynamic `<title>`, `<meta name="description">`, and `<link rel="canonical">` per route (`useDocumentTitle`), OpenGraph + Twitter Card banner (`og-cover.png`), `llms.txt`, `robots.txt`, `sitemap.xml`, `<noscript>` fallback, and JSON-LD `@graph` (`Person`, `ProfessionalService`, `ItemList`).

---

## Tech Stack

- **Frontend (`client/`):** React 19, Vite 8, Tailwind CSS v4 (`@tailwindcss/vite`), React Router v7, `react-icons`
- **Testing & Linting:** Vitest 5, Testing Library (`@testing-library/react`, `jest-dom`, `user-event`), ESLint 10
- **Hosting:** Vercel (`client/vercel.json` with SPA fallback rewrites & immutable asset caching)

---

## Project Structure

```text
marcoPortfolio/
├── client/                  # Stage 1 React + Vite frontend
│   ├── public/              # favicon.svg, og-cover.png, llms.txt, robots.txt, sitemap.xml
│   ├── src/
│   │   ├── assets/          # Optimized WebP portrait, logo, and project screenshots
│   │   ├── components/      # Navbar, Footer, EmailModal, ScreenshotLightbox
│   │   ├── context/         # LanguageContext (pt-PT / EN)
│   │   ├── data/            # siteConfig.js, projects.js (Stage 2 schema-aligned seeds)
│   │   ├── hooks/           # useLanguage, useDocumentTitle
│   │   ├── pages/           # Home, Projects, ProjectDetails, About, NotFound
│   │   ├── services/        # projectService.js (Stage 2 API adapter boundary)
│   │   ├── tests/           # 9 Vitest + Testing Library suites (31 tests)
│   │   └── utils/           # techIcons.js
│   └── vercel.json          # SPA rewrites & static cache headers
├── server/                  # Reserved for Stage 2 MERN Express API
├── SPEC.md                  # Living technical & product specification
└── AGENTS.md                # Engineering & review protocol
```

---

## Local Development

```bash
cd client
npm install
npm run dev
```

### Quality Gates

```bash
cd client
npm run lint        # ESLint check
npx vitest run      # Run all 9 test suites (31 tests)
npm run build       # Production Vite bundle -> client/dist/
```

---

## Vercel Deployment Settings

- **Framework Preset:** Vite
- **Root Directory:** `client`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

`client/vercel.json` handles client-side route rewrites (`/(.*) -> /index.html`) so direct visits to `/projects`, `/projects/:slug`, and `/about` resolve cleanly.

---

## Public Contact

- **Website:** [builtbymarco.dev](https://builtbymarco.dev)
- **Email:** `marcomartinswebdev@gmail.com`
- **GitHub:** [github.com/Marco-Martins-97](https://github.com/Marco-Martins-97)
- **LinkedIn:** [linkedin.com/in/marcomartins97](https://www.linkedin.com/in/marcomartins97)
