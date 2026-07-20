---
type: community
cohesion: 0.21
members: 13
---

# GpuSampler

**Cohesion:** 0.21 - loosely connected
**Members:** 13 nodes

## Members
- [[.__init__()_2]] - code - app/telemetry.py
- [[.set_stage()]] - code - app/telemetry.py
- [[.start()]] - code - app/telemetry.py
- [[.start()_1]] - code - app/telemetry.py
- [[Background nvidia-smi poller -- same startstop daemon-thread pattern as     `ap]] - rationale - app/telemetry.py
- [[GpuReading]] - code - app/telemetry.py
- [[GpuSampler]] - code - app/telemetry.py
- [[T-DOC59 (OG-25) `set_stage` re-tags the running GPU sampler for a finer sub-sta]] - rationale - app/test_telemetry.py
- [[test_gpu_sampler_collects_samples_tagged_with_the_current_stage()]] - code - app/test_telemetry.py
- [[test_gpu_sampler_discards_failed_readings()]] - code - app/test_telemetry.py
- [[test_gpu_sampler_stop_is_idempotent_and_returns_a_copy()]] - code - app/test_telemetry.py
- [[test_run_telemetry_set_stage_retags_the_sampler_without_an_event()]] - code - app/test_telemetry.py
- [[test_run_telemetry_stops_the_sampler_on_finish()]] - code - app/test_telemetry.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/GpuSampler
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_test_telemetry.py]]
- 4 edges to [[_COMMUNITY_RunTelemetry]]
- 2 edges to [[_COMMUNITY_telemetry.py]]
- 2 edges to [[_COMMUNITY_summarize_run]]
- 1 edge to [[_COMMUNITY_RunEventLog]]

## Top bridge nodes
- [[GpuSampler]] - degree 12, connects to 3 communities
- [[GpuReading]] - degree 8, connects to 2 communities
- [[.start()_1]] - degree 6, connects to 2 communities
- [[test_run_telemetry_set_stage_retags_the_sampler_without_an_event()]] - degree 4, connects to 2 communities
- [[test_run_telemetry_stops_the_sampler_on_finish()]] - degree 3, connects to 2 communities