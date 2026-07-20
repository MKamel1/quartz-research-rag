---
type: community
cohesion: 0.21
members: 13
---

# RunTelemetry

**Cohesion:** 0.21 - loosely connected
**Members:** 13 nodes

## Members
- [[.__init__()_4]] - code - app/telemetry.py
- [[.emit()]] - code - app/telemetry.py
- [[.finish()]] - code - app/telemetry.py
- [[.format()]] - code - app/telemetry.py
- [[.set_stage()_1]] - code - app/telemetry.py
- [[.stage_end()]] - code - app/telemetry.py
- [[.stage_start()]] - code - app/telemetry.py
- [[.stop()]] - code - app/telemetry.py
- [[Owns one run's GPU sampler + JSON-line event log + run id -- the shared counter]] - rationale - app/telemetry.py
- [[Re-tags the running GPU sampler only -- no STAGE_STARTSTAGE_END event. For a fi]] - rationale - app/telemetry.py
- [[RunSummary]] - code - app/telemetry.py
- [[RunTelemetry]] - code - app/telemetry.py
- [[The printed end-of-run report (OG-7) N done, N quarantined (+ reasons), wall-cl]] - rationale - app/telemetry.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/RunTelemetry
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_GpuSampler]]
- 3 edges to [[_COMMUNITY_telemetry.py]]
- 2 edges to [[_COMMUNITY_RunEventLog]]
- 2 edges to [[_COMMUNITY_summarize_run]]

## Top bridge nodes
- [[RunTelemetry]] - degree 8, connects to 2 communities
- [[.emit()]] - degree 5, connects to 2 communities
- [[RunSummary]] - degree 4, connects to 2 communities
- [[.stop()]] - degree 3, connects to 2 communities
- [[.__init__()_4]] - degree 3, connects to 2 communities