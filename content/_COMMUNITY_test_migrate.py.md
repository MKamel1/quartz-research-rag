---
type: community
cohesion: 0.19
members: 18
---

# test_migrate.py

**Cohesion:** 0.19 - loosely connected
**Members:** 18 nodes

## Members
- [[Connection_5]] - code
- [[DDL parity check, mechanizing the invariant 0001_init.sql's own header declares]] - rationale - migrations/test_migrate.py
- [[Pull the first ```sql ... ``` block under the given markdown heading.]] - rationale - migrations/test_migrate.py
- [[Re-running the migration against an already-migrated database must raise, not si]] - rationale - migrations/test_migrate.py
- [[Runnable check for migrationsmigrate.py — not wired into the default pytest tes]] - rationale - migrations/test_migrate.py
- [[Same DDL parity check as `test_0001_init_matches_data_contracts_schema`, for the]] - rationale - migrations/test_migrate.py
- [[Same DDL parity check, for the additive `quarantine_diagnostics` table (T-DOC17]] - rationale - migrations/test_migrate.py
- [[Structural snapshot keyed by table name sorted (name, type, notnull, pk) per co]] - rationale - migrations/test_migrate.py
- [[_extract_schema_sql_block()]] - code - migrations/test_migrate.py
- [[_schema_snapshot()]] - code - migrations/test_migrate.py
- [[_table_names()]] - code - migrations/test_migrate.py
- [[test_0001_init_matches_data_contracts_schema()]] - code - migrations/test_migrate.py
- [[test_0002_ingest_checkpoint_matches_data_contracts_schema()]] - code - migrations/test_migrate.py
- [[test_0003_quarantine_diagnostics_matches_data_contracts_schema()]] - code - migrations/test_migrate.py
- [[test_migrate.py]] - code - migrations/test_migrate.py
- [[test_migrate_creates_exactly_the_v0_and_checkpoint_tables()]] - code - migrations/test_migrate.py
- [[test_migrate_on_already_migrated_db_fails_loudly_not_silently()]] - code - migrations/test_migrate.py
- [[test_migrate_sets_wal_journal_mode()]] - code - migrations/test_migrate.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_migratepy
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_migrate]]

## Top bridge nodes
- [[test_migrate.py]] - degree 12, connects to 1 community
- [[test_migrate_creates_exactly_the_v0_and_checkpoint_tables()]] - degree 3, connects to 1 community
- [[test_migrate_on_already_migrated_db_fails_loudly_not_silently()]] - degree 3, connects to 1 community
- [[test_migrate_sets_wal_journal_mode()]] - degree 2, connects to 1 community