---
source_file: "contracts/ingest_state.py"
type: "code"
community: "test_orchestrator.py"
location: "L22"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_orchestratorpy
---

# CheckpointArtifacts

## Connections
- [[.__init__()_29]] - `references` [EXTRACTED]
- [[._finish()]] - `calls` [EXTRACTED]
- [[._prepare()]] - `calls` [EXTRACTED]
- [[._prepare_batch()]] - `calls` [EXTRACTED]
- [[.checkpoint()]] - `references` [EXTRACTED]
- [[.checkpoint()_1]] - `references` [EXTRACTED]
- [[.merge()]] - `method` [EXTRACTED]
- [[Chunk]] - `uses` [INFERRED]
- [[DocStoreDouble]] - `uses` [INFERRED]
- [[DocStoreDouble_1]] - `uses` [INFERRED]
- [[EmbedderSpy]] - `uses` [INFERRED]
- [[EmbedderSpy_1]] - `uses` [INFERRED]
- [[FakeIngestState]] - `uses` [INFERRED]
- [[FrozenModel]] - `uses` [INFERRED]
- [[IngestionOrchestrator]] - `uses` [INFERRED]
- [[ParsedDoc]] - `uses` [INFERRED]
- [[Per-paper stage output. Every field is `None` until the stage that produces it h]] - `rationale_for` [EXTRACTED]
- [[PoisonedParser]] - `uses` [INFERRED]
- [[RecordingVectorIndex]] - `uses` [INFERRED]
- [[RecordingVectorIndex_1]] - `uses` [INFERRED]
- [[Rig]] - `uses` [INFERRED]
- [[SpyBatchParser]] - `uses` [INFERRED]
- [[SpyBatchParserWithPrefetch]] - `uses` [INFERRED]
- [[SpyChunker]] - `uses` [INFERRED]
- [[SpyChunker_1]] - `uses` [INFERRED]
- [[SpyParser]] - `uses` [INFERRED]
- [[SpyParser_1]] - `uses` [INFERRED]
- [[SqliteIngestState]] - `uses` [INFERRED]
- [[StubHarvester_2]] - `uses` [INFERRED]
- [[StubHarvester_3]] - `uses` [INFERRED]
- [[SummarizerSpy]] - `uses` [INFERRED]
- [[SummarizerSpy_1]] - `uses` [INFERRED]
- [[_Prepared]] - `uses` [INFERRED]
- [[__init__.py_4]] - `imports` [EXTRACTED]
- [[fake_ingest_state.py]] - `imports` [EXTRACTED]
- [[ingest_state.py]] - `contains` [EXTRACTED]
- [[ingest_state_sqlite.py]] - `imports` [EXTRACTED]
- [[orchestrator.py]] - `imports` [EXTRACTED]
- [[test_checkpoint_at_done_clears_artifacts_but_keeps_the_stage()]] - `calls` [EXTRACTED]
- [[test_checkpoint_holds_stage_and_artifacts()]] - `calls` [EXTRACTED]
- [[test_checkpoint_merges_artifacts_across_calls_without_unsetting_earlier_fields()]] - `calls` [EXTRACTED]
- [[test_checkpoint_merges_artifacts_without_unsetting_earlier_fields()]] - `calls` [EXTRACTED]
- [[test_checkpoint_round_trips_stage_and_artifacts_through_real_sqlite()]] - `calls` [EXTRACTED]
- [[test_checkpoint_upserts_stage_and_artifacts()]] - `calls` [EXTRACTED]
- [[test_checkpoint_with_no_artifacts_does_not_unset_earlier_fields()]] - `calls` [EXTRACTED]
- [[test_constructs_with_a_partial_set_of_fields()]] - `calls` [EXTRACTED]
- [[test_every_field_defaults_to_none()]] - `calls` [EXTRACTED]
- [[test_fake_ingest_state.py]] - `imports` [EXTRACTED]
- [[test_ingest_state.py]] - `imports` [EXTRACTED]
- [[test_ingest_state_sqlite.py]] - `imports` [EXTRACTED]
- [[test_merge_overlays_only_non_none_fields()]] - `calls` [EXTRACTED]
- [[test_merge_overwrites_a_field_present_in_both()]] - `calls` [EXTRACTED]
- [[test_merge_with_an_all_none_update_returns_the_original_unchanged()]] - `calls` [EXTRACTED]
- [[test_orchestrator.py]] - `imports` [EXTRACTED]
- [[test_parse_phase_prefetch_excludes_refs_already_parsed_or_further_along()]] - `calls` [EXTRACTED]
- [[test_parse_phase_skips_batch_call_for_papers_already_parsed_or_further_along()]] - `calls` [EXTRACTED]
- [[test_quarantine_removes_the_row_entirely()]] - `calls` [EXTRACTED]
- [[test_reaching_done_clears_artifacts()]] - `calls` [EXTRACTED]
- [[test_unknown_field_raises()]] - `calls` [EXTRACTED]
- [[test_wrong_type_raises()_5]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_orchestratorpy