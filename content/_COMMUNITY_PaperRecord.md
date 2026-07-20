---
type: community
cohesion: 0.09
members: 34
---

# PaperRecord

**Cohesion:** 0.09 - loosely connected
**Members:** 34 nodes

## Members
- [[.__init__()_71]] - code - rag/test_orchestrator.py
- [[.__init__()_73]] - code - rag/test_orchestrator.py
- [[.__init__()_68]] - code - rag/test_orchestrator.py
- [[.__init__()_66]] - code - rag/test_orchestrator.py
- [[._read_markdown_blob()]] - code - rag/document_store.py
- [[._row_to_block()]] - code - rag/document_store.py
- [[._row_to_chunk()]] - code - rag/document_store.py
- [[.delete()]] - code - rag/document_store.py
- [[.delete()_2]] - code - rag/test_orchestrator.py
- [[.get()_2]] - code - rag/document_store.py
- [[.get()_8]] - code - rag/test_retriever.py
- [[.get_block()]] - code - rag/document_store.py
- [[.get_blocks()]] - code - rag/document_store.py
- [[.get_chunk()]] - code - rag/document_store.py
- [[.get_span()_1]] - code - rag/document_store.py
- [[.harvest()_7]] - code - rag/test_orchestrator.py
- [[.iter_papers()_2]] - code - rag/document_store.py
- [[.put()]] - code - rag/document_store.py
- [[.put()_2]] - code - rag/test_orchestrator.py
- [[A missingunreadable blob means the store's own papers-row - blob-file invarian]] - rationale - rag/document_store.py
- [[Atomic either the whole paper (papersblockschunkssummaries rows) is written,]] - rationale - rag/document_store.py
- [[DocStoreDouble_1]] - code - rag/test_orchestrator.py
- [[DocumentStore]] - code - rag/document_store.py
- [[Mirrors the real `DocumentStore.delete()` return contract (T-DOC40) the removed]] - rationale - rag/test_orchestrator.py
- [[PaperRecord]] - code - contracts/document_store.py
- [[Records every `put()` PaperRecord, keyed by paper_id (so a re-put is an idempote]] - rationale - rag/test_orchestrator.py
- [[Removes `paper_id`'s rows from `chunks``blocks``summaries``papers` in one]] - rationale - rag/document_store.py
- [[Resolves to the FULL text of `anchor.block_id` — deliberately NOT `anchor.snippe]] - rationale - rag/document_store.py
- [[Row]] - code
- [[SpyChunker_1]] - code - rag/test_orchestrator.py
- [[StubHarvester_3]] - code - rag/test_orchestrator.py
- [[The complete source-of-truth bundle for one paper. `DocumentStore.put(PaperRecor]] - rationale - contracts/document_store.py
- [[Yields the (already deduped) fixture refs on every `harvest()` — the orchestrato]] - rationale - rag/test_orchestrator.py
- [[`DocumentStore(db_path, blob_dir)` — a SQLite file plus a filesystem root for bl]] - rationale - rag/document_store.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/PaperRecord
SORT file.name ASC
```

## Connections to other communities
- 20 edges to [[_COMMUNITY_ParsedDoc]]
- 20 edges to [[_COMMUNITY_test_orchestrator.py]]
- 18 edges to [[_COMMUNITY_Anchor]]
- 17 edges to [[_COMMUNITY_test_reembed_experiment.py]]
- 15 edges to [[_COMMUNITY_test_obsidian_export.py]]
- 12 edges to [[_COMMUNITY_PaperRef]]
- 11 edges to [[_COMMUNITY_FakeVectorStore]]
- 6 edges to [[_COMMUNITY_PermanentError]]
- 5 edges to [[_COMMUNITY_Config]]
- 5 edges to [[_COMMUNITY_ContractError]]
- 4 edges to [[_COMMUNITY_test_mcp_server.py]]
- 4 edges to [[_COMMUNITY_FakeGpuLock]]
- 3 edges to [[_COMMUNITY_AdaptiveBatchSizer]]
- 3 edges to [[_COMMUNITY_build_ingestion_orchestrator]]
- 3 edges to [[_COMMUNITY___init__.py]]
- 3 edges to [[_COMMUNITY_FakeSource]]
- 2 edges to [[_COMMUNITY_test_document_store.py]]
- 1 edge to [[_COMMUNITY_assembly.py]]
- 1 edge to [[_COMMUNITY_migrate]]

## Top bridge nodes
- [[PaperRecord]] - degree 70, connects to 10 communities
- [[DocumentStore]] - degree 32, connects to 10 communities
- [[DocStoreDouble_1]] - degree 24, connects to 10 communities
- [[SpyChunker_1]] - degree 22, connects to 10 communities
- [[StubHarvester_3]] - degree 22, connects to 10 communities