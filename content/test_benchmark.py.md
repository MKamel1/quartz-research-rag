---
source_file: "app/test_benchmark.py"
type: "code"
community: "test_benchmark.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_benchmarkpy
---

# test_benchmark.py

## Connections
- [[BenchmarkError]] - `imports` [EXTRACTED]
- [[BenchmarkResult]] - `imports` [EXTRACTED]
- [[Config]] - `imports` [EXTRACTED]
- [[FileLock]] - `imports` [EXTRACTED]
- [[GpuSample]] - `imports` [EXTRACTED]
- [[Tests for `app.benchmark` (T-DOC55) -- offline, no real GPUsubprocessnetwork.]] - `rationale_for` [EXTRACTED]
- [[_base_config()]] - `contains` [EXTRACTED]
- [[_fake_completed()]] - `contains` [EXTRACTED]
- [[_make_pdf()]] - `contains` [EXTRACTED]
- [[_pdf_cache_config()]] - `contains` [EXTRACTED]
- [[_query_gpu()]] - `imports` [EXTRACTED]
- [[_samples()]] - `contains` [EXTRACTED]
- [[_total_pages()]] - `imports` [EXTRACTED]
- [[_write_scratch_config()]] - `imports` [EXTRACTED]
- [[acquire_gpu_lock_or_fail()]] - `imports` [EXTRACTED]
- [[benchmark.py]] - `imports_from` [EXTRACTED]
- [[config.py]] - `imports_from` [EXTRACTED]
- [[detect_oom()]] - `imports` [EXTRACTED]
- [[run_benchmark()]] - `imports` [EXTRACTED]
- [[test_acquire_gpu_lock_enters_and_exits_cleanly()]] - `contains` [EXTRACTED]
- [[test_acquire_gpu_lock_releases_on_exception()]] - `contains` [EXTRACTED]
- [[test_avg_util_and_percentiles()]] - `contains` [EXTRACTED]
- [[test_detect_oom_false_on_a_non_oom_crash()]] - `contains` [EXTRACTED]
- [[test_detect_oom_false_when_every_worker_exits_zero()]] - `contains` [EXTRACTED]
- [[test_detect_oom_true_on_a_recognized_cuda_oom_signature()]] - `contains` [EXTRACTED]
- [[test_different_lock_paths_do_not_contend()]] - `contains` [EXTRACTED]
- [[test_empty_samples_never_raise_zero_division()]] - `contains` [EXTRACTED]
- [[test_oom_result_reports_all_zero_metrics_even_with_samples()]] - `contains` [EXTRACTED]
- [[test_pages_per_minute_computed_correctly()]] - `contains` [EXTRACTED]
- [[test_pages_per_minute_simple_round_number()]] - `contains` [EXTRACTED]
- [[test_pages_per_minute_zero_when_elapsed_not_positive()]] - `contains` [EXTRACTED]
- [[test_pages_per_minute_zero_when_oom()]] - `contains` [EXTRACTED]
- [[test_query_gpu_invokes_the_expected_nvidia_smi_command()]] - `contains` [EXTRACTED]
- [[test_query_gpu_parses_util_and_memory()]] - `contains` [EXTRACTED]
- [[test_query_gpu_returns_none_on_subprocess_failure()]] - `contains` [EXTRACTED]
- [[test_query_gpu_returns_none_on_unparseable_output()]] - `contains` [EXTRACTED]
- [[test_run_benchmark_computes_total_pages_from_the_fixed_corpus()]] - `contains` [EXTRACTED]
- [[test_run_benchmark_excludes_warmup_from_reported_elapsed_time()]] - `contains` [EXTRACTED]
- [[test_run_benchmark_marks_oom_and_invalidates_the_result()]] - `contains` [EXTRACTED]
- [[test_run_benchmark_raises_on_a_non_oom_worker_failure()]] - `contains` [EXTRACTED]
- [[test_run_benchmark_raises_when_warmup_itself_fails_and_never_runs_the_timed_phase()]] - `contains` [EXTRACTED]
- [[test_run_benchmark_samples_gpu_util_during_the_timed_run()]] - `contains` [EXTRACTED]
- [[test_run_benchmark_warmup_uses_only_the_first_paper_id()]] - `contains` [EXTRACTED]
- [[test_second_concurrent_benchmark_fails_fast_when_lock_is_held()]] - `contains` [EXTRACTED]
- [[test_to_dict_shape()]] - `contains` [EXTRACTED]
- [[test_total_pages_single_paper()]] - `contains` [EXTRACTED]
- [[test_total_pages_sums_real_page_counts()]] - `contains` [EXTRACTED]
- [[test_verify_clean_gpu_evicts_tei_by_default()]] - `contains` [EXTRACTED]
- [[test_verify_clean_gpu_passes_on_a_true_baseline()]] - `contains` [EXTRACTED]
- [[test_verify_clean_gpu_raises_on_a_dirty_baseline()]] - `contains` [EXTRACTED]
- [[test_verify_clean_gpu_raises_when_no_reading_is_available()]] - `contains` [EXTRACTED]
- [[test_verify_clean_gpu_skips_eviction_when_disabled()]] - `contains` [EXTRACTED]
- [[test_write_scratch_config_overrides_ids_and_storage_paths_only()]] - `contains` [EXTRACTED]
- [[verify_clean_gpu()]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_benchmarkpy