# 📋 PROJECT SPECIFICATION — MARCO MARTINS PORTFOLIO & FREELANCE WEB STUDIO

> **Status:** Planning — Stage 1 (Static Frontend, API-Ready)  
> **Last Updated:** 2026-11-14  

---

## 1. Overview & Core Objective
- **Problem Statement:** Marco needs a unified web platform that serves two distinct commercial goals: (1) proving full-stack MERN engineering competence to hiring teams, and (2) converting local/small-business prospects looking for clean, reliable, simple homepages.
- **Target Audience:**
  1. **Tech Recruiters & Hiring Managers:** Evaluating full-stack JavaScript/MERN architecture, code quality, testing discipline, and UI polish.
  2. **Small-Business Owners:** Non-technical clients seeking a fast, trustworthy homepage/starter website without agency complexity.
- **Phased Delivery Strategy:**
  - **Stage 1 (Current — Static Frontend, API-Ready):** Build the complete dark-mode bilingual frontend (`React + Vite + Tailwind CSS + React Router`) backed by local seed data behind an async service layer (`src/services/`) whose data contracts match Stage 2 MongoDB documents.
  - **Stage 2 (Next — MERN Backend Integration):** Build the Node/Express API, MongoDB Atlas (`M0`) database, and Cloudinary media pipeline; swap `src/services/` internals from seed data to `fetch('/api/v1/...')` with zero UI component rewrites.

---

## 2. Tech Stack & Infrastructure (MERN — JavaScript ES6+)
- **Language:** JavaScript (`ES6+`, **no TypeScript**) + JSDoc (`@param`, `@returns`, `@throws`) annotations.
- **Frontend (Stage 1):** React (Latest Stable) + Vite + Tailwind CSS + React Router.
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
- **Color Palette (Dual Semantic — Cobalt + Amber):**
  - **Primary Background:** Deep Charcoal / Obsidian (`#0A0A0C`)
  - **Surface / Cards:** Elevated Slate (`#121216`) with subtle borders (`#1E293B`)
  - **Primary Text:** Crisp White (`#F8FAFC`)
  - **Secondary Text:** Light Gray (`#94A3B8` / `#CBD5E1`)
  - **Primary CTA Accent (Freelance / Conversion):** Amber (`#F59E0B`) with dark text (`#0A0A0C`) for `~9.8:1` contrast
  - **Secondary Accent (Engineering / Navigation / Links):** Cobalt (`#3B82F6` borders/badges, `#60A5FA` text links on dark surfaces)
  - **Status Badges:** Emerald (`#34D399` on `rgba(16, 185, 129, 0.14)`) for `Live`; Amber (`#FBBF24` on `rgba(245, 158, 11, 0.14)`) for `Building`
- **UI Language / i18n:** Bilingual **`pt-PT` & `EN`** via lightweight React Context + schema-mirrored `{ en, pt }` content objects (no heavy i18n framework overhead).

### Site Map & Route Architecture
| Route | Page | Purpose & Content |
| :--- | :--- | :--- |
| `/` | **Homepage** | Simple, clean landing page with **2–3 strategic CTAs** for small-business freelance leads, primary project highlights, and recruiter entry point. |
| `/projects` | **Projects Index** | Two-tier showcase: **Primary Projects** (*Root Studio Fitness*, *Marco Portfolio & Web Studio*, *HomeLab*, *Obelisk*) linking to detail pages; **Secondary Projects** (learning apps & APIs) linking directly to GitHub/Demo. |
| `/projects/:slug` | **Project Details** | Dedicated deep-dive page for Primary Projects with full overview, build status (`live` \| `building`), tech stack, architectural/business highlights, and screenshot gallery. |
| `/about` | **About** | Concise bio, engineering mindset, core tech stack, and resume/contact links. |

---

## 4. Functional Scope (Stage 1 vs. Stage 2 vs. Post-MVP)
### Stage 1 — Static Frontend, API-Ready (Current Milestone)
- [ ] **Bilingual (`pt-PT` / `EN`) Toggle:** Instant language switch synced across navigation, UI copy, and project content.
- [ ] **`/` Homepage:** Clean hero, freelance small-business value proposition, **2–3 clear CTAs**, and featured Primary Projects preview.
- [ ] **`/projects` Index Page:** Separated **Primary Projects** (4 core works with `Live`/`Building` badges) and **Secondary Projects** (learning builds & APIs).
- [ ] **`/projects/:slug` Project Details:** Full case study/detail view with placeholder screenshot gallery, stack badges, status badge, and Live/GitHub links.
- [ ] **`/about` Page:** Profile, tech skills, and direct contact/resume options.
- [ ] **Async Service Layer (`src/services/projectService.js`):** Approach A adapter returning Promise-resolved Stage 2-compatible objects from structured bilingual (`pt-PT` / `EN`) placeholder seed data (`src/data/projects.js`).
- [ ] **Stage 1 Contact / CTA Path:** Direct contact links + pre-filled `mailto:` links (`?subject=...&body=...` ready to send) paired with a 1-click Copy Email fallback; full Express `/api/v1/inquiries` form deferred to Stage 2.

### Stage 2 — MERN Backend Integration (Next Milestone)
- [ ] **Express API + MongoDB Atlas (`M0`):** Implement `/api/v1/health`, `/api/v1/projects`, and `/api/v1/inquiries`.
- [ ] **Zero-Rewrite Service Swap:** Replace local seed reads/relays inside `src/services/` with `fetch('/api/v1/...')`.
- [ ] **Cloudinary Media Integration:** Serve optimized `f_auto,q_auto` screenshots with explicit aspect ratios.
- [ ] **Non-Blocking Health Ping:** Background `GET /api/v1/health` on mount to mitigate Render cold starts.
- [ ] **Admin Management *(TBD: v1.x Admin CRUD Dashboard vs. seeded DB)*:** Protected Admin login (`HttpOnly` JWT cookie) + CRUD for projects and inquiry triage.

### Out of Scope / Post-MVP (v2.0+)
- [ ] Technical Blog / Engineering Case Study MDX engine
- [ ] Automated transactional email notifications / CRM webhooks on new leads
- [ ] Client testimonials module & privacy-friendly analytics dashboard
- [ ] Automated client project intake / pricing estimator

---

## 5. Data Models / Database Schema (Mongoose — JavaScript ES6+)
*(Stage 1 local seed objects MUST follow this exact shape so Stage 2 API hydration requires zero UI changes)*

### `Project`
- `_id` / `id`: ObjectId / String (PK)
- `slug`: String (Unique, Indexed, Required, lowercase)
- `title`: String (Required, max 100 chars)
- `tier`: Enum (`primary` | `secondary`, Indexed, Required)
- `category`: Enum (`engineering` | `business-template`, Indexed, Required)
- `projectStatus`: Enum (`live` | `building`, Default: `live`, Indexed)
- `summary`: `{ en: String, pt: String }` (Required, max 240 chars per locale)
- `description`: `{ en: String, pt: String }` (Required for `primary` tier)
- `highlights`: `[{ en: String, pt: String }]` (Optional key architectural or client outcomes)
- `techStack`: `[String]` (e.g., `["React", "Tailwind CSS", "Express", "MongoDB"]`)
- `thumbnail`: `{ url: String, publicId: String, alt: { en: String, pt: String } }`
- `screenshots`: `[{ url: String, publicId: String, alt: { en: String, pt: String }, caption: { en: String, pt: String } }]` *(Used on `/projects/:slug`)*
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
- **SEO & Discoverability:**
  - Unique `<title>` and `<meta name="description">`, OpenGraph + Twitter Card tags, canonical URLs, `sitemap.xml`, `robots.txt`.
  - JSON-LD structured data: `Person` (developer profile) and `ProfessionalService` (small-business web design).
- **Security & Architecture Conventions:**
  - Folder structure: Monorepo (`/client` Vite React + `/server` Express layered `routes`, `controllers`, `services`, `models`, `middlewares`, `validators`).
  - Standardized error format: `{ error: { code, message, details } }` via centralized Express error middleware.
  - Strict CORS origin allowlist (Vercel frontend only), Helmet headers, `express-rate-limit` on `/api/v1/inquiries` and `/api/v1/auth/*`, honeypot spam field, and runtime schema validation on every API input.
  - Zero secrets committed or exposed in `VITE_*` client env variables.
- **CI/CD & Quality Gates:**
  - Pre-merge / Pre-deploy checklist: `eslint` pass -> unit/integration & `a11y` tests pass -> `vite build` succeeds cleanly.

---

## 8. Architecture Decision Log (ADR)
*(Record key technical choices and trade-offs accepted during development)*
- **[2026-11-14] ADR-001 — MERN Stack in ES6+ JavaScript (No TypeScript):** Chose plain ES6+ JavaScript with mandatory JSDoc annotations and strict runtime validation schemas at Express API boundaries. **Trade-off:** Avoids TypeScript setup friction while matching current MERN study goals, at the cost of requiring disciplined runtime validation and tests to catch shape mismatches early.
- **[2026-11-14] ADR-002 — Static-First Initial Render + Background Health Wake-up Ping:** Chose to render core portfolio sections and baseline project cards from Vercel's static bundle while asynchronously pinging `GET /api/v1/health` on mount in Stage 2. **Trade-off:** Eliminates Render Free Tier 30–50s cold-start bounce for first-time visitors, while accepting brief eventual consistency if newly added DB projects require API hydration.
- **[2026-11-14] ADR-003 — Two-Stage Delivery via Async Service Layer:** Stage 1 builds the frontend independently using local seed files wrapped in async service adapters matching Stage 2 Mongoose shapes. **Trade-off:** Allows fast Stage 1 deployment and minimal refactoring in Stage 2, at the minor cost of adding async loading/error states in React from day one.
- **[2026-11-14] ADR-004 — Lightweight Bilingual (`pt-PT` / `EN`) Strategy:** Store localized copy in `{ en, pt }` fields mirroring MongoDB documents, switched via React Context. **Trade-off:** Zero external i18n bundle weight and seamless Stage 2 DB alignment, assuming copy volume remains compact across 4 core routes.
