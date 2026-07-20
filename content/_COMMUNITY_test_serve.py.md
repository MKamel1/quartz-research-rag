---
type: community
cohesion: 0.14
members: 20
---

# test_serve.py

**Cohesion:** 0.14 - loosely connected
**Members:** 20 nodes

## Members
- [[.__init__()_21]] - code - app/test_serve.py
- [[.get_paper()]] - code - app/test_serve.py
- [[.get_span()]] - code - app/test_serve.py
- [[.search_papers()]] - code - app/test_serve.py
- [[.semantic_search()]] - code - app/test_serve.py
- [[No papers.db under --data-dir - a clear SystemExit, not a silently-created empt]] - rationale - app/test_serve.py
- [[Records every call each tool wrapper makes -- proves `appserve.py` forwards `qu]] - rationale - app/test_serve.py
- [[Unit tests for `appserve.py` -- the thin FastMCP tool wrappers (`semantic_searc]] - rationale - app/test_serve.py
- [[_FakeMcpServer]] - code - app/test_serve.py
- [[`--data-dir DIR` config.yaml is loaded from DIR, and db_pathblob_dir resolve a]] - rationale - app/test_serve.py
- [[serve_module()]] - code - app/test_serve.py
- [[test_data_dir_resolves_db_path_and_blob_dir_under_it()]] - code - app/test_serve.py
- [[test_data_dir_with_missing_db_fails_loudly()]] - code - app/test_serve.py
- [[test_get_paper_delegates_to_the_server()]] - code - app/test_serve.py
- [[test_get_span_delegates_to_the_server()]] - code - app/test_serve.py
- [[test_search_papers_default_k_is_none_not_a_hardcoded_10()]] - code - app/test_serve.py
- [[test_search_papers_forwards_query_filters_and_explicit_k()]] - code - app/test_serve.py
- [[test_semantic_search_default_k_is_none_not_a_hardcoded_10()]] - code - app/test_serve.py
- [[test_semantic_search_forwards_query_filters_and_explicit_k()]] - code - app/test_serve.py
- [[test_serve.py]] - code - app/test_serve.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_servepy
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY___init__.py]]
- 5 edges to [[_COMMUNITY_SearchFilters]]
- 4 edges to [[_COMMUNITY_Config]]
- 2 edges to [[_COMMUNITY_load_config]]
- 1 edge to [[_COMMUNITY_assembly.py]]

## Top bridge nodes
- [[test_serve.py]] - degree 22, connects to 5 communities
- [[_FakeMcpServer]] - degree 14, connects to 3 communities
- [[.search_papers()]] - degree 5, connects to 1 community
- [[.semantic_search()]] - degree 5, connects to 1 community
- [[serve_module()]] - degree 3, connects to 1 community