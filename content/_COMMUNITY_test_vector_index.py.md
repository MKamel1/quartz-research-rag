---
type: community
cohesion: 0.06
members: 61
---

# test_vector_index.py

**Cohesion:** 0.06 - loosely connected
**Members:** 61 nodes

## Members
- [[.__init__()_79]] - code - rag/test_vector_index.py
- [[.get_collection()]] - code - rag/test_vector_index.py
- [[A `VectorIndex` with just enough attributes set for `create_and_download_snapsho]] - rationale - rag/test_vector_index.py
- [[A create failure where the collection is genuinely still absent is a REAL error]] - rationale - rag/test_vector_index.py
- [[Fuse two independently-ranked id lists into one score per id, via weighted Recip]] - rationale - contracts/fusion.py
- [[Production code (`ragorchestrator.py`) passes `section_path=` for `kind=summ]] - rationale - rag/test_vector_index.py
- [[Two points share an IDENTICAL `section_path` (so a heading-based sparse signal c]] - rationale - rag/test_vector_index.py
- [[Unit test for contractsfusion.py's rrf_fuse, against synthetic rank inputs — th]] - rationale - contracts/test_fusion.py
- [[Upsert a fixture engineered so ONE document (winner) dominates BOTH signals i]] - rationale - rag/test_vector_index.py
- [[_FakeInfoClient]] - code - rag/test_vector_index.py
- [[_bare_adapter()]] - code - rag/test_vector_index.py
- [[_payload()_2]] - code - rag/test_vector_index.py
- [[_seed_dominant_fixture()]] - code - rag/test_vector_index.py
- [[`--parse-workers N` sharing one fresh collection two workers both pass the exis]] - rationale - rag/test_vector_index.py
- [[`rebuild()` copies payload+vectors verbatim (no re-embedding) -- confirm the new]] - rationale - rag/test_vector_index.py
- [[assert_delete_of_unknown_id_is_a_safe_no_op()]] - code - rag/test_vector_index.py
- [[assert_delete_removes_points()]] - code - rag/test_vector_index.py
- [[assert_filters_by_category()]] - code - rag/test_vector_index.py
- [[assert_filters_by_date_range()]] - code - rag/test_vector_index.py
- [[assert_filters_by_kind()]] - code - rag/test_vector_index.py
- [[assert_rebuild_preserves_sparse_text_signal()]] - code - rag/test_vector_index.py
- [[assert_rebuild_reproduces_results()]] - code - rag/test_vector_index.py
- [[assert_sparse_channel_distinguishes_real_text()]] - code - rag/test_vector_index.py
- [[assert_summary_gets_real_sparse_signal_despite_empty_section_path()]] - code - rag/test_vector_index.py
- [[assert_top1_is_the_dominant_document()]] - code - rag/test_vector_index.py
- [[assert_upsert_search_round_trips_id()]] - code - rag/test_vector_index.py
- [[rrf_fuse()]] - code - contracts/fusion.py
- [[test_changing_hybrid_dense_weight_changes_result_in_expected_direction()]] - code - contracts/test_fusion.py
- [[test_create_and_download_snapshot_downloads_the_created_snapshot()]] - code - rag/test_vector_index.py
- [[test_create_and_download_snapshot_raises_transient_error_on_download_failure()]] - code - rag/test_vector_index.py
- [[test_create_and_download_snapshot_raises_transient_error_when_no_description_returned()]] - code - rag/test_vector_index.py
- [[test_doc_missing_from_one_list_is_excluded_from_that_term_not_given_a_rank()]] - code - contracts/test_fusion.py
- [[test_duplicate_id_within_one_ranked_list_is_a_contract_error()]] - code - contracts/test_fusion.py
- [[test_duplicate_ids_raise_contract_error()]] - code - rag/test_vector_index.py
- [[test_ensure_collection_reraises_when_create_fails_and_collection_still_absent()]] - code - rag/test_vector_index.py
- [[test_ensure_collection_tolerates_concurrent_create_race()]] - code - rag/test_vector_index.py
- [[test_fake_adapter_satisfies_contract()_1]] - code - rag/test_vector_index.py
- [[test_fusion.py]] - code - contracts/test_fusion.py
- [[test_has_idf_modifier_false_when_modifier_unset()]] - code - rag/test_vector_index.py
- [[test_has_idf_modifier_false_when_sparse_config_missing_entirely()]] - code - rag/test_vector_index.py
- [[test_has_idf_modifier_true_when_sparse_field_has_the_idf_modifier()]] - code - rag/test_vector_index.py
- [[test_hybrid_dense_weight_out_of_range_is_a_contract_error()]] - code - contracts/test_fusion.py
- [[test_non_positive_rrf_k_is_a_contract_error()]] - code - contracts/test_fusion.py
- [[test_non_positive_rrf_k_raises_contract_error()]] - code - rag/test_vector_index.py
- [[test_point_count_reads_points_count_off_collection_info()]] - code - rag/test_vector_index.py
- [[test_rank_is_1_indexed()]] - code - rag/test_vector_index.py
- [[test_real_adapter_point_count_and_idf_modifier_reflect_live_collection()]] - code - rag/test_vector_index.py
- [[test_real_adapter_satisfies_contract()_1]] - code - rag/test_vector_index.py
- [[test_real_adapter_sparse_channel_weights_rare_terms_over_common_ones()]] - code - rag/test_vector_index.py
- [[test_result_sorted_descending_by_score_with_deterministic_tiebreak()]] - code - contracts/test_fusion.py
- [[test_rrf_k_is_60()]] - code - contracts/test_fusion.py
- [[test_rrf_k_is_60()_1]] - code - rag/test_vector_index.py
- [[test_single_list_matches_hand_computed_1_indexed_formula()]] - code - contracts/test_fusion.py
- [[test_sparse_vector_params_requests_native_idf_modifier()]] - code - rag/test_vector_index.py
- [[test_sparse_vector_stays_raw_term_frequency_no_client_side_idf()]] - code - rag/test_vector_index.py
- [[test_ties_break_by_id_ascending_deterministically()]] - code - rag/test_vector_index.py
- [[test_union_no_id_dropped()]] - code - rag/test_vector_index.py
- [[test_union_of_both_lists_is_returned_no_id_dropped()]] - code - contracts/test_fusion.py
- [[test_vector_index.py_1]] - code - rag/test_vector_index.py
- [[test_weight_out_of_range_raises_contract_error()]] - code - rag/test_vector_index.py
- [[test_weight_shifts_winner_toward_dense()]] - code - rag/test_vector_index.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_vector_indexpy
SORT file.name ASC
```

## Connections to other communities
- 18 edges to [[_COMMUNITY_SearchFilters]]
- 10 edges to [[_COMMUNITY_ContractError]]
- 5 edges to [[_COMMUNITY_PermanentError]]
- 3 edges to [[_COMMUNITY_FakeVectorStore]]
- 2 edges to [[_COMMUNITY_assembly.py]]
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY___init__.py]]
- 1 edge to [[_COMMUNITY_VectorIndex]]

## Top bridge nodes
- [[test_vector_index.py_1]] - degree 49, connects to 6 communities
- [[rrf_fuse()]] - degree 27, connects to 4 communities
- [[_FakeInfoClient]] - degree 12, connects to 4 communities
- [[test_fusion.py]] - degree 14, connects to 3 communities
- [[_payload()_2]] - degree 14, connects to 1 community