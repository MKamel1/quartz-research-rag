---
type: community
cohesion: 0.33
members: 6
---

# _parse_args

**Cohesion:** 0.33 - loosely connected
**Members:** 6 nodes

## Members
- [[Namespace_7]] - code
- [[_parse_args()_5]] - code - app/prefetch_pdfs.py
- [[test_log_every_cli_flag_defaults_to_25_when_absent()]] - code - app/test_prefetch_pdfs.py
- [[test_log_every_cli_flag_parses_to_an_int()]] - code - app/test_prefetch_pdfs.py
- [[test_max_idle_cli_flag_defaults_to_none_when_absent()]] - code - app/test_prefetch_pdfs.py
- [[test_max_idle_cli_flag_parses_to_an_int()]] - code - app/test_prefetch_pdfs.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_parse_args
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_test_prefetch_pdfs.py]]
- 2 edges to [[_COMMUNITY_prefetch_pdfs.py]]

## Top bridge nodes
- [[_parse_args()_5]] - degree 8, connects to 2 communities
- [[test_log_every_cli_flag_defaults_to_25_when_absent()]] - degree 2, connects to 1 community
- [[test_log_every_cli_flag_parses_to_an_int()]] - degree 2, connects to 1 community
- [[test_max_idle_cli_flag_defaults_to_none_when_absent()]] - degree 2, connects to 1 community
- [[test_max_idle_cli_flag_parses_to_an_int()]] - degree 2, connects to 1 community