---
type: community
cohesion: 0.60
members: 6
---

# telemetry.py

**Cohesion:** 0.60 - moderately connected
**Members:** 6 nodes

## Members
- [[.from_samples()]] - code - app/telemetry.py
- [[GpuSample_1]] - code - app/telemetry.py
- [[StageGpuStats]] - code - app/telemetry.py
- [[`apptelemetry.py` -- T-DOC47T-DOC54 built-in per-run performance telemetry, s]] - rationale - app/telemetry.py
- [[summarize_by_stage()]] - code - app/telemetry.py
- [[telemetry.py]] - code - app/telemetry.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/telemetrypy
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_test_telemetry.py]]
- 3 edges to [[_COMMUNITY_RunTelemetry]]
- 3 edges to [[_COMMUNITY_summarize_run]]
- 2 edges to [[_COMMUNITY_GpuSampler]]
- 1 edge to [[_COMMUNITY_ingest.py]]
- 1 edge to [[_COMMUNITY_Vector Store Point Count Probe]]
- 1 edge to [[_COMMUNITY_RunEventLog]]

## Top bridge nodes
- [[telemetry.py]] - degree 14, connects to 7 communities
- [[GpuSample_1]] - degree 6, connects to 3 communities
- [[summarize_by_stage()]] - degree 6, connects to 2 communities