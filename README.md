# Codebase-Agent — Full Development Lifecycle

This is the agent infrastructure that lives **inside your project codebase**. It provides the complete plan/build/review/fix/ship lifecycle via Claude Code slash commands.

## What's Included

```
Codebase-Agent/
├── CLAUDE.md                      ← Project-level instructions (main config)
├── AGENTS.md                      ← Orchestration guide (commands, workflow, quality gates)
├── SKILLS.md                      ← Technical patterns & common pitfalls
├── .claude/
│   ├── settings.json              ← Permissions
│   └── commands/                  ← 13 slash commands
│       ├── plan.md                ← /project:plan — Create implementation plans
│       ├── review-plan.md         ← /project:review-plan — Review plans before building
│       ├── build.md               ← /project:build — Build from plans with TDD
│       ├── review.md              ← /project:review — Code review with fresh context
│       ├── fix.md                 ← /project:fix — Fix issues in built features
│       ├── debug.md               ← /project:debug — Systematic debugging
│       ├── ship.md                ← /project:ship — Push + create PR
│       ├── orchestrate.md         ← /project:orchestrate — Full pipeline in one go
│       ├── generate-tests.md      ← /project:generate-tests — TDD red phase
│       ├── review-pr.md           ← /project:review-pr — Review pull requests
│       ├── fix-github-issue.md    ← /project:fix-github-issue — Fix from GitHub issue
│       ├── simplify-and-verify.md ← /project:simplify-and-verify — Code cleanup
│       └── migrate.md             ← /project:migrate — Database migrations
└── specs/
    └── SPEC-TEMPLATE.md           ← Feature specification template
```

## Setup

1. **Copy into your project root:**
   ```bash
   cp Codebase-Agent/CLAUDE.md /path/to/your-project/
   cp Codebase-Agent/AGENTS.md /path/to/your-project/
   cp Codebase-Agent/SKILLS.md /path/to/your-project/
   cp -r Codebase-Agent/.claude/ /path/to/your-project/
   cp -r Codebase-Agent/specs/ /path/to/your-project/
   ```

2. **Open your project in Claude Code:**
   ```bash
   cd /path/to/your-project && claude
   ```

3. **Tell Claude to configure:**
   ```
   Setup the agent system. Fill in the {PLACEHOLDER} markers in CLAUDE.md, AGENTS.md, SKILLS.md, and all command files.
   ```

4. **Claude scans your codebase** and fills in:
   - Framework, language, commands
   - Component library, CSS approach
   - i18n configuration
   - Quality gate commands
   - Git conventions

## Development Lifecycle

```
Spec → Plan → Review Plan → Build → Review → Ship
                                ↑         │
                                └── Fix ──┘
```

### Full Flow Example
```bash
# 1. Write a spec (optional but recommended)
# Create specs/001-my-feature/spec.md

# 2. Plan
/project:plan "Add user profile page"

# 3. Review the plan
/project:review-plan user-profile

# 4. Build
/project:build user-profile

# 5. Review
/project:review user-profile

# 6. Ship
/project:ship

# If issues found:
/project:fix "user-profile: avatar upload not working"
```

### Quick Flow (smaller tasks)
```bash
/project:orchestrate "Add loading spinner to dashboard"
```

## Plan Lifecycle

```
PLANS/          → Active plans (in progress)
BuiltPlans/     → Built, awaiting review
FinalizedPlans/ → Reviewed and approved (done)
```

Each plan folder contains:
- `MASTER.md` — Overview with subplan table
- `SUB-001-{name}.md` — Atomic task with code, tests, verification
- `.scratchpad.md` — Working memory (not committed)

## Quality Gates

Every commit must pass:
```bash
lint → type-check → test → build
```

## Key Conventions

- **Scratchpad**: `.scratchpad.md` in every active plan folder (not committed)
- **TDD**: Tests first, implementation second
- **Atomic commits**: One subplan = one commit
- **Fresh context reviews**: Reviewer hasn't seen the build process
- **Code-simplifier**: Mandatory after each build phase
