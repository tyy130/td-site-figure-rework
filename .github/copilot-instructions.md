# GitHub Copilot / AI Agent Instructions

Overview
- Short: This is a small, dark-themed Next.js 14 (App Router) + TypeScript + Tailwind project that implements a reusable design system and a single-page site.
- Primary sources of truth: `README.md`, `ARCHITECTURE.md`, `tailwind.config.ts`, `app/globals.css`.

Quick commands
- View live site: https://tyy130.github.io/td-site-figure-rework
- For contributors (local dev): `npm install && npm run dev` (local) 
- Build (type-checks): `npm run build` (Next surfaces TypeScript errors)
- Export (used for Pages): `npm run export` (outputs `./out`)
- Lint: `npm run lint`

Key architecture & conventions
- App Router: pages in `/app`. Default components are **Server Components**; add `'use client'` for client behavior (e.g., `Navigation`, `Hero`).
- Components: small, focused files in `/components` with `export default` and inline `Props` interfaces.
- Styling: Tailwind tokens (`tailwind.config.ts`) and global utilities/animations in `app/globals.css` (e.g., `.glass`, `.text-gradient`, `.hover-lift`).
- Minimal JS: use server components; add client components only for DOM/interaction needs.

Architecture & patterns (why & how)
- App Router: all routes / pages live in `/app`. Default components are Server Components; add `'use client'` at file top for client components (hooks, window, event listeners).
- Component-first composition: small, focused components under `/components` (e.g. `Button`, `Card`, `Container`) that are assembled in `app/page.tsx`.
- Styling: Tailwind + a small global CSS file (`app/globals.css`). Design tokens (colors, typography, spacing, animations) are defined in `tailwind.config.ts`.
- Performance & minimal JS: prefer Server Components by default; only opt into client components when necessary (see `Navigation` and `Hero`).

Conventions & examples (copyable)
- Component exports: components use `export default function ComponentName(...)` and TypeScript props interfaces inline.
- Button usage:
```tsx
// Primary link button
<Button variant="primary" size="lg" href="/path">Click</Button>
```
- Hero video props & validation:
```tsx
// YouTube CTA
<Hero videoYouTubeId="lkc2y0yb89U" />
// Local video (place file in /public/videos)
<Hero videoSrc="/videos/hero-background.mp4" />
// Note: Hero validates YouTube IDs with /^[a-zA-Z0-9_-]+$/
```
- Container sizes: `default` | `content` | `prose` → use `<Container size="content">` to constrain widths.
- Client component hint: Add `'use client'` if you import `useState`, `useEffect`, or access `window`.

Files & places to check when making changes
- `tailwind.config.ts` — update tokens (colors, spacing, typography, animations).
- `app/globals.css` — add utility classes (`.glass`, `.text-gradient`, `.hover-lift`) and global animations.
- `ARCHITECTURE.md` — component responsibilities & composition patterns; update when adding new sections.
- `components/` — create small, focused components; prefer props to control variants (e.g. `variant`, `size`).
- `public/videos/` — host local hero videos; follow size & encoding guidance from `README.md`.

PR checklist for AI agents
- Run `npm run build` and `npm run lint` locally; ensure no TypeScript/lint errors.
- Keep changes small and focused (one visual/feature change per PR).
- Update `ARCHITECTURE.md` or `README.md` when you change component contracts, tokens, or layout.
- Verify visually at `http://localhost:3000` across mobile/tablet/desktop breakpoints.

Notes & gotchas
- No test harness exists; rely on `npm run build` for type-checking and manual verification.
- Prefer minimal client-side JS — pushing interactive logic to Server Components or small client wrappers.
- Tailwind `content` pattern includes `./pages` in config but this repo uses `/app` (safe but keep an eye when adding file paths).

If anything in this guidance is unclear or you'd like the agent to follow stricter rules (tests, commit message format, PR templates), tell me which areas to expand or clarify.