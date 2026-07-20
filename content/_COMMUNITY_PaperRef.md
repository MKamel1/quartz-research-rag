---
type: community
cohesion: 0.08
members: 54
---

# PaperRef

**Cohesion:** 0.08 - loosely connected
**Members:** 54 nodes

## Members
- [[._backoff()_2]] - code - rag/orchestrator.py
- [[._cache_path()]] - code - app/assembly.py
- [[._download()]] - code - app/assembly.py
- [[._download_all()]] - code - app/assembly.py
- [[._download_once()]] - code - app/assembly.py
- [[._embed_topic_query_vec_with_retry()]] - code - rag/orchestrator.py
- [[._embed_with_retry()]] - code - rag/orchestrator.py
- [[._finish()]] - code - rag/orchestrator.py
- [[._finish_checkpoint()]] - code - rag/orchestrator.py
- [[._parse_with_retry()]] - code - rag/orchestrator.py
- [[._prepare()]] - code - rag/orchestrator.py
- [[._prepare_batch()]] - code - rag/orchestrator.py
- [[._read_cached()]] - code - app/assembly.py
- [[._resolve_contents()]] - code - app/assembly.py
- [[._stage()]] - code - rag/orchestrator.py
- [[._summarize_with_retry()]] - code - rag/orchestrator.py
- [[._upsert_record()]] - code - rag/orchestrator.py
- [[._upsert_with_retry()]] - code - rag/orchestrator.py
- [[._write_cache()]] - code - app/assembly.py
- [[.delete_paper()]] - code - rag/orchestrator.py
- [[.finish_phase()]] - code - rag/orchestrator.py
- [[.harvest()_5]] - code - rag/orchestrator.py
- [[.ingest()]] - code - rag/orchestrator.py
- [[.parse()]] - code - app/assembly.py
- [[.parse_batch()]] - code - app/assembly.py
- [[.parse_phase()_1]] - code - rag/orchestrator.py
- [[.prefetch_next_batch()]] - code - app/assembly.py
- [[Bridges `IngestionOrchestrator.parse_phase`'s batched `parser.parse_batch(refs)`]] - rationale - app/assembly.py
- [[Bridges `IngestionOrchestrator`'s `parser.parse(ref PaperRef)` call to the real]] - rationale - app/assembly.py
- [[Guard `_finish` needs that the old inline loop got for free from `_prepare`'s re]] - rationale - rag/orchestrator.py
- [[Guards `_upsert_record`'s `vector_index.upsert` calls (T-DOC13) -- found while a]] - rationale - rag/orchestrator.py
- [[Has a checkpoint's `stage` already reached (or passed) `target`      Raises `Co]] - rationale - rag/orchestrator.py
- [[IngestionOrchestrator]] - code - rag/orchestrator.py
- [[M9 IngestionOrchestrator (ARCHITECTURE.md M9 · IngestionOrchestrator, owner A)]] - rationale - rag/orchestrator.py
- [[One `parse_phase` group. Only refs that haven't reached `parsed` yet (a fresh pa]] - rationale - rag/orchestrator.py
- [[One paper as returned by the Harvester, before parsingsummarizing.      `releva]] - rationale - contracts/harvester.py
- [[PaperRef]] - code - contracts/harvester.py
- [[Pass 1 drive every ref to (at least) `chunked` using the CPUMinerU-bound `_pre]] - rationale - rag/orchestrator.py
- [[Pass 2 drive every ref from wherever it sits to `done` using the GPU-bound `_fi]] - rationale - rag/orchestrator.py
- [[Preconditions every injected collaborator satisfies its documented interface]] - rationale - rag/orchestrator.py
- [[Public so a two-process caller (`appparse_phase.py``appingest.py`) can harves]] - rationale - rag/orchestrator.py
- [[Removes `paper_id` from both stores this orchestrator already owns -- `DocumentS]] - rationale - rag/orchestrator.py
- [[Returns `(content, was_cache_hit)`. `was_cache_hit` is only ever `True` when]] - rationale - app/assembly.py
- [[Same shape as `_summarize_with_retry`, for either of `_finish`'s two `embedder.e]] - rationale - rag/orchestrator.py
- [[Start resolving `refs`' PDF bytes on a background thread now, so they're ready b]] - rationale - app/assembly.py
- [[The CPU-bound prep output for one paper -- what the background prefetch hands to]] - rationale - rag/orchestrator.py
- [[The per-paper error boundary `parser.parse` needs (T-DOC12) a real end-to-end r]] - rationale - rag/orchestrator.py
- [[The per-paper error boundary `summarizer.summarize` needs (T-DOC13 -- the `_fini]] - rationale - rag/orchestrator.py
- [[_PdfDownloadParser]] - code - app/assembly.py
- [[_Prepared]] - code - rag/orchestrator.py
- [[_at_least()]] - code - rag/orchestrator.py
- [[_cosine()]] - code - rag/orchestrator.py
- [[_default_retry_sleep()_2]] - code - rag/orchestrator.py
- [[orchestrator.py]] - code - rag/orchestrator.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/PaperRef
SORT file.name ASC
```

## Connections to other communities
- 40 edges to [[_COMMUNITY_ParsedDoc]]
- 25 edges to [[_COMMUNITY_PermanentError]]
- 14 edges to [[_COMMUNITY_test_orchestrator.py]]
- 12 edges to [[_COMMUNITY_PaperRecord]]
- 11 edges to [[_COMMUNITY_Anchor]]
- 8 edges to [[_COMMUNITY_test_parse_phase.py]]
- 6 edges to [[_COMMUNITY_assembly.py]]
- 5 edges to [[_COMMUNITY_build_ingestion_orchestrator]]
- 5 edges to [[_COMMUNITY_Config]]
- 5 edges to [[_COMMUNITY_test_ingest.py]]
- 5 edges to [[_COMMUNITY_FakeTeiLifecycle]]
- 5 edges to [[_COMMUNITY_test_reembed_experiment.py]]
- 4 edges to [[_COMMUNITY_harvest_refs]]
- 4 edges to [[_COMMUNITY_test_embedder.py]]
- 4 edges to [[_COMMUNITY_test_assembly.py]]
- 4 edges to [[_COMMUNITY_prefetch_pdfs.py]]
- 4 edges to [[_COMMUNITY_ContractError]]
- 4 edges to [[_COMMUNITY_test_mcp_server.py]]
- 3 edges to [[_COMMUNITY_test_obsidian_export.py]]
- 3 edges to [[_COMMUNITY_test_prefetch_pdfs.py]]
- 3 edges to [[_COMMUNITY___init__.py]]
- 3 edges to [[_COMMUNITY_FakeSource]]
- 3 edges to [[_COMMUNITY_FakeVectorStore]]
- 2 edges to [[_COMMUNITY_migrate]]
- 2 edges to [[_COMMUNITY__StubOrchestrator]]
- 2 edges to [[_COMMUNITY__build_orchestrator_for_hook_test]]
- 2 edges to [[_COMMUNITY_test_document_store.py]]
- 1 edge to [[_COMMUNITY_AdaptiveBatchSizer]]
- 1 edge to [[_COMMUNITY_TeiReranker]]
- 1 edge to [[_COMMUNITY_load_config]]
- 1 edge to [[_COMMUNITY_parser.py]]

## Top bridge nodes
- [[PaperRef]] - degree 125, connects to 25 communities
- [[IngestionOrchestrator]] - degree 52, connects to 13 communities
- [[_PdfDownloadParser]] - degree 27, connects to 10 communities
- [[orchestrator.py]] - degree 25, connects to 10 communities
- [[_Prepared]] - degree 14, connects to 7 communities