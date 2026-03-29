Full pipeline orchestration: plan, build, verify, and commit in a single flow.

## Task

$ARGUMENTS

## MANDATORY: Read First

1. **CLAUDE.md** — Project patterns
2. **AGENTS.md** — Build commands
3. **SKILLS.md** — Patterns and tools

## Workflow

### Step 1: Plan
```
1. Read CLAUDE.md, AGENTS.md, SKILLS.md
2. Explore codebase for relevant patterns
3. Create plan structure (can be lightweight for small tasks)
```

### Step 2: Build
```
For each planned change:
1. TDD: Write test first
2. Implement the change
3. Verify against plan
```

### Step 3: Verify
```
1. Run quality gates: lint, type-check, test, build
2. Run code-simplifier on modified files
3. Visual verification if UI changes
```

### Step 4: Commit
```
1. Stage changes
2. Commit with conventional commit format
3. Reference the task in commit message
```

## Output Format

```
ORCHESTRATE: {task}

Plan: {N} changes identified
Build: {N} changes implemented
Verify: ALL PASS
Commit: {hash} — {message}

DONE
```

## When to Use

- Small to medium tasks that don't need full plan/review cycle
- Quick fixes with clear scope
- Tasks where the full lifecycle would be overkill

For larger features, use the full flow:
`/project:plan` → `/project:review-plan` → `/project:build` → `/project:review`
