# SKILLS.md — Technical Patterns & Tools

## Overview

This file documents the technical patterns, tools, and common pitfalls for the **Secret Arabians** codebase. Every agent MUST read this before writing code.

---

## Framework Skills

### Next.js 16 Patterns

- **Static export**: `output: 'export'` in next.config.ts — no SSR, no API routes, no middleware at runtime
- **Server components** are the default — add `'use client'` only when using hooks or browser APIs
- **App Router**: File-based routing under `src/app/[locale]/`
- **Image optimization**: Use `next/image` with explicit width/height for static export
- **Fonts**: Loaded via `next/font/google` in `src/app/fonts.ts`

### Component Patterns

- **Small components** (< 300 lines): Single file, named export
- **Large components** (> 300 lines): Split into directory with `index.tsx` barrel export
- **Page-local components**: `_components/` subdirectory (underscore prevents route)
- **State stays in parent** — props drilling, no unnecessary context providers
- **`cn()` utility** for conditional Tailwind classes: `cn('base', condition && 'conditional')`

### Performance

- Lazy load heavy components with `dynamic(() => import(...))` or `React.lazy()`
- Use `next/image` for all images (automatic optimization)
- Minimize `'use client'` — keep data fetching in server components

---

## i18n Skills

### Translation Keys

- Add to: `src/messages/{locale}.json`
- Function: `useTranslations('{namespace}')`
- Navigation: `Link` from `@/i18n/navigation`

### File Structure

```
src/messages/
├── en.json     ← English (source of truth)
├── ar.json     ← Arabic (RTL)
└── zh.json     ← Chinese Simplified
```

### Adding New Keys

1. Add key to `en.json` under appropriate namespace
2. Use in component via `useTranslations('namespace')`
3. Add matching key to `ar.json` and `zh.json`

### RTL Support (Arabic)

- Use CSS logical properties: `ms-`, `me-`, `ps-`, `pe-`, `text-start`, `text-end`
- Exceptions: centering (`left-[50%]`), absolute positioning for animations
- Layout automatically flips via `dir="rtl"` on `<html>`

---

## Theme & Design Skills

### Colors

- **Tailwind**: Use `sa-*` classes (e.g., `bg-sa-warm-white`, `text-sa-dark`, `border-sa-sand`)
- **JS/SVG**: Import from `@/lib/theme/colors` (e.g., `SA_COLORS.gold`)
- **NEVER** hardcode hex values in templates or inline styles

### Typography

- **Display text** (hero titles): `font-display` (Cinzel)
- **Section headings**: `font-serif` (Cormorant Garamond)
- **Body text**: `font-sans` (Lato, default)
- **Weight**: Body text uses `font-light` (300), headings use `font-semibold` (600)

### Design Rules

- Page background: always `bg-sa-warm-white` (never plain white or grey)
- Cards: `bg-white rounded-2xl shadow-sm`
- Primary buttons: `bg-sa-brown hover:bg-sa-dark text-sa-warm-white rounded-full`
- Accent buttons: `bg-sa-gold hover:bg-sa-gold-light text-sa-dark rounded-full`
- Focus rings: `ring-sa-gold`

---

## Verification Skills

### Code Simplification

After implementing, run the code-simplifier agent on modified files:

```
Run code-simplifier on {list of modified files}
```

### Quality Gates

```bash
npm run lint           # Linting
npm run typecheck      # Type checking
npm run test           # Tests
npm run build          # Build
```

---

## Common Pitfalls

| Pitfall                                  | Solution                                         |
| ---------------------------------------- | ------------------------------------------------ |
| Hardcoded strings in components          | Use `useTranslations()` always                   |
| Physical CSS properties (ml, mr, pl, pr) | Use logical properties (ms, me, ps, pe) for RTL  |
| Using wrong Link import                  | Use `Link` from `@/i18n/navigation`              |
| Missing client directive                 | Add `'use client'` when using hooks              |
| Hardcoded color values                   | Use `sa-*` Tailwind classes                      |
| White page background                    | Use `bg-sa-warm-white`                           |
| Missing error boundaries                 | Add error handling for async operations          |
| Over-engineering                         | Keep it simple — no premature abstractions       |
| Using `next/link` directly               | Use `Link` from `@/i18n/navigation`              |
| API routes with static export            | Not supported — use external APIs or static data |

---

## File Checklist (Every Session)

Before starting work, verify you've read:

- [ ] `CLAUDE.md` — Project rules and conventions
- [ ] `AGENTS.md` — Build commands and workflow
- [ ] `SKILLS.md` — This file (patterns and pitfalls)
- [ ] Active plans in `PLANS/` — Current work in progress
- [ ] Relevant specs in `specs/` — Feature requirements
