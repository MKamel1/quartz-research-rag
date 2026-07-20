---
type: community
cohesion: 0.07
members: 30
---

# build_ingestion_orchestrator

**Cohesion:** 0.07 - loosely connected
**Members:** 30 nodes

## Members
- [[.__enter__()_2]] - code - rag/test_composition_e2e.py
- [[.__exit__()_2]] - code - rag/test_composition_e2e.py
- [[.__init__()_1]] - code - app/assembly.py
- [[.__init__()_51]] - code - rag/test_composition_e2e.py
- [[._run()]] - code - rag/test_composition_e2e.py
- [[.peak_mib()]] - code - rag/test_composition_e2e.py
- [[Adapts `Harvester`'s `QuarantineSink` (`ragharvester.py` `Callablestr, Excep]] - rationale - app/assembly.py
- [[Client]] - code
- [[End-to-end proof that the two composition roots (app.assembly) actually wire up]] - rationale - rag/test_composition_e2e.py
- [[Pass 2 setup + run -- pulled out of `__main__` so a test can drive it without sp]] - rationale - app/ingest.py
- [[Path_1]] - code
- [[Path_14]] - code
- [[Polls `nvidia-smi` for this machine's total used VRAM in a background thread --]] - rationale - rag/test_composition_e2e.py
- [[T-DOC18 bug fix `appprefetch_pdfs.py` defaults its cache dir to `pdf_cache`]] - rationale - app/test_assembly.py
- [[T-DOC48 cache-first read reconstruct a `PaperRef` from its `paper_id.json` si]] - rationale - app/assembly.py
- [[The only way `cache_dir` should still end up `None` `config.yaml` explicitly se]] - rationale - app/test_assembly.py
- [[_GpuSampler]] - code - rag/test_composition_e2e.py
- [[_cached_ref()]] - code - app/assembly.py
- [[_run_finish_phase()]] - code - app/ingest.py
- [[_sqlite_harvest_quarantine_sink()]] - code - app/assembly.py
- [[`Harvester.harvest()`'s documented postcondition is that it never raises, which]] - rationale - app/test_assembly.py
- [[`build_ingestion_orchestrator` must thread `config.pdf_cache_dir` into `_PdfDown]] - rationale - app/test_assembly.py
- [[build_ingestion_orchestrator()]] - code - app/assembly.py
- [[test_build_ingestion_orchestrator_default_matches_prefetch_pdfs_default()]] - code - app/test_assembly.py
- [[test_build_ingestion_orchestrator_empty_pdf_cache_dir_disables_cache_and_logs()]] - code - app/test_assembly.py
- [[test_build_ingestion_orchestrator_wires_pdf_cache_dir_config_field()]] - code - app/test_assembly.py
- [[test_composition_e2e.py]] - code - rag/test_composition_e2e.py
- [[test_ingest_then_query_one_real_paper()]] - code - rag/test_composition_e2e.py
- [[test_quarantine_sink_logs_and_does_not_raise_when_the_write_itself_fails()]] - code - app/test_assembly.py
- [[workdir()]] - code - rag/test_composition_e2e.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/build_ingestion_orchestrator
SORT file.name ASC
```

## Connections to other communities
- 12 edges to [[_COMMUNITY_Config]]
- 6 edges to [[_COMMUNITY_test_assembly.py]]
- 5 edges to [[_COMMUNITY_assembly.py]]
- 5 edges to [[_COMMUNITY_PaperRef]]
- 5 edges to [[_COMMUNITY_migrate]]
- 4 edges to [[_COMMUNITY_harvest_refs]]
- 4 edges to [[_COMMUNITY_PermanentError]]
- 3 edges to [[_COMMUNITY_PaperRecord]]
- 2 edges to [[_COMMUNITY_ingest.py]]
- 2 edges to [[_COMMUNITY_test_parse_phase.py]]
- 1 edge to [[_COMMUNITY_AdaptiveBatchSizer]]
- 1 edge to [[_COMMUNITY_FakeSource]]
- 1 edge to [[_COMMUNITY_Anchor]]
- 1 edge to [[_COMMUNITY_TeiEmbedder]]
- 1 edge to [[_COMMUNITY_VectorIndex]]
- 1 edge to [[_COMMUNITY__build_orchestrator_for_hook_test]]
- 1 edge to [[_COMMUNITY__StubOrchestrator]]
- 1 edge to [[_COMMUNITY_test_doctor.py]]
- 1 edge to [[_COMMUNITY_load_config]]

## Top bridge nodes
- [[build_ingestion_orchestrator()]] - degree 29, connects to 15 communities
- [[test_composition_e2e.py]] - degree 11, connects to 5 communities
- [[_sqlite_harvest_quarantine_sink()]] - degree 7, connects to 4 communities
- [[_run_finish_phase()]] - degree 6, connects to 4 communities
- [[test_ingest_then_query_one_real_paper()]] - degree 7, connects to 3 communities