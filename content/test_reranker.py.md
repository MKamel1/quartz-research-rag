---
source_file: "rag/test_reranker.py"
type: "code"
community: "TeiReranker"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/TeiReranker
---

# test_reranker.py

## Connections
- [[FakeGpuLock]] - `imports` [EXTRACTED]
- [[FileGpuLock]] - `imports` [EXTRACTED]
- [[PermanentError]] - `imports` [EXTRACTED]
- [[RerankCandidate]] - `imports` [EXTRACTED]
- [[TeiReranker]] - `imports` [EXTRACTED]
- [[Tests for TeiReranker (real `Reranker` adapter, ARCHITECTURE.md §M7's injected c]] - `rationale_for` [EXTRACTED]
- [[TransientError]] - `imports` [EXTRACTED]
- [[_SpyGpuLock_1]] - `contains` [EXTRACTED]
- [[_candidates()_1]] - `contains` [EXTRACTED]
- [[errors.py]] - `imports_from` [EXTRACTED]
- [[fake_gpu_lock.py]] - `imports_from` [EXTRACTED]
- [[reranker.py]] - `imports_from` [EXTRACTED]
- [[retriever.py]] - `imports_from` [EXTRACTED]
- [[test_4xx_response_maps_to_permanent_error()_2]] - `contains` [EXTRACTED]
- [[test_5xx_response_maps_to_transient_error()_2]] - `contains` [EXTRACTED]
- [[test_backoff_sleep_happens_with_the_gpu_lock_already_released()_1]] - `contains` [EXTRACTED]
- [[test_connection_failure_maps_to_transient_error()_2]] - `contains` [EXTRACTED]
- [[test_malformed_response_body_maps_to_permanent_error()]] - `contains` [EXTRACTED]
- [[test_permanent_error_is_never_retried()_1]] - `contains` [EXTRACTED]
- [[test_real_reranker_accepts_a_full_max_batch_sized_batch()]] - `contains` [EXTRACTED]
- [[test_real_reranker_returns_a_valid_permutation_of_a_real_candidate_set()]] - `contains` [EXTRACTED]
- [[test_real_tei_endpoint_rejects_one_batch_item_over_the_max()]] - `contains` [EXTRACTED]
- [[test_rerank_acquires_the_rerank_gpu_lock()]] - `contains` [EXTRACTED]
- [[test_rerank_default_gpu_lock_timeout_is_generous_not_none()]] - `contains` [EXTRACTED]
- [[test_rerank_empty_candidates_returns_empty_without_http_call()]] - `contains` [EXTRACTED]
- [[test_rerank_raises_transient_error_when_gpu_lock_is_wedged()]] - `contains` [EXTRACTED]
- [[test_rerank_reorders_by_score_and_fabricates_nothing()]] - `contains` [EXTRACTED]
- [[test_rerank_ties_break_by_original_index_ascending()]] - `contains` [EXTRACTED]
- [[test_rerank_truncates_a_batch_over_the_max_before_calling_tei()]] - `contains` [EXTRACTED]
- [[test_response_index_out_of_range_maps_to_permanent_error()]] - `contains` [EXTRACTED]
- [[test_retries_exhausted_still_raises_transient_error()_1]] - `contains` [EXTRACTED]
- [[test_transient_then_success_is_recovered_with_backoff()_1]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/TeiReranker