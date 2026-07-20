---
type: community
cohesion: 0.10
members: 30
---

# assembly.py

**Cohesion:** 0.10 - loosely connected
**Members:** 30 nodes

## Members
- [[.__init__()_41]] - code - rag/gpu_lock.py
- [[._acquire_with_timeout()]] - code - rag/gpu_lock.py
- [[.acquire()_3]] - code - rag/gpu_lock.py
- [[AbstractContextManager_2]] - code
- [[Composition roots wires real (non-fake) adapters into `IngestionOrchestrator` (]] - rationale - app/assembly.py
- [[FileGpuLock]] - code - rag/gpu_lock.py
- [[FileGpuLock — the real `GpuLock` adapter (DATA-CONTRACTS.md GpuLock).  Wraps `]] - rationale - rag/gpu_lock.py
- [[FileLock]] - code
- [[Path_29]] - code
- [[Protocol conformance (DATA-CONTRACTS.md GpuLock) the real adapter must struct]] - rationale - rag/test_gpu_lock.py
- [[Tests for FileGpuLock — the real GpuLock adapter. Runs in default CI no GPU, no]] - rationale - rag/test_gpu_lock.py
- [[The load-bearing property FileGpuLock must serialize across independent instanc]] - rationale - rag/test_gpu_lock.py
- [[The retryable response's `Retry-After` header, in seconds, if the raise site opp]] - rationale - app/assembly.py
- [[The three-class error taxonomy (CONVENTIONS.md §4). Every module in this system]] - rationale - contracts/errors.py
- [[_fetch_by_ids_with_backoff()]] - code - app/assembly.py
- [[_retry_after_seconds()]] - code - app/assembly.py
- [[`source.fetch_by_ids(ids)`, retrying a `TransientError` (arXiv 4295xx) with bou]] - rationale - app/assembly.py
- [[`timeout=None` (the default, unchanged) must still hand back the raw, block-fore]] - rationale - rag/test_gpu_lock.py
- [[assembly.py]] - code - app/assembly.py
- [[errors.py]] - code - contracts/errors.py
- [[gpu_lock.py_2]] - code - rag/gpu_lock.py
- [[test_acquire_with_timeout_raises_transient_error_when_lock_is_held()]] - code - rag/test_gpu_lock.py
- [[test_acquire_with_timeout_succeeds_when_lock_is_free()]] - code - rag/test_gpu_lock.py
- [[test_acquire_without_timeout_still_blocks_forever_by_default()]] - code - rag/test_gpu_lock.py
- [[test_basic_enter_and_exit_is_clean()]] - code - rag/test_gpu_lock.py
- [[test_different_paths_do_not_contend()]] - code - rag/test_gpu_lock.py
- [[test_file_gpu_lock_satisfies_the_gpu_lock_protocol()]] - code - rag/test_gpu_lock.py
- [[test_gpu_lock.py_1]] - code - rag/test_gpu_lock.py
- [[test_releases_on_exception()]] - code - rag/test_gpu_lock.py
- [[test_two_instances_on_the_same_path_are_mutually_exclusive()]] - code - rag/test_gpu_lock.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/assemblypy
SORT file.name ASC
```

## Connections to other communities
- 19 edges to [[_COMMUNITY_PermanentError]]
- 7 edges to [[_COMMUNITY_GpuLock]]
- 6 edges to [[_COMMUNITY_PaperRef]]
- 6 edges to [[_COMMUNITY___init__.py]]
- 6 edges to [[_COMMUNITY_TeiReranker]]
- 5 edges to [[_COMMUNITY_build_ingestion_orchestrator]]
- 5 edges to [[_COMMUNITY_test_embedder.py]]
- 5 edges to [[_COMMUNITY_Anchor]]
- 5 edges to [[_COMMUNITY_test_benchmark.py]]
- 4 edges to [[_COMMUNITY_Config]]
- 4 edges to [[_COMMUNITY_test_assembly.py]]
- 4 edges to [[_COMMUNITY_load_config]]
- 4 edges to [[_COMMUNITY_parser.py]]
- 4 edges to [[_COMMUNITY_test_reembed_experiment.py]]
- 3 edges to [[_COMMUNITY_test_doctor.py]]
- 3 edges to [[_COMMUNITY_ParsedDoc]]
- 3 edges to [[_COMMUNITY_SearchFilters]]
- 2 edges to [[_COMMUNITY_AdaptiveBatchSizer]]
- 2 edges to [[_COMMUNITY_harvest_refs]]
- 2 edges to [[_COMMUNITY_test_orchestrator.py]]
- 2 edges to [[_COMMUNITY_server.py]]
- 2 edges to [[_COMMUNITY_ingest.py]]
- 2 edges to [[_COMMUNITY_controller.py]]
- 2 edges to [[_COMMUNITY_ContractError]]
- 2 edges to [[_COMMUNITY_test_vector_index.py]]
- 2 edges to [[_COMMUNITY_FakeGpuLock]]
- 2 edges to [[_COMMUNITY_FakeSource]]
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY_PaperRecord]]
- 1 edge to [[_COMMUNITY_TeiEmbedder]]
- 1 edge to [[_COMMUNITY_migrate]]
- 1 edge to [[_COMMUNITY_McpServer]]
- 1 edge to [[_COMMUNITY_RetrievalCoverage]]
- 1 edge to [[_COMMUNITY_VectorIndex]]
- 1 edge to [[_COMMUNITY_test_parse_phase.py]]
- 1 edge to [[_COMMUNITY_test_serve.py]]
- 1 edge to [[_COMMUNITY_prefetch_pdfs.py]]
- 1 edge to [[_COMMUNITY_test_ingest.py]]
- 1 edge to [[_COMMUNITY_test_server.py]]
- 1 edge to [[_COMMUNITY_test_document_store.py]]
- 1 edge to [[_COMMUNITY_test_harvester_arxiv_source.py]]
- 1 edge to [[_COMMUNITY_test_parser.py]]
- 1 edge to [[_COMMUNITY_FakeVectorStore]]
- 1 edge to [[_COMMUNITY_test_summarizer.py]]

## Top bridge nodes
- [[assembly.py]] - degree 61, connects to 29 communities
- [[errors.py]] - degree 48, connects to 27 communities
- [[FileGpuLock]] - degree 24, connects to 7 communities
- [[FileLock]] - degree 9, connects to 4 communities
- [[gpu_lock.py_2]] - degree 9, connects to 3 communities