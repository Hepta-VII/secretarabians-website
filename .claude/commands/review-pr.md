Review a pull request and provide feedback.

## PR Number

$ARGUMENTS

## Process

1. **Fetch PR details**
   ```bash
   gh pr view $ARGUMENTS
   gh pr diff $ARGUMENTS
   ```

2. **Code Review Checklist**
   - [ ] Dead code — unused imports, variables, functions
   - [ ] Copy-paste — duplicated logic
   - [ ] Functions > 50 lines — should be broken down
   - [ ] Error handling — swallowed errors, missing fallbacks
   - [ ] Tests — adequate coverage for changes
   - [ ] Magic numbers/strings — should be constants or i18n keys
   - [ ] Naming — follows project conventions
   - [ ] Security — no exposed secrets, XSS, injection
   - [ ] Performance — no obvious bottlenecks

3. **Run Quality Checks**
   ```bash
   gh pr checkout $ARGUMENTS
   {LINT_COMMAND}
   {TYPECHECK_COMMAND}
   {TEST_COMMAND}
   ```

4. **Provide Feedback**
   - Critical issues: must fix before merge
   - Warnings: should fix but not blocking
   - Suggestions: nice-to-have improvements

## Output

```
PR REVIEW: #$ARGUMENTS

Summary: {what the PR does}
Files changed: {N}

Critical:
  - {issue}

Warnings:
  - {issue}

Suggestions:
  - {suggestion}

Quality gates: PASS / FAIL
Recommendation: APPROVE / REQUEST CHANGES
```
