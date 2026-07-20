---
source_file: "app/benchmark.py"
type: "code"
community: "test_benchmark.py"
location: "L220"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_benchmarkpy
---

# verify_clean_gpu()

## Connections
- [[BenchmarkError]] - `calls` [EXTRACTED]
- [[GpuSample]] - `references` [EXTRACTED]
- [[Refuse to benchmark on a dirty GPU. Optionally evicts TEI first (best-effort, vi]] - `rationale_for` [EXTRACTED]
- [[benchmark.py]] - `contains` [EXTRACTED]
- [[stop_tei_containers()]] - `calls` [EXTRACTED]
- [[test_benchmark.py]] - `imports` [EXTRACTED]
- [[test_verify_clean_gpu_evicts_tei_by_default()]] - `calls` [EXTRACTED]
- [[test_verify_clean_gpu_passes_on_a_true_baseline()]] - `calls` [EXTRACTED]
- [[test_verify_clean_gpu_raises_on_a_dirty_baseline()]] - `calls` [EXTRACTED]
- [[test_verify_clean_gpu_raises_when_no_reading_is_available()]] - `calls` [EXTRACTED]
- [[test_verify_clean_gpu_skips_eviction_when_disabled()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_benchmarkpy