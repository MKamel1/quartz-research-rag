---
source_file: "app/benchmark.py"
type: "code"
community: "test_benchmark.py"
location: "L203"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_benchmarkpy
---

# _query_gpu()

## Connections
- [[GpuSample]] - `references` [EXTRACTED]
- [[One `nvidia-smi` sample, or `None` on any failure (never raises -- same best-eff]] - `rationale_for` [EXTRACTED]
- [[benchmark.py]] - `contains` [EXTRACTED]
- [[test_benchmark.py]] - `imports` [EXTRACTED]
- [[test_query_gpu_invokes_the_expected_nvidia_smi_command()]] - `calls` [EXTRACTED]
- [[test_query_gpu_parses_util_and_memory()]] - `calls` [EXTRACTED]
- [[test_query_gpu_returns_none_on_subprocess_failure()]] - `calls` [EXTRACTED]
- [[test_query_gpu_returns_none_on_unparseable_output()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_benchmarkpy