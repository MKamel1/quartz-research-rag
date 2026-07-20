---
type: community
cohesion: 0.18
members: 18
---

# test_telemetry.py

**Cohesion:** 0.18 - loosely connected
**Members:** 18 nodes

## Members
- [[._loop()]] - code - app/telemetry.py
- [[GpuSample_3]] - code
- [[One `nvidia-smi` sample (utilVRAMpower), or `None` on any failure -- same best]] - rationale - app/telemetry.py
- [[Some cards report `power.draw` as `NA` (no power sensor) -- that alone must n]] - rationale - app/test_telemetry.py
- [[Tests for `app.telemetry` (T-DOC47T-DOC54) -- offline, no real GPUsubprocessn]] - rationale - app/test_telemetry.py
- [[_fake_completed()_2]] - code - app/test_telemetry.py
- [[_query_gpu()_1]] - code - app/telemetry.py
- [[_sample()]] - code - app/test_telemetry.py
- [[test_query_gpu_handles_unavailable_power_reading()]] - code - app/test_telemetry.py
- [[test_query_gpu_parses_util_memory_and_power()]] - code - app/test_telemetry.py
- [[test_query_gpu_returns_none_on_subprocess_failure()_1]] - code - app/test_telemetry.py
- [[test_query_gpu_returns_none_on_unparseable_output()_1]] - code - app/test_telemetry.py
- [[test_run_summary_format_includes_key_fields()]] - code - app/test_telemetry.py
- [[test_stage_gpu_stats_avg_power_none_when_no_reading_has_power()]] - code - app/test_telemetry.py
- [[test_stage_gpu_stats_computes_averages_and_peak()]] - code - app/test_telemetry.py
- [[test_stage_gpu_stats_empty_never_raises_zero_division()]] - code - app/test_telemetry.py
- [[test_summarize_by_stage_groups_samples_by_stage_tag()]] - code - app/test_telemetry.py
- [[test_telemetry.py]] - code - app/test_telemetry.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_telemetrypy
SORT file.name ASC
```

## Connections to other communities
- 10 edges to [[_COMMUNITY_summarize_run]]
- 7 edges to [[_COMMUNITY_GpuSampler]]
- 5 edges to [[_COMMUNITY_Vector Store Point Count Probe]]
- 4 edges to [[_COMMUNITY_telemetry.py]]
- 3 edges to [[_COMMUNITY_RunEventLog]]
- 2 edges to [[_COMMUNITY_migrate]]

## Top bridge nodes
- [[test_telemetry.py]] - degree 36, connects to 6 communities
- [[_query_gpu()_1]] - degree 8, connects to 2 communities
- [[._loop()]] - degree 3, connects to 2 communities
- [[test_run_summary_format_includes_key_fields()]] - degree 4, connects to 1 community
- [[test_summarize_by_stage_groups_samples_by_stage_tag()]] - degree 3, connects to 1 community