---
type: community
cohesion: 0.11
members: 40
---

# ContractError

**Cohesion:** 0.11 - loosely connected
**Members:** 40 nodes

## Members
- [[.__init__()_19]] - code - app/test_reindex_idf.py
- [[.create_and_download_snapshot()]] - code - app/reindex_idf.py
- [[.create_and_download_snapshot()_2]] - code - app/test_reindex_idf.py
- [[.get_summary()]] - code - rag/document_store.py
- [[.get_summary()_1]] - code - rag/test_retriever.py
- [[.has_idf_modifier()]] - code - app/reindex_idf.py
- [[.has_idf_modifier()_1]] - code - app/test_reindex_idf.py
- [[.point_count()]] - code - app/reindex_idf.py
- [[.point_count()_1]] - code - app/test_reindex_idf.py
- [[.rebuild()]] - code - app/reindex_idf.py
- [[.rebuild()_1]] - code - app/test_reindex_idf.py
- [[A broken invariant — a bug. Crash early; do not default around it.]] - rationale - contracts/errors.py
- [[A real (tiny) SQLite db + blob dir -- what `run_snapshot` needs to actually succ]] - rationale - app/test_reindex_idf.py
- [[ContractError]] - code - contracts/errors.py
- [[Everything this module needs from the vector store adapter -- injected (CONVENTI]] - rationale - app/reindex_idf.py
- [[Fake `VectorIndex` for `run_reindex_idf` pre-set point count  IDF state, `rebu]] - rationale - app/test_reindex_idf.py
- [[Path_10]] - code
- [[Path_17]] - code
- [[Protocol_2]] - code
- [[ReindexableVectorStore]] - code - app/reindex_idf.py
- [[Tests for `app.reindex_idf` (OG-27) -- offline, no real GPUvector-store service]] - rationale - app/test_reindex_idf.py
- [[The full OG-27 flow -- see module docstring for the three safety layers. Returns]] - rationale - app/reindex_idf.py
- [[_FakeVectorIndex]] - code - app/test_reindex_idf.py
- [[_base_config()_1]] - code - app/test_reindex_idf.py
- [[_seeded_sources()]] - code - app/test_reindex_idf.py
- [[_verify_snapshot_present()]] - code - app/reindex_idf.py
- [[`--i-have-a-snapshot` still gets checked, never just trusted a completed (non-`]] - rationale - app/reindex_idf.py
- [[run_reindex_idf()]] - code - app/reindex_idf.py
- [[test_already_has_idf_modifier_is_a_noop_no_rebuild_no_snapshot()]] - code - app/test_reindex_idf.py
- [[test_default_flow_takes_a_fresh_snapshot_before_rebuilding()]] - code - app/test_reindex_idf.py
- [[test_dry_run_reports_and_mutates_nothing()]] - code - app/test_reindex_idf.py
- [[test_dry_run_with_i_have_a_snapshot_still_mutates_nothing_and_skips_verification()]] - code - app/test_reindex_idf.py
- [[test_i_have_a_snapshot_proceeds_when_a_real_snapshot_is_present_and_takes_no_new_one()]] - code - app/test_reindex_idf.py
- [[test_i_have_a_snapshot_refuses_when_no_snapshot_is_actually_present()]] - code - app/test_reindex_idf.py
- [[test_i_have_a_snapshot_refuses_when_snapshot_is_for_a_different_collection()]] - code - app/test_reindex_idf.py
- [[test_idf_modifier_still_missing_after_rebuild_raises()]] - code - app/test_reindex_idf.py
- [[test_point_count_mismatch_after_rebuild_raises_and_does_not_report_success()]] - code - app/test_reindex_idf.py
- [[test_reindex_idf.py]] - code - app/test_reindex_idf.py
- [[test_successful_rebuild_reports_points_preserved_and_idf_set()]] - code - app/test_reindex_idf.py
- [[test_verify_snapshot_present_rejects_a_zero_byte_snapshot_file()]] - code - app/test_reindex_idf.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/ContractError
SORT file.name ASC
```

## Connections to other communities
- 13 edges to [[_COMMUNITY_load_config]]
- 10 edges to [[_COMMUNITY_test_vector_index.py]]
- 6 edges to [[_COMMUNITY_Config]]
- 6 edges to [[_COMMUNITY_test_document_store.py]]
- 5 edges to [[_COMMUNITY_PaperRecord]]
- 4 edges to [[_COMMUNITY_PermanentError]]
- 4 edges to [[_COMMUNITY_PaperRef]]
- 3 edges to [[_COMMUNITY_migrate]]
- 3 edges to [[_COMMUNITY___init__.py]]
- 3 edges to [[_COMMUNITY_TeiEmbedder]]
- 3 edges to [[_COMMUNITY_parser.py]]
- 3 edges to [[_COMMUNITY_FakeVectorStore]]
- 2 edges to [[_COMMUNITY_datetime]]
- 2 edges to [[_COMMUNITY_assembly.py]]
- 2 edges to [[_COMMUNITY_Anchor]]
- 2 edges to [[_COMMUNITY_McpServer]]
- 1 edge to [[_COMMUNITY_SearchFilters]]
- 1 edge to [[_COMMUNITY_GpuLock]]
- 1 edge to [[_COMMUNITY_Figure]]
- 1 edge to [[_COMMUNITY_RetrievalCoverage]]
- 1 edge to [[_COMMUNITY_test_parser.py]]
- 1 edge to [[_COMMUNITY__install_fake_do_parse]]

## Top bridge nodes
- [[ContractError]] - degree 69, connects to 19 communities
- [[test_reindex_idf.py]] - degree 25, connects to 5 communities
- [[run_reindex_idf()]] - degree 23, connects to 3 communities
- [[ReindexableVectorStore]] - degree 10, connects to 2 communities
- [[_seeded_sources()]] - degree 10, connects to 2 communities