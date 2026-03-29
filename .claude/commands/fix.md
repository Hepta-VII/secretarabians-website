Use the builder agent to fix issues found in a completed feature.

## Fix Request

$ARGUMENTS

## MANDATORY: Read First

1. **CLAUDE.md** — Project patterns
2. **AGENTS.md** — Build commands
3. **SKILLS.md** — Patterns and tools
4. **Previous plan** — Check in this order:
   - `BuiltPlans/{feature-name}/MASTER.md`
   - `FinalizedPlans/{feature-name}/MASTER.md`

## Workflow

### Step 1: Load Previous Context + Initialize Scratchpad

```
Read the MASTER.md from the previous build.
Read ALL subplans to understand what was already done.
Understand the original intent and what was implemented.

Create PLANS/{feature-name}-fix/.scratchpad.md
Note: root cause analysis, what the original build did, what needs changing.
```

### Step 2: Create Fix Subplans

Create a new folder in PLANS/ with `-fix` suffix:

```
PLANS/{feature-name}-fix/
├── MASTER.md           ← References original plan
├── SUB-001-{fix}.md    ← Only the fixes needed
└── SUB-002-{fix}.md
```

The MASTER.md should:

- Link to original plan: "Continuation of: FinalizedPlans/{feature-name}/MASTER.md"
- List ONLY what needs to change (not everything again)
- Be minimal — these are targeted fixes, not a full rebuild

### Step 3: Execute Fix Subplans

FOR EACH fix subplan:

```
1. READ the fix subplan
2. TDD: Write test for expected behavior FIRST
3. Implement the fix (minimal changes)
4. Quality gates: lint, type-check, test
5. COMMIT:
   fix({scope}): {description}

   Fixes: {feature-name}-fix/SUB-{NNN}
   Original: {feature-name}
6. Update status → DONE
```

### Step 4: Finalize

```bash
# Delete scratchpad
rm PLANS/{feature-name}-fix/.scratchpad.md

# Move fix plans to BuiltPlans
mkdir -p BuiltPlans
mv PLANS/{feature-name}-fix/ BuiltPlans/
```

## Output Format

```
FIX: {feature-name}

Original plan: FinalizedPlans/{feature-name}/
Fix plan: PLANS/{feature-name}-fix/

Issues to fix:
  1. {issue from user}
  2. {issue from user}

[1/2] SUB-001-{fix}
  Test → Fix → Committed: abc123

[2/2] SUB-002-{fix}
  Test → Fix → Committed: def456

FIX COMPLETE
All fixes applied
Moved to BuiltPlans/{feature-name}-fix/

NEXT: /project:review {feature-name}-fix
```

## Key Rules

- Read the ORIGINAL plan first to understand context
- Make MINIMAL changes — don't refactor unrelated code
- Each fix gets its own subplan and commit
- Reference the original feature in commit messages
