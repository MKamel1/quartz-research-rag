---
type: community
cohesion: 0.11
members: 36
---

# migrate

**Cohesion:** 0.11 - loosely connected
**Members:** 36 nodes

## Members
- [[.__init__()_32]] - code - rag/document_store.py
- [[.__init__()_44]] - code - rag/ingest_state_sqlite.py
- [[._with_connection()]] - code - rag/ingest_state_sqlite.py
- [[.all_known_paper_ids()]] - code - rag/ingest_state_sqlite.py
- [[.checkpoint()_1]] - code - rag/ingest_state_sqlite.py
- [[.get()_4]] - code - rag/ingest_state_sqlite.py
- [[.get()_5]] - code - rag/test_ingest_state_sqlite.py
- [[.quarantine()_1]] - code - rag/ingest_state_sqlite.py
- [[.stage_of()_1]] - code - rag/ingest_state_sqlite.py
- [[Apply every numbered schema file to the SQLite database at `db_path`, creating t]] - rationale - migrations/migrate.py
- [[Connection_6]] - code
- [[Every paper_id already tracked in `ingest_state` (any stage) or dead-lettered in]] - rationale - rag/ingest_state_sqlite.py
- [[Exception_4]] - code
- [[Idempotent quarantining a `paper_id` that's already quarantined (harvest doesn']] - rationale - rag/ingest_state_sqlite.py
- [[Path_26]] - code
- [[Precondition `db_path` has already had `migrationsmigrate.py`'s `migrate()` ap]] - rationale - rag/ingest_state_sqlite.py
- [[SqliteIngestState]] - code - rag/ingest_state_sqlite.py
- [[_T]] - code
- [[_diagnostics_row()]] - code - rag/test_ingest_state_sqlite.py
- [[_make_ref()_4]] - code - rag/test_ingest_state_sqlite.py
- [[_schema_files()]] - code - migrations/migrate.py
- [[main()_9]] - code - migrations/migrate.py
- [[migrate()]] - code - migrations/migrate.py
- [[migrate.py]] - code - migrations/migrate.py
- [[migrate.py — apply the SQLite schema (migrations000N_.sql) to a database file.]] - rationale - migrations/migrate.py
- [[test_all_known_paper_ids_includes_both_ingest_state_and_quarantine_rows()]] - code - app/test_prefetch_pdfs.py
- [[test_checkpoint_at_done_clears_artifacts_but_keeps_the_stage()]] - code - rag/test_ingest_state_sqlite.py
- [[test_checkpoint_merges_artifacts_without_unsetting_earlier_fields()]] - code - rag/test_ingest_state_sqlite.py
- [[test_checkpoint_round_trips_stage_and_artifacts_through_real_sqlite()]] - code - rag/test_ingest_state_sqlite.py
- [[test_get_returns_none_for_an_unknown_paper()]] - code - rag/test_ingest_state_sqlite.py
- [[test_quarantine_captures_diagnostics_json_when_error_carries_diagnostics()]] - code - rag/test_ingest_state_sqlite.py
- [[test_quarantine_diagnostics_is_idempotent_for_an_already_quarantined_paper()]] - code - rag/test_ingest_state_sqlite.py
- [[test_quarantine_is_idempotent_for_an_already_quarantined_paper()]] - code - rag/test_ingest_state_sqlite.py
- [[test_quarantine_records_error_type_for_a_generic_exception()]] - code - rag/test_ingest_state_sqlite.py
- [[test_quarantine_records_error_type_for_a_taxonomy_exception()]] - code - rag/test_ingest_state_sqlite.py
- [[test_quarantine_removes_the_row_entirely()]] - code - rag/test_ingest_state_sqlite.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/migrate
SORT file.name ASC
```

## Connections to other communities
- 34 edges to [[_COMMUNITY_ParsedDoc]]
- 28 edges to [[_COMMUNITY_test_prefetch_pdfs.py]]
- 9 edges to [[_COMMUNITY_test_orchestrator.py]]
- 5 edges to [[_COMMUNITY_build_ingestion_orchestrator]]
- 5 edges to [[_COMMUNITY_test_migrate.py]]
- 3 edges to [[_COMMUNITY_ingest.py]]
- 3 edges to [[_COMMUNITY_test_corpus_integrity.py]]
- 3 edges to [[_COMMUNITY_test_ingest.py]]
- 3 edges to [[_COMMUNITY_ContractError]]
- 3 edges to [[_COMMUNITY_datetime]]
- 3 edges to [[_COMMUNITY_PermanentError]]
- 2 edges to [[_COMMUNITY_PaperRef]]
- 2 edges to [[_COMMUNITY_test_telemetry.py]]
- 2 edges to [[_COMMUNITY_Anchor]]
- 1 edge to [[_COMMUNITY_assembly.py]]
- 1 edge to [[_COMMUNITY_prefetch_pdfs.py]]
- 1 edge to [[_COMMUNITY_summarize_run]]
- 1 edge to [[_COMMUNITY_test_status.py]]
- 1 edge to [[_COMMUNITY_test_build_corpus.py]]
- 1 edge to [[_COMMUNITY_PaperRecord]]
- 1 edge to [[_COMMUNITY_test_server.py]]

## Top bridge nodes
- [[migrate.py]] - degree 16, connects to 12 communities
- [[migrate()]] - degree 52, connects to 11 communities
- [[SqliteIngestState]] - degree 51, connects to 7 communities
- [[_make_ref()_4]] - degree 13, connects to 2 communities
- [[test_checkpoint_merges_artifacts_without_unsetting_earlier_fields()]] - degree 8, connects to 2 communities