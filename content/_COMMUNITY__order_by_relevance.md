---
type: community
cohesion: 0.29
members: 7
---

# _order_by_relevance

**Cohesion:** 0.29 - loosely connected
**Members:** 7 nodes

## Members
- [[Every id in the input batch is still present exactly once -- OG-46 an ORDER, no]] - rationale - app/test_build_corpus.py
- [[_order_by_relevance()]] - code - app/build_corpus.py
- [[`ids` (a `cached_not_done` batch), reordered so whichever ones also appear in]] - rationale - app/build_corpus.py
- [[test_order_by_relevance_ignores_ranked_ids_not_in_the_batch()]] - code - app/test_build_corpus.py
- [[test_order_by_relevance_is_a_reordering_not_a_filter()]] - code - app/test_build_corpus.py
- [[test_order_by_relevance_puts_ranked_ids_first_in_rank_order()]] - code - app/test_build_corpus.py
- [[test_order_by_relevance_with_no_ranked_ids_falls_back_to_sorted()]] - code - app/test_build_corpus.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_order_by_relevance
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_test_build_corpus.py]]
- 1 edge to [[_COMMUNITY_build_corpus.py]]
- 1 edge to [[_COMMUNITY_build_to_target]]

## Top bridge nodes
- [[_order_by_relevance()]] - degree 8, connects to 3 communities
- [[test_order_by_relevance_is_a_reordering_not_a_filter()]] - degree 3, connects to 1 community
- [[test_order_by_relevance_ignores_ranked_ids_not_in_the_batch()]] - degree 2, connects to 1 community
- [[test_order_by_relevance_puts_ranked_ids_first_in_rank_order()]] - degree 2, connects to 1 community
- [[test_order_by_relevance_with_no_ranked_ids_falls_back_to_sorted()]] - degree 2, connects to 1 community