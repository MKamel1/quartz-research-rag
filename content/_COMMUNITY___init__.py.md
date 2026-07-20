---
type: community
cohesion: 0.07
members: 62
---

# __init__.py

**Cohesion:** 0.07 - loosely connected
**Members:** 62 nodes

## Members
- [[Base class for every dataclass-equivalent shape in `contracts`. See module docs]] - rationale - contracts/_base.py
- [[BaseModel]] - code
- [[Citation]] - code - contracts/retriever.py
- [[Coverage]] - code - contracts/mcp_server.py
- [[Fetch a stored paper's summary view by id.]] - rationale - app/serve.py
- [[FrozenModel]] - code - contracts/_base.py
- [[GroundedResult]] - code - contracts/retriever.py
- [[How big was the haystack behind a top-k sample. Not used by `get_paper``get_spa]] - rationale - contracts/mcp_server.py
- [[Let a `list` through as a `tuple` before pydantic's `strict=True` tuple check ru]] - rationale - contracts/provenance.py
- [[M7 Retriever (T-E1) — the crown-jewel deep module two methods sharing one inter]] - rationale - rag/retriever.py
- [[M7 Retriever output — the envelope, frozen shape, forward-compatible to V2 (DATA]] - rationale - contracts/retriever.py
- [[M8 McpServer (T-E2) — the protocol edge, acceptably thin. Full design intent AR]] - rationale - rag/mcp_server.py
- [[M8 McpServer — response envelope (DATA-CONTRACTS.md M8 McpServer — response env]] - rationale - contracts/mcp_server.py
- [[Namespace_11]] - code
- [[PaperSearchResponse]] - code - contracts/mcp_server.py
- [[PaperSearchResult]] - code - contracts/mcp_server.py
- [[PaperSummaryView]] - code - contracts/mcp_server.py
- [[Passage-level retrieval envelope, grounded and forward-compatible to V1V2. `pas]] - rationale - contracts/retriever.py
- [[Passage-level search over the ingested corpus. Returns cited, grounded passages]] - rationale - app/serve.py
- [[Provenance & structure (DATA-CONTRACTS.md Provenance & structure) — the shapes]] - rationale - contracts/provenance.py
- [[Resolve an `Anchor` (from a prior search result's `.anchor`) back to the full ve]] - rationale - app/serve.py
- [[SearchResponse]] - code - contracts/mcp_server.py
- [[Shared pydantic base for every frozen shape in `contracts`.  DATA-CONTRACTS]] - rationale - contracts/_base.py
- [[Shared pytest fixtures for `contracts`'s sibling test files.  Design-review fin]] - rationale - contracts/conftest.py
- [[Sibling test for contractsmcp_server.py (T-F1 DoD imported by a trivial test;]] - rationale - contracts/test_mcp_server.py
- [[Whole-papersummary-level search over the ingested corpus. `k` left unset uses t]] - rationale - app/serve.py
- [[__init__.py_4]] - code - contracts/__init__.py
- [[_base.py]] - code - contracts/_base.py
- [[_coerce_bbox_sequence()]] - code - contracts/provenance.py
- [[_parse_args()_9]] - code - app/serve.py
- [[`get_paper`'s return shape — named here instead of left as prose so it isn't rei]] - rationale - contracts/mcp_server.py
- [[`python -m app.serve` — the real McpServer composition root, wrapped in a real M]] - rationale - app/serve.py
- [[`search_papers`'s per-item shape — a whole-papersummary-level match from     `R]] - rationale - contracts/mcp_server.py
- [[`search_papers`'s return shape — mirrors `SearchResponse` for whole-paper result]] - rationale - contracts/mcp_server.py
- [[`semantic_search`'s return shape — results plus a typed `Coverage`, not a bare]] - rationale - contracts/mcp_server.py
- [[conftest.py]] - code - contracts/conftest.py
- [[contracts — frozen shared types (T-F1, Owner F).  Every dataclassTypedDictprot]] - rationale - contracts/__init__.py
- [[get_paper()]] - code - app/serve.py
- [[get_span()]] - code - app/serve.py
- [[make_anchor()]] - code - contracts/conftest.py
- [[make_block()_1]] - code - contracts/conftest.py
- [[make_chunk()]] - code - contracts/conftest.py
- [[make_citation()]] - code - contracts/conftest.py
- [[make_paper_record()_1]] - code - contracts/conftest.py
- [[make_paper_ref()_1]] - code - contracts/conftest.py
- [[make_paper_summary_view()]] - code - contracts/conftest.py
- [[make_parsed_doc()]] - code - contracts/conftest.py
- [[mcp_server.py]] - code - contracts/mcp_server.py
- [[mcp_server.py_1]] - code - rag/mcp_server.py
- [[provenance.py]] - code - contracts/provenance.py
- [[retriever.py]] - code - contracts/retriever.py
- [[retriever.py_1]] - code - rag/retriever.py
- [[search_papers()]] - code - app/serve.py
- [[semantic_search()]] - code - app/serve.py
- [[serve.py]] - code - app/serve.py
- [[test_coverage_constructs_and_rejects_negative_counts()]] - code - contracts/test_mcp_server.py
- [[test_mcp_server.py]] - code - contracts/test_mcp_server.py
- [[test_paper_search_response_wraps_paper_search_results_and_coverage()]] - code - contracts/test_mcp_server.py
- [[test_paper_summary_view_constructs()]] - code - contracts/test_mcp_server.py
- [[test_search_response_wraps_results_and_coverage()]] - code - contracts/test_mcp_server.py
- [[test_wrong_type_raises()_6]] - code - contracts/test_mcp_server.py
- [[valid_bbox()]] - code - contracts/conftest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/__init__py
SORT file.name ASC
```

## Connections to other communities
- 31 edges to [[_COMMUNITY_test_mcp_server.py]]
- 29 edges to [[_COMMUNITY_Anchor]]
- 18 edges to [[_COMMUNITY_SearchFilters]]
- 15 edges to [[_COMMUNITY_RetrievalCoverage]]
- 12 edges to [[_COMMUNITY_ParsedDoc]]
- 11 edges to [[_COMMUNITY_test_serve.py]]
- 11 edges to [[_COMMUNITY_McpServer]]
- 8 edges to [[_COMMUNITY_Retrieval Evaluation Tool]]
- 8 edges to [[_COMMUNITY_test_orchestrator.py]]
- 8 edges to [[_COMMUNITY_FakeVectorStore]]
- 7 edges to [[_COMMUNITY_TeiReranker]]
- 6 edges to [[_COMMUNITY_assembly.py]]
- 6 edges to [[_COMMUNITY_Figure]]
- 5 edges to [[_COMMUNITY_load_config]]
- 5 edges to [[_COMMUNITY_test_embedder.py]]
- 3 edges to [[_COMMUNITY_Config]]
- 3 edges to [[_COMMUNITY_PaperRecord]]
- 3 edges to [[_COMMUNITY_ContractError]]
- 3 edges to [[_COMMUNITY_PaperRef]]
- 3 edges to [[_COMMUNITY_test_retriever.py]]
- 3 edges to [[_COMMUNITY_test_server.py]]
- 2 edges to [[_COMMUNITY_PermanentError]]
- 2 edges to [[_COMMUNITY_GpuLock]]
- 2 edges to [[_COMMUNITY_test_document_store.py]]
- 2 edges to [[_COMMUNITY_ADR-12 Knowledge representation — claim-centric]]
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY_test_obsidian_export.py]]
- 1 edge to [[_COMMUNITY_test_reembed_experiment.py]]
- 1 edge to [[_COMMUNITY_test_vector_index.py]]
- 1 edge to [[_COMMUNITY_parser.py]]
- 1 edge to [[_COMMUNITY_test_chunker.py]]
- 1 edge to [[_COMMUNITY_test_parser.py]]
- 1 edge to [[_COMMUNITY_test_summarizer.py]]
- 1 edge to [[_COMMUNITY_test_fake_reranker.py]]
- 1 edge to [[_COMMUNITY_server.py]]

## Top bridge nodes
- [[__init__.py_4]] - degree 44, connects to 16 communities
- [[provenance.py]] - degree 29, connects to 14 communities
- [[FrozenModel]] - degree 39, connects to 12 communities
- [[retriever.py]] - degree 25, connects to 10 communities
- [[mcp_server.py_1]] - degree 18, connects to 7 communities