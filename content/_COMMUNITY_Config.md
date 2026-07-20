---
type: community
cohesion: 0.11
members: 29
---

# Config

**Cohesion:** 0.11 - loosely connected
**Members:** 29 nodes

## Members
- [[.__init__()_30]] - code - rag/chunker.py
- [[.__init__()_46]] - code - rag/orchestrator.py
- [[An explicit caller arg (`--db-path``--blob-dir`) wins; otherwise fall back to t]] - rationale - app/assembly.py
- [[Config]] - code - contracts/config.py
- [[Positive-example fixture for check (d) (cichecksenv_leak.py) — the knob comes]] - rationale - ci/checks/negative_examples/env_leak_good.py
- [[RetrySleep_2]] - code
- [[Sibling test for contractsconfig.py (T-F1 DoD imported by a trivial test; cons]] - rationale - contracts/test_config.py
- [[_resolve_store_paths()]] - code - app/assembly.py
- [[`build_mcp_server` must honor `config.db_path``config.blob_dir` when no explici]] - rationale - app/test_assembly.py
- [[build_mcp_server()]] - code - app/assembly.py
- [[env_leak_good.py]] - code - ci/checks/negative_examples/env_leak_good.py
- [[test_arxiv_filters_accept_explicit_values()]] - code - contracts/test_config.py
- [[test_build_mcp_server_clamps_rerank_pool_size_to_the_rerankers_max_batch_size()]] - code - app/test_assembly.py
- [[test_build_mcp_server_default_k_matches_configs_own_default_top_k()]] - code - app/test_assembly.py
- [[test_build_mcp_server_receives_config_values_not_os_environ()]] - code - app/test_serve.py
- [[test_build_mcp_server_rerank_pool_size_below_the_cap_passes_through_unclamped()]] - code - app/test_assembly.py
- [[test_build_mcp_server_wires_default_k_from_configs_top_k()]] - code - app/test_assembly.py
- [[test_config.py]] - code - contracts/test_config.py
- [[test_constructs_with_only_the_one_required_field_and_documented_v0_defaults()]] - code - contracts/test_config.py
- [[test_focus_area_queries_is_required()]] - code - contracts/test_config.py
- [[test_hybrid_dense_weight_must_be_in_unit_interval()]] - code - contracts/test_config.py
- [[test_ingest_paper_ids_accepts_an_explicit_list()]] - code - contracts/test_config.py
- [[test_is_frozen()]] - code - contracts/test_config.py
- [[test_ordering_accepts_relevance()]] - code - contracts/test_config.py
- [[test_ordering_rejects_unknown_value()]] - code - contracts/test_config.py
- [[test_pdf_cache_dir_accepts_empty_string_to_disable_the_cache()]] - code - contracts/test_config.py
- [[test_resolve_store_paths_falls_back_to_config_not_hardcoded_papers_db()]] - code - app/test_assembly.py
- [[test_wrong_type_raises()_1]] - code - contracts/test_config.py
- [[top_k()]] - code - ci/checks/negative_examples/env_leak_good.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Config
SORT file.name ASC
```

## Connections to other communities
- 13 edges to [[_COMMUNITY_harvest_refs]]
- 13 edges to [[_COMMUNITY_test_ingest.py]]
- 13 edges to [[_COMMUNITY_ParsedDoc]]
- 12 edges to [[_COMMUNITY_build_ingestion_orchestrator]]
- 9 edges to [[_COMMUNITY_test_assembly.py]]
- 9 edges to [[_COMMUNITY_datetime]]
- 8 edges to [[_COMMUNITY_test_benchmark.py]]
- 8 edges to [[_COMMUNITY_test_doctor.py]]
- 8 edges to [[_COMMUNITY_test_parse_phase.py]]
- 7 edges to [[_COMMUNITY_load_config]]
- 6 edges to [[_COMMUNITY_ContractError]]
- 6 edges to [[_COMMUNITY_FakeTeiLifecycle]]
- 6 edges to [[_COMMUNITY_test_orchestrator.py]]
- 5 edges to [[_COMMUNITY_PaperRef]]
- 5 edges to [[_COMMUNITY_PaperRecord]]
- 4 edges to [[_COMMUNITY_assembly.py]]
- 4 edges to [[_COMMUNITY_ingest.py]]
- 4 edges to [[_COMMUNITY_test_obsidian_export.py]]
- 4 edges to [[_COMMUNITY_test_prefetch_pdfs.py]]
- 4 edges to [[_COMMUNITY__build_orchestrator_for_hook_test]]
- 4 edges to [[_COMMUNITY_test_serve.py]]
- 4 edges to [[_COMMUNITY_Anchor]]
- 3 edges to [[_COMMUNITY___init__.py]]
- 3 edges to [[_COMMUNITY_prefetch_pdfs.py]]
- 3 edges to [[_COMMUNITY__StubOrchestrator]]
- 2 edges to [[_COMMUNITY_Retrieval Evaluation Tool]]
- 2 edges to [[_COMMUNITY_prefetch_loop]]
- 2 edges to [[_COMMUNITY_test_chunker.py]]
- 1 edge to [[_COMMUNITY_TeiEmbedder]]
- 1 edge to [[_COMMUNITY_McpServer]]
- 1 edge to [[_COMMUNITY_TeiReranker]]
- 1 edge to [[_COMMUNITY_RetrievalCoverage]]
- 1 edge to [[_COMMUNITY_VectorIndex]]
- 1 edge to [[_COMMUNITY_test_embedder.py]]

## Top bridge nodes
- [[Config]] - degree 172, connects to 28 communities
- [[build_mcp_server()]] - degree 22, connects to 11 communities
- [[_resolve_store_paths()]] - degree 6, connects to 2 communities
- [[test_config.py]] - degree 13, connects to 1 community
- [[test_resolve_store_paths_falls_back_to_config_not_hardcoded_papers_db()]] - degree 4, connects to 1 community