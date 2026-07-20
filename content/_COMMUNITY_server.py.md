---
type: community
cohesion: 0.09
members: 32
---

# server.py

**Cohesion:** 0.09 - loosely connected
**Members:** 32 nodes

## Members
- [[.__init__()_81]] - code - app/dashboard/server.py
- [[.semantic_search()_2]] - code - app/dashboard/server.py
- [[BaseHTTPRequestHandler]] - code
- [[Builds the real retrieval stack (`app.assembly.build_mcp_server`) on the FIRST s]] - rationale - app/dashboard/server.py
- [[ControlValidationError]] - code - app/dashboard/server.py
- [[Merges `controller.liveness()` (run identity) with `status.py`'s pure reads (fun]] - rationale - app/dashboard/server.py
- [[Namespace_2]] - code
- [[Path_5]] - code
- [[Pulls the OG-43 editable params out of a `POST apicontrol` body for `start``r]] - rationale - app/dashboard/server.py
- [[Raised when a `POST apicontrol` body fails boundary validation (OG-4936) --]] - rationale - app/dashboard/server.py
- [[Raises `ControlValidationError` on the first bad field found in a `start``retar]] - rationale - app/dashboard/server.py
- [[SearchFilters_2]] - code
- [[ThreadingHTTPServer]] - code
- [[ValueError_1]] - code
- [[_LazyMcpServer]] - code - app/dashboard/server.py
- [[_control_kwargs()]] - code - app/dashboard/server.py
- [[_parse_args()_12]] - code - app/dashboard/server.py
- [[_parse_date()]] - code - app/dashboard/server.py
- [[_parse_int()]] - code - app/dashboard/server.py
- [[_search_display()]] - code - app/dashboard/server.py
- [[_search_filters_from_params()]] - code - app/dashboard/server.py
- [[_status_dict()]] - code - app/dashboard/server.py
- [[_validate_control_kwargs()]] - code - app/dashboard/server.py
- [[`categories` is comma-separated (matches the dashboard control panel's own subje]] - rationale - app/dashboard/server.py
- [[`python -m app.dashboard.server --port 8700 --data-dir dir --token tok` -- t]] - rationale - app/dashboard/server.py
- [[`status_module``controller_module` are injectable (default the real modules) s]] - rationale - app/dashboard/server.py
- [[build_server()]] - code - app/dashboard/server.py
- [[date_2]] - code
- [[main()_11]] - code - app/dashboard/server.py
- [[make_handler()]] - code - app/dashboard/server.py
- [[server.py]] - code - app/dashboard/server.py
- [[test_lazy_mcp_server_builds_only_once_under_concurrent_first_calls()]] - code - app/dashboard/test_server.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/serverpy
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_test_server.py]]
- 4 edges to [[_COMMUNITY_controller.py]]
- 3 edges to [[_COMMUNITY_NoRunError]]
- 2 edges to [[_COMMUNITY_assembly.py]]
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY_SearchFilters]]
- 1 edge to [[_COMMUNITY_load_config]]
- 1 edge to [[_COMMUNITY___init__.py]]
- 1 edge to [[_COMMUNITY_TeiReranker]]
- 1 edge to [[_COMMUNITY_status.py]]

## Top bridge nodes
- [[server.py]] - degree 25, connects to 9 communities
- [[build_server()]] - degree 8, connects to 2 communities
- [[_LazyMcpServer]] - degree 8, connects to 2 communities
- [[_status_dict()]] - degree 6, connects to 2 communities
- [[test_lazy_mcp_server_builds_only_once_under_concurrent_first_calls()]] - degree 3, connects to 2 communities