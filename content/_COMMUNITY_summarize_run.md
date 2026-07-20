---
type: community
cohesion: 0.23
members: 12
---

# summarize_run

**Cohesion:** 0.23 - loosely connected
**Members:** 12 nodes

## Members
- [[Builds one `RunSummary` from `ingest_state``quarantine``quarantine_diagnostics]] - rationale - app/telemetry.py
- [[Runs from a `finally` block in app.ingest, possibly after the run's own real fai]] - rationale - app/test_telemetry.py
- [[The exact OG-16T-DOC35 failure class papers marked 'done' with zero vectors st]] - rationale - app/test_telemetry.py
- [[_seed_db()]] - code - app/test_telemetry.py
- [[summarize_run()]] - code - app/telemetry.py
- [[test_run_telemetry_emits_run_start_stage_and_run_end_events()]] - code - app/test_telemetry.py
- [[test_summarize_run_consistent_when_vector_store_has_points_for_done_papers()]] - code - app/test_telemetry.py
- [[test_summarize_run_counts_done_and_quarantined_with_reasons()]] - code - app/test_telemetry.py
- [[test_summarize_run_flags_mismatch_when_done_papers_have_zero_points()]] - code - app/test_telemetry.py
- [[test_summarize_run_survives_a_missing_database()]] - code - app/test_telemetry.py
- [[test_summarize_run_unknown_when_vector_store_probe_fails()]] - code - app/test_telemetry.py
- [[test_summarize_run_zero_wall_clock_never_divides_by_zero()]] - code - app/test_telemetry.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/summarize_run
SORT file.name ASC
```

## Connections to other communities
- 10 edges to [[_COMMUNITY_test_telemetry.py]]
- 3 edges to [[_COMMUNITY_telemetry.py]]
- 2 edges to [[_COMMUNITY_RunTelemetry]]
- 2 edges to [[_COMMUNITY_GpuSampler]]
- 1 edge to [[_COMMUNITY_migrate]]

## Top bridge nodes
- [[summarize_run()]] - degree 13, connects to 3 communities
- [[_seed_db()]] - degree 11, connects to 3 communities
- [[test_summarize_run_flags_mismatch_when_done_papers_have_zero_points()]] - degree 4, connects to 1 community
- [[test_summarize_run_consistent_when_vector_store_has_points_for_done_papers()]] - degree 3, connects to 1 community
- [[test_summarize_run_counts_done_and_quarantined_with_reasons()]] - degree 3, connects to 1 community