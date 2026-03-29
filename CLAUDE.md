# CLAUDE.md — {PROJECT_NAME}

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

<!-- ============================================================
     SETUP: Replace all {PLACEHOLDER} values with your project's
     specifics. Claude can auto-detect most of these by scanning
     the codebase.
     ============================================================ -->

## Brand Guidelines

<!-- SETUP: Replace with your project's brand identity. Delete if N/A. -->

The full brand guidelines are in `{BRAND_GUIDELINES_FILE}` (root of repo). All development MUST follow these brand rules:

### Brand Identity
**{PROJECT_NAME}** is a **{BRAND_DESCRIPTION}**. Core values: **{VALUE_1}, {VALUE_2}, {VALUE_3}**.

### Voice & Tone
{TONE_ATTRIBUTES}. All user-facing copy must align with this tone.

### Official Color Palette

| Name | Hex | CSS Alias | Usage |
|---|---|---|---|
| {Primary} | `{HEX}` | `{alias}` | Primary elements |
| {Secondary} | `{HEX}` | `{alias}` | Body text |
| {Accent} | `{HEX}` | `{alias}` | Accent elements |
| {Background} | `{HEX}` | `{alias}` | Backgrounds |

All extended UI colors are defined in `{COLOR_CONFIG_FILE}`. Do NOT introduce colors outside the palette without approval.

### Logo Rules
- **NEVER** alter, distort, or modify the logo
- Use in primary colors or monochrome only
- Always on clean backgrounds with sufficient contrast

### Typography

| Role | Font | CSS Class | Usage |
|---|---|---|---|
| Headings | {Font} | `{class}` | Page/section headings |
| Body/UI | {Font} | `{class}` | All UI text |

## Project Overview

**{PROJECT_NAME}** is built with **{FRAMEWORK}** and **{LANGUAGE}** ({STRICT_MODE}). {RENDERING_MODE_DESCRIPTION}.

## Commands

```bash
{DEV_COMMAND}            # Start dev server
{BUILD_COMMAND}          # Production build
{LINT_COMMAND}           # Linting
{FORMAT_COMMAND}         # Formatting
{TEST_COMMAND}           # Run tests
{COMMIT_COMMAND}         # Commit (if using commitizen etc.)
```

## Architecture

### Routing ({ROUTING})
{ROUTING_DESCRIPTION}

```
{ROUTE_STRUCTURE}
```

### Authentication ({AUTH})
{AUTH_DESCRIPTION}

### API Layer ({API_LAYER})
{API_DESCRIPTION}

### UI Components ({COMPONENT_LIBRARY})
{COMPONENT_DESCRIPTION}

### Forms
{FORM_HANDLING_DESCRIPTION}

### Data Tables
{TABLE_HANDLING_DESCRIPTION}

### Database
{DATABASE_DESCRIPTION}

### State Management ({STATE_MANAGEMENT})
{STATE_DESCRIPTION}

### Internationalization ({I18N_LIBRARY})
<!-- SETUP: Delete this section if no i18n -->
- Translation files: `{TRANSLATION_PATH}`
- Locales: {LOCALES}
- Navigation: `{NAV_IMPORT}` (instead of framework default)
- RTL support: {RTL_SUPPORT}
- CSS logical properties: `ms-`/`me-`/`ps-`/`pe-` instead of `ml-`/`mr-`/`pl-`/`pr-`

## Critical Rules

- **NEVER remove, rename, or restructure existing UI elements** unless explicitly asked
- **Always cross-check screenshots and specs** before implementing
- {ADD_PROJECT_SPECIFIC_RULES}

## Key Conventions

- **Path alias**: `{PATH_ALIAS}` maps to project root
- **Utility function**: `{UTIL_FUNCTION}` for conditional classNames
- **Client components**: `{CLIENT_DIRECTIVE}` when using hooks or browser APIs
- **Static export**: {STATIC_EXPORT_RULES}
- **Feature-based folders**: `{COMPONENT_STRUCTURE}`
- **i18n**: ALL user-facing text via `{TRANSLATION_FUNCTION}()`. Never hardcode strings.

## Naming Conventions

```
Components:     PascalCase      UserProfile.tsx
Hooks:          camelCase       useAuth.ts (always 'use' prefix)
Utils:          camelCase       formatDate.ts
Types:          PascalCase      UserProfile.types.ts
Constants:      SCREAMING_CASE  MAX_RETRIES
```

## TypeScript Rules
<!-- SETUP: Delete if not using TypeScript -->
- Never use `any` — use `unknown` and narrow
- Never use `@ts-ignore` without explanatory comment
- Explicit return types on exported functions

## Git Workflow

Branch naming: `{BRANCH_PREFIX}` prefixes. {COMMIT_CONVENTION}.

## Important Files

- `specs/` — Feature specifications (read before implementing)
- `AGENTS.md` — Build commands and quality gates
- `SKILLS.md` — Technical patterns and tools
- `{MOCK_DATA_PATH}` — Mock/seed data

## Plan Lifecycle

```
PLANS/          → Active plans (being worked on)
BuiltPlans/     → Built but not yet reviewed
FinalizedPlans/ → Reviewed and approved (done)
```
