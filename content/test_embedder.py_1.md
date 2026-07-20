---
source_file: "rag/test_embedder.py"
type: "code"
community: "test_embedder.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_embedderpy
---

# test_embedder.py

## Connections
- [[EmbedderInfo_2]] - `imports` [EXTRACTED]
- [[FakeEmbedder]] - `imports` [EXTRACTED]
- [[FakeGpuLock]] - `imports` [EXTRACTED]
- [[FileGpuLock]] - `imports` [EXTRACTED]
- [[PermanentError]] - `imports` [EXTRACTED]
- [[TransientError]] - `imports` [EXTRACTED]
- [[_FakeTeiClient]] - `contains` [EXTRACTED]
- [[_FakeTeiResponse]] - `contains` [EXTRACTED]
- [[_SpyGpuLock]] - `contains` [EXTRACTED]
- [[_build_embedder()]] - `contains` [EXTRACTED]
- [[_build_real_embedder()]] - `contains` [EXTRACTED]
- [[_hash_to_raw_vector()]] - `contains` [EXTRACTED]
- [[_real_embedder_cls()]] - `contains` [EXTRACTED]
- [[assert_deterministic_same_input_same_output()]] - `indirect_call` [INFERRED]
- [[assert_empty_input_gives_empty_output()]] - `indirect_call` [INFERRED]
- [[assert_every_vector_has_length_equal_to_info_dim()]] - `indirect_call` [INFERRED]
- [[assert_info_exposes_model_id_dim_and_version()]] - `indirect_call` [INFERRED]
- [[assert_order_preserving_and_distinct_texts_give_distinct_vectors()]] - `indirect_call` [INFERRED]
- [[assert_output_length_equals_input_length()]] - `indirect_call` [INFERRED]
- [[assert_vectors_are_l2_normalized()]] - `indirect_call` [INFERRED]
- [[embedder.py]] - `imports_from` [EXTRACTED]
- [[errors.py]] - `imports_from` [EXTRACTED]
- [[fake_embedder.py]] - `imports_from` [EXTRACTED]
- [[fake_gpu_lock.py]] - `imports_from` [EXTRACTED]
- [[test_4xx_response_maps_to_permanent_error()_1]] - `contains` [EXTRACTED]
- [[test_5xx_response_maps_to_transient_error()_1]] - `contains` [EXTRACTED]
- [[test_backoff_sleep_happens_with_the_gpu_lock_already_released()]] - `contains` [EXTRACTED]
- [[test_connection_failure_maps_to_transient_error()_1]] - `contains` [EXTRACTED]
- [[test_embed_default_gpu_lock_timeout_is_generous_not_none()]] - `contains` [EXTRACTED]
- [[test_embed_raises_transient_error_when_gpu_lock_is_wedged()]] - `contains` [EXTRACTED]
- [[test_embed_sub_batches_over_the_tei_limit_and_preserves_order()]] - `contains` [EXTRACTED]
- [[test_fake_adapter_satisfies_contract()]] - `contains` [EXTRACTED]
- [[test_permanent_error_is_never_retried()]] - `contains` [EXTRACTED]
- [[test_real_adapter_satisfies_contract()]] - `contains` [EXTRACTED]
- [[test_real_embedder_acquires_the_embed_gpu_lock()]] - `contains` [EXTRACTED]
- [[test_retries_exhausted_still_raises_transient_error()]] - `contains` [EXTRACTED]
- [[test_transient_then_success_is_recovered_with_backoff()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_embedderpy