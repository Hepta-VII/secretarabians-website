# Secret Arabians

Premium Arabian horse breeding programme website — built with Next.js 16, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start dev server (Turbopack)         |
| `npm run build`    | Production build (static export)     |
| `npm run lint`     | ESLint                               |
| `npm run typecheck`| TypeScript type checking             |
| `npm run format`   | Prettier formatting                  |
| `npm run test`     | Run tests                            |
| `npm run commit`   | Commitizen conventional commit       |
| `npm run clean`    | Clear build artifacts                |

## Tech Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **i18n**: next-intl (en, ar, zh) with RTL support
- **Fonts**: Cinzel, Cormorant Garamond, Lato, Noto Sans Arabic, Noto Sans SC
- **Forms**: react-hook-form + Zod
- **Icons**: Lucide React

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              Root layout
│   ├── globals.css             Theme + brand colors
│   ├── fonts.ts                Google Fonts config
│   └── [locale]/
│       ├── layout.tsx          Locale layout (fonts, providers, Header/Footer)
│       └── page.tsx            Homepage
├── components/
│   ├── home/                   Homepage sections
│   ├── layout/                 Header, Footer
│   └── ui/                     shadcn/ui primitives
├── i18n/                       Routing + navigation helpers
├── lib/                        Utilities (cn)
└── messages/                   Translation files (en/ar/zh)
```

## Internationalization

Three locales with full RTL support for Arabic:

- `en` — English (default)
- `ar` — Arabic (RTL)
- `zh` — Chinese Simplified

All user-facing text goes through `useTranslations()`. Internal links use `Link` from `@/i18n/navigation`.

## Brand

Colors use `sa-*` Tailwind classes defined in `globals.css` — never hardcode hex values. See `CLAUDE.md` for the full brand palette and typography rules.

## Deployment

Static export (`output: 'export'`). Build output goes to `out/` and can be served from any static host.

```bash
npm run build
```
