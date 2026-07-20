---
type: community
cohesion: 0.11
members: 40
---

# TeiReranker

**Cohesion:** 0.11 - loosely connected
**Members:** 40 nodes

## Members
- [[.__init__()_76]] - code - rag/test_reranker.py
- [[._backoff()_3]] - code - rag/reranker.py
- [[._ctx()_1]] - code - rag/test_reranker.py
- [[._post_with_retry()]] - code - rag/reranker.py
- [[.acquire()_5]] - code - rag/test_reranker.py
- [[.rerank()]] - code - rag/fakes/fake_reranker.py
- [[.rerank()_1]] - code - rag/reranker.py
- [[FakeReranker — the default `Reranker` dependency for every zero-GPU `Retriever`]] - rationale - rag/fakes/fake_reranker.py
- [[Real `Reranker` adapter one cross-encoder call per `rerank()`, through an injec]] - rationale - rag/reranker.py
- [[Records whether the lock is currently held -- proves a backoff sleep happens wit]] - rationale - rag/test_reranker.py
- [[RerankCandidate]] - code - contracts/retriever.py
- [[TeiReranker]] - code - rag/reranker.py
- [[TeiReranker — the real `Reranker` adapter (Retriever's injected collaborator, AR]] - rationale - rag/reranker.py
- [[Tests for TeiReranker (real `Reranker` adapter, ARCHITECTURE.md §M7's injected c]] - rationale - rag/test_reranker.py
- [[The `rerank` HTTP call, retried up to `_max_retries` times on `TransientError`]] - rationale - rag/reranker.py
- [[_SpyGpuLock_1]] - code - rag/test_reranker.py
- [[_candidates()_1]] - code - rag/test_reranker.py
- [[_default_retry_sleep()_3]] - code - rag/reranker.py
- [[fake_reranker.py]] - code - rag/fakes/fake_reranker.py
- [[reranker.py]] - code - rag/reranker.py
- [[test_4xx_response_maps_to_permanent_error()_2]] - code - rag/test_reranker.py
- [[test_5xx_response_maps_to_transient_error()_2]] - code - rag/test_reranker.py
- [[test_backoff_sleep_happens_with_the_gpu_lock_already_released()_1]] - code - rag/test_reranker.py
- [[test_connection_failure_maps_to_transient_error()_2]] - code - rag/test_reranker.py
- [[test_malformed_response_body_maps_to_permanent_error()]] - code - rag/test_reranker.py
- [[test_permanent_error_is_never_retried()_1]] - code - rag/test_reranker.py
- [[test_real_reranker_accepts_a_full_max_batch_sized_batch()]] - code - rag/test_reranker.py
- [[test_real_reranker_returns_a_valid_permutation_of_a_real_candidate_set()]] - code - rag/test_reranker.py
- [[test_real_tei_endpoint_rejects_one_batch_item_over_the_max()]] - code - rag/test_reranker.py
- [[test_rerank_acquires_the_rerank_gpu_lock()]] - code - rag/test_reranker.py
- [[test_rerank_default_gpu_lock_timeout_is_generous_not_none()]] - code - rag/test_reranker.py
- [[test_rerank_empty_candidates_returns_empty_without_http_call()]] - code - rag/test_reranker.py
- [[test_rerank_raises_transient_error_when_gpu_lock_is_wedged()]] - code - rag/test_reranker.py
- [[test_rerank_reorders_by_score_and_fabricates_nothing()]] - code - rag/test_reranker.py
- [[test_rerank_ties_break_by_original_index_ascending()]] - code - rag/test_reranker.py
- [[test_rerank_truncates_a_batch_over_the_max_before_calling_tei()]] - code - rag/test_reranker.py
- [[test_reranker.py]] - code - rag/test_reranker.py
- [[test_response_index_out_of_range_maps_to_permanent_error()]] - code - rag/test_reranker.py
- [[test_retries_exhausted_still_raises_transient_error()_1]] - code - rag/test_reranker.py
- [[test_transient_then_success_is_recovered_with_backoff()_1]] - code - rag/test_reranker.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/TeiReranker
SORT file.name ASC
```

## Connections to other communities
- 21 edges to [[_COMMUNITY_PermanentError]]
- 19 edges to [[_COMMUNITY_FakeGpuLock]]
- 7 edges to [[_COMMUNITY___init__.py]]
- 6 edges to [[_COMMUNITY_assembly.py]]
- 4 edges to [[_COMMUNITY_GpuLock]]
- 4 edges to [[_COMMUNITY_FakeVectorStore]]
- 3 edges to [[_COMMUNITY_test_retriever.py]]
- 3 edges to [[_COMMUNITY_test_fake_reranker.py]]
- 3 edges to [[_COMMUNITY_RetrievalCoverage]]
- 1 edge to [[_COMMUNITY_PaperRef]]
- 1 edge to [[_COMMUNITY_Config]]
- 1 edge to [[_COMMUNITY_Anchor]]
- 1 edge to [[_COMMUNITY_server.py]]
- 1 edge to [[_COMMUNITY_ADR-06 PDF parsing — MinerUMarker + GROBID]]
- 1 edge to [[_COMMUNITY_ADR-09 LLM serving stack — Ollama now, vLLM for V1]]

## Top bridge nodes
- [[reranker.py]] - degree 15, connects to 7 communities
- [[RerankCandidate]] - degree 23, connects to 6 communities
- [[TeiReranker]] - degree 33, connects to 5 communities
- [[test_reranker.py]] - degree 32, connects to 4 communities
- [[fake_reranker.py]] - degree 6, connects to 3 communities