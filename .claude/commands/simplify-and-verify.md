Run code simplification and verification on recently modified files.

## Process

1. **Identify modified files**
   ```bash
   git diff --name-only HEAD~5
   ```

2. **Run code-simplifier agent**
   Use the code-simplifier agent on each modified file to:
   - Remove dead code and unused imports
   - Simplify complex conditionals
   - Reduce nesting depth
   - Extract magic values into constants
   - Remove over-engineering

3. **Run quality gates**
   ```bash
   {LINT_COMMAND}
   {TYPECHECK_COMMAND}
   {TEST_COMMAND}
   ```

4. **Verify UI** (if applicable)
   - Check visual output matches expectations
   - Test responsive behavior
   - Test i18n/RTL if applicable

5. **Commit** (if changes were made)
   ```bash
   git commit -m "refactor: simplify and verify recent changes"
   ```

## Output

```
SIMPLIFY & VERIFY

Files processed: {N}
Changes made: {N}
Quality gates: ALL PASS

Done.
```
