Review built code with fresh context before finalizing.

## Feature to Review

$ARGUMENTS

## MANDATORY: Read First

1. **CLAUDE.md** — Project patterns
2. **AGENTS.md** — Build commands
3. **SKILLS.md** — Patterns and pitfalls
4. **BuiltPlans/{feature}/MASTER.md** — What was built and why

## Workflow

### Step 1: Load Context
```
Read BuiltPlans/{feature}/MASTER.md
Read ALL SUB-*.md files (including commit hashes)
Create BuiltPlans/{feature}/.scratchpad.md for review notes
```

### Step 2: Code Review Checklist

Check for "slop patterns" in all modified files:
- [ ] **Dead code** — unused imports, variables, functions
- [ ] **Over-engineering** — premature abstractions, unnecessary wrappers
- [ ] **Copy-paste code** — duplicated logic that should be shared
- [ ] **Magic values** — hardcoded numbers/strings without explanation
- [ ] **Functions > 50 lines** — should be broken down
- [ ] **Poor error handling** — swallowed errors, missing fallbacks
- [ ] **Missing tests** — untested edge cases
- [ ] **Hardcoded strings** — should use i18n (if applicable)
- [ ] **Physical CSS** — should use logical properties (if RTL)
- [ ] **Naming** — follows project conventions

### Step 3: Run Quality Checks

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

### Step 4: Run Code-Simplifier

```
Run code-simplifier on all files modified in recent commits
```

### Step 5: Fix or Flag

- **Auto-fixable**: Fix directly, commit with `fix({scope}): {description}`
- **Needs discussion**: Flag in review output, ask user

### Step 6: Finalize

```
Delete scratchpad
Move: BuiltPlans/{feature}/ → FinalizedPlans/{feature}/
```

## Output Format

```
REVIEW: {feature-name}

Files reviewed: {N}
Issues found: {N critical}, {N warnings}, {N suggestions}

Critical (must fix):
  - {file}: {issue}

Warnings:
  - {file}: {issue}

Suggestions:
  - {file}: {suggestion}

Auto-fixed: {N} issues
Quality gates: ALL PASS

VERDICT: APPROVED / NEEDS FIXES

Moved to FinalizedPlans/{feature}/

NEXT: /project:ship (or /project:fix if issues remain)
```

## Key Rules

- **Fresh context** — you didn't build this code, review objectively
- **Check real code** — read the actual files, don't trust plan descriptions alone
- **Run quality gates** — don't skip any
- **Code-simplifier is mandatory** — always run it
- **Move to FinalizedPlans/** only when APPROVED
