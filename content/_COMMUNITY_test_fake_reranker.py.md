---
type: community
cohesion: 0.43
members: 8
---

# test_fake_reranker.py

**Cohesion:** 0.43 - moderately connected
**Members:** 8 nodes

## Members
- [[Tests for FakeReranker (T-F4) — non-identity reversal and call recording.  TEST-]] - rationale - rag/fakes/test_fake_reranker.py
- [[_candidates()]] - code - rag/fakes/test_fake_reranker.py
- [[test_calls_accumulates_across_multiple_invocations()]] - code - rag/fakes/test_fake_reranker.py
- [[test_calls_records_query_and_pre_rerank_ids_in_input_order()]] - code - rag/fakes/test_fake_reranker.py
- [[test_fake_reranker.py]] - code - rag/fakes/test_fake_reranker.py
- [[test_output_order_differs_from_input_order()]] - code - rag/fakes/test_fake_reranker.py
- [[test_output_order_matches_documented_reversal()]] - code - rag/fakes/test_fake_reranker.py
- [[test_single_candidate_reversal_is_still_non_identity_safe_noop()]] - code - rag/fakes/test_fake_reranker.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_fake_rerankerpy
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_FakeVectorStore]]
- 3 edges to [[_COMMUNITY_TeiReranker]]
- 1 edge to [[_COMMUNITY___init__.py]]

## Top bridge nodes
- [[test_fake_reranker.py]] - degree 11, connects to 3 communities
- [[_candidates()]] - degree 7, connects to 1 community
- [[test_calls_accumulates_across_multiple_invocations()]] - degree 3, connects to 1 community
- [[test_calls_records_query_and_pre_rerank_ids_in_input_order()]] - degree 3, connects to 1 community
- [[test_output_order_differs_from_input_order()]] - degree 3, connects to 1 community