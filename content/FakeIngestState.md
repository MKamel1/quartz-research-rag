---
source_file: "rag/fakes/fake_ingest_state.py"
type: "code"
community: "test_orchestrator.py"
location: "L29"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_orchestratorpy
---

# FakeIngestState

## Connections
- [[.__init__()_36]] - `method` [EXTRACTED]
- [[.__init__()_73]] - `calls` [EXTRACTED]
- [[.checkpoint()]] - `method` [EXTRACTED]
- [[.get()_3]] - `method` [EXTRACTED]
- [[.quarantine()]] - `method` [EXTRACTED]
- [[.stage_of()]] - `method` [EXTRACTED]
- [[Checkpoint]] - `uses` [INFERRED]
- [[CheckpointArtifacts]] - `uses` [INFERRED]
- [[DocStoreDouble_1]] - `uses` [INFERRED]
- [[EmbedderSpy_1]] - `uses` [INFERRED]
- [[FakeFlakyEmbedder]] - `uses` [INFERRED]
- [[FakePopen]] - `uses` [INFERRED]
- [[FakeTeiLifecycle]] - `uses` [INFERRED]
- [[RecordingVectorIndex_1]] - `uses` [INFERRED]
- [[Rig]] - `uses` [INFERRED]
- [[SpyBatchParser]] - `uses` [INFERRED]
- [[SpyBatchParserWithPrefetch]] - `uses` [INFERRED]
- [[SpyChunker_1]] - `uses` [INFERRED]
- [[SpyParser_1]] - `uses` [INFERRED]
- [[StubHarvester]] - `uses` [INFERRED]
- [[StubHarvester_3]] - `uses` [INFERRED]
- [[SummarizerSpy_1]] - `uses` [INFERRED]
- [[__init__.py_6]] - `imports` [EXTRACTED]
- [[_make_orchestrator()]] - `calls` [EXTRACTED]
- [[`checkpoint`'s merge semantics a stage transition that doesn't repeat every ear]] - `rationale_for` [EXTRACTED]
- [[fake_ingest_state.py]] - `contains` [EXTRACTED]
- [[test_checkpoint_merges_artifacts_across_calls_without_unsetting_earlier_fields()]] - `calls` [EXTRACTED]
- [[test_checkpoint_upserts_stage_and_artifacts()]] - `calls` [EXTRACTED]
- [[test_checkpoint_with_no_artifacts_does_not_unset_earlier_fields()]] - `calls` [EXTRACTED]
- [[test_fake_ingest_state.py]] - `imports` [EXTRACTED]
- [[test_get_returns_none_for_unknown_paper()]] - `calls` [EXTRACTED]
- [[test_ingest.py]] - `imports` [EXTRACTED]
- [[test_orchestrator.py]] - `imports` [EXTRACTED]
- [[test_parse_phase_batch_failure_fallback_still_quarantines_a_genuinely_bad_paper()]] - `calls` [EXTRACTED]
- [[test_parse_phase_batch_failure_falls_back_to_singular_path_for_every_paper()]] - `calls` [EXTRACTED]
- [[test_parse_phase_batch_size_provider_is_called_exactly_once_per_batch()]] - `calls` [EXTRACTED]
- [[test_parse_phase_batch_success_checkpoints_all_papers_normally()]] - `calls` [EXTRACTED]
- [[test_parse_phase_handles_a_short_final_batch()]] - `calls` [EXTRACTED]
- [[test_parse_phase_prefetch_excludes_refs_already_parsed_or_further_along()]] - `calls` [EXTRACTED]
- [[test_parse_phase_prefetches_the_next_batch_before_the_current_batchs_parse_batch_call()]] - `calls` [EXTRACTED]
- [[test_parse_phase_skips_batch_call_for_papers_already_parsed_or_further_along()]] - `calls` [EXTRACTED]
- [[test_parse_phase_uses_a_fixed_size_by_default_when_no_batch_size_provider_is_injected()]] - `calls` [EXTRACTED]
- [[test_parse_phase_uses_the_batch_size_provider_when_injected_not_the_fixed_config_value()]] - `calls` [EXTRACTED]
- [[test_parse_phase_with_a_real_stateful_adaptive_sizer_grows_at_the_intended_rate()]] - `calls` [EXTRACTED]
- [[test_quarantine_removes_the_row_and_records_it()]] - `calls` [EXTRACTED]
- [[test_reaching_done_clears_artifacts()]] - `calls` [EXTRACTED]
- [[test_stage_of_reflects_current_stage_and_none_when_unknown()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_orchestratorpy