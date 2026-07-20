---
source_file: "app/benchmark.py"
type: "code"
community: "test_benchmark.py"
location: "L101"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_benchmarkpy
---

# BenchmarkResult

## Connections
- [[._pct()]] - `method` [EXTRACTED]
- [[.avg_util_pct()]] - `method` [EXTRACTED]
- [[.pages_per_minute()]] - `method` [EXTRACTED]
- [[.pct_at_high_util()]] - `method` [EXTRACTED]
- [[.pct_at_zero()]] - `method` [EXTRACTED]
- [[.peak_vram_mib()]] - `method` [EXTRACTED]
- [[.to_dict()]] - `method` [EXTRACTED]
- [[Config]] - `uses` [INFERRED]
- [[One config's measured result. `oom=True` invalidates every derived metric below]] - `rationale_for` [EXTRACTED]
- [[benchmark.py]] - `contains` [EXTRACTED]
- [[run_benchmark()]] - `references` [EXTRACTED]
- [[test_avg_util_and_percentiles()]] - `calls` [EXTRACTED]
- [[test_benchmark.py]] - `imports` [EXTRACTED]
- [[test_empty_samples_never_raise_zero_division()]] - `calls` [EXTRACTED]
- [[test_oom_result_reports_all_zero_metrics_even_with_samples()]] - `calls` [EXTRACTED]
- [[test_pages_per_minute_computed_correctly()]] - `calls` [EXTRACTED]
- [[test_pages_per_minute_simple_round_number()]] - `calls` [EXTRACTED]
- [[test_pages_per_minute_zero_when_elapsed_not_positive()]] - `calls` [EXTRACTED]
- [[test_pages_per_minute_zero_when_oom()]] - `calls` [EXTRACTED]
- [[test_to_dict_shape()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_benchmarkpy