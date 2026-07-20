---
type: community
cohesion: 0.33
members: 6
---

# _write_events

**Cohesion:** 0.33 - loosely connected
**Members:** 6 nodes

## Members
- [[A resume relaunches app.ingest, which starts a NEW telemetry run id appended to]] - rationale - app/dashboard/test_status.py
- [[Without `data_dir``started_at` (e.g. a fresh manifest with no run yet), `papers]] - rationale - app/dashboard/test_status.py
- [[_write_events()]] - code - app/dashboard/test_status.py
- [[test_read_telemetry_mid_run_stage_and_wall_clock()]] - code - app/dashboard/test_status.py
- [[test_read_telemetry_only_reflects_latest_run_id_segment()]] - code - app/dashboard/test_status.py
- [[test_read_telemetry_run_end_reports_done_stage_and_summary_wall_clock()]] - code - app/dashboard/test_status.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_write_events
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_test_status.py]]
- 1 edge to [[_COMMUNITY__mark_done]]

## Top bridge nodes
- [[_write_events()]] - degree 5, connects to 2 communities
- [[test_read_telemetry_mid_run_stage_and_wall_clock()]] - degree 3, connects to 1 community
- [[test_read_telemetry_only_reflects_latest_run_id_segment()]] - degree 3, connects to 1 community
- [[test_read_telemetry_run_end_reports_done_stage_and_summary_wall_clock()]] - degree 2, connects to 1 community