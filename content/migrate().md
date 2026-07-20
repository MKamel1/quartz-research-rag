---
source_file: "migrations/migrate.py"
type: "code"
community: "migrate"
location: "L37"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/migrate
---

# migrate()

## Connections
- [[.__init__()_32]] - `calls` [EXTRACTED]
- [[Apply every numbered schema file to the SQLite database at `db_path`, creating t]] - `rationale_for` [EXTRACTED]
- [[_db()]] - `calls` [EXTRACTED]
- [[_ensure_db_migrated()]] - `calls` [EXTRACTED]
- [[_schema_files()]] - `calls` [EXTRACTED]
- [[_seed_db()]] - `calls` [EXTRACTED]
- [[_seeded_db()]] - `calls` [EXTRACTED]
- [[_seeded_sources()]] - `calls` [EXTRACTED]
- [[document_store.py_1]] - `imports` [EXTRACTED]
- [[ingest.py]] - `imports` [EXTRACTED]
- [[main()_9]] - `calls` [EXTRACTED]
- [[migrate.py]] - `contains` [EXTRACTED]
- [[test_a_paper_already_done_survives_a_full_pass_completely_unchanged()]] - `calls` [EXTRACTED]
- [[test_all_known_paper_ids_includes_both_ingest_state_and_quarantine_rows()]] - `calls` [EXTRACTED]
- [[test_checkpoint_at_done_clears_artifacts_but_keeps_the_stage()]] - `calls` [EXTRACTED]
- [[test_checkpoint_merges_artifacts_without_unsetting_earlier_fields()]] - `calls` [EXTRACTED]
- [[test_checkpoint_round_trips_stage_and_artifacts_through_real_sqlite()]] - `calls` [EXTRACTED]
- [[test_corpus_integrity.py]] - `imports` [EXTRACTED]
- [[test_crash_and_restart_resumes_via_real_sqlite_schema_without_reinvoking_stages()]] - `calls` [EXTRACTED]
- [[test_ensure_db_migrated_is_a_noop_on_an_already_migrated_db()]] - `calls` [EXTRACTED]
- [[test_get_returns_none_for_an_unknown_paper()]] - `calls` [EXTRACTED]
- [[test_ingest.py]] - `imports` [EXTRACTED]
- [[test_ingest_state_sqlite.py]] - `imports` [EXTRACTED]
- [[test_migrate.py]] - `imports` [EXTRACTED]
- [[test_migrate_creates_exactly_the_v0_and_checkpoint_tables()]] - `calls` [EXTRACTED]
- [[test_migrate_on_already_migrated_db_fails_loudly_not_silently()]] - `calls` [EXTRACTED]
- [[test_migrate_sets_wal_journal_mode()]] - `calls` [EXTRACTED]
- [[test_no_sidecar_is_written_when_the_download_permanently_fails()]] - `calls` [EXTRACTED]
- [[test_permanent_download_failure_is_logged_as_a_warning()]] - `calls` [EXTRACTED]
- [[test_permanent_download_failure_writes_a_local_marker_and_does_not_stop_the_run()]] - `calls` [EXTRACTED]
- [[test_permanently_failed_paper_is_skipped_on_a_later_pass_without_a_request()]] - `calls` [EXTRACTED]
- [[test_prefetch_pdfs.py]] - `imports` [EXTRACTED]
- [[test_quarantine_captures_diagnostics_json_when_error_carries_diagnostics()]] - `calls` [EXTRACTED]
- [[test_quarantine_diagnostics_is_idempotent_for_an_already_quarantined_paper()]] - `calls` [EXTRACTED]
- [[test_quarantine_is_idempotent_for_an_already_quarantined_paper()]] - `calls` [EXTRACTED]
- [[test_quarantine_records_error_type_for_a_generic_exception()]] - `calls` [EXTRACTED]
- [[test_quarantine_records_error_type_for_a_taxonomy_exception()]] - `calls` [EXTRACTED]
- [[test_quarantine_removes_the_row_entirely()]] - `calls` [EXTRACTED]
- [[test_quarantine_write_failure_does_not_crash_the_batch()]] - `calls` [EXTRACTED]
- [[test_quarantined_paper_is_also_skipped()]] - `calls` [EXTRACTED]
- [[test_reindex_idf.py]] - `imports` [EXTRACTED]
- [[test_restart_after_a_crash_resumes_without_redownloading_and_finishes_the_backlog()]] - `calls` [EXTRACTED]
- [[test_restart_never_redownloads_a_file_already_on_disk()]] - `calls` [EXTRACTED]
- [[test_run_default_log_every_is_25()]] - `calls` [EXTRACTED]
- [[test_run_logs_a_progress_line_every_log_every_downloads_and_no_more()]] - `calls` [EXTRACTED]
- [[test_run_logs_harvest_phase_start_and_result()]] - `calls` [EXTRACTED]
- [[test_sidecar_is_written_alongside_a_successful_download()]] - `calls` [EXTRACTED]
- [[test_skips_a_paper_the_live_pipeline_already_checkpointed()]] - `calls` [EXTRACTED]
- [[test_snapshot.py]] - `imports` [EXTRACTED]
- [[test_stops_once_target_is_reached_even_with_more_refs_available()]] - `calls` [EXTRACTED]
- [[test_telemetry.py]] - `imports` [EXTRACTED]
- [[test_transient_failure_retries_with_backoff_floored_at_the_pdf_delay_then_gives_up_retryable()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/migrate