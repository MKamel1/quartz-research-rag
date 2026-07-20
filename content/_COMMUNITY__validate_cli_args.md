---
type: community
cohesion: 0.39
members: 8
---

# _validate_cli_args

**Cohesion:** 0.39 - loosely connected
**Members:** 8 nodes

## Members
- [[Namespace_1]] - code
- [[OG-493 defensive boundary check, mirroring `app.ingest`'s own `_validate_parse]] - rationale - app/build_corpus.py
- [[_parse_args()_11]] - code - app/build_corpus.py
- [[_validate_cli_args()]] - code - app/build_corpus.py
- [[test_validate_cli_args_accepts_defaults()]] - code - app/test_build_corpus.py
- [[test_validate_cli_args_accepts_unset_batch_size()]] - code - app/test_build_corpus.py
- [[test_validate_cli_args_rejects_negative_batch_size()]] - code - app/test_build_corpus.py
- [[test_validate_cli_args_rejects_parse_workers_zero()]] - code - app/test_build_corpus.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_validate_cli_args
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_test_build_corpus.py]]
- 2 edges to [[_COMMUNITY_build_corpus.py]]
- 2 edges to [[_COMMUNITY_build_to_target]]

## Top bridge nodes
- [[_validate_cli_args()]] - degree 9, connects to 3 communities
- [[_parse_args()_11]] - degree 8, connects to 3 communities
- [[test_validate_cli_args_accepts_defaults()]] - degree 3, connects to 1 community
- [[test_validate_cli_args_accepts_unset_batch_size()]] - degree 3, connects to 1 community
- [[test_validate_cli_args_rejects_negative_batch_size()]] - degree 3, connects to 1 community