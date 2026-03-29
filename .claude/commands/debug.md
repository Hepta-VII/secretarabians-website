Systematically debug an issue.

## Issue

$ARGUMENTS

## Debugging Protocol

1. Read the error/stack trace
2. Check recent changes: `git log --oneline -10` + `git diff`
3. Check CLAUDE.md and SKILLS.md Common Pitfalls for known issues
4. Isolate: find exact file and line
5. Root cause analysis (not symptoms)
6. Fix the issue
7. Run quality gates: `{LINT_COMMAND} && {BUILD_COMMAND}`
8. Commit: `fix({scope}): {description}`
