# Fix GitHub Issue

Please analyze and fix the GitHub issue: $ARGUMENTS.

Follow these steps:

1. **Investigate** — Use `gh issue view $ARGUMENTS` to get the issue details
2. **Understand** — Read the problem description carefully
3. **Search** — Use subagents to search the codebase for relevant files
4. **Plan** — Think about the solution before coding
5. **Implement** — Make the necessary changes
6. **Test** — Write and run tests to verify the fix
7. **Quality** — Run quality gates: `npm run lint && npm run test`
8. **Commit** — Create a descriptive commit message referencing the issue
9. **PR** — Push and create a PR with `gh pr create`

Remember:

- Use the GitHub CLI (`gh`) for all GitHub-related tasks
- Reference the issue number in your commit: "fix: description (closes #$ARGUMENTS)"
- If blocked, document what you tried and why it didn't work
