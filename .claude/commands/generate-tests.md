Generate tests for a component or function (TDD Style — red phase).

## Target

$ARGUMENTS

## IMPORTANT: Test-Driven Development

You are doing TDD. This means:

1. Write tests FIRST
2. Tests should FAIL initially
3. NO mock implementations
4. NO actual feature code yet

## Process

1. **Understand the Target**
   - Read the spec in `specs/` if available
   - Search codebase for similar test patterns
   - Think about edge cases

2. **Write Comprehensive Tests**
   Include tests for:
   - [ ] Happy path (normal operation)
   - [ ] Error cases (invalid input, network errors)
   - [ ] Edge cases (empty data, max limits)
   - [ ] Boundary conditions
   - [ ] Loading states (if UI)

3. **Use Existing Patterns**
   ```bash
   # Find existing test patterns
   find . -name "*.test.*" -o -name "*.spec.*" | head -5
   ```
   Follow the same style and fixtures.

4. **Run Tests — They Should FAIL**
   ```bash
   {TEST_COMMAND} -- {target}.test.*
   ```
   Confirm they fail because implementation doesn't exist yet.

5. **Commit Tests**
   ```bash
   git add -A
   git commit -m "test: add tests for $ARGUMENTS (TDD - red phase)"
   ```

## Output

```
TESTS CREATED: {target}

File: {test file path}
Test cases: {N}
Status: FAILING (as expected for TDD)

Ready for implementation phase.
```

## Rules

- DO NOT write implementation code. Only tests.
- Tests MUST fail initially.
- Follow existing test patterns in the codebase.
