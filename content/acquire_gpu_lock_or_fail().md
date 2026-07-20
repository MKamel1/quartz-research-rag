---
source_file: "app/benchmark.py"
type: "code"
community: "test_benchmark.py"
location: "L177"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_benchmarkpy
---

# acquire_gpu_lock_or_fail()

## Connections
- [[BenchmarkError]] - `calls` [EXTRACTED]
- [[Exclusive lock so two benchmarks can never run concurrently on the one GPU. Reus]] - `rationale_for` [EXTRACTED]
- [[FileGpuLock]] - `calls` [EXTRACTED]
- [[Path_2]] - `references` [EXTRACTED]
- [[benchmark.py]] - `contains` [EXTRACTED]
- [[test_acquire_gpu_lock_enters_and_exits_cleanly()]] - `calls` [EXTRACTED]
- [[test_acquire_gpu_lock_releases_on_exception()]] - `calls` [EXTRACTED]
- [[test_benchmark.py]] - `imports` [EXTRACTED]
- [[test_different_lock_paths_do_not_contend()]] - `calls` [EXTRACTED]
- [[test_second_concurrent_benchmark_fails_fast_when_lock_is_held()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_benchmarkpy