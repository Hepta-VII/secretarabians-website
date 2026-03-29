Create a database migration.

## Migration Request

$ARGUMENTS

## Process

1. **Read SKILLS.md** — Database section for migration patterns
2. **Check existing migrations** — Look for naming conventions and patterns
3. **Create migration file**
   - Use timestamped naming: `{YYYYMMDDHHMMSS}_{description}.sql`
   - Include schema changes
   - Include access control / permissions (RLS if applicable)
   - Include rollback strategy
4. **Test locally** — Run the migration against local database
5. **Verify** — Check schema matches expectations
6. **Commit**
   ```bash
   git commit -m "migrate: {description}"
   ```

## Migration Template

```sql
-- Migration: {description}
-- Created: {date}

-- UP
{schema changes}

-- Access Control
{RLS policies / permissions}

-- DOWN (rollback)
{reverse changes}
```

## Rules

- Always include rollback (DOWN) section
- Always include access control / permissions
- Test locally before committing
- One migration per logical change
