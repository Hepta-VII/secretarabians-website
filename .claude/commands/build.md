Build a feature from its approved plan.

## Feature to Build

$ARGUMENTS

## MANDATORY: Read First

1. **CLAUDE.md** — Project patterns
2. **AGENTS.md** — Build commands
3. **SKILLS.md** — Patterns and tools
4. **PLANS/{feature}/MASTER.md** — The approved plan

## Workflow

### Step 1: Initialize

```
Read PLANS/{feature}/MASTER.md
Read ALL SUB-*.md files to understand full scope
Create/read PLANS/{feature}/.scratchpad.md
```

### Step 2: Execute Each Subplan (in order)

FOR EACH subplan (SUB-001, SUB-002, ...):

```
1. READ the subplan
2. TDD: Write test for expected behavior FIRST
3. Implement the changes (follow the plan exactly)
4. Quality gates:
   - Lint: npm run lint
   - Type check: npm run typecheck
   - Tests: npm run test
5. Verification: Follow the subplan's verification checklist
6. Code-simplifier: Run on modified files
7. COMMIT with the template from the subplan:
   Conventional Commits format
   Reference: Subplan SUB-NNN, Feature {feature-name}
8. Update status in SUB-NNN.md → DONE (with commit hash)
```

### Step 3: Finalize

```
1. Run full quality gates one final time
2. Delete scratchpad
3. Move entire folder: PLANS/{feature}/ → BuiltPlans/{feature}/
```

## Output Format

```
BUILD: {feature-name}

SUB-001: {objective} ✅ (commit: abc1234)
SUB-002: {objective} ✅ (commit: def5678)
SUB-003: {objective} ✅ (commit: ghi9012)

All {N} subplans built.
Moved to BuiltPlans/{feature}/

NEXT: /project:review {feature-name}
```

## Key Rules

- **Follow the plan** — don't deviate without documenting why
- **TDD** — test first, implement second
- **Quality gates MUST pass** before each commit
- **One commit per subplan** — atomic, traceable
- **Stop if BLOCKED** — document in scratchpad and ask user
- **Code-simplifier** after each subplan (not optional)
- **Move to BuiltPlans/** only when ALL subplans are done
