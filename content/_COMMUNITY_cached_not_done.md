---
type: community
cohesion: 0.29
members: 7
---

# cached_not_done

**Cohesion:** 0.29 - loosely connected
**Members:** 7 nodes

## Members
- [[A build's very first pass can run before `papers.db` exists -- must degrade to]] - rationale - app/test_build_corpus.py
- [[The cache-first to-do list basenames of `cache_dir.pdf` (same naming as     `]] - rationale - app/build_corpus.py
- [[cached_not_done()]] - code - app/build_corpus.py
- [[test_cached_not_done_empty_cache_returns_empty_list()]] - code - app/test_build_corpus.py
- [[test_cached_not_done_is_cached_pdfs_minus_done()]] - code - app/test_build_corpus.py
- [[test_cached_not_done_is_sorted_and_stable()]] - code - app/test_build_corpus.py
- [[test_cached_not_done_tolerates_a_db_that_does_not_exist_yet()]] - code - app/test_build_corpus.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/cached_not_done
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_test_build_corpus.py]]
- 2 edges to [[_COMMUNITY_build_to_target]]
- 2 edges to [[_COMMUNITY_build_corpus.py]]

## Top bridge nodes
- [[cached_not_done()]] - degree 10, connects to 3 communities
- [[test_cached_not_done_tolerates_a_db_that_does_not_exist_yet()]] - degree 3, connects to 1 community
- [[test_cached_not_done_empty_cache_returns_empty_list()]] - degree 2, connects to 1 community
- [[test_cached_not_done_is_cached_pdfs_minus_done()]] - degree 2, connects to 1 community
- [[test_cached_not_done_is_sorted_and_stable()]] - degree 2, connects to 1 community