---
source_file: "app/test_benchmark.py"
type: "code"
community: "test_benchmark.py"
location: "L161"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_benchmarkpy
---

# test_verify_clean_gpu_raises_on_a_dirty_baseline()

## Connections
- [[BenchmarkError]] - `indirect_call` [INFERRED]
- [[GpuSample]] - `calls` [EXTRACTED]
- [[GpuSample_2]] - `calls` [EXTRACTED]
- [[test_benchmark.py]] - `contains` [EXTRACTED]
- [[verify_clean_gpu()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_benchmarkpy