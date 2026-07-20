---
type: community
cohesion: 0.05
members: 82
---

# test_benchmark.py

**Cohesion:** 0.05 - loosely connected
**Members:** 82 nodes

## Members
- [[._pct()]] - code - app/benchmark.py
- [[.avg_util_pct()]] - code - app/benchmark.py
- [[.pages_per_minute()]] - code - app/benchmark.py
- [[.pct_at_high_util()]] - code - app/benchmark.py
- [[.pct_at_zero()]] - code - app/benchmark.py
- [[.peak_vram_mib()]] - code - app/benchmark.py
- [[.to_dict()]] - code - app/benchmark.py
- [[A worker crash (any non-zero exit) always invalidates the config; this only dist]] - rationale - app/benchmark.py
- [[BenchmarkError]] - code - app/benchmark.py
- [[BenchmarkResult]] - code - app/benchmark.py
- [[Exclusive lock so two benchmarks can never run concurrently on the one GPU. Reus]] - rationale - app/benchmark.py
- [[GpuSample]] - code - app/benchmark.py
- [[GpuSample_2]] - code
- [[Launches `n_workers` concurrent `python -m app.parse_phase` subprocesses sharded]] - rationale - app/benchmark.py
- [[Namespace]] - code
- [[One `nvidia-smi` sample, or `None` on any failure (never raises -- same best-eff]] - rationale - app/benchmark.py
- [[One config's measured result. `oom=True` invalidates every derived metric below]] - rationale - app/benchmark.py
- [[Pagesminute normalized by real page count -- `0.0` for an invalidated (`oom=Tru]] - rationale - app/benchmark.py
- [[Path_2]] - code
- [[Path_15]] - code
- [[Real page counts via `pypdfium2` (same library `ragparser.py` already uses for]] - rationale - app/benchmark.py
- [[Refuse to benchmark on a dirty GPU. Optionally evicts TEI first (best-effort, vi]] - rationale - app/benchmark.py
- [[Runs one config's full measurement a discarded single-paper warm-up (control 3]] - rationale - app/benchmark.py
- [[RuntimeError]] - code
- [[Tests for `app.benchmark` (T-DOC55) -- offline, no real GPUsubprocessnetwork.]] - rationale - app/test_benchmark.py
- [[The config-D trap a worker that OOM'd must never be scored as a fast result.]] - rationale - app/test_benchmark.py
- [[The exact confound OG-20 names model-init time must never contaminate the stead]] - rationale - app/test_benchmark.py
- [[The harness could not produce a trustworthy measurement -- GPU lock held elsewhe]] - rationale - app/benchmark.py
- [[The load-bearing property T-DOC55 exists for two benchmarks must never run conc]] - rationale - app/test_benchmark.py
- [[WorkerRunner]] - code
- [[Writes a throwaway `config.yaml` into `dest_dir` so a `python -m app.parse_phase]] - rationale - app/benchmark.py
- [[_base_config()]] - code - app/test_benchmark.py
- [[_fake_completed()]] - code - app/test_benchmark.py
- [[_make_pdf()]] - code - app/test_benchmark.py
- [[_parse_args()]] - code - app/benchmark.py
- [[_pdf_cache_config()]] - code - app/test_benchmark.py
- [[_query_gpu()]] - code - app/benchmark.py
- [[_run_worker_processes()]] - code - app/benchmark.py
- [[_samples()]] - code - app/test_benchmark.py
- [[_total_pages()]] - code - app/benchmark.py
- [[_write_scratch_config()]] - code - app/benchmark.py
- [[`python -m app.benchmark` -- T-DOC55 a controlled GPU benchmarkperf harness (O]] - rationale - app/benchmark.py
- [[acquire_gpu_lock_or_fail()]] - code - app/benchmark.py
- [[benchmark.py]] - code - app/benchmark.py
- [[detect_oom()]] - code - app/benchmark.py
- [[run_benchmark()]] - code - app/benchmark.py
- [[test_acquire_gpu_lock_enters_and_exits_cleanly()]] - code - app/test_benchmark.py
- [[test_acquire_gpu_lock_releases_on_exception()]] - code - app/test_benchmark.py
- [[test_avg_util_and_percentiles()]] - code - app/test_benchmark.py
- [[test_benchmark.py]] - code - app/test_benchmark.py
- [[test_detect_oom_false_on_a_non_oom_crash()]] - code - app/test_benchmark.py
- [[test_detect_oom_false_when_every_worker_exits_zero()]] - code - app/test_benchmark.py
- [[test_detect_oom_true_on_a_recognized_cuda_oom_signature()]] - code - app/test_benchmark.py
- [[test_different_lock_paths_do_not_contend()]] - code - app/test_benchmark.py
- [[test_empty_samples_never_raise_zero_division()]] - code - app/test_benchmark.py
- [[test_oom_result_reports_all_zero_metrics_even_with_samples()]] - code - app/test_benchmark.py
- [[test_pages_per_minute_computed_correctly()]] - code - app/test_benchmark.py
- [[test_pages_per_minute_simple_round_number()]] - code - app/test_benchmark.py
- [[test_pages_per_minute_zero_when_elapsed_not_positive()]] - code - app/test_benchmark.py
- [[test_pages_per_minute_zero_when_oom()]] - code - app/test_benchmark.py
- [[test_query_gpu_invokes_the_expected_nvidia_smi_command()]] - code - app/test_benchmark.py
- [[test_query_gpu_parses_util_and_memory()]] - code - app/test_benchmark.py
- [[test_query_gpu_returns_none_on_subprocess_failure()]] - code - app/test_benchmark.py
- [[test_query_gpu_returns_none_on_unparseable_output()]] - code - app/test_benchmark.py
- [[test_run_benchmark_computes_total_pages_from_the_fixed_corpus()]] - code - app/test_benchmark.py
- [[test_run_benchmark_excludes_warmup_from_reported_elapsed_time()]] - code - app/test_benchmark.py
- [[test_run_benchmark_marks_oom_and_invalidates_the_result()]] - code - app/test_benchmark.py
- [[test_run_benchmark_raises_on_a_non_oom_worker_failure()]] - code - app/test_benchmark.py
- [[test_run_benchmark_raises_when_warmup_itself_fails_and_never_runs_the_timed_phase()]] - code - app/test_benchmark.py
- [[test_run_benchmark_samples_gpu_util_during_the_timed_run()]] - code - app/test_benchmark.py
- [[test_run_benchmark_warmup_uses_only_the_first_paper_id()]] - code - app/test_benchmark.py
- [[test_second_concurrent_benchmark_fails_fast_when_lock_is_held()]] - code - app/test_benchmark.py
- [[test_to_dict_shape()]] - code - app/test_benchmark.py
- [[test_total_pages_single_paper()]] - code - app/test_benchmark.py
- [[test_total_pages_sums_real_page_counts()]] - code - app/test_benchmark.py
- [[test_verify_clean_gpu_evicts_tei_by_default()]] - code - app/test_benchmark.py
- [[test_verify_clean_gpu_passes_on_a_true_baseline()]] - code - app/test_benchmark.py
- [[test_verify_clean_gpu_raises_on_a_dirty_baseline()]] - code - app/test_benchmark.py
- [[test_verify_clean_gpu_raises_when_no_reading_is_available()]] - code - app/test_benchmark.py
- [[test_verify_clean_gpu_skips_eviction_when_disabled()]] - code - app/test_benchmark.py
- [[test_write_scratch_config_overrides_ids_and_storage_paths_only()]] - code - app/test_benchmark.py
- [[verify_clean_gpu()]] - code - app/benchmark.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_benchmarkpy
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_Config]]
- 5 edges to [[_COMMUNITY_assembly.py]]
- 4 edges to [[_COMMUNITY_load_config]]
- 2 edges to [[_COMMUNITY_test_doctor.py]]

## Top bridge nodes
- [[benchmark.py]] - degree 22, connects to 4 communities
- [[test_benchmark.py]] - degree 54, connects to 3 communities
- [[BenchmarkResult]] - degree 20, connects to 1 community
- [[run_benchmark()]] - degree 19, connects to 1 community
- [[GpuSample]] - degree 14, connects to 1 community