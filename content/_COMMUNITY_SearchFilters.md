---
type: community
cohesion: 0.09
members: 44
---

# SearchFilters

**Cohesion:** 0.09 - loosely connected
**Members:** 44 nodes

## Members
- [[._cosine()]] - code - rag/fakes/fake_vector_store.py
- [[._passes_filters()]] - code - rag/fakes/fake_vector_store.py
- [[._token_overlap_score()]] - code - rag/fakes/fake_vector_store.py
- [[.hybrid_search()]] - code - rag/fakes/fake_vector_store.py
- [[.upsert()_1]] - code - rag/fakes/fake_vector_store.py
- [[FakeVectorStore — the in-memory `VectorStore``VectorIndex` adapter that powers]] - rationale - rag/fakes/fake_vector_store.py
- [[Filter]] - code
- [[Hit]] - code - contracts/vector_index.py
- [[M6 VectorIndex (DATA-CONTRACTS.md M6 VectorIndex).  `VectorIndex`'s own interf]] - rationale - contracts/vector_index.py
- [[M6 VectorIndex (T-D2) — Qdrant adapter behind `VectorStore` (ARCHITECTURE.md §M6]] - rationale - rag/vector_index.py
- [[RRF fusion (DATA-CONTRACTS.md M6 VectorIndex — RRF fusion formula (frozen)).]] - rationale - contracts/fusion.py
- [[Replaces an untyped `filters dict` — the one hot-path shape that was crossing t]] - rationale - contracts/vector_index.py
- [[SearchFilters]] - code - contracts/vector_index.py
- [[Sibling test for contractsvector_index.py (T-F1 DoD imported by a trivial test]] - rationale - contracts/test_vector_index.py
- [[Stored beside each vector. A plain `TypedDict` (not a `FrozenModel`) on purpose]] - rationale - contracts/vector_index.py
- [[Tests for FakeVectorStore (T-F4) — round-trip, shared rrf_fuse formula, and filt]] - rationale - rag/fakes/test_fake_vector_store.py
- [[TypedDict]] - code
- [[Vector_3]] - code
- [[VectorPayload]] - code - contracts/vector_index.py
- [[_payload()]] - code - rag/fakes/test_fake_vector_store.py
- [[_qdrant_filter()]] - code - rag/vector_index.py
- [[fake_vector_store.py]] - code - rag/fakes/fake_vector_store.py
- [[fusion.py]] - code - contracts/fusion.py
- [[test_delete_of_unknown_id_does_not_raise()]] - code - rag/fakes/test_fake_vector_store.py
- [[test_delete_removes_the_point_and_leaves_others()]] - code - rag/fakes/test_fake_vector_store.py
- [[test_fake_vector_store.py]] - code - rag/fakes/test_fake_vector_store.py
- [[test_filters_restrict_by_category()]] - code - rag/fakes/test_fake_vector_store.py
- [[test_filters_restrict_by_kind()]] - code - rag/fakes/test_fake_vector_store.py
- [[test_filters_restrict_by_published_date_range()]] - code - rag/fakes/test_fake_vector_store.py
- [[test_fused_score_matches_calling_rrf_fuse_directly()]] - code - rag/fakes/test_fake_vector_store.py
- [[test_hit_constructs_with_valid_fields()]] - code - contracts/test_vector_index.py
- [[test_hit_kind_must_be_a_valid_literal()]] - code - contracts/test_vector_index.py
- [[test_hit_wrong_type_raises()]] - code - contracts/test_vector_index.py
- [[test_rebuild_does_not_crash()]] - code - rag/fakes/test_fake_vector_store.py
- [[test_search_filters_all_fields_optional_and_default_to_none()]] - code - contracts/test_vector_index.py
- [[test_search_filters_constructs_with_explicit_values()]] - code - contracts/test_vector_index.py
- [[test_search_filters_wrong_type_raises()]] - code - contracts/test_vector_index.py
- [[test_sparse_channel_distinguishes_real_content_not_just_heading()]] - code - rag/fakes/test_fake_vector_store.py
- [[test_summary_payload_gets_real_sparse_signal_even_with_empty_section_path()]] - code - rag/fakes/test_fake_vector_store.py
- [[test_upsert_and_hybrid_search_round_trips_id()]] - code - rag/fakes/test_fake_vector_store.py
- [[test_vector_index.py]] - code - contracts/test_vector_index.py
- [[test_vector_payload_is_a_plain_dict_shape()]] - code - contracts/test_vector_index.py
- [[vector_index.py]] - code - contracts/vector_index.py
- [[vector_index.py_1]] - code - rag/vector_index.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/SearchFilters
SORT file.name ASC
```

## Connections to other communities
- 26 edges to [[_COMMUNITY_FakeVectorStore]]
- 18 edges to [[_COMMUNITY___init__.py]]
- 18 edges to [[_COMMUNITY_test_vector_index.py]]
- 11 edges to [[_COMMUNITY_test_reembed_experiment.py]]
- 11 edges to [[_COMMUNITY_VectorIndex]]
- 5 edges to [[_COMMUNITY_test_serve.py]]
- 4 edges to [[_COMMUNITY_RetrievalCoverage]]
- 3 edges to [[_COMMUNITY_assembly.py]]
- 3 edges to [[_COMMUNITY_McpServer]]
- 2 edges to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY_test_embedder.py]]
- 1 edge to [[_COMMUNITY_PermanentError]]
- 1 edge to [[_COMMUNITY_ContractError]]
- 1 edge to [[_COMMUNITY_server.py]]
- 1 edge to [[_COMMUNITY_test_server.py]]
- 1 edge to [[_COMMUNITY_ParsedDoc]]
- 1 edge to [[_COMMUNITY_test_orchestrator.py]]
- 1 edge to [[_COMMUNITY_ARCHITECTURE]]
- 1 edge to [[_COMMUNITY_ADR-01 Vector database — Qdrant]]

## Top bridge nodes
- [[vector_index.py]] - degree 21, connects to 8 communities
- [[SearchFilters]] - degree 45, connects to 7 communities
- [[vector_index.py_1]] - degree 18, connects to 7 communities
- [[fake_vector_store.py]] - degree 15, connects to 6 communities
- [[VectorPayload]] - degree 26, connects to 5 communities