---
source_file: "rag/test_reranker.py"
type: "code"
community: "TeiReranker"
location: "L22"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/TeiReranker
---

# _candidates()

## Connections
- [[RerankCandidate]] - `references` [EXTRACTED]
- [[test_4xx_response_maps_to_permanent_error()_2]] - `calls` [EXTRACTED]
- [[test_5xx_response_maps_to_transient_error()_2]] - `calls` [EXTRACTED]
- [[test_backoff_sleep_happens_with_the_gpu_lock_already_released()_1]] - `calls` [EXTRACTED]
- [[test_connection_failure_maps_to_transient_error()_2]] - `calls` [EXTRACTED]
- [[test_malformed_response_body_maps_to_permanent_error()]] - `calls` [EXTRACTED]
- [[test_permanent_error_is_never_retried()_1]] - `calls` [EXTRACTED]
- [[test_real_reranker_accepts_a_full_max_batch_sized_batch()]] - `calls` [EXTRACTED]
- [[test_real_reranker_returns_a_valid_permutation_of_a_real_candidate_set()]] - `calls` [EXTRACTED]
- [[test_rerank_acquires_the_rerank_gpu_lock()]] - `calls` [EXTRACTED]
- [[test_rerank_raises_transient_error_when_gpu_lock_is_wedged()]] - `calls` [EXTRACTED]
- [[test_rerank_reorders_by_score_and_fabricates_nothing()]] - `calls` [EXTRACTED]
- [[test_rerank_ties_break_by_original_index_ascending()]] - `calls` [EXTRACTED]
- [[test_rerank_truncates_a_batch_over_the_max_before_calling_tei()]] - `calls` [EXTRACTED]
- [[test_reranker.py]] - `contains` [EXTRACTED]
- [[test_response_index_out_of_range_maps_to_permanent_error()]] - `calls` [EXTRACTED]
- [[test_retries_exhausted_still_raises_transient_error()_1]] - `calls` [EXTRACTED]
- [[test_transient_then_success_is_recovered_with_backoff()_1]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/TeiReranker