---
type: community
cohesion: 0.11
members: 19
---

# _build_orchestrator_for_hook_test

**Cohesion:** 0.11 - loosely connected
**Members:** 19 nodes

## Members
- [[.__init__()_6]] - code - app/test_assembly.py
- [[.__init__()_5]] - code - app/test_assembly.py
- [[.start_tei_containers()]] - code - app/test_assembly.py
- [[.stop_tei_containers()]] - code - app/test_assembly.py
- [[.unload()]] - code - app/test_assembly.py
- [[FakeSummarizer]] - code - app/test_assembly.py
- [[Named without a leading underscore (unlike this file's other test-local fakes) s]] - rationale - app/test_assembly.py
- [[Same stubbing pattern as `test_harvest_failure_is_written_to_the_quarantine_tabl]] - rationale - app/test_assembly.py
- [[T-DOC19 bug fix `build_ingestion_orchestrator` no longer wires `before_finish_p]] - rationale - app/test_assembly.py
- [[T-DOC21 `build_ingestion_orchestrator` wires `batch_size_provider` to a real]] - rationale - app/test_assembly.py
- [[T-DOC59 (OG-25) `on_stage=` is forwarded to `IngestionOrchestrator` unmodified]] - rationale - app/test_assembly.py
- [[Today's exact default behavior a caller that doesn't pass `on_stage` (every oth]] - rationale - app/test_assembly.py
- [[_FakeTeiLifecycle]] - code - app/test_assembly.py
- [[_build_orchestrator_for_hook_test()]] - code - app/test_assembly.py
- [[test_batch_size_provider_is_wired_to_an_adaptive_batch_sizer()]] - code - app/test_assembly.py
- [[test_before_finish_phase_is_left_as_the_default_noop()]] - code - app/test_assembly.py
- [[test_before_parse_phase_composes_summarizer_unload_and_tei_stop()]] - code - app/test_assembly.py
- [[test_build_ingestion_orchestrator_on_stage_defaults_to_the_orchestrators_own_noop()]] - code - app/test_assembly.py
- [[test_build_ingestion_orchestrator_wires_on_stage_when_given()]] - code - app/test_assembly.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_build_orchestrator_for_hook_test
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_test_assembly.py]]
- 4 edges to [[_COMMUNITY_Config]]
- 4 edges to [[_COMMUNITY_PermanentError]]
- 3 edges to [[_COMMUNITY_AdaptiveBatchSizer]]
- 2 edges to [[_COMMUNITY_PaperRef]]
- 1 edge to [[_COMMUNITY_build_ingestion_orchestrator]]

## Top bridge nodes
- [[FakeSummarizer]] - degree 10, connects to 5 communities
- [[_FakeTeiLifecycle]] - degree 10, connects to 5 communities
- [[_build_orchestrator_for_hook_test()]] - degree 11, connects to 3 communities
- [[test_batch_size_provider_is_wired_to_an_adaptive_batch_sizer()]] - degree 5, connects to 3 communities
- [[test_before_finish_phase_is_left_as_the_default_noop()]] - degree 3, connects to 1 community