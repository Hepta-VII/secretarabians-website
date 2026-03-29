Push code and create a pull request.

## MANDATORY: Pre-flight Checks

Before shipping, verify ALL quality gates pass:

```bash
npm run lint && npm run test && npm run build
```

**DO NOT ship if any gate fails.**

## Workflow

### Step 1: Quality Gates
```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

### Step 2: Push
```bash
# Push with upstream tracking if not set
git push -u origin $(git branch --show-current)
```

### Step 3: Create PR
```bash
# Get recent feature commit for title
TITLE=$(git log --oneline -1 --format="%s")

# Create PR
gh pr create --title "$TITLE" --body "$(cat <<'EOF'
## Summary
{Summary from MASTER.md or recent commits}

## Changes
{List of changes from commit log}

## Test Plan
- [ ] Quality gates pass (lint, type-check, test, build)
- [ ] Manual verification complete
- [ ] Code-simplifier run on all modified files

## References
- Plan: FinalizedPlans/{feature-name}/MASTER.md
EOF
)"
```

### Step 4: Report

```
SHIPPED: {branch-name}

PR: {url}
Commits: {N}
Quality gates: ALL PASS
```

## Key Rules

- **Quality gates MUST pass** — no exceptions
- **Never force-push to main/master** without explicit approval
- **Use FinalizedPlans/ MASTER.md** for PR description if available
- **Reference the plan** in the PR body
