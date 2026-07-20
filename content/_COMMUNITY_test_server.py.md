---
type: community
cohesion: 0.08
members: 54
---

# test_server.py

**Cohesion:** 0.08 - loosely connected
**Members:** 54 nodes

## Members
- [[.__init__()_83]] - code - app/dashboard/test_server.py
- [[.semantic_search()_3]] - code - app/dashboard/test_server.py
- [[OG-43 Apply new settings while a run is live goes through `retarget` (stop-th]] - rationale - app/dashboard/test_server.py
- [[OG-43 telemetry_poll_intervalbatch_sizeparse_batch_sizekeywords in the POST]] - rationale - app/dashboard/test_server.py
- [[OG-45OG-46 arxiv_categoriesarxiv_date_fromarxiv_date_toordering in the POST]] - rationale - app/dashboard/test_server.py
- [[Regression guard for the dashboard shows stalereconnecting on every page load]] - rationale - app/dashboard/test_server.py
- [[Same as `_get`, but doesn't let a non-2xx response raise -- `apisearch` return]] - rationale - app/dashboard/test_server.py
- [[Smoke tests for `app.dashboard.server`'s HTTP routes -- a real `ThreadingHTTPSer]] - rationale - app/dashboard/test_server.py
- [[Stands in for `_LazyMcpServer` (or the real `McpServer`) -- records every     `s]] - rationale - app/dashboard/test_server.py
- [[_FakeMcpServer_1]] - code - app/dashboard/test_server.py
- [[_get()]] - code - app/dashboard/test_server.py
- [[_get_allow_error()]] - code - app/dashboard/test_server.py
- [[_get_raw()]] - code - app/dashboard/test_server.py
- [[_grounded_result()]] - code - app/dashboard/test_server.py
- [[_post()]] - code - app/dashboard/test_server.py
- [[_search_server()]] - code - app/dashboard/test_server.py
- [[test_control_invalid_json_body_is_a_client_error()]] - code - app/dashboard/test_server.py
- [[test_control_pause_dispatches_and_returns_ok()]] - code - app/dashboard/test_server.py
- [[test_control_retarget_also_rejects_parse_workers_zero()]] - code - app/dashboard/test_server.py
- [[test_control_retarget_dispatches_with_params()]] - code - app/dashboard/test_server.py
- [[test_control_start_accepts_valid_parse_workers_and_batch_size()]] - code - app/dashboard/test_server.py
- [[test_control_start_forwards_og43_editable_params()]] - code - app/dashboard/test_server.py
- [[test_control_start_forwards_og45_og46_editable_params()]] - code - app/dashboard/test_server.py
- [[test_control_start_forwards_target_and_parse_workers()]] - code - app/dashboard/test_server.py
- [[test_control_start_omits_unset_og43_params()]] - code - app/dashboard/test_server.py
- [[test_control_start_omits_unset_og45_og46_params()]] - code - app/dashboard/test_server.py
- [[test_control_start_rejects_a_malformed_arxiv_date()]] - code - app/dashboard/test_server.py
- [[test_control_start_rejects_a_quote_injection_keyword()]] - code - app/dashboard/test_server.py
- [[test_control_start_rejects_an_invalid_arxiv_category()]] - code - app/dashboard/test_server.py
- [[test_control_start_rejects_batch_size_zero()]] - code - app/dashboard/test_server.py
- [[test_control_start_rejects_negative_parse_workers()]] - code - app/dashboard/test_server.py
- [[test_control_start_rejects_parse_workers_zero()]] - code - app/dashboard/test_server.py
- [[test_control_stop_with_no_run_reports_conflict_not_crash()]] - code - app/dashboard/test_server.py
- [[test_control_unknown_action_is_a_client_error()]] - code - app/dashboard/test_server.py
- [[test_control_without_token_is_rejected()]] - code - app/dashboard/test_server.py
- [[test_root_html_persists_token_and_distinguishes_auth_errors_from_staleness()]] - code - app/dashboard/test_server.py
- [[test_root_is_reachable_without_a_token()]] - code - app/dashboard/test_server.py
- [[test_root_serves_html()]] - code - app/dashboard/test_server.py
- [[test_search_route_backend_failure_degrades_to_502_not_a_crash()]] - code - app/dashboard/test_server.py
- [[test_search_route_backend_failure_logs_full_detail_server_side()]] - code - app/dashboard/test_server.py
- [[test_search_route_clamps_k_to_bounds()]] - code - app/dashboard/test_server.py
- [[test_search_route_equal_date_range_is_allowed()]] - code - app/dashboard/test_server.py
- [[test_search_route_missing_query_is_a_client_error_and_never_calls_the_backend()]] - code - app/dashboard/test_server.py
- [[test_search_route_parses_k_and_subject_date_filters()]] - code - app/dashboard/test_server.py
- [[test_search_route_returns_results_and_coverage_shape()]] - code - app/dashboard/test_server.py
- [[test_search_route_reversed_date_range_is_a_clean_400_not_silent_zero_results()]] - code - app/dashboard/test_server.py
- [[test_search_route_with_valid_token_is_200()]] - code - app/dashboard/test_server.py
- [[test_search_route_without_token_is_401_and_never_calls_the_backend()]] - code - app/dashboard/test_server.py
- [[test_server.py]] - code - app/dashboard/test_server.py
- [[test_status_route_shape_matches_api_contract()]] - code - app/dashboard/test_server.py
- [[test_status_route_with_valid_token_is_200()]] - code - app/dashboard/test_server.py
- [[test_status_route_with_wrong_token_is_401()]] - code - app/dashboard/test_server.py
- [[test_status_route_without_token_is_401()]] - code - app/dashboard/test_server.py
- [[test_unknown_route_is_404()]] - code - app/dashboard/test_server.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_serverpy
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY_NoRunError]]
- 8 edges to [[_COMMUNITY_server.py]]
- 3 edges to [[_COMMUNITY___init__.py]]
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY_assembly.py]]
- 1 edge to [[_COMMUNITY_SearchFilters]]
- 1 edge to [[_COMMUNITY_migrate]]
- 1 edge to [[_COMMUNITY_controller.py]]

## Top bridge nodes
- [[test_server.py]] - degree 63, connects to 7 communities
- [[_search_server()]] - degree 15, connects to 2 communities
- [[_FakeMcpServer_1]] - degree 16, connects to 1 community
- [[_get()]] - degree 9, connects to 1 community
- [[test_search_route_parses_k_and_subject_date_filters()]] - degree 6, connects to 1 community