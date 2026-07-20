---
type: community
cohesion: 0.22
members: 11
---

# Vector Store Point Count Probe

**Cohesion:** 0.22 - loosely connected
**Members:** 11 nodes

## Members
- [[.__enter__()]] - code - app/test_telemetry.py
- [[.__exit__()]] - code - app/test_telemetry.py
- [[.__init__()_23]] - code - app/test_telemetry.py
- [[.read()]] - code - app/test_telemetry.py
- [[Best-effort, read-only point count for `collection`, via the vector store's own]] - rationale - app/telemetry.py
- [[_FakeResponse]] - code - app/test_telemetry.py
- [[_query_vector_store_point_count()]] - code - app/telemetry.py
- [[test_query_vector_store_point_count_parses_a_healthy_response()]] - code - app/test_telemetry.py
- [[test_query_vector_store_point_count_returns_none_on_connection_failure()]] - code - app/test_telemetry.py
- [[test_query_vector_store_point_count_returns_none_on_invalid_json()]] - code - app/test_telemetry.py
- [[test_query_vector_store_point_count_returns_none_on_unexpected_shape()]] - code - app/test_telemetry.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Vector_Store_Point_Count_Probe
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_test_telemetry.py]]
- 1 edge to [[_COMMUNITY_telemetry.py]]

## Top bridge nodes
- [[_FakeResponse]] - degree 8, connects to 1 community
- [[_query_vector_store_point_count()]] - degree 6, connects to 1 community
- [[test_query_vector_store_point_count_parses_a_healthy_response()]] - degree 3, connects to 1 community
- [[test_query_vector_store_point_count_returns_none_on_invalid_json()]] - degree 3, connects to 1 community
- [[test_query_vector_store_point_count_returns_none_on_unexpected_shape()]] - degree 3, connects to 1 community