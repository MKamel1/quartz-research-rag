---
type: community
cohesion: 0.08
members: 44
---

# Anchor

**Cohesion:** 0.08 - loosely connected
**Members:** 44 nodes

## Members
- [[.__init__()_75]] - code - rag/test_orchestrator.py
- [[._build_chunk()]] - code - rag/chunker.py
- [[._group_blocks()]] - code - rag/chunker.py
- [[._split_oversized()]] - code - rag/chunker.py
- [[.chunk()]] - code - rag/chunker.py
- [[.chunk()_2]] - code - rag/test_orchestrator.py
- [[.get_chunk()_1]] - code - rag/test_retriever.py
- [[.parse_batch()_2]] - code - rag/test_orchestrator.py
- [[.prefetch_next_batch()_1]] - code - rag/test_orchestrator.py
- [[Anchor]] - code - contracts/provenance.py
- [[Chunk]] - code - contracts/chunker.py
- [[Chunker]] - code - rag/chunker.py
- [[Chunker (M3) — see `contractschunker.py` for the `Chunk` shape (do not re-deriv]] - rationale - rag/chunker.py
- [[Drop `text`'s leading line if it duplicates `section_path` (whitespace-normalize]] - rationale - rag/chunker.py
- [[First H1 line (` Title`) in the doc's markdown. ` ` (single hash) only — ` S]] - rationale - rag/chunker.py
- [[First ~200 chars of `text`, truncated at the nearest preceding word boundary, ve]] - rationale - rag/chunker.py
- [[M2 Parser output (DATA-CONTRACTS.md M2 Parser output).  `Parser.parse(raw, pap]] - rationale - contracts/parser.py
- [[M3 Chunker output (DATA-CONTRACTS.md M3 Chunker output).]] - rationale - contracts/chunker.py
- [[M5 DocumentStore (T-D1) — SQLite + blob filesystem, the source of truth (ARCHITE]] - rationale - rag/document_store.py
- [[M5 DocumentStore — what `put` persists (DATA-CONTRACTS.md M5 DocumentStore — wh]] - rationale - contracts/document_store.py
- [[Sibling test for contractschunker.py (T-F1 DoD imported by a trivial test; con]] - rationale - contracts/test_chunker.py
- [[Splits a `_group_blocks` group once it exceeds `_MAX_CHUNK_WORDS`, in reading or]] - rationale - rag/chunker.py
- [[SpyBatchParserWithPrefetch]] - code - rag/test_orchestrator.py
- [[What grounds any retrievable item to its source. No anchor - the item is invali]] - rationale - contracts/provenance.py
- [[_extract_title()]] - code - rag/chunker.py
- [[_make_chunk()]] - code - app/test_reembed_experiment.py
- [[_snippet()]] - code - rag/chunker.py
- [[_strip_duplicate_heading()]] - code - rag/chunker.py
- [[`SpyBatchParser` plus the optional `prefetch_next_batch` hook (T-DOC18 Layer 2,]] - rationale - rag/test_orchestrator.py
- [[`child_parent_expansion=False` - one `Chunk` per `Block` (DATA-CONTRACTS §M3).]] - rationale - rag/chunker.py
- [[`chunk(ParsedDoc) - listChunk` (ARCHITECTURE §M3 frozen interface).]] - rationale - rag/chunker.py
- [[`contextual_header` is a V1 feature, not a V0 toggle — do not populate it in V0.]] - rationale - contracts/chunker.py
- [[chunker.py]] - code - contracts/chunker.py
- [[chunker.py_1]] - code - rag/chunker.py
- [[document_store.py]] - code - contracts/document_store.py
- [[document_store.py_1]] - code - rag/document_store.py
- [[make_chunk()_2]] - code - rag/test_orchestrator.py
- [[parser.py]] - code - contracts/parser.py
- [[test_chunker.py]] - code - contracts/test_chunker.py
- [[test_constructs_with_required_fields_and_contextual_header_defaults_to_none()]] - code - contracts/test_chunker.py
- [[test_omitting_parent_id_entirely_raises()]] - code - contracts/test_chunker.py
- [[test_parent_id_is_required_but_may_be_explicitly_none()]] - code - contracts/test_chunker.py
- [[test_parse_phase_prefetch_excludes_refs_already_parsed_or_further_along()]] - code - rag/test_orchestrator.py
- [[test_wrong_type_raises()]] - code - contracts/test_chunker.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Anchor
SORT file.name ASC
```

## Connections to other communities
- 50 edges to [[_COMMUNITY_ParsedDoc]]
- 29 edges to [[_COMMUNITY___init__.py]]
- 29 edges to [[_COMMUNITY_test_orchestrator.py]]
- 18 edges to [[_COMMUNITY_PaperRecord]]
- 16 edges to [[_COMMUNITY_test_reembed_experiment.py]]
- 13 edges to [[_COMMUNITY_FakeVectorStore]]
- 12 edges to [[_COMMUNITY_test_document_store.py]]
- 11 edges to [[_COMMUNITY_PaperRef]]
- 8 edges to [[_COMMUNITY_test_obsidian_export.py]]
- 8 edges to [[_COMMUNITY_test_mcp_server.py]]
- 5 edges to [[_COMMUNITY_assembly.py]]
- 4 edges to [[_COMMUNITY_Config]]
- 4 edges to [[_COMMUNITY_Figure]]
- 3 edges to [[_COMMUNITY_Retrieval Evaluation Tool]]
- 2 edges to [[_COMMUNITY_PermanentError]]
- 2 edges to [[_COMMUNITY_ContractError]]
- 2 edges to [[_COMMUNITY_McpServer]]
- 2 edges to [[_COMMUNITY_migrate]]
- 1 edge to [[_COMMUNITY_AdaptiveBatchSizer]]
- 1 edge to [[_COMMUNITY_build_ingestion_orchestrator]]
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY_load_config]]
- 1 edge to [[_COMMUNITY_parser.py]]
- 1 edge to [[_COMMUNITY_GpuLock]]
- 1 edge to [[_COMMUNITY_test_chunker.py]]
- 1 edge to [[_COMMUNITY_test_parser.py]]
- 1 edge to [[_COMMUNITY_test_summarizer.py]]
- 1 edge to [[_COMMUNITY_TeiReranker]]
- 1 edge to [[_COMMUNITY_RetrievalCoverage]]
- 1 edge to [[_COMMUNITY_FakeGpuLock]]
- 1 edge to [[_COMMUNITY_FakeSource]]

## Top bridge nodes
- [[parser.py]] - degree 31, connects to 15 communities
- [[Anchor]] - degree 69, connects to 13 communities
- [[Chunk]] - degree 66, connects to 10 communities
- [[SpyBatchParserWithPrefetch]] - degree 25, connects to 10 communities
- [[document_store.py]] - degree 21, connects to 9 communities