---
type: community
cohesion: 0.31
members: 9
---

# _mark_done

**Cohesion:** 0.31 - loosely connected
**Members:** 9 nodes

## Members
- [[ETA = (target - TOTAL done)  the per-run rate -- the remaining-papers count sti]] - rationale - app/dashboard/test_status.py
- [[Flips one existing `paper_id` to `stage='done'` -- used to simulate quarantined]] - rationale - app/dashboard/test_status.py
- [[_events_with_run_start()]] - code - app/dashboard/test_status.py
- [[_mark_done()]] - code - app/dashboard/test_status.py
- [[test_count_done_since_scopes_by_updated_at()]] - code - app/dashboard/test_status.py
- [[test_read_telemetry_eta_is_none_when_target_already_reached()]] - code - app/dashboard/test_status.py
- [[test_read_telemetry_eta_scopes_rate_per_run_but_remaining_off_total_done()]] - code - app/dashboard/test_status.py
- [[test_read_telemetry_rate_is_none_when_elapsed_too_small()]] - code - app/dashboard/test_status.py
- [[test_read_telemetry_rate_is_scoped_to_this_run_not_alltime_cumulative()]] - code - app/dashboard/test_status.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_mark_done
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_test_status.py]]
- 7 edges to [[_COMMUNITY__seed]]
- 1 edge to [[_COMMUNITY__write_events]]

## Top bridge nodes
- [[_events_with_run_start()]] - degree 7, connects to 3 communities
- [[_mark_done()]] - degree 8, connects to 2 communities
- [[test_read_telemetry_eta_scopes_rate_per_run_but_remaining_off_total_done()]] - degree 5, connects to 2 communities
- [[test_read_telemetry_eta_is_none_when_target_already_reached()]] - degree 4, connects to 2 communities
- [[test_read_telemetry_rate_is_none_when_elapsed_too_small()]] - degree 4, connects to 2 communities