---
source_file: "rag/ingest_state_sqlite.py"
type: "code"
community: "migrate"
location: "L34"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/migrate
---

# SqliteIngestState

## Connections
- [[.__init__()_44]] - `method` [EXTRACTED]
- [[._with_connection()]] - `method` [EXTRACTED]
- [[.all_known_paper_ids()]] - `method` [EXTRACTED]
- [[.checkpoint()_1]] - `method` [EXTRACTED]
- [[.get()_4]] - `method` [EXTRACTED]
- [[.quarantine()_1]] - `method` [EXTRACTED]
- [[.stage_of()_1]] - `method` [EXTRACTED]
- [[Checkpoint]] - `uses` [INFERRED]
- [[CheckpointArtifacts]] - `uses` [INFERRED]
- [[DocStoreDouble]] - `uses` [INFERRED]
- [[EmbedderSpy]] - `uses` [INFERRED]
- [[PoisonedParser]] - `uses` [INFERRED]
- [[Precondition `db_path` has already had `migrationsmigrate.py`'s `migrate()` ap]] - `rationale_for` [EXTRACTED]
- [[RecordingVectorIndex]] - `uses` [INFERRED]
- [[SpyChunker]] - `uses` [INFERRED]
- [[SpyParser]] - `uses` [INFERRED]
- [[StubHarvester_1]] - `uses` [INFERRED]
- [[StubHarvester_2]] - `uses` [INFERRED]
- [[SummarizerSpy]] - `uses` [INFERRED]
- [[_GpuSampler]] - `uses` [INFERRED]
- [[_PdfDownloadParser]] - `uses` [INFERRED]
- [[_sqlite_harvest_quarantine_sink()]] - `references` [EXTRACTED]
- [[assembly.py]] - `imports` [EXTRACTED]
- [[build_ingestion_orchestrator()]] - `calls` [EXTRACTED]
- [[ingest_state_sqlite.py]] - `contains` [EXTRACTED]
- [[prefetch_pdfs.py]] - `imports` [EXTRACTED]
- [[run()]] - `calls` [EXTRACTED]
- [[test_a_paper_already_done_survives_a_full_pass_completely_unchanged()]] - `calls` [EXTRACTED]
- [[test_all_known_paper_ids_includes_both_ingest_state_and_quarantine_rows()]] - `calls` [EXTRACTED]
- [[test_checkpoint_at_done_clears_artifacts_but_keeps_the_stage()]] - `calls` [EXTRACTED]
- [[test_checkpoint_merges_artifacts_without_unsetting_earlier_fields()]] - `calls` [EXTRACTED]
- [[test_checkpoint_round_trips_stage_and_artifacts_through_real_sqlite()]] - `calls` [EXTRACTED]
- [[test_composition_e2e.py]] - `imports` [EXTRACTED]
- [[test_crash_and_restart_resumes_via_real_sqlite_schema_without_reinvoking_stages()]] - `calls` [EXTRACTED]
- [[test_get_returns_none_for_an_unknown_paper()]] - `calls` [EXTRACTED]
- [[test_ingest_state_sqlite.py]] - `imports` [EXTRACTED]
- [[test_ingest_then_query_one_real_paper()]] - `calls` [EXTRACTED]
- [[test_permanent_download_failure_writes_a_local_marker_and_does_not_stop_the_run()]] - `calls` [EXTRACTED]
- [[test_prefetch_pdfs.py]] - `imports` [EXTRACTED]
- [[test_quarantine_captures_diagnostics_json_when_error_carries_diagnostics()]] - `calls` [EXTRACTED]
- [[test_quarantine_diagnostics_is_idempotent_for_an_already_quarantined_paper()]] - `calls` [EXTRACTED]
- [[test_quarantine_is_idempotent_for_an_already_quarantined_paper()]] - `calls` [EXTRACTED]
- [[test_quarantine_records_error_type_for_a_generic_exception()]] - `calls` [EXTRACTED]
- [[test_quarantine_records_error_type_for_a_taxonomy_exception()]] - `calls` [EXTRACTED]
- [[test_quarantine_removes_the_row_entirely()]] - `calls` [EXTRACTED]
- [[test_quarantine_write_failure_does_not_crash_the_batch()]] - `calls` [EXTRACTED]
- [[test_quarantined_paper_is_also_skipped()]] - `calls` [EXTRACTED]
- [[test_restart_after_a_crash_resumes_without_redownloading_and_finishes_the_backlog()]] - `calls` [EXTRACTED]
- [[test_run_logs_harvest_phase_start_and_result()]] - `calls` [EXTRACTED]
- [[test_skips_a_paper_the_live_pipeline_already_checkpointed()]] - `calls` [EXTRACTED]
- [[test_transient_failure_retries_with_backoff_floored_at_the_pdf_delay_then_gives_up_retryable()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/migrate