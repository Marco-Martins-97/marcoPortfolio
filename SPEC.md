# 📋 PROJECT SPECIFICATION — MARCO MARTINS PORTFOLIO & FREELANCE WEB STUDIO

> **Status:** Stage 1 Complete — Ready for Vercel Deployment (API-Ready)  
> **Production Domain:** `https://builtbymarco.dev`  
> **Last Updated:** 2026-11-16  

---

## 1. Overview, Brand Positioning & Privacy
- **Public Positioning:** **Marco Martins — Full-Stack Developer & Web Studio** (`Esposende / Braga, Portugal`). Never use the *"Junior"* label in public UI copy, metadata, or SEO.
- **Problem Statement:** Marco needs a unified web platform that serves two distinct commercial goals: (1) proving full-stack MERN engineering competence to hiring teams, and (2) converting local/small-business prospects looking for clean, reliable, simple homepages.
- **Target Audience:**
  1. **Tech Recruiters & Hiring Managers:** Evaluating full-stack JavaScript/MERN architecture, code quality, testing discipline, and UI polish.
  2. **Small-Business Owners:** Non-technical clients seeking a fast, trustworthy homepage/starter website without agency complexity.
- **AI-Augmented Engineering Narrative:** Present AI tooling transparently as a modern engineering multiplier: **Spec-Driven Development (`SPEC.md` + ADRs), AI-Assisted Prototyping & Test Generation, and Human-Verified Clean Architecture**—never as *"AI wrote my site"*.
- **PII & CV Security Rule:** Keep unredacted CV PDFs (`*.pdf`, e.g., `marco_martins_cv_27_5_2026.pdf`) strictly out of Git and `client/public/`. Never store or render street address, postal code, phone number, exact date of birth, or non-tech employment details. Approved public contact endpoints only:
  - Website: `https://builtbymarco.dev`
  - Email: `marcomartinswebdev@gmail.com`
  - GitHub: `https://github.com/Marco-Martins-97`
  - LinkedIn: `https://www.linkedin.com/in/marcomartins97`
- **Phased Delivery Strategy:**
  - **Stage 1 (Current — Static Frontend, API-Ready):** Build the complete dark-mode bilingual frontend (`React + Vite + Tailwind CSS + React Router`) backed by local seed data behind an async service layer (`src/services/`) whose data contracts match Stage 2 MongoDB documents.
  - **Stage 2 (Next — MERN Backend Integration):** Build the Node/Express API, MongoDB Atlas (`M0`) database, and Cloudinary media pipeline; swap `src/services/` internals from seed data to `fetch('/api/v1/...')` with zero UI component rewrites.

---

## 2. Tech Stack & Infrastructure (MERN — JavaScript ES6+)
- **Language:** JavaScript (`ES6+`, **no TypeScript**) + comprehensive JSDoc (`@param`, `@returns`, `@throws`) & inline comments.
- **Frontend (Stage 1):** React (Latest Stable) + Vite + Tailwind CSS + React Router + `react-icons`.
- **Backend (Stage 2):** Node.js (Active LTS) + Express.
- **Database & ODM (Stage 2):** MongoDB Atlas (`M0`) + Mongoose.
- **Media CDN (Stage 2 / Stage 1-compatible URLs):** Cloudinary (Responsive image hosting + `f_auto,q_auto` transforms).
- **Runtime Validation:** *(TBD: Zod vs. Joi / Express-Validator — mandatory for Stage 1 form validation and Stage 2 API boundaries due to no TypeScript)*.
- **Testing:** Vitest + React Testing Library (Stage 1 Frontend), Vitest/Jest + Supertest (Stage 2 Backend) *(exact backend runner TBD)*.

### Hosting & External Services (Free-Tier Breakdown)
| Service | Role | Why This Tool & Key Advantages | Free-Tier Limitations |
| :--- | :--- | :--- | :--- |
| **Vercel** | Frontend Hosting | Zero-config Vite deploys, global Edge CDN, instant preview PR URLs, automatic HTTPS. | Hobby tier restricts direct commercial monetization; 100 GB bandwidth/mo. |
| **Render** | Express API Hosting *(Stage 2)* | Native Node.js support, auto-deploy from Git, managed TLS, zero credit card required. | **Cold starts (30–50s)** after 15 min of inactivity; 750 free instance hours/mo; ephemeral local filesystem. |
| **MongoDB Atlas (`M0`)** | Cloud Database *(Stage 2)* | Official managed MongoDB, works seamlessly with Mongoose, zero DB admin overhead. | 512 MB storage cap; shared RAM/vCPU; pauses after prolonged inactivity if unused. |
| **Cloudinary** | Image & Media CDN | Offloads asset storage from Render's ephemeral disk; automatic `WebP`/`AVIF` + resizing via URL params. | 25 monthly credits (storage + bandwidth + transforms combined); requires strict size/format upload limits. |

### Render Cold-Start Mitigation Strategy *(Stage 2)*
- **Static-First Initial Render:** Hero, value propositions, services overview, and baseline featured project cards render immediately from Vercel CDN without blocking on backend API responses.
- **Background Wake-up Ping:** Client fires a non-blocking `GET /api/v1/health` on mount so the Render Express instance warms up silently before the visitor interacts with dynamic routes or submits a contact inquiry.

---

## 3. UI/UX, Visual Design System & Site Map
- **Theme:** Dark Mode Default — simple, clean, modern, high-readability layout.
- **Responsive Strategy (Strict Mobile-First + 4K Scaling):** Design and style all layouts for narrow mobile viewports (`320px–379px`) first using unprefixed Tailwind utilities (single-column stacks, centered headings, justified descriptions, touch-friendly targets `>= 24x24px` / `44px` on coarse pointers, zero horizontal scroll). Keep mobile & tablet aligned (`< lg`), and progressively enhance for desktop (`lg:`) and 4K (`xl:max-w-6xl 2xl:max-w-[90rem] min-[2200px]:max-w-[112rem]`). Sync per-route `<title>` via `useDocumentTitle`.
- **Color Palette (Pure Cobalt Dark Theme):**
  - **Primary Background:** Deep Charcoal / Obsidian (`#0A0A0C`)
  - **Surface / Cards:** Elevated Slate (`#121216`) with subtle borders (`#1E293B`)
  - **Primary Text:** Crisp White (`#F8FAFC`)
  - **Secondary Text:** Light Gray (`#94A3B8` / `#CBD5E1`)
  - **Primary CTA Accent:** Cobalt Strong (`#2563EB`) with crisp white text (`#F8FAFC`, `~5.0:1` WCAG AA contrast)
  - **Secondary Accent (Engineering / Navigation / Links):** Cobalt (`#3B82F6` borders/badges, `#60A5FA` text links on dark surfaces)
  - **Status Badges:** Emerald (`#34D399` on `rgba(16, 185, 129, 0.14)`) for `Live`; Amber (`#FBBF24` on `rgba(245, 158, 11, 0.14)`) for `Building`; Cobalt Light (`#60A5FA` on `rgba(59, 130, 246, 0.14)`) for `Planning`
- **UI Language / i18n:** Bilingual **`pt-PT` & `EN`** via lightweight React Context + schema-mirrored `{ en, pt }` content objects (no heavy i18n framework overhead).

### Site Map & Route Architecture
| Route | Page | Purpose & Content |
| :--- | :--- | :--- |
| `/` | **Homepage** | Clean, client-friendly landing page with plain-language value propositions, direct email + copy-email CTAs, and redirect CTA to `/projects`. |
| `/projects` | **Projects Index** | Two-tier showcase: **Primary Projects** (*Root Studio Fitness*, *Marco Portfolio & Web Studio*, *HomeLab*, *Obelisk*) linking to detail pages; **Secondary Projects** (6 curated backend APIs, frontend apps, PHP plugin & systems) linking directly to GitHub/Demo. |
| `/projects/:slug` | **Project Details** | Dedicated deep-dive page for Primary Projects with full overview, build status (`live` \| `building` \| `planning`), tech stack, architectural/business highlights, and placeholder screenshot gallery. |
| `/about` | **About** | Concise developer bio, experience, education, AI-augmented engineering workflow, hardware/maker interests, and direct contact/resume options. |

---

## 4. Functional Scope & Real Content Inventory
### Stage 1 — Static Frontend, API-Ready (Current Milestone)
- [x] **Bilingual (`pt-PT` / `EN`) Toggle:** Instant language switch synced across navigation, UI copy, and project content.
- [x] **`/` Homepage:** Clean hero, plain-language small-business value proposition, **2–3 clear CTAs** (email + copy-email fallback + `/projects` & `/about` redirects).
- [x] **`/projects` Index Page:** Separated **Primary Projects** (4 core works with full-bleed `16:9` cover previews, overlay `Live`/`Building` badges, uniform tech grids, and 50/50 right-aligned actions) and **Secondary Projects** (6 curated APIs, web apps, plugins & systems).
- [x] **`/projects/:slug` Project Details:** Full case study/detail view with minimalist inline metadata row (`Role`, `Hosting & Infra`, `Timeline`), architecture highlights, `react-icons` tech chips, collapsible `versions[]` release accordions with miniature thumbnail galleries, native `<dialog>` `ScreenshotLightbox` modal, and sequential `Previous / Next Project` pager.
- [x] **`/about` Page:** Public-safe profile, portrait image, experience, education, tech stack, and direct contact links.
- [x] **Async Service Layer (`src/services/projectService.js`):** Approach A adapter returning Promise-resolved Stage 2-compatible objects from structured bilingual (`pt-PT` / `EN`) seed data (`src/data/projects.js`).
- [x] **Stage 1 Contact / CTA Path:** Direct contact links + pre-filled `mailto:` links (`?subject=...&body=...` ready to send) paired with a 1-click Copy Email fallback on `/` and `/about`; full Express `/api/v1/inquiries` form deferred to Stage 2.
- [x] **Brand, SEO/AIEO & Deployment Prep (`https://builtbymarco.dev`):** Cropped Navbar `logo.webp`, dark-backed `favicon.svg`, `1200×630` `og-cover.png`, dynamic `useDocumentTitle` (`document.title`, `<meta name="description">`, `<link rel="canonical">`), `llms.txt`, `robots.txt`, `sitemap.xml`, expanded JSON-LD (`Person`, `ProfessionalService`, `ItemList`), `<noscript>` fallback, and `vercel.json` SPA rewrites.

### Stage 2 — MERN Backend Integration (Next Milestone)
- [ ] **Express API + MongoDB Atlas (`M0`):** Implement `/api/v1/health`, `/api/v1/projects`, and `/api/v1/inquiries`.
- [ ] **Zero-Rewrite Service Swap:** Replace local seed reads inside `src/services/` with `fetch('/api/v1/...')`.
- [ ] **Cloudinary Media Integration:** Serve optimized `f_auto,q_auto` screenshots with explicit aspect ratios.
- [ ] **Non-Blocking Health Ping:** Background `GET /api/v1/health` on mount to mitigate Render cold starts.
- [ ] **Admin Management *(TBD: v1.x Admin CRUD Dashboard vs. seeded DB)*:** Protected Admin login (`HttpOnly` JWT cookie) + CRUD for projects and inquiry triage.

### Out of Scope / Post-MVP (v2.0+)
- [ ] Technical Blog / Engineering Case Study MDX engine
- [ ] Automated transactional email notifications / CRM webhooks on new leads
- [ ] Client testimonials module & privacy-friendly analytics dashboard
- [ ] Automated client project intake / pricing estimator

### Real Content Inventory (Sanitized GitHub & CV Catalog)
#### Primary Projects (`/projects/:slug` Deep-Dives)
1. **Root Studio Fitness** (`Live` — `https://www.rootstudiofitness.com`, private repo)
   - *Stack:* `React`, `Vite`, `Tailwind CSS`, `PWA`, `Node.js`, `Express`, `MongoDB`, `Cloudinary`, `Leaflet`, `Vitest`
   - *Scope:* Production SEO/AIEO website + v1.0.0 full-stack PWA with 4 RBAC roles (`member`, `staff`, `admin`, `super_admin`), live workout player, +650 exercise library, internal mailbox/tickets, stateful `SHA-256` `HttpOnly` cookie sessions with device-fingerprint binding, Raspberry Pi keepalive, and 226 automated tests.
2. **Marco Portfolio & Web Studio** (`Live` — `https://github.com/Marco-Martins-97/marcoPortfolio`)
   - *Stack:* `React`, `Vite`, `Tailwind CSS`, `React Router`, `Vitest`
   - *Scope:* Bilingual dark-mode engineering portfolio and freelance web studio with two-stage API-ready architecture.
3. **HomeLab** (`Planning`)
   - *Stack:* `Raspberry Pi`, `DietPi`, `Linux`, `Nginx`, `Node.js`, `Pi-hole`, `ESP32`
   - *Scope:* Low-cost self-hosted daily server on Raspberry Pi Zero 2 W (8 GB OS + 32 GB external storage) running Pi-hole, FileBrowser, Node/Nginx web server, and planned ESP32 environmental/RF sensors.
4. **Obelisk** (`Planning`)
   - *Stack:* `MongoDB`, `Express`, `React`, `Node.js`, `Socket.io`, `HTML5 Canvas`, `Tailwind CSS`
   - *Scope:* Fantasy browser strategy game inspired by Tribal Wars & TerraFirmaCraft—focused on exploration, commerce, seasons, climate/elevation biomes, lost ruins technologies, and Obelisk magic.

#### Secondary Projects (`/projects` Compact Showcase — 6 Curated Works)
- **Backend & REST APIs:**
  - *Expense Tracker API* (`Node.js`, `Express`, `MongoDB`, `Mongoose`, `JWT` — `expense-tracker-node`)
  - *Workout Tracker API* (`Node.js`, `Express`, `SQLite`, `JWT`, `Jest`, `Supertest`, `OpenAPI` — `workout-traker-node`)
  - *Weather API* (`Node.js`, `Express`, `Redis`, `Docker` — `weather-api-node`)
- **Frontend, Plugins & Systems:**
  - *Movie Browser* (`React`, `Vite`, `Tailwind CSS`, `Context API`, `REST API` — `MovieBrowser`)
  - *Schema Generator* (`PHP`, `WordPress`, `Elementor`, `Schema.org` — `schemaGenerator`, built for SEO/AIEO structured data)
  - *Tribal Wars Replica* (`JavaScript`, `HTML5 Canvas`, `CSS3`, `LocalStorage` — `TribalWarsReplica`)

#### About Page Narrative (`/about` — Public-Safe Profile)
- **Identity:** Full-Stack Web Developer building responsive interfaces, REST APIs, and self-hosted tools (`React`, `Node.js`, `Express`, `MongoDB`, `PHP/WordPress`, `SQL`, `Docker`, `Linux`).
- **Professional Experience:** Web Development Internship at **Grupo Érre (Érre Technology)** — full institutional website recreation & optimization (`dessta.pt`), custom PHP theme, and custom *Schema Generator* WordPress/Elementor plugin for SEO & AIEO (Artificial Intelligence Engine Optimization).
- **Education:** Advanced Course in Web Design & Programming at **MasterD (Braga)** — Final grade `78/100` (EQF Level 5).
- **Methodology:** AI-Augmented, Spec-Driven Engineering (`Antigravity`, `SPEC.md` + ADRs, `Git`, `Automated Testing`).
- **Maker & Hardware Interests:** Embedded prototyping (`Raspberry Pi`, `ESP32`, `Arduino`), 3D printing & firmware tuning (`Ender 3 V2`), and landscape photography.

---

## 5. Data Models / Database Schema (Mongoose — JavaScript ES6+)
*(Stage 1 local seed objects MUST follow this exact shape so Stage 2 API hydration requires zero UI changes)*

### `Project`
- `_id` / `id`: ObjectId / String (PK)
- `slug`: String (Unique, Indexed, Required, lowercase)
- `title`: String (Required, max 100 chars)
- `tier`: Enum (`primary` | `secondary`, Indexed, Required)
- `category`: Enum (`engineering` | `business-template`, Indexed, Required)
- `projectStatus`: Enum (`live` | `building` | `planning`, Default: `live`, Indexed)
- `summary`: `{ en: String, pt: String }` (Required, max 240 chars per locale)
- `description`: `{ en: String, pt: String }` (Required for `primary` tier)
- `meta`: `{ role: { en: String, pt: String }, hosting: String, timeline: { en: String, pt: String } }` (Optional concise header metadata)
- `highlights`: `[{ en: String, pt: String }]` (Optional key architectural or client outcomes)
- `techStack`: `[String]` (e.g., `["React", "Tailwind CSS", "Express", "MongoDB"]`)
- `thumbnail`: String / `{ url, publicId, alt }` (Stage 1 local WebP import or Stage 2 Cloudinary asset)
- `screenshots`: `[{ src, device, route, label, caption }]` *(Flat gallery fallback)*
- `versions`: `[{ version: String, title: { en, pt }, date: String, changes: [{ en, pt }], screenshots: [{ src, device, route, label, caption }] }]` *(Versioned release changelogs & screenshots for `/projects/:slug`)*
- `liveUrl`: String (Optional, URL format validated)
- `repoUrl`: String (Optional, URL format validated)
- `featured`: Boolean (Default: `false`, Indexed)
- `displayOrder`: Number (Default: `0`)
- `createdAt` / `updatedAt`: Timestamps

### `Inquiry` *(Stage 2 Persistence / Stage 1 Contract)*
- `_id`: ObjectId (PK)
- `name`: String (Required, max 100 chars)
- `email`: String (Required, lowercase, email format validated)
- `inquiryType`: Enum (`job` | `freelance`, Required, Indexed)
- `companyOrBusiness`: String (Optional, max 120 chars)
- `budgetRange`: Enum (`under-500` | `500-1500` | `1500-plus` | `n-a`, Default: `n-a`)
- `message`: String (Required, max 2000 chars)
- `status`: Enum (`new` | `reviewed` | `replied` | `archived`, Default: `new`, Indexed)
- `createdAt` / `updatedAt`: Timestamps

### `AdminUser` *(If Admin Dashboard is included in Stage 2)*
- `_id`: ObjectId (PK)
- `email`: String (Unique, Indexed, Required)
- `passwordHash`: String (Required, `select: false`)
- `role`: Enum (`admin`, Default: `admin`)
- `createdAt` / `updatedAt`: Timestamps

---

## 6. API Endpoints Contract *(Stage 2)*
*(Document routes as they are designed and implemented)*

| Method | Endpoint | Auth | Request Body / Params | Response (Success / Error) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/health` | Public | None | `200 OK` `{ status: "ok", db: "connected" }` / `503` | ⬜ Planned |
| `GET` | `/api/v1/projects` | Public | Query: `?tier=&category=&featured=true` | `200 OK` `{ data: Project[] }` | ⬜ Planned |
| `GET` | `/api/v1/projects/:slug` | Public | Param: `slug` | `200 OK` `{ data: Project }` / `404` | ⬜ Planned |
| `POST` | `/api/v1/inquiries` | Public (Rate-limited) | `{ name, email, inquiryType, companyOrBusiness?, budgetRange?, message, website? }` | `201 Created` `{ message, id }` / `400`, `429` | ⬜ Planned |
| `POST` | `/api/v1/auth/login` | Public *(Admin TBD)* | `{ email, password }` | `200 OK` (Sets `HttpOnly` cookie) / `401`, `429` | ⬜ Planned |
| `POST` | `/api/v1/auth/logout` | Cookie *(Admin TBD)* | None | `200 OK` (Clears cookie) | ⬜ Planned |
| `POST` | `/api/v1/projects` | Admin Cookie *(TBD)* | `Project` payload | `201 Created` / `400`, `401`, `409` | ⬜ Planned |
| `PATCH` | `/api/v1/projects/:id` | Admin Cookie *(TBD)* | Partial `Project` payload | `200 OK` / `400`, `401`, `404` | ⬜ Planned |
| `DELETE` | `/api/v1/projects/:id` | Admin Cookie *(TBD)* | Param: `id` | `204 No Content` / `401`, `404` | ⬜ Planned |
| `GET` | `/api/v1/inquiries` | Admin Cookie *(TBD)* | Query: `?status=&type=&page=1` | `200 OK` `{ data, meta }` / `401` | ⬜ Planned |
| `PATCH` | `/api/v1/inquiries/:id` | Admin Cookie *(TBD)* | `{ status }` | `200 OK` / `400`, `401`, `404` | ⬜ Planned |

---

## 7. Non-Functional Requirements (Performance, SEO, Accessibility & Quality Gates)
- **Core Web Vitals & Performance Budget:**
  - `LCP < 2.5s`, `CLS < 0.1`, `INP < 200ms`.
  - Lighthouse targets: `>= 95` across Performance, Accessibility, Best Practices, and SEO.
  - Use `loading="lazy"` on below-the-fold images, explicit `width`/`height` attributes, and Cloudinary `f_auto,q_auto` URLs when externalized.
- **Accessibility (`a11y`):**
  - Target **WCAG 2.2 AA** contrast (`>= 4.5:1` normal text, `>= 3:1` large text/UI icons) on dark surfaces.
  - Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), visible `:focus-visible` outlines, keyboard-accessible interactive elements, and `prefers-reduced-motion` support.
- **SEO, AIEO & Discoverability (`https://builtbymarco.dev`):**
  - Dynamic `<title>`, `<meta name="description">`, and `<link rel="canonical">` synced per route via `useDocumentTitle` (`EN` / `pt-PT`), plus OpenGraph + Twitter Card tags (`og-cover.png`), `sitemap.xml`, `robots.txt` (explicitly allowing search and AI search crawlers), and `llms.txt`.
  - JSON-LD `@graph` structured data: `Person`, `ProfessionalService`, and `ItemList` of featured projects, paired with a semantic `<noscript>` fallback in `index.html` and SPA fallback rewrites in `client/vercel.json`.
- **Security & Architecture Conventions:**
  - Folder structure: Monorepo (`/client` Vite React + `/server` Express layered `routes`, `controllers`, `services`, `models`, `middlewares`, `validators`).
  - Standardized error format: `{ error: { code, message, details } }` via centralized Express error middleware.
  - Strict CORS origin allowlist (Vercel frontend only), Helmet headers, `express-rate-limit` on `/api/v1/inquiries` and `/api/v1/auth/*`, honeypot spam field, and runtime schema validation on every API input.
  - Zero secrets or unredacted PII committed or exposed in `VITE_*` client env variables or `client/public/`.
- **CI/CD & Quality Gates:**
  - Pre-merge / Pre-deploy checklist: `eslint` pass -> unit/integration & `a11y` tests pass -> `vite build` succeeds cleanly.

---

## 8. Architecture Decision Log (ADR)
*(Record key technical choices and trade-offs accepted during development)*
- **[2026-11-14] ADR-001 — MERN Stack in ES6+ JavaScript (No TypeScript):** Chose plain ES6+ JavaScript with mandatory JSDoc annotations and strict runtime validation schemas at Express API boundaries. **Trade-off:** Avoids TypeScript setup friction while matching current MERN study goals, at the cost of requiring disciplined runtime validation and tests to catch shape mismatches early.
- **[2026-11-14] ADR-002 — Static-First Initial Render + Background Health Wake-up Ping:** Chose to render core portfolio sections and baseline project cards from Vercel's static bundle while asynchronously pinging `GET /api/v1/health` on mount in Stage 2. **Trade-off:** Eliminates Render Free Tier 30–50s cold-start bounce for first-time visitors, while accepting brief eventual consistency if newly added DB projects require API hydration.
- **[2026-11-14] ADR-003 — Two-Stage Delivery via Async Service Layer:** Stage 1 builds the frontend independently using local seed files wrapped in async service adapters matching Stage 2 Mongoose shapes. **Trade-off:** Allows fast Stage 1 deployment and minimal refactoring in Stage 2, at the minor cost of adding async loading/error states in React from day one.
- **[2026-11-14] ADR-004 — Lightweight Bilingual (`pt-PT` / `EN`) Strategy:** Store localized copy in `{ en, pt }` fields mirroring MongoDB documents, switched via React Context. **Trade-off:** Zero external i18n bundle weight and seamless Stage 2 DB alignment, assuming copy volume remains compact across 4 core routes.
- **[2026-11-15] ADR-005 — Pure Cobalt Primary Accent (Replacing Amber):** Switched primary CTAs from Amber (`#F59E0B`) to Cobalt Strong (`#2563EB` with `#F8FAFC` text, `~5.0:1` WCAG AA contrast) to unify the dark engineering/studio identity. **Trade-off:** Slightly lower contrast than dark-on-amber (`5.0:1` vs `9.8:1`), while still comfortably clearing WCAG 2.2 AA and creating a cleaner single-hue visual system.
- **[2026-11-15] ADR-006 — `react-icons` & Local WebP Assets:** Adopted `react-icons` (`si`/`fi`) for tree-shaken tech stack icons and local WebP conversion (`profile.webp`) in Stage 1 until Stage 2 Cloudinary media is wired. **Trade-off:** Larger `node_modules` install footprint on disk in exchange for official monochrome tech logos and minimal runtime bundle overhead.
- **[2026-11-16] ADR-007 — Versioned Release Accordions & Miniature `<dialog>` Lightbox (`/projects/:slug`):** Attached screenshots directly to `versions[]` inside collapsible accordions (latest expanded, older collapsed) with compact lazy-loaded thumbnails that open a native `<dialog>` `ScreenshotLightbox` (`object-contain`, keyboard arrows, `Esc` close). **Trade-off:** Requires one extra click to inspect full-size screenshots, in exchange for compact mobile scrolling and clean mixed `16:9` desktop + `9:19` mobile framing.
- **[2026-11-16] ADR-008 — Shared `techIcons.js` Mapping & Consistent Card Grids (`/projects`, `/about`):** Extracted `getTechIcon` into `src/utils/techIcons.js` and standardized full-bleed `16:9` cover cards + uniform tech chip grids across pages. **Trade-off:** Unmapped stack names fall back to a generic code icon until registered in `TECH_ICON_MAP`, preventing per-page icon drift.
