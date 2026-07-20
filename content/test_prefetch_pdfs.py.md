---
source_file: "app/test_prefetch_pdfs.py"
type: "code"
community: "test_prefetch_pdfs.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_prefetch_pdfspy
---

# test_prefetch_pdfs.py

## Connections
- [[Config]] - `imports` [EXTRACTED]
- [[PaperRef]] - `imports` [EXTRACTED]
- [[SqliteIngestState]] - `imports` [EXTRACTED]
- [[StubHarvester_1]] - `contains` [EXTRACTED]
- [[_cached_count()]] - `imports` [EXTRACTED]
- [[_cfg()_2]] - `contains` [EXTRACTED]
- [[_loop_cfg()]] - `contains` [EXTRACTED]
- [[_make_ref()_2]] - `contains` [EXTRACTED]
- [[_mock_client()]] - `contains` [EXTRACTED]
- [[_no_sleep()]] - `contains` [EXTRACTED]
- [[_parse_args()_5]] - `imports` [EXTRACTED]
- [[_skip_marker_path()]] - `imports` [EXTRACTED]
- [[_tmp_pdf_path()]] - `imports` [EXTRACTED]
- [[`appprefetch_pdfs.py` — standalone PDF-backlog builder.  Covers the properties]] - `rationale_for` [EXTRACTED]
- [[config.py]] - `imports_from` [EXTRACTED]
- [[datetime]] - `imports_from` [EXTRACTED]
- [[harvester.py]] - `imports_from` [EXTRACTED]
- [[ingest_state_sqlite.py]] - `imports_from` [EXTRACTED]
- [[migrate()]] - `imports` [EXTRACTED]
- [[migrate.py]] - `imports_from` [EXTRACTED]
- [[prefetch_loop()]] - `imports` [EXTRACTED]
- [[prefetch_pdfs.py]] - `imports_from` [EXTRACTED]
- [[run()]] - `imports` [EXTRACTED]
- [[test_a_paper_already_done_survives_a_full_pass_completely_unchanged()]] - `contains` [EXTRACTED]
- [[test_all_known_paper_ids_includes_both_ingest_state_and_quarantine_rows()]] - `contains` [EXTRACTED]
- [[test_log_every_cli_flag_defaults_to_25_when_absent()]] - `contains` [EXTRACTED]
- [[test_log_every_cli_flag_parses_to_an_int()]] - `contains` [EXTRACTED]
- [[test_max_idle_cli_flag_defaults_to_none_when_absent()]] - `contains` [EXTRACTED]
- [[test_max_idle_cli_flag_parses_to_an_int()]] - `contains` [EXTRACTED]
- [[test_no_sidecar_is_written_when_the_download_permanently_fails()]] - `contains` [EXTRACTED]
- [[test_permanent_download_failure_is_logged_as_a_warning()]] - `contains` [EXTRACTED]
- [[test_permanent_download_failure_writes_a_local_marker_and_does_not_stop_the_run()]] - `contains` [EXTRACTED]
- [[test_permanently_failed_paper_is_skipped_on_a_later_pass_without_a_request()]] - `contains` [EXTRACTED]
- [[test_prefetch_loop_default_max_idle_is_unbounded_matching_pre_t_doc50_behavior()]] - `contains` [EXTRACTED]
- [[test_prefetch_loop_idle_counter_resets_on_any_pass_with_progress()]] - `contains` [EXTRACTED]
- [[test_prefetch_loop_reports_a_loud_stall_line_and_sleeps_before_the_next_pass()]] - `contains` [EXTRACTED]
- [[test_prefetch_loop_stops_with_a_terminal_message_after_max_idle_passes()]] - `contains` [EXTRACTED]
- [[test_quarantined_paper_is_also_skipped()]] - `contains` [EXTRACTED]
- [[test_restart_after_a_crash_resumes_without_redownloading_and_finishes_the_backlog()]] - `contains` [EXTRACTED]
- [[test_restart_never_redownloads_a_file_already_on_disk()]] - `contains` [EXTRACTED]
- [[test_run_default_log_every_is_25()]] - `contains` [EXTRACTED]
- [[test_run_logs_a_progress_line_every_log_every_downloads_and_no_more()]] - `contains` [EXTRACTED]
- [[test_run_logs_harvest_phase_start_and_result()]] - `contains` [EXTRACTED]
- [[test_sidecar_is_written_alongside_a_successful_download()]] - `contains` [EXTRACTED]
- [[test_skips_a_paper_the_live_pipeline_already_checkpointed()]] - `contains` [EXTRACTED]
- [[test_stops_once_target_is_reached_even_with_more_refs_available()]] - `contains` [EXTRACTED]
- [[test_target_reached_line_is_logged_via_prefetch_loop()]] - `contains` [EXTRACTED]
- [[test_tmp_pdf_path_differs_from_a_different_pids_tmp_path()]] - `contains` [EXTRACTED]
- [[test_tmp_pdf_path_is_qualified_by_this_process_pid()]] - `contains` [EXTRACTED]
- [[test_transient_failure_retries_with_backoff_floored_at_the_pdf_delay_then_gives_up_retryable()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_prefetch_pdfspy