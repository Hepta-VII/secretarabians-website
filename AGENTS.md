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
<!-- SETUP: Delete if no i18n -->

**Planner:** Each subplan includes "Translation keys" section

**Builder:**
- Use `{TRANSLATION_FUNCTION}('{namespace}')` instead of hardcoded strings
- Add keys to `{TRANSLATION_PATH}` under appropriate namespace
- Use `{NAV_IMPORT}` for internal links
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
{LINT_COMMAND}           # 0 errors
{TYPECHECK_COMMAND}      # 0 type errors (if applicable)
{TEST_COMMAND}           # All tests pass
{BUILD_COMMAND}          # Build succeeds
```

**Pre-commit checklist:**
```bash
{LINT_COMMAND} && {TEST_COMMAND} && {BUILD_COMMAND}
```

## Code Review with Fresh Context

```bash
claude -p "Review files changed in last 5 commits for: dead code, over-engineering, duplications, magic values"
```

## Available Agents

<!-- SETUP: List your configured subagents here -->

| Agent | Purpose |
|---|---|
| planner | Creates plans from specs/requirements |
| builder | Implements plans with TDD |
| reviewer | Reviews code with fresh context |
| code-simplifier | Reduces complexity, removes dead code |
| {CUSTOM_AGENT} | {description} |
