---
type: community
cohesion: 0.10
members: 72
---

# FakeVectorStore

**Cohesion:** 0.10 - loosely connected
**Members:** 72 nodes

## Members
- [[.__init__()_34]] - code - rag/fakes/fake_embedder.py
- [[.__init__()_37]] - code - rag/fakes/fake_reranker.py
- [[.__init__()_40]] - code - rag/fakes/fake_vector_store.py
- [[.__init__()_77]] - code - rag/test_retriever.py
- [[.args_for()]] - code - rag/test_retriever.py
- [[.delete()_1]] - code - rag/fakes/fake_vector_store.py
- [[.get_span()_4]] - code - rag/test_retriever.py
- [[.info()_2]] - code - rag/fakes/fake_embedder.py
- [[.method_names()_1]] - code - rag/test_retriever.py
- [[.rebuild()_2]] - code - rag/fakes/fake_vector_store.py
- [[A vector-store hit with NO backing DocumentStore chunk row AT ALL -- the OG-482]] - rationale - rag/test_retriever.py
- [[Brute-force in-memory dense+sparse hybrid search, fused via the shared `rrf_fuse]] - rationale - rag/fakes/fake_vector_store.py
- [[Deterministic hash - unit vector. No model, no GPU, no randomness across runs]] - rationale - rag/fakes/fake_embedder.py
- [[Deterministic, non-identity reverses `candidates`. Records every call into `.ca]] - rationale - rag/fakes/fake_reranker.py
- [[EmbedderInfo_4]] - code
- [[FakeEmbedder]] - code - rag/fakes/fake_embedder.py
- [[FakeReranker]] - code - rag/fakes/fake_reranker.py
- [[FakeVectorStore]] - code - rag/fakes/fake_vector_store.py
- [[No-op a fake has no persistent staleness to fix (there's no `DocumentStore`]] - rationale - rag/fakes/fake_vector_store.py
- [[RecordingDocStore_1]] - code - rag/test_retriever.py
- [[Seed one chunk into both the vector store and the doc store. `extra_blocks` lets]] - rationale - rag/test_retriever.py
- [[T-DOC40 mirrors the real adapter's by-id delete. Idempotent -- an id with no ma]] - rationale - rag/fakes/fake_vector_store.py
- [[Tests for FakeEmbedder (T-F4) — determinism, distinctness, normalization, and di]] - rationale - rag/fakes/test_fake_embedder.py
- [[Three chunks, one per paper, distinct textssection_paths - a non-trivial RRF o]] - rationale - rag/test_retriever.py
- [[__init__.py_6]] - code - rag/fakes/__init__.py
- [[_make_ref()_5]] - code - rag/test_retriever.py
- [[_make_retriever()]] - code - rag/test_retriever.py
- [[_payload()_1]] - code - rag/test_retriever.py
- [[_rrf_hits()]] - code - rag/test_retriever.py
- [[_seed_chunk()]] - code - rag/test_retriever.py
- [[_seed_orphan_chunk_vector_point()]] - code - rag/test_retriever.py
- [[_seed_orphan_summary_vector_point()]] - code - rag/test_retriever.py
- [[_seed_summary()]] - code - rag/test_retriever.py
- [[_seed_three_chunks()]] - code - rag/test_retriever.py
- [[rag.fakes — deterministic, zero-GPU, zero-network stand-ins for every real adapt]] - rationale - rag/fakes/__init__.py
- [[test_both_methods_use_the_same_injected_reranker()]] - code - rag/test_retriever.py
- [[test_different_texts_yield_different_vectors()]] - code - rag/fakes/test_fake_embedder.py
- [[test_embed_is_order_preserving()]] - code - rag/fakes/test_fake_embedder.py
- [[test_fake_embedder.py]] - code - rag/fakes/test_fake_embedder.py
- [[test_info_reflects_constructor_args()]] - code - rag/fakes/test_fake_embedder.py
- [[test_output_is_l2_normalized()]] - code - rag/fakes/test_fake_embedder.py
- [[test_output_length_matches_configured_dim()]] - code - rag/fakes/test_fake_embedder.py
- [[test_paper_id_from_summary_hit_id_parses_frozen_format()]] - code - rag/test_retriever.py
- [[test_retrieve_all_hits_unresolvable_returns_empty_not_error()]] - code - rag/test_retriever.py
- [[test_retrieve_empty_corpus_returns_empty_list()]] - code - rag/test_retriever.py
- [[test_retrieve_evidence_tier_is_pinned_A()]] - code - rag/test_retriever.py
- [[test_retrieve_filters_is_searchfilters_not_dict()]] - code - rag/test_retriever.py
- [[test_retrieve_multiblock_chunk_passage_covers_all_blocks()]] - code - rag/test_retriever.py
- [[test_retrieve_papers_all_hits_unresolvable_returns_empty_not_error()]] - code - rag/test_retriever.py
- [[test_retrieve_papers_coverage_candidate_count_is_true_pool_not_returned_count()]] - code - rag/test_retriever.py
- [[test_retrieve_papers_empty_corpus_returns_empty_list()]] - code - rag/test_retriever.py
- [[test_retrieve_papers_pool_size_grows_past_32_when_k_exceeds_it()]] - code - rag/test_retriever.py
- [[test_retrieve_papers_rerank_wiring_is_its_own_assertion()]] - code - rag/test_retriever.py
- [[test_retrieve_papers_resolves_via_get_summary_and_get_spy()]] - code - rag/test_retriever.py
- [[test_retrieve_papers_restricts_to_summary_kind()]] - code - rag/test_retriever.py
- [[test_retrieve_papers_returns_unanchored_paper_search_results()]] - code - rag/test_retriever.py
- [[test_retrieve_papers_skips_hit_with_no_backing_summary_row_at_all()]] - code - rag/test_retriever.py
- [[test_retrieve_papers_skips_unresolvable_hit_and_returns_remaining_results()]] - code - rag/test_retriever.py
- [[test_retrieve_passage_text_equals_resolved_chunk_text()]] - code - rag/test_retriever.py
- [[test_retrieve_pool_size_default_is_unchanged_when_not_passed()]] - code - rag/test_retriever.py
- [[test_retrieve_pool_size_grows_past_32_when_k_exceeds_it()]] - code - rag/test_retriever.py
- [[test_retrieve_pool_size_honors_a_custom_rerank_pool_size_constructor_arg()]] - code - rag/test_retriever.py
- [[test_retrieve_pool_size_lets_reranker_promote_a_passage_ranked_below_k()]] - code - rag/test_retriever.py
- [[test_retrieve_rerank_wiring_is_its_own_assertion()]] - code - rag/test_retriever.py
- [[test_retrieve_resolves_via_get_chunk_and_get_block_spy()]] - code - rag/test_retriever.py
- [[test_retrieve_restricts_to_chunk_kind()]] - code - rag/test_retriever.py
- [[test_retrieve_results_are_grounded()]] - code - rag/test_retriever.py
- [[test_retrieve_score_is_prerank_rrf_score()]] - code - rag/test_retriever.py
- [[test_retrieve_skips_hit_with_no_backing_chunk_row_at_all()]] - code - rag/test_retriever.py
- [[test_retrieve_skips_unresolvable_hit_and_returns_remaining_results()]] - code - rag/test_retriever.py
- [[test_retriever.py_1]] - code - rag/test_retriever.py
- [[test_same_text_yields_same_vector()]] - code - rag/fakes/test_fake_embedder.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/FakeVectorStore
SORT file.name ASC
```

## Connections to other communities
- 37 edges to [[_COMMUNITY_ParsedDoc]]
- 26 edges to [[_COMMUNITY_SearchFilters]]
- 22 edges to [[_COMMUNITY_test_reembed_experiment.py]]
- 13 edges to [[_COMMUNITY_Anchor]]
- 13 edges to [[_COMMUNITY_test_orchestrator.py]]
- 11 edges to [[_COMMUNITY_PaperRecord]]
- 9 edges to [[_COMMUNITY_test_embedder.py]]
- 8 edges to [[_COMMUNITY___init__.py]]
- 6 edges to [[_COMMUNITY_test_fake_reranker.py]]
- 4 edges to [[_COMMUNITY_TeiReranker]]
- 4 edges to [[_COMMUNITY_RetrievalCoverage]]
- 3 edges to [[_COMMUNITY_ContractError]]
- 3 edges to [[_COMMUNITY_PaperRef]]
- 3 edges to [[_COMMUNITY_test_vector_index.py]]
- 2 edges to [[_COMMUNITY_FakeGpuLock]]
- 2 edges to [[_COMMUNITY_.embed]]
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY_assembly.py]]
- 1 edge to [[_COMMUNITY_PermanentError]]
- 1 edge to [[_COMMUNITY_FakeSource]]

## Top bridge nodes
- [[test_retriever.py_1]] - degree 62, connects to 10 communities
- [[RecordingDocStore_1]] - degree 49, connects to 8 communities
- [[__init__.py_6]] - degree 15, connects to 8 communities
- [[FakeVectorStore]] - degree 90, connects to 7 communities
- [[FakeEmbedder]] - degree 81, connects to 7 communities