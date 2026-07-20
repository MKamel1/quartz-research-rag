---
type: community
cohesion: 0.06
members: 53
---

# test_embedder.py

**Cohesion:** 0.06 - loosely connected
**Members:** 53 nodes

## Members
- [[.__init__()_53]] - code - rag/test_embedder.py
- [[.__init__()_52]] - code - rag/test_embedder.py
- [[.__init__()_54]] - code - rag/test_embedder.py
- [[._ctx()]] - code - rag/test_embedder.py
- [[.acquire()_4]] - code - rag/test_embedder.py
- [[.harvest()_1]] - code - app/test_ingest.py
- [[.json()]] - code - rag/test_embedder.py
- [[.post()]] - code - rag/test_embedder.py
- [[.raise_for_status()]] - code - rag/test_embedder.py
- [[Construct the real adapter injecting `FakeGpuLock` for `gpu_lock` (frozen param]] - rationale - rag/test_embedder.py
- [[EmbedderInfo_2]] - code - contracts/embedder.py
- [[FakeEmbedder — the default `Embedder` dependency for every zero-GPU test (T-F4).]] - rationale - rag/fakes/fake_embedder.py
- [[M4 Embedder output (DATA-CONTRACTS.md M4 Embedder output).  `Embedder.embed(te]] - rationale - contracts/embedder.py
- [[Records whether the lock is currently held (entered but not yet exited) -- prove]] - rationale - rag/test_embedder.py
- [[Returns no refs -- `finish_phase()`'s per-paper loop is irrelevant to this bug (]] - rationale - app/test_ingest.py
- [[Sibling test for contractsembedder.py (T-F1 DoD imported by a trivial test; co]] - rationale - contracts/test_embedder.py
- [[Stand-in for `httpx.Client`. Records the size of every POSTed batch (so a test c]] - rationale - rag/test_embedder.py
- [[StubHarvester]] - code - app/test_ingest.py
- [[The real GPU-bound adapter in rag.embedder — the class T-F6's gpu_lock check (f)]] - rationale - rag/test_embedder.py
- [[_FakeTeiClient]] - code - rag/test_embedder.py
- [[_FakeTeiResponse]] - code - rag/test_embedder.py
- [[_SpyGpuLock]] - code - rag/test_embedder.py
- [[_build_embedder()]] - code - rag/test_embedder.py
- [[_build_real_embedder()]] - code - rag/test_embedder.py
- [[_hash_to_raw_vector()]] - code - rag/test_embedder.py
- [[_real_embedder_cls()]] - code - rag/test_embedder.py
- [[assert_deterministic_same_input_same_output()]] - code - rag/test_embedder.py
- [[assert_empty_input_gives_empty_output()]] - code - rag/test_embedder.py
- [[assert_every_vector_has_length_equal_to_info_dim()]] - code - rag/test_embedder.py
- [[assert_info_exposes_model_id_dim_and_version()]] - code - rag/test_embedder.py
- [[assert_order_preserving_and_distinct_texts_give_distinct_vectors()]] - code - rag/test_embedder.py
- [[assert_output_length_equals_input_length()]] - code - rag/test_embedder.py
- [[assert_vectors_are_l2_normalized()]] - code - rag/test_embedder.py
- [[embedder.py]] - code - contracts/embedder.py
- [[fake_embedder.py]] - code - rag/fakes/fake_embedder.py
- [[test_4xx_response_maps_to_permanent_error()_1]] - code - rag/test_embedder.py
- [[test_5xx_response_maps_to_transient_error()_1]] - code - rag/test_embedder.py
- [[test_backoff_sleep_happens_with_the_gpu_lock_already_released()]] - code - rag/test_embedder.py
- [[test_connection_failure_maps_to_transient_error()_1]] - code - rag/test_embedder.py
- [[test_constructs_with_valid_fields()]] - code - contracts/test_embedder.py
- [[test_dim_must_be_positive()]] - code - contracts/test_embedder.py
- [[test_embed_default_gpu_lock_timeout_is_generous_not_none()]] - code - rag/test_embedder.py
- [[test_embed_raises_transient_error_when_gpu_lock_is_wedged()]] - code - rag/test_embedder.py
- [[test_embed_sub_batches_over_the_tei_limit_and_preserves_order()]] - code - rag/test_embedder.py
- [[test_embedder.py]] - code - contracts/test_embedder.py
- [[test_embedder.py_1]] - code - rag/test_embedder.py
- [[test_fake_adapter_satisfies_contract()]] - code - rag/test_embedder.py
- [[test_permanent_error_is_never_retried()]] - code - rag/test_embedder.py
- [[test_real_adapter_satisfies_contract()]] - code - rag/test_embedder.py
- [[test_real_embedder_acquires_the_embed_gpu_lock()]] - code - rag/test_embedder.py
- [[test_retries_exhausted_still_raises_transient_error()]] - code - rag/test_embedder.py
- [[test_transient_then_success_is_recovered_with_backoff()]] - code - rag/test_embedder.py
- [[test_wrong_type_raises()_3]] - code - contracts/test_embedder.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_embedderpy
SORT file.name ASC
```

## Connections to other communities
- 16 edges to [[_COMMUNITY_PermanentError]]
- 16 edges to [[_COMMUNITY_FakeGpuLock]]
- 9 edges to [[_COMMUNITY_FakeVectorStore]]
- 8 edges to [[_COMMUNITY_test_reembed_experiment.py]]
- 5 edges to [[_COMMUNITY_assembly.py]]
- 5 edges to [[_COMMUNITY___init__.py]]
- 4 edges to [[_COMMUNITY_PaperRef]]
- 4 edges to [[_COMMUNITY_test_ingest.py]]
- 4 edges to [[_COMMUNITY_FakeTeiLifecycle]]
- 2 edges to [[_COMMUNITY_test_orchestrator.py]]
- 2 edges to [[_COMMUNITY_GpuLock]]
- 1 edge to [[_COMMUNITY_Config]]
- 1 edge to [[_COMMUNITY_SearchFilters]]
- 1 edge to [[_COMMUNITY_TeiEmbedder]]
- 1 edge to [[_COMMUNITY_ParsedDoc]]

## Top bridge nodes
- [[EmbedderInfo_2]] - degree 32, connects to 9 communities
- [[StubHarvester]] - degree 11, connects to 7 communities
- [[embedder.py]] - degree 13, connects to 6 communities
- [[test_embedder.py_1]] - degree 37, connects to 4 communities
- [[fake_embedder.py]] - degree 10, connects to 4 communities