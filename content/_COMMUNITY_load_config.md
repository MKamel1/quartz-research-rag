---
type: community
cohesion: 0.12
members: 27
---

# load_config

**Cohesion:** 0.12 - loosely connected
**Members:** 27 nodes

## Members
- [[NOTE no `contextual_header` toggle — it's not built in V0 (PRD ADR-07).]] - rationale - contracts/config.py
- [[Config — the levers, one injected object, never scattered env reads (DATA-CONTRA]] - rationale - contracts/config.py
- [[Locks the parity contractsconfig.py assumes every declared field should have a]] - rationale - rag/test_config.py
- [[Namespace_9]] - code
- [[Path_27]] - code
- [[Read `path` as YAML and construct a validated `Config` from it.      Preconditio]] - rationale - rag/config.py
- [[Sibling test for ragconfig.py (T-F2). Covers the loader reading the real repo-]] - rationale - rag/test_config.py
- [[The `Config` loader (T-F2, CONVENTIONS.md §3) the one place in this codebase al]] - rationale - rag/config.py
- [[_parse_args()_7]] - code - app/reindex_idf.py
- [[`python -m app.reindex_idf` -- OG-27 retrofit the native sparse-vector IDF modi]] - rationale - app/reindex_idf.py
- [[config.py]] - code - contracts/config.py
- [[config.py_1]] - code - rag/config.py
- [[load_config()]] - code - rag/config.py
- [[main()_5]] - code - app/reindex_idf.py
- [[reindex_idf.py]] - code - app/reindex_idf.py
- [[test_config.py_1]] - code - rag/test_config.py
- [[test_config_yaml_has_no_keys_outside_contracts_config_fields()]] - code - rag/test_config.py
- [[test_default_path_uses_cwd()]] - code - rag/test_config.py
- [[test_empty_file_raises_contract_error()]] - code - rag/test_config.py
- [[test_every_contracts_config_field_has_a_config_yaml_key()]] - code - rag/test_config.py
- [[test_loads_real_repo_config()]] - code - rag/test_config.py
- [[test_malformed_yaml_raises()]] - code - rag/test_config.py
- [[test_missing_required_field_raises()]] - code - rag/test_config.py
- [[test_out_of_range_value_raises()]] - code - rag/test_config.py
- [[test_str_path_works()]] - code - rag/test_config.py
- [[test_top_level_list_raises_contract_error()]] - code - rag/test_config.py
- [[test_unknown_key_raises()]] - code - rag/test_config.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/load_config
SORT file.name ASC
```

## Connections to other communities
- 13 edges to [[_COMMUNITY_ContractError]]
- 9 edges to [[_COMMUNITY_datetime]]
- 7 edges to [[_COMMUNITY_Config]]
- 5 edges to [[_COMMUNITY___init__.py]]
- 4 edges to [[_COMMUNITY_assembly.py]]
- 4 edges to [[_COMMUNITY_test_benchmark.py]]
- 4 edges to [[_COMMUNITY_test_doctor.py]]
- 4 edges to [[_COMMUNITY_test_obsidian_export.py]]
- 4 edges to [[_COMMUNITY_test_parse_phase.py]]
- 4 edges to [[_COMMUNITY_prefetch_pdfs.py]]
- 3 edges to [[_COMMUNITY_ingest.py]]
- 3 edges to [[_COMMUNITY_test_harvester_arxiv_source.py]]
- 2 edges to [[_COMMUNITY_test_corpus_integrity.py]]
- 2 edges to [[_COMMUNITY_test_reembed_experiment.py]]
- 2 edges to [[_COMMUNITY_VectorIndex]]
- 2 edges to [[_COMMUNITY_Retrieval Evaluation Tool]]
- 2 edges to [[_COMMUNITY_test_serve.py]]
- 2 edges to [[_COMMUNITY_controller.py]]
- 1 edge to [[_COMMUNITY_test_assembly.py]]
- 1 edge to [[_COMMUNITY_test_ingest.py]]
- 1 edge to [[_COMMUNITY_test_prefetch_pdfs.py]]
- 1 edge to [[_COMMUNITY_Anchor]]
- 1 edge to [[_COMMUNITY_PaperRef]]
- 1 edge to [[_COMMUNITY_test_chunker.py]]
- 1 edge to [[_COMMUNITY_build_ingestion_orchestrator]]
- 1 edge to [[_COMMUNITY_ParsedDoc]]
- 1 edge to [[_COMMUNITY_test_orchestrator.py]]
- 1 edge to [[_COMMUNITY_build_corpus.py]]
- 1 edge to [[_COMMUNITY_server.py]]

## Top bridge nodes
- [[config.py]] - degree 35, connects to 22 communities
- [[config.py_1]] - degree 21, connects to 16 communities
- [[load_config()]] - degree 36, connects to 14 communities
- [[reindex_idf.py]] - degree 17, connects to 5 communities
- [[test_config.py_1]] - degree 18, connects to 3 communities