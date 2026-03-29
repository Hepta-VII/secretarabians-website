Create a detailed implementation plan for a new feature.

## Feature Request

$ARGUMENTS

## MANDATORY: Read First

1. **CLAUDE.md** — Project patterns and conventions
2. **AGENTS.md** — Build commands and workflow
3. **SKILLS.md** — Patterns, tools, and pitfalls
4. **specs/** — Check if a spec exists for this feature

## Workflow

### Step 1: Initialize
```
Create PLANS/{feature-name}/.scratchpad.md
Note: initial findings, questions, constraints
```

### Step 2: Explore Codebase
```
Search for existing components, types, patterns that can be reused.
Understand the current architecture around the feature area.
Note findings in scratchpad.
```

### Step 3: Create Plan Structure

Create a folder in PLANS/:

```
PLANS/{feature-name}/
├── MASTER.md           ← Overview + subplan table
├── SUB-001-{name}.md   ← First atomic task
├── SUB-002-{name}.md   ← Second atomic task
└── ...
```

### MASTER.md Structure

```markdown
# MASTER: {Feature Name}

## Feature
{Brief description of what we're building}

## Subplans Overview
| # | File | Objective | Status |
|---|---|---|---|
| 1 | SUB-001-{name}.md | {objective} | TODO |
| 2 | SUB-002-{name}.md | {objective} | TODO |

## Folder Structure (new files)
{Directory tree of files to create}

## Key Patterns to Follow
{Reference existing files for patterns}

## Notes
{Constraints, dependencies, open questions}
```

### SUB-NNN.md Structure

```markdown
# SUB-NNN: {Objective}

## Status: TODO

## Objective
{One atomic thing only}

## Files to Modify/Create
{Exact paths}

## Changes
{Detailed description with code blocks}

## Tests Required
{What must be tested}

## Translation Keys
{New i18n keys needed — if applicable}

## Verification Checklist
- [ ] {Step-by-step verification}

## Code-Simplifier
Run code-simplifier on {files modified}

## Commit Message Template
{conventional commit format}
```

## Rules

- **STRICT: No code execution.** Plans only — no `npm`, no `git`, no `bash`
- Each subplan must be **atomic** — one commit, one concern
- Reference **existing patterns** in the codebase
- Include **translation keys** if i18n is used
- Include **verification checklist** per subplan
- Include **commit message template** per subplan
- Delete scratchpad when planning is complete

## Output Format

```
PLAN CREATED: {feature-name}

PLANS/{feature-name}/
├── MASTER.md
├── SUB-001-{name}.md
├── SUB-002-{name}.md
└── ...

{N} subplans created.
NEXT: /project:review-plan {feature-name}
```
