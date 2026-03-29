# SKILLS.md — Technical Patterns & Tools

## Overview

This file documents the technical patterns, tools, and common pitfalls for the **{PROJECT_NAME}** codebase. Every agent MUST read this before writing code.

---

## Database Skills
<!-- SETUP: Replace with your database patterns. Delete if N/A. -->

### {DATABASE_NAME} Patterns
{Database query patterns, ORM usage, connection setup}

### Schema / Migrations
{How to create and manage schema changes}

### Security / Access Control
{RLS policies, permission patterns, auth integration}

---

## Framework Skills
<!-- SETUP: Replace with your framework-specific patterns. -->

### {FRAMEWORK} Patterns
{Framework-specific conventions, gotchas, best practices}

### Component Patterns
{How components are structured, state management, props patterns}

### Performance
{Performance best practices, lazy loading, memoization patterns}

---

## i18n Skills
<!-- SETUP: Delete if no i18n -->

### Translation Keys
- Add to: `{TRANSLATION_PATH}`
- Function: `{TRANSLATION_FUNCTION}('{namespace}')`
- Navigation: `{NAV_IMPORT}`

### File Structure
```
{TRANSLATION_FILE_STRUCTURE}
```

### Adding New Keys
1. Add key to primary locale file
2. Use in component via translation function
3. Other locales: add matching key or leave for translators

---

## Verification Skills

### Code Simplification
After implementing, run the code-simplifier agent on modified files:
```
Run code-simplifier on {list of modified files}
```

### Quality Gates
```bash
{LINT_COMMAND}           # Linting
{TYPECHECK_COMMAND}      # Type checking
{TEST_COMMAND}           # Tests
{BUILD_COMMAND}          # Build
```

---

## Common Pitfalls

<!-- SETUP: Add your project-specific pitfalls as you discover them. -->

| Pitfall | Solution |
|---|---|
| Hardcoded strings in components | Use `{TRANSLATION_FUNCTION}()` always |
| Physical CSS properties (ml, mr, pl, pr) | Use logical properties (ms, me, ps, pe) for RTL |
| Using wrong Link import | Use `{NAV_IMPORT}` |
| Missing client directive | Add `'{CLIENT_DIRECTIVE}'` when using hooks |
| Hardcoded color values | Use CSS aliases from config |
| Missing error boundaries | Add error handling for async operations |
| Over-engineering | Keep it simple — no premature abstractions |

---

## File Checklist (Every Session)

Before starting work, verify you've read:
- [ ] `CLAUDE.md` — Project rules and conventions
- [ ] `AGENTS.md` — Build commands and workflow
- [ ] `SKILLS.md` — This file (patterns and pitfalls)
- [ ] Active plans in `PLANS/` — Current work in progress
- [ ] Relevant specs in `specs/` — Feature requirements
