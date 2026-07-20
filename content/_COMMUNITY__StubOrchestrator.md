---
type: community
cohesion: 0.22
members: 9
---

# _StubOrchestrator

**Cohesion:** 0.22 - loosely connected
**Members:** 9 nodes

## Members
- [[.__init__()_8]] - code - app/test_assembly.py
- [[.fetch()]] - code - app/test_assembly.py
- [[.harvest()]] - code - app/test_assembly.py
- [[A `Source` whose `fetch()` always raises `TransientError` -- stands in only for]] - rationale - app/test_assembly.py
- [[Previously `Harvester` was constructed in `build_ingestion_orchestrator` with no]] - rationale - app/test_assembly.py
- [[Stands in for `IngestionOrchestrator` on the query-driven (no `ingest_paper_ids`]] - rationale - app/test_assembly.py
- [[_AlwaysTransientSource]] - code - app/test_assembly.py
- [[_StubOrchestrator]] - code - app/test_assembly.py
- [[test_harvest_failure_is_written_to_the_quarantine_table()]] - code - app/test_assembly.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_StubOrchestrator
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_PermanentError]]
- 4 edges to [[_COMMUNITY_test_assembly.py]]
- 3 edges to [[_COMMUNITY_Config]]
- 2 edges to [[_COMMUNITY_AdaptiveBatchSizer]]
- 2 edges to [[_COMMUNITY_PaperRef]]
- 1 edge to [[_COMMUNITY_build_ingestion_orchestrator]]

## Top bridge nodes
- [[_StubOrchestrator]] - degree 10, connects to 5 communities
- [[_AlwaysTransientSource]] - degree 9, connects to 5 communities
- [[test_harvest_failure_is_written_to_the_quarantine_table()]] - degree 6, connects to 3 communities
- [[.fetch()]] - degree 2, connects to 1 community