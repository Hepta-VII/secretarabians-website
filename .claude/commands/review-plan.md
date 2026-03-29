Review an implementation plan with fresh eyes before building.

## Plan to Review

$ARGUMENTS

## MANDATORY: Read First

1. **CLAUDE.md** — Project patterns
2. **AGENTS.md** — Build commands
3. **SKILLS.md** — Patterns and pitfalls
4. **PLANS/{feature}/MASTER.md** — The plan to review
5. **All SUB-*.md files** in the plan folder

## Workflow

### Step 1: Load Plan
```
Read PLANS/{feature}/MASTER.md
Read ALL SUB-*.md files
Create PLANS/{feature}/.scratchpad.md for review notes
```

### Step 2: Verify Against Codebase

For each subplan, check:
- [ ] File paths exist (or parent directories exist for new files)
- [ ] Referenced types/interfaces are correct
- [ ] Import paths are valid
- [ ] Patterns match existing codebase conventions
- [ ] No duplicate functionality already exists
- [ ] Translation keys don't conflict with existing ones
- [ ] CSS uses logical properties (if RTL support)
- [ ] No hardcoded strings (i18n compliance)

### Step 3: Fix Issues

**DO NOT just report issues — FIX them directly in the .md files.**

Common issues to check and fix:
- Wrong type names or interfaces
- Missing imports or wrong import paths
- Hardcoded text instead of i18n keys
- Physical CSS properties instead of logical
- Missing error handling
- Over-engineered solutions
- Missing edge cases in verification checklist

### Step 4: Finalize

```
Update scratchpad with all verifications done.
Delete scratchpad when review is complete.
```

## Output Format

```
PLAN REVIEW: {feature-name}

Reviewed {N} subplans against codebase.

Corrections made:
  - SUB-001: {what was fixed}
  - SUB-003: {what was fixed}

Warnings:
  - {any concerns for the builder}

VERDICT: APPROVED / NEEDS CHANGES

NEXT: /project:build {feature-name}
```

## Key Rules

- **Fresh context** — you didn't write these plans, review objectively
- **Fix in place** — update the .md files directly, don't just list issues
- **Verify against code** — use Glob/Grep to check real file paths and types
- **Check completeness** — are all edge cases covered? All states handled?
