---
type: community
cohesion: 0.29
members: 7
---

# RunEventLog

**Cohesion:** 0.29 - loosely connected
**Members:** 7 nodes

## Members
- [[.__init__()_3]] - code - app/telemetry.py
- [[Append-only JSON Lines event writer -- one `{event, run_id, ts, ...}` obje]] - rationale - app/telemetry.py
- [[Path_13]] - code
- [[RunEventLog]] - code - app/telemetry.py
- [[test_run_event_log_appends_across_multiple_instances()]] - code - app/test_telemetry.py
- [[test_run_event_log_creates_parent_directory()]] - code - app/test_telemetry.py
- [[test_run_event_log_writes_one_json_object_per_line()]] - code - app/test_telemetry.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/RunEventLog
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_test_telemetry.py]]
- 2 edges to [[_COMMUNITY_RunTelemetry]]
- 1 edge to [[_COMMUNITY_telemetry.py]]
- 1 edge to [[_COMMUNITY_GpuSampler]]

## Top bridge nodes
- [[RunEventLog]] - degree 9, connects to 3 communities
- [[test_run_event_log_appends_across_multiple_instances()]] - degree 2, connects to 1 community
- [[test_run_event_log_creates_parent_directory()]] - degree 2, connects to 1 community
- [[test_run_event_log_writes_one_json_object_per_line()]] - degree 2, connects to 1 community