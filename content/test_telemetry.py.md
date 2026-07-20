---
source_file: "app/test_telemetry.py"
type: "code"
community: "test_telemetry.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_telemetrypy
---

# test_telemetry.py

## Connections
- [[Tests for `app.telemetry` (T-DOC47T-DOC54) -- offline, no real GPUsubprocessn]] - `rationale_for` [EXTRACTED]
- [[_FakeResponse]] - `contains` [EXTRACTED]
- [[_fake_completed()_2]] - `contains` [EXTRACTED]
- [[_sample()]] - `contains` [EXTRACTED]
- [[_seed_db()]] - `contains` [EXTRACTED]
- [[migrate()]] - `imports` [EXTRACTED]
- [[migrate.py]] - `imports_from` [EXTRACTED]
- [[telemetry.py]] - `imports_from` [EXTRACTED]
- [[test_gpu_sampler_collects_samples_tagged_with_the_current_stage()]] - `contains` [EXTRACTED]
- [[test_gpu_sampler_discards_failed_readings()]] - `contains` [EXTRACTED]
- [[test_gpu_sampler_stop_is_idempotent_and_returns_a_copy()]] - `contains` [EXTRACTED]
- [[test_query_gpu_handles_unavailable_power_reading()]] - `contains` [EXTRACTED]
- [[test_query_gpu_parses_util_memory_and_power()]] - `contains` [EXTRACTED]
- [[test_query_gpu_returns_none_on_subprocess_failure()_1]] - `contains` [EXTRACTED]
- [[test_query_gpu_returns_none_on_unparseable_output()_1]] - `contains` [EXTRACTED]
- [[test_query_vector_store_point_count_parses_a_healthy_response()]] - `contains` [EXTRACTED]
- [[test_query_vector_store_point_count_returns_none_on_connection_failure()]] - `contains` [EXTRACTED]
- [[test_query_vector_store_point_count_returns_none_on_invalid_json()]] - `contains` [EXTRACTED]
- [[test_query_vector_store_point_count_returns_none_on_unexpected_shape()]] - `contains` [EXTRACTED]
- [[test_run_event_log_appends_across_multiple_instances()]] - `contains` [EXTRACTED]
- [[test_run_event_log_creates_parent_directory()]] - `contains` [EXTRACTED]
- [[test_run_event_log_writes_one_json_object_per_line()]] - `contains` [EXTRACTED]
- [[test_run_summary_format_includes_key_fields()]] - `contains` [EXTRACTED]
- [[test_run_telemetry_emits_run_start_stage_and_run_end_events()]] - `contains` [EXTRACTED]
- [[test_run_telemetry_set_stage_retags_the_sampler_without_an_event()]] - `contains` [EXTRACTED]
- [[test_run_telemetry_stops_the_sampler_on_finish()]] - `contains` [EXTRACTED]
- [[test_stage_gpu_stats_avg_power_none_when_no_reading_has_power()]] - `contains` [EXTRACTED]
- [[test_stage_gpu_stats_computes_averages_and_peak()]] - `contains` [EXTRACTED]
- [[test_stage_gpu_stats_empty_never_raises_zero_division()]] - `contains` [EXTRACTED]
- [[test_summarize_by_stage_groups_samples_by_stage_tag()]] - `contains` [EXTRACTED]
- [[test_summarize_run_consistent_when_vector_store_has_points_for_done_papers()]] - `contains` [EXTRACTED]
- [[test_summarize_run_counts_done_and_quarantined_with_reasons()]] - `contains` [EXTRACTED]
- [[test_summarize_run_flags_mismatch_when_done_papers_have_zero_points()]] - `contains` [EXTRACTED]
- [[test_summarize_run_survives_a_missing_database()]] - `contains` [EXTRACTED]
- [[test_summarize_run_unknown_when_vector_store_probe_fails()]] - `contains` [EXTRACTED]
- [[test_summarize_run_zero_wall_clock_never_divides_by_zero()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_telemetrypy