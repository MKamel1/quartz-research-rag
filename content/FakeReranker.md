---
source_file: "rag/fakes/fake_reranker.py"
type: "code"
community: "FakeVectorStore"
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeVectorStore
---

# FakeReranker

## Connections
- [[.__init__()_37]] - `method` [EXTRACTED]
- [[.rerank()]] - `method` [EXTRACTED]
- [[Deterministic, non-identity reverses `candidates`. Records every call into `.ca]] - `rationale_for` [EXTRACTED]
- [[RerankCandidate]] - `uses` [INFERRED]
- [[__init__.py_6]] - `imports` [EXTRACTED]
- [[fake_reranker.py]] - `contains` [EXTRACTED]
- [[test_both_methods_use_the_same_injected_reranker()]] - `calls` [EXTRACTED]
- [[test_calls_accumulates_across_multiple_invocations()]] - `calls` [EXTRACTED]
- [[test_calls_records_query_and_pre_rerank_ids_in_input_order()]] - `calls` [EXTRACTED]
- [[test_fake_reranker.py]] - `imports` [EXTRACTED]
- [[test_output_order_differs_from_input_order()]] - `calls` [EXTRACTED]
- [[test_output_order_matches_documented_reversal()]] - `calls` [EXTRACTED]
- [[test_retrieve_all_hits_unresolvable_returns_empty_not_error()]] - `calls` [EXTRACTED]
- [[test_retrieve_empty_corpus_returns_empty_list()]] - `calls` [EXTRACTED]
- [[test_retrieve_evidence_tier_is_pinned_A()]] - `calls` [EXTRACTED]
- [[test_retrieve_filters_is_searchfilters_not_dict()]] - `calls` [EXTRACTED]
- [[test_retrieve_multiblock_chunk_passage_covers_all_blocks()]] - `calls` [EXTRACTED]
- [[test_retrieve_papers_all_hits_unresolvable_returns_empty_not_error()]] - `calls` [EXTRACTED]
- [[test_retrieve_papers_coverage_candidate_count_is_true_pool_not_returned_count()]] - `calls` [EXTRACTED]
- [[test_retrieve_papers_empty_corpus_returns_empty_list()]] - `calls` [EXTRACTED]
- [[test_retrieve_papers_pool_size_grows_past_32_when_k_exceeds_it()]] - `calls` [EXTRACTED]
- [[test_retrieve_papers_rerank_wiring_is_its_own_assertion()]] - `calls` [EXTRACTED]
- [[test_retrieve_papers_resolves_via_get_summary_and_get_spy()]] - `calls` [EXTRACTED]
- [[test_retrieve_papers_restricts_to_summary_kind()]] - `calls` [EXTRACTED]
- [[test_retrieve_papers_returns_unanchored_paper_search_results()]] - `calls` [EXTRACTED]
- [[test_retrieve_papers_skips_hit_with_no_backing_summary_row_at_all()]] - `calls` [EXTRACTED]
- [[test_retrieve_papers_skips_unresolvable_hit_and_returns_remaining_results()]] - `calls` [EXTRACTED]
- [[test_retrieve_passage_text_equals_resolved_chunk_text()]] - `calls` [EXTRACTED]
- [[test_retrieve_pool_size_default_is_unchanged_when_not_passed()]] - `calls` [EXTRACTED]
- [[test_retrieve_pool_size_grows_past_32_when_k_exceeds_it()]] - `calls` [EXTRACTED]
- [[test_retrieve_pool_size_honors_a_custom_rerank_pool_size_constructor_arg()]] - `calls` [EXTRACTED]
- [[test_retrieve_pool_size_lets_reranker_promote_a_passage_ranked_below_k()]] - `calls` [EXTRACTED]
- [[test_retrieve_rerank_wiring_is_its_own_assertion()]] - `calls` [EXTRACTED]
- [[test_retrieve_resolves_via_get_chunk_and_get_block_spy()]] - `calls` [EXTRACTED]
- [[test_retrieve_restricts_to_chunk_kind()]] - `calls` [EXTRACTED]
- [[test_retrieve_results_are_grounded()]] - `calls` [EXTRACTED]
- [[test_retrieve_score_is_prerank_rrf_score()]] - `calls` [EXTRACTED]
- [[test_retrieve_skips_hit_with_no_backing_chunk_row_at_all()]] - `calls` [EXTRACTED]
- [[test_retrieve_skips_unresolvable_hit_and_returns_remaining_results()]] - `calls` [EXTRACTED]
- [[test_retriever.py_1]] - `imports` [EXTRACTED]
- [[test_single_candidate_reversal_is_still_non_identity_safe_noop()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeVectorStore