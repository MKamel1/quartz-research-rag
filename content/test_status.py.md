---
source_file: "app/dashboard/test_status.py"
type: "code"
community: "test_status.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_statuspy
---

# test_status.py

## Connections
- [[Tests for `app.dashboard.status` -- offline, no real GPUnetworkmanifest. Every]] - `rationale_for` [EXTRACTED]
- [[_events_with_run_start()]] - `contains` [EXTRACTED]
- [[_mark_done()]] - `contains` [EXTRACTED]
- [[_seed()]] - `contains` [EXTRACTED]
- [[_write_events()]] - `contains` [EXTRACTED]
- [[migrate.py]] - `imports_from` [EXTRACTED]
- [[status.py]] - `imports` [EXTRACTED]
- [[test_count_done_since_scopes_by_updated_at()]] - `contains` [EXTRACTED]
- [[test_elapsed_seconds_since_degrades_to_none_on_bad_input()]] - `contains` [EXTRACTED]
- [[test_elapsed_seconds_since_parses_iso_started_at()]] - `contains` [EXTRACTED]
- [[test_is_live_prefetch_false_for_a_dead_pid()]] - `contains` [EXTRACTED]
- [[test_is_live_prefetch_false_for_non_prefetch_cmdline()]] - `contains` [EXTRACTED]
- [[test_read_consistency_degrades_when_vector_store_unreachable()]] - `contains` [EXTRACTED]
- [[test_read_consistency_reports_point_count()]] - `contains` [EXTRACTED]
- [[test_read_consistency_verdict_false_when_done_but_zero_points()]] - `contains` [EXTRACTED]
- [[test_read_consistency_verdict_none_when_done_count_unknown()]] - `contains` [EXTRACTED]
- [[test_read_consistency_verdict_true_when_nothing_done_yet()]] - `contains` [EXTRACTED]
- [[test_read_consistency_verdict_true_when_points_exist()]] - `contains` [EXTRACTED]
- [[test_read_corpus_degrades_to_nulls_when_db_missing()]] - `contains` [EXTRACTED]
- [[test_read_corpus_excludes_quarantined_papers_that_later_succeeded()]] - `contains` [EXTRACTED]
- [[test_read_corpus_funnel_is_cumulative_from_current_stage()]] - `contains` [EXTRACTED]
- [[test_read_corpus_is_read_only_never_writes()]] - `contains` [EXTRACTED]
- [[test_read_corpus_quarantine_reasons_grouped_and_sorted()]] - `contains` [EXTRACTED]
- [[test_read_corpus_quarantine_reasons_omits_unknown_bucket_when_fully_diagnosed()]] - `contains` [EXTRACTED]
- [[test_read_corpus_quarantine_reasons_surfaces_an_unknown_bucket_for_pre_diagnostics_rows()]] - `contains` [EXTRACTED]
- [[test_read_disk_degrades_to_nulls_when_path_missing()]] - `contains` [EXTRACTED]
- [[test_read_disk_reports_usage()]] - `contains` [EXTRACTED]
- [[test_read_downloader_degrades_to_nulls_when_no_run_cwd()]] - `contains` [EXTRACTED]
- [[test_read_downloader_pace_degrades_when_log_missing()]] - `contains` [EXTRACTED]
- [[test_read_downloader_pace_degrades_when_no_pace_line_yet()]] - `contains` [EXTRACTED]
- [[test_read_downloader_reports_alive_for_a_real_prefetch_pdfs_process()]] - `contains` [EXTRACTED]
- [[test_read_downloader_reports_dead_for_a_stale_pid()]] - `contains` [EXTRACTED]
- [[test_read_downloader_reports_dead_when_pid_file_missing()]] - `contains` [EXTRACTED]
- [[test_read_downloader_tails_its_own_dedicated_log_for_the_latest_pace_line()]] - `contains` [EXTRACTED]
- [[test_read_downloads_counts_pdfs_and_sidecars()]] - `contains` [EXTRACTED]
- [[test_read_downloads_degrades_when_cache_dir_missing()]] - `contains` [EXTRACTED]
- [[test_read_gpu_degrades_to_nulls_when_nvidia_smi_missing()]] - `contains` [EXTRACTED]
- [[test_read_telemetry_eta_is_none_when_target_already_reached()]] - `contains` [EXTRACTED]
- [[test_read_telemetry_eta_scopes_rate_per_run_but_remaining_off_total_done()]] - `contains` [EXTRACTED]
- [[test_read_telemetry_mid_run_stage_and_wall_clock()]] - `contains` [EXTRACTED]
- [[test_read_telemetry_missing_file_degrades_gracefully()]] - `contains` [EXTRACTED]
- [[test_read_telemetry_none_events_path_degrades_gracefully()]] - `contains` [EXTRACTED]
- [[test_read_telemetry_only_reflects_latest_run_id_segment()]] - `contains` [EXTRACTED]
- [[test_read_telemetry_rate_is_none_when_elapsed_too_small()]] - `contains` [EXTRACTED]
- [[test_read_telemetry_rate_is_none_when_zero_completions_since_started_at()]] - `contains` [EXTRACTED]
- [[test_read_telemetry_rate_is_scoped_to_this_run_not_alltime_cumulative()]] - `contains` [EXTRACTED]
- [[test_read_telemetry_run_end_reports_done_stage_and_summary_wall_clock()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_statuspy