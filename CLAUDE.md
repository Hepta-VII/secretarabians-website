# CLAUDE.md — Secret Arabians

This file provides guidance to Claude Code when working with code in this repository.

> **STOP! Read this FULLY before doing anything.**

---

## Mandatory First Steps

At the START of EVERY task, BEFORE writing code:

```
1. Read AGENTS.md    → Available build commands and workflow
2. Read SKILLS.md    → Patterns, tools, and common pitfalls
3. Check PLANS/      → Are there active plans?
```

**IF YOU DON'T READ THESE FILES, YOU WILL MAKE MISTAKES.**

---

## Workflow: How to Start

### New Feature
```
/project:plan "feature description"
/project:build feature-name
```

### Bug Fix
```
Read SKILLS.md → Fix with TDD → Quality gates → Commit
```

## Brand Guidelines

The full brand guidelines are in `Brand guidelines SA.pdf` (root of repo). All development MUST follow these brand rules:

### Brand Identity
**Secret Arabians** is a **premium Arabian horse breeding programme dedicated to raising Arabians of extraordinary quality**. Core values: **Love, Excellence, Inspiration, Quality, Dedication**.

### Voice & Tone
Inspirational, Warm, Personal, Elegant, Passionate, Authentic, Timeless. All user-facing copy must align with this tone.

### Official Color Palette

| Name | Hex | CSS Alias | Usage |
|---|---|---|---|
| Warm White | `#FAF9F7` | `sa-warm-white` | Page backgrounds |
| Sand Linen | `#E8E3D9` | `sa-sand` | Secondary backgrounds, borders |
| Rose Brown | `#C6A692` | `sa-rose` | Accent elements, soft highlights |
| Muted Gold | `#B9A87F` | `sa-gold` | Accent CTAs, ring/focus |
| Warm Brown | `#9A7B5B` | `sa-warm-brown` | Muted text, secondary elements |
| Middle Brown | `#5C4A32` | `sa-brown` | Primary buttons, headings |
| Dark Brown | `#3D2F1E` | `sa-dark` | Body text, primary foreground |

All extended UI colors are defined in `src/app/globals.css`. Do NOT introduce colors outside the palette without approval.

### Logo Rules
- **NEVER** alter, distort, or modify the logo (SA monogram)
- Use in brand colors (gold + brown) or monochrome only
- Always on clean backgrounds with sufficient contrast

### Typography

| Role | Font | CSS Class | Usage |
|---|---|---|---|
| Display/Titles | Cinzel | `font-display` | Page titles, branding, logo text |
| Headings/Quotes | Cormorant Garamond | `font-serif` | Section headings, elegant quotes |
| Body/UI | Lato | `font-sans` | All body text, UI elements, labels |
| Arabic | Noto Sans Arabic | `font-noto-arabic` | Arabic locale text |
| Chinese | Noto Sans SC | `font-noto-sc` | Chinese locale text |

## Project Overview

**Secret Arabians** is built with **Next.js 16** and **TypeScript** (strict mode). Static export for deployment — no SSR, no API routes.

## Commands

```bash
npm run dev            # Start dev server (Turbopack)
npm run build          # Production build (static export)
npm run lint           # Linting (0 errors required)
npm run format         # Prettier formatting
npm run typecheck      # TypeScript type checking
npm run test           # Run tests
npm run commit         # Commitizen conventional commit
npm run clean          # Clear build artifacts
```

## Architecture

### Routing (App Router + next-intl)
File-based App Router with locale prefix. All pages under `src/app/[locale]/`.

```
src/app/
├── layout.tsx                    ← Root layout (minimal, passes to locale)
├── page.tsx                      ← Root redirect → /en
├── [locale]/
│   ├── layout.tsx                ← Locale layout (fonts, providers, dir)
│   ├── page.tsx                  ← Home page
│   ├── horses/                   ← Horse pages
│   ├── about/                    ← About page
│   ├── gallery/                  ← Gallery
│   └── contact/                  ← Contact page
```

### Authentication (None — static site)
No authentication currently. Will add Supabase Auth when backend is needed.

### API Layer (None — static export)
No API routes. Static data or future external API via `fetch`.

### UI Components (shadcn/ui)
shadcn/ui with Radix UI primitives, styled with Tailwind. Components in `src/components/ui/`.

### Forms
react-hook-form + Zod for validation.

### Data Tables
TanStack React Table (add when needed).

### Database
None currently. Future: Supabase (PostgreSQL + RLS).

### State Management (React hooks)
React hooks only (useState, useMemo, useContext). No Redux/Zustand. Props drilling is acceptable.

### Internationalization (next-intl)
- Translation files: `src/messages/{locale}.json`
- Locales: en, ar, zh
- Navigation: `Link` from `@/i18n/navigation` (instead of `next/link`)
- RTL support: Yes (Arabic)
- CSS logical properties: `ms-`/`me-`/`ps-`/`pe-` instead of `ml-`/`mr-`/`pl-`/`pr-`

## Critical Rules

- **NEVER remove, rename, or restructure existing UI elements** unless explicitly asked
- **Always cross-check screenshots and specs** before implementing
- **All user-facing text via i18n** — never hardcode strings
- **Use `sa-*` Tailwind classes** — never hardcode hex values
- **Page background always `bg-sa-warm-white`** — never plain white
- **Cards: `bg-white rounded-2xl`** with subtle shadow

## Key Conventions

- **Path alias**: `@/*` maps to `./src/*`
- **Utility function**: `cn()` from `@/lib/utils` for conditional classNames
- **Client components**: `'use client'` when using hooks or browser APIs
- **Static export**: No `getServerSideProps`, no API routes, no middleware in production
- **Feature-based folders**: `src/components/{feature}/`
- **i18n**: ALL user-facing text via `useTranslations()`. Never hardcode strings.

## Naming Conventions

```
Components:     PascalCase      HorseCard.tsx
Hooks:          camelCase       useAuth.ts (always 'use' prefix)
Utils:          camelCase       formatDate.ts
Types:          PascalCase      Horse.types.ts
Constants:      SCREAMING_CASE  MAX_GALLERY_ITEMS
```

## TypeScript Rules
- Never use `any` — use `unknown` and narrow
- Never use `@ts-ignore` without explanatory comment
- Explicit return types on exported functions

## Git Workflow

Branch naming: `feature/` / `fix/` prefixes. Conventional Commits enforced via Commitizen + commitlint.

## Important Files

- `specs/` — Feature specifications (read before implementing)
- `AGENTS.md` — Build commands and quality gates
- `SKILLS.md` — Technical patterns and tools
- `Brand guidelines SA.pdf` — Official brand guidelines

## Plan Lifecycle

```
PLANS/          → Active plans (being worked on)
BuiltPlans/     → Built but not yet reviewed
FinalizedPlans/ → Reviewed and approved (done)
```
