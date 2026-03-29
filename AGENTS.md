# AGENTS.md — Build Orchestration Guide

## Slash Commands

| Command | Phase | What It Does |
|---|---|---|
| `/project:plan "description"` | Planning | Creates PLANS/{feature}/ with MASTER.md + subplans |
| `/project:review-plan feature` | Plan Review | Reviews plans against codebase, fixes issues |
| `/project:build feature` | Implementation | Builds each subplan with TDD, moves to BuiltPlans/ |
| `/project:review feature` | Code Review | Reviews built code, moves to FinalizedPlans/ |
| `/project:fix "feature: issue"` | Iteration | Creates targeted fix plans from previous build |
| `/project:debug "error"` | Debugging | Systematic debug: isolate → root cause → fix |
| `/project:ship` | Deployment | Quality gates → push → create PR |
| `/project:orchestrate "task"` | Full Pipeline | Plan → build → verify → commit (single flow) |
| `/project:generate-tests "target"` | TDD | Write tests FIRST (red phase only) |
| `/project:review-pr {number}` | PR Review | Review PR with checklist, approve or request changes |
| `/project:fix-github-issue {number}` | Issue Triage | Analyze issue → implement → test → PR |
| `/project:simplify-and-verify` | Cleanup | Code-simplifier → tests → verify |
| `/project:migrate` | Database | Create migration with schema + RLS |

## Development Lifecycle

```
Spec → Plan → Review Plan → Build → Review → Ship
                                ↑         │
                                └── Fix ──┘
```

## i18n Rules (MANDATORY)

**Planner:** Each subplan includes "Translation keys" section

**Builder:**
- Use `useTranslations('{namespace}')` instead of hardcoded strings
- Add keys to `src/messages/{locale}.json` under appropriate namespace
- Use `Link` from `@/i18n/navigation` for internal links
- DO NOT translate: database values (names, IDs, locations)

**Reviewer:**
- Flag hardcoded strings as violation
- Verify all text uses i18n keys

## Scratchpad Protocol (MANDATORY)

Every agent workflow MUST use `.scratchpad.md` as working memory.

**Location by phase:**
| Phase | Scratchpad Location |
|---|---|
| Planning | `PLANS/{feature}/.scratchpad.md` |
| Building | `PLANS/{feature}/.scratchpad.md` |
| Reviewing | `BuiltPlans/{feature}/.scratchpad.md` |
| Fixing | `PLANS/{feature}-fix/.scratchpad.md` |

**Template:**
```markdown
# Scratchpad — {agent-type} {feature-name}
Created: {date}

## Bevindingen
- {discovery — short, factual}

## Beslissingen
- {decision + rationale}

## Rode vlaggen
- {blocker + resolution}

## Nog te checken
- [ ] {pending}
```

**Rules:**
- NOT committed to git
- Written continuously (not just at the end)
- Read at START of every new session
- Deleted when task is complete

## Quality Gates (MANDATORY)

All gates must PASS before committing:

```bash
npm run lint           # 0 errors
npm run typecheck      # 0 type errors
npm run test           # All tests pass
npm run build          # Build succeeds
```

**Pre-commit checklist:**
```bash
npm run lint && npm run typecheck && npm run test && npm run build
```

## Code Review with Fresh Context

```bash
claude -p "Review files changed in last 5 commits for: dead code, over-engineering, duplications, magic values"
```

## Available Agents

| Agent | Purpose |
|---|---|
| planner | Creates plans from specs/requirements |
| builder | Implements plans with TDD |
| reviewer | Reviews code with fresh context |
| code-simplifier | Reduces complexity, removes dead code |
