---
source_file: "rag/test_vector_index.py"
type: "code"
community: "test_vector_index.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_vector_indexpy
---

# test_vector_index.py

## Connections
- [[ContractError]] - `imports` [EXTRACTED]
- [[FakeVectorStore]] - `imports` [EXTRACTED]
- [[SearchFilters]] - `imports` [EXTRACTED]
- [[TransientError]] - `imports` [EXTRACTED]
- [[VectorPayload]] - `imports` [EXTRACTED]
- [[_FakeInfoClient]] - `contains` [EXTRACTED]
- [[_bare_adapter()]] - `contains` [EXTRACTED]
- [[_payload()_2]] - `contains` [EXTRACTED]
- [[_seed_dominant_fixture()]] - `contains` [EXTRACTED]
- [[assert_delete_of_unknown_id_is_a_safe_no_op()]] - `indirect_call` [INFERRED]
- [[assert_delete_removes_points()]] - `indirect_call` [INFERRED]
- [[assert_filters_by_category()]] - `indirect_call` [INFERRED]
- [[assert_filters_by_date_range()]] - `indirect_call` [INFERRED]
- [[assert_filters_by_kind()]] - `indirect_call` [INFERRED]
- [[assert_rebuild_preserves_sparse_text_signal()]] - `indirect_call` [INFERRED]
- [[assert_rebuild_reproduces_results()]] - `indirect_call` [INFERRED]
- [[assert_sparse_channel_distinguishes_real_text()]] - `indirect_call` [INFERRED]
- [[assert_summary_gets_real_sparse_signal_despite_empty_section_path()]] - `indirect_call` [INFERRED]
- [[assert_top1_is_the_dominant_document()]] - `indirect_call` [INFERRED]
- [[assert_upsert_search_round_trips_id()]] - `indirect_call` [INFERRED]
- [[datetime]] - `imports_from` [EXTRACTED]
- [[errors.py]] - `imports_from` [EXTRACTED]
- [[fake_vector_store.py]] - `imports_from` [EXTRACTED]
- [[fusion.py]] - `imports_from` [EXTRACTED]
- [[rrf_fuse()]] - `imports` [EXTRACTED]
- [[test_create_and_download_snapshot_downloads_the_created_snapshot()]] - `contains` [EXTRACTED]
- [[test_create_and_download_snapshot_raises_transient_error_on_download_failure()]] - `contains` [EXTRACTED]
- [[test_create_and_download_snapshot_raises_transient_error_when_no_description_returned()]] - `contains` [EXTRACTED]
- [[test_duplicate_ids_raise_contract_error()]] - `contains` [EXTRACTED]
- [[test_ensure_collection_reraises_when_create_fails_and_collection_still_absent()]] - `contains` [EXTRACTED]
- [[test_ensure_collection_tolerates_concurrent_create_race()]] - `contains` [EXTRACTED]
- [[test_fake_adapter_satisfies_contract()_1]] - `contains` [EXTRACTED]
- [[test_has_idf_modifier_false_when_modifier_unset()]] - `contains` [EXTRACTED]
- [[test_has_idf_modifier_false_when_sparse_config_missing_entirely()]] - `contains` [EXTRACTED]
- [[test_has_idf_modifier_true_when_sparse_field_has_the_idf_modifier()]] - `contains` [EXTRACTED]
- [[test_non_positive_rrf_k_raises_contract_error()]] - `contains` [EXTRACTED]
- [[test_point_count_reads_points_count_off_collection_info()]] - `contains` [EXTRACTED]
- [[test_rank_is_1_indexed()]] - `contains` [EXTRACTED]
- [[test_real_adapter_point_count_and_idf_modifier_reflect_live_collection()]] - `contains` [EXTRACTED]
- [[test_real_adapter_satisfies_contract()_1]] - `contains` [EXTRACTED]
- [[test_real_adapter_sparse_channel_weights_rare_terms_over_common_ones()]] - `contains` [EXTRACTED]
- [[test_rrf_k_is_60()_1]] - `contains` [EXTRACTED]
- [[test_sparse_vector_params_requests_native_idf_modifier()]] - `contains` [EXTRACTED]
- [[test_sparse_vector_stays_raw_term_frequency_no_client_side_idf()]] - `contains` [EXTRACTED]
- [[test_ties_break_by_id_ascending_deterministically()]] - `contains` [EXTRACTED]
- [[test_union_no_id_dropped()]] - `contains` [EXTRACTED]
- [[test_weight_out_of_range_raises_contract_error()]] - `contains` [EXTRACTED]
- [[test_weight_shifts_winner_toward_dense()]] - `contains` [EXTRACTED]
- [[vector_index.py]] - `imports_from` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_vector_indexpy