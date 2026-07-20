---
source_file: "app/benchmark.py"
type: "code"
community: "test_benchmark.py"
location: "L163"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_benchmarkpy
---

# detect_oom()

## Connections
- [[A worker crash (any non-zero exit) always invalidates the config; this only dist]] - `rationale_for` [EXTRACTED]
- [[benchmark.py]] - `contains` [EXTRACTED]
- [[run_benchmark()]] - `calls` [EXTRACTED]
- [[test_benchmark.py]] - `imports` [EXTRACTED]
- [[test_detect_oom_false_on_a_non_oom_crash()]] - `calls` [EXTRACTED]
- [[test_detect_oom_false_when_every_worker_exits_zero()]] - `calls` [EXTRACTED]
- [[test_detect_oom_true_on_a_recognized_cuda_oom_signature()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_benchmarkpy