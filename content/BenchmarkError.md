---
source_file: "app/benchmark.py"
type: "code"
community: "test_benchmark.py"
location: "L81"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_benchmarkpy
---

# BenchmarkError

## Connections
- [[Config]] - `uses` [INFERRED]
- [[RuntimeError]] - `inherits` [EXTRACTED]
- [[The harness could not produce a trustworthy measurement -- GPU lock held elsewhe]] - `rationale_for` [EXTRACTED]
- [[acquire_gpu_lock_or_fail()]] - `calls` [EXTRACTED]
- [[benchmark.py]] - `contains` [EXTRACTED]
- [[run_benchmark()]] - `calls` [EXTRACTED]
- [[test_benchmark.py]] - `imports` [EXTRACTED]
- [[test_run_benchmark_raises_on_a_non_oom_worker_failure()]] - `indirect_call` [INFERRED]
- [[test_run_benchmark_raises_when_warmup_itself_fails_and_never_runs_the_timed_phase()]] - `indirect_call` [INFERRED]
- [[test_second_concurrent_benchmark_fails_fast_when_lock_is_held()]] - `indirect_call` [INFERRED]
- [[test_verify_clean_gpu_raises_on_a_dirty_baseline()]] - `indirect_call` [INFERRED]
- [[test_verify_clean_gpu_raises_when_no_reading_is_available()]] - `indirect_call` [INFERRED]
- [[verify_clean_gpu()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_benchmarkpy