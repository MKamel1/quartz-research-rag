---
source_file: "contracts/fusion.py"
type: "code"
community: "test_vector_index.py"
location: "L22"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_vector_indexpy
---

# rrf_fuse()

## Connections
- [[.hybrid_search()]] - `calls` [EXTRACTED]
- [[.hybrid_search()_1]] - `calls` [EXTRACTED]
- [[ContractError]] - `calls` [EXTRACTED]
- [[Fuse two independently-ranked id lists into one score per id, via weighted Recip]] - `rationale_for` [EXTRACTED]
- [[__init__.py_4]] - `imports` [EXTRACTED]
- [[fake_vector_store.py]] - `imports` [EXTRACTED]
- [[fusion.py]] - `contains` [EXTRACTED]
- [[test_changing_hybrid_dense_weight_changes_result_in_expected_direction()]] - `calls` [EXTRACTED]
- [[test_doc_missing_from_one_list_is_excluded_from_that_term_not_given_a_rank()]] - `calls` [EXTRACTED]
- [[test_duplicate_id_within_one_ranked_list_is_a_contract_error()]] - `calls` [EXTRACTED]
- [[test_duplicate_ids_raise_contract_error()]] - `calls` [EXTRACTED]
- [[test_fake_vector_store.py]] - `imports` [EXTRACTED]
- [[test_fused_score_matches_calling_rrf_fuse_directly()]] - `calls` [EXTRACTED]
- [[test_fusion.py]] - `imports` [EXTRACTED]
- [[test_hybrid_dense_weight_out_of_range_is_a_contract_error()]] - `calls` [EXTRACTED]
- [[test_non_positive_rrf_k_is_a_contract_error()]] - `calls` [EXTRACTED]
- [[test_non_positive_rrf_k_raises_contract_error()]] - `calls` [EXTRACTED]
- [[test_rank_is_1_indexed()]] - `calls` [EXTRACTED]
- [[test_result_sorted_descending_by_score_with_deterministic_tiebreak()]] - `calls` [EXTRACTED]
- [[test_single_list_matches_hand_computed_1_indexed_formula()]] - `calls` [EXTRACTED]
- [[test_ties_break_by_id_ascending_deterministically()]] - `calls` [EXTRACTED]
- [[test_union_no_id_dropped()]] - `calls` [EXTRACTED]
- [[test_union_of_both_lists_is_returned_no_id_dropped()]] - `calls` [EXTRACTED]
- [[test_vector_index.py_1]] - `imports` [EXTRACTED]
- [[test_weight_out_of_range_raises_contract_error()]] - `calls` [EXTRACTED]
- [[test_weight_shifts_winner_toward_dense()]] - `calls` [EXTRACTED]
- [[vector_index.py_1]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_vector_indexpy