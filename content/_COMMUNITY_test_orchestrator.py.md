---
type: community
cohesion: 0.05
members: 107
---

# test_orchestrator.py

**Cohesion:** 0.05 - loosely connected
**Members:** 107 nodes

## Members
- [[.__init__()_29]] - code - contracts/ingest_state.py
- [[.__init__()_36]] - code - rag/fakes/fake_ingest_state.py
- [[.__init__()_70]] - code - rag/test_orchestrator.py
- [[.__init__()_72]] - code - rag/test_orchestrator.py
- [[.__init__()_74]] - code - rag/test_orchestrator.py
- [[.call_count()]] - code - rag/test_orchestrator.py
- [[.checkpoint()]] - code - rag/fakes/fake_ingest_state.py
- [[.delete()_3]] - code - rag/test_orchestrator.py
- [[.get()_3]] - code - rag/fakes/fake_ingest_state.py
- [[.get()_7]] - code - rag/test_orchestrator.py
- [[.info()_4]] - code - rag/test_orchestrator.py
- [[.ingest()_1]] - code - rag/test_orchestrator.py
- [[.merge()]] - code - contracts/ingest_state.py
- [[.new_orchestrator()]] - code - rag/test_orchestrator.py
- [[.quarantine()]] - code - rag/fakes/fake_ingest_state.py
- [[.stage_of()]] - code - rag/fakes/fake_ingest_state.py
- [[.upsert()_3]] - code - rag/test_orchestrator.py
- [[A paper resumed from `stored` (`test_resume_after_stored_reruns_upsert_and_reach]] - rationale - rag/test_orchestrator.py
- [[Checkpoint]] - code - contracts/ingest_state.py
- [[CheckpointArtifacts]] - code - contracts/ingest_state.py
- [[Deduped `PaperRef`s (latest version per base id) from fixturesharvesterpaper_r]] - rationale - rag/test_orchestrator.py
- [[EmbedderSpy_1]] - code - rag/test_orchestrator.py
- [[Exception_1]] - code
- [[Exception_5]] - code
- [[FakeIngestState]] - code - rag/fakes/fake_ingest_state.py
- [[FakeIngestState — the in-memory `state` (`ingest_state` + `ingest_checkpoint` +]] - rationale - rag/fakes/fake_ingest_state.py
- [[FakeVectorStore_2]] - code
- [[Finer-grained than the phase-level hooks above (ARCHITECTURE.md §3, 2026-07-13 a]] - rationale - rag/test_orchestrator.py
- [[M9 IngestionOrchestrator checkpoint contract (DATA-CONTRACTS.md M9 IngestionOrc]] - rationale - contracts/ingest_state.py
- [[One end-to-end fake wiring. `document_store`, `vector_store` (raw FakeVectorStor]] - rationale - rag/test_orchestrator.py
- [[Overlay `update`'s non-`None` fields onto `self`, keeping every field `update` l]] - rationale - contracts/ingest_state.py
- [[Per-paper stage output. Every field is `None` until the stage that produces it h]] - rationale - contracts/ingest_state.py
- [[RecordingVectorIndex_1]] - code - rag/test_orchestrator.py
- [[Rig]] - code - rag/test_orchestrator.py
- [[Sibling test for contractsingest_state.py (T-F1 DoD imported by a trivial test]] - rationale - contracts/test_ingest_state.py
- [[SpyBatchParser]] - code - rag/test_orchestrator.py
- [[SqliteIngestState — a real, schema-backed `state` adapter over `ingest_state` +]] - rationale - rag/ingest_state_sqlite.py
- [[Tests for FakeIngestState (T-F4-style fake) — upsertmerge semantics, `done` cle]] - rationale - rag/fakes/test_fake_ingest_state.py
- [[The row shape returned by `state.get(paper_id)` `stage` (the frozen `ingest_sta]] - rationale - contracts/ingest_state.py
- [[Wraps a real FakeVectorStore, logging each `upsert` to the shared `events` and o]] - rationale - rag/test_orchestrator.py
- [[Wraps the committed FakeEmbedder, counting `embed()` calls (for the N+1 hoist as]] - rationale - rag/test_orchestrator.py
- [[_parse_phase_orchestrator()]] - code - rag/test_orchestrator.py
- [[`.parse(ref)` (the pre-existing per-paper interface, used by `_parse_with_retry`]] - rationale - rag/test_orchestrator.py
- [[`checkpoint`'s merge semantics a stage transition that doesn't repeat every ear]] - rationale - rag/fakes/fake_ingest_state.py
- [[done_ids()]] - code - rag/test_orchestrator.py
- [[fake_ingest_state.py]] - code - rag/fakes/fake_ingest_state.py
- [[fixture_refs()]] - code - rag/test_orchestrator.py
- [[ingest_state.py]] - code - contracts/ingest_state.py
- [[ingest_state_sqlite.py]] - code - rag/ingest_state_sqlite.py
- [[stored_ids()]] - code - rag/test_orchestrator.py
- [[test_before_embed_hook_fires_once_per_paper_right_before_that_papers_embed_call()]] - code - rag/test_orchestrator.py
- [[test_before_finish_phase_hook_fires_after_every_parse_and_before_any_summarize()]] - code - rag/test_orchestrator.py
- [[test_before_parse_phase_hook_fires_before_any_parsing()]] - code - rag/test_orchestrator.py
- [[test_checkpoint_holds_stage_and_artifacts()]] - code - contracts/test_ingest_state.py
- [[test_checkpoint_merges_artifacts_across_calls_without_unsetting_earlier_fields()]] - code - rag/fakes/test_fake_ingest_state.py
- [[test_checkpoint_upserts_stage_and_artifacts()]] - code - rag/fakes/test_fake_ingest_state.py
- [[test_checkpoint_with_no_artifacts_does_not_unset_earlier_fields()]] - code - rag/fakes/test_fake_ingest_state.py
- [[test_constructs_with_a_partial_set_of_fields()]] - code - contracts/test_ingest_state.py
- [[test_delete_paper_does_not_touch_other_papers()]] - code - rag/test_orchestrator.py
- [[test_delete_paper_of_unknown_paper_id_calls_vector_delete_with_no_ids()]] - code - rag/test_orchestrator.py
- [[test_delete_paper_removes_the_paper_from_both_stores()]] - code - rag/test_orchestrator.py
- [[test_embed_is_called_n_plus_one_times_not_two_n()]] - code - rag/test_orchestrator.py
- [[test_every_field_defaults_to_none()]] - code - contracts/test_ingest_state.py
- [[test_every_stored_paper_has_a_non_null_relevance_score()]] - code - rag/test_orchestrator.py
- [[test_fake_ingest_state.py]] - code - rag/fakes/test_fake_ingest_state.py
- [[test_full_run_stores_and_finishes_every_paper()]] - code - rag/test_orchestrator.py
- [[test_get_returns_none_for_unknown_paper()]] - code - rag/fakes/test_fake_ingest_state.py
- [[test_ingest_state.py]] - code - contracts/test_ingest_state.py
- [[test_merge_overlays_only_non_none_fields()]] - code - contracts/test_ingest_state.py
- [[test_merge_overwrites_a_field_present_in_both()]] - code - contracts/test_ingest_state.py
- [[test_merge_with_an_all_none_update_returns_the_original_unchanged()]] - code - contracts/test_ingest_state.py
- [[test_on_stage_hook_fires_summarize_then_embed_then_store_in_order_per_paper()]] - code - rag/test_orchestrator.py
- [[test_on_stage_hook_on_the_resume_path_fires_embed_then_store_without_summarize()]] - code - rag/test_orchestrator.py
- [[test_orchestrator.py]] - code - rag/test_orchestrator.py
- [[test_orchestrator_wraps_no_gpu_work_of_its_own()]] - code - rag/test_orchestrator.py
- [[test_parse_phase_batch_failure_fallback_still_quarantines_a_genuinely_bad_paper()]] - code - rag/test_orchestrator.py
- [[test_parse_phase_batch_failure_falls_back_to_singular_path_for_every_paper()]] - code - rag/test_orchestrator.py
- [[test_parse_phase_batch_size_provider_is_called_exactly_once_per_batch()]] - code - rag/test_orchestrator.py
- [[test_parse_phase_batch_success_checkpoints_all_papers_normally()]] - code - rag/test_orchestrator.py
- [[test_parse_phase_handles_a_short_final_batch()]] - code - rag/test_orchestrator.py
- [[test_parse_phase_prefetches_the_next_batch_before_the_current_batchs_parse_batch_call()]] - code - rag/test_orchestrator.py
- [[test_parse_phase_skips_batch_call_for_papers_already_parsed_or_further_along()]] - code - rag/test_orchestrator.py
- [[test_parse_phase_uses_a_fixed_size_by_default_when_no_batch_size_provider_is_injected()]] - code - rag/test_orchestrator.py
- [[test_parse_phase_uses_the_batch_size_provider_when_injected_not_the_fixed_config_value()]] - code - rag/test_orchestrator.py
- [[test_parse_phase_with_a_real_stateful_adaptive_sizer_grows_at_the_intended_rate()]] - code - rag/test_orchestrator.py
- [[test_permanent_embed_error_quarantines_immediately_no_retry()]] - code - rag/test_orchestrator.py
- [[test_poisoned_paper_is_quarantined_and_the_rest_complete()]] - code - rag/test_orchestrator.py
- [[test_quarantine_removes_the_row_and_records_it()]] - code - rag/fakes/test_fake_ingest_state.py
- [[test_reaching_done_clears_artifacts()]] - code - rag/fakes/test_fake_ingest_state.py
- [[test_rerun_produces_no_duplicates_and_re_invokes_no_stage()]] - code - rag/test_orchestrator.py
- [[test_resume_after_stored_reruns_upsert_and_reaches_done()]] - code - rag/test_orchestrator.py
- [[test_resume_after_summarized_does_not_reinvoke_chunker_or_summarizer()]] - code - rag/test_orchestrator.py
- [[test_source_of_truth_is_written_before_the_derived_index()]] - code - rag/test_orchestrator.py
- [[test_stage_of_reflects_current_stage_and_none_when_unknown()]] - code - rag/fakes/test_fake_ingest_state.py
- [[test_transient_embed_error_exhausts_retries_then_quarantines_and_the_rest_complete()]] - code - rag/test_orchestrator.py
- [[test_transient_embed_error_on_the_resume_path_is_also_guarded()]] - code - rag/test_orchestrator.py
- [[test_transient_embed_error_recovers_after_bounded_retry()]] - code - rag/test_orchestrator.py
- [[test_transient_parse_error_exhausts_retries_then_quarantines_and_the_rest_complete()]] - code - rag/test_orchestrator.py
- [[test_transient_parse_error_recovers_after_bounded_retry()]] - code - rag/test_orchestrator.py
- [[test_transient_summarize_error_exhausts_retries_then_quarantines_and_the_rest_complete()]] - code - rag/test_orchestrator.py
- [[test_transient_summarize_error_recovers_after_bounded_retry()]] - code - rag/test_orchestrator.py
- [[test_transient_topic_query_vec_error_exhausts_retries_then_crashes_loud()]] - code - rag/test_orchestrator.py
- [[test_transient_topic_query_vec_error_recovers_after_bounded_retry()]] - code - rag/test_orchestrator.py
- [[test_transient_upsert_error_exhausts_retries_then_quarantines_and_the_rest_complete()]] - code - rag/test_orchestrator.py
- [[test_transient_upsert_error_recovers_after_bounded_retry()]] - code - rag/test_orchestrator.py
- [[test_unknown_field_raises()]] - code - contracts/test_ingest_state.py
- [[test_wrong_type_raises()_5]] - code - contracts/test_ingest_state.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_orchestratorpy
SORT file.name ASC
```

## Connections to other communities
- 44 edges to [[_COMMUNITY_ParsedDoc]]
- 29 edges to [[_COMMUNITY_Anchor]]
- 20 edges to [[_COMMUNITY_PaperRecord]]
- 15 edges to [[_COMMUNITY_PermanentError]]
- 14 edges to [[_COMMUNITY_PaperRef]]
- 13 edges to [[_COMMUNITY_FakeVectorStore]]
- 9 edges to [[_COMMUNITY_migrate]]
- 8 edges to [[_COMMUNITY___init__.py]]
- 6 edges to [[_COMMUNITY_AdaptiveBatchSizer]]
- 6 edges to [[_COMMUNITY_Config]]
- 6 edges to [[_COMMUNITY_FakeGpuLock]]
- 6 edges to [[_COMMUNITY_FakeSource]]
- 3 edges to [[_COMMUNITY_test_ingest.py]]
- 3 edges to [[_COMMUNITY_FakeTeiLifecycle]]
- 2 edges to [[_COMMUNITY_assembly.py]]
- 2 edges to [[_COMMUNITY_test_embedder.py]]
- 1 edge to [[_COMMUNITY_prefetch_pdfs.py]]
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY_test_prefetch_pdfs.py]]
- 1 edge to [[_COMMUNITY_load_config]]
- 1 edge to [[_COMMUNITY_SearchFilters]]
- 1 edge to [[_COMMUNITY_test_build_corpus.py]]

## Top bridge nodes
- [[test_orchestrator.py]] - degree 88, connects to 15 communities
- [[Rig]] - degree 53, connects to 10 communities
- [[EmbedderSpy_1]] - degree 36, connects to 10 communities
- [[SpyBatchParser]] - degree 32, connects to 10 communities
- [[RecordingVectorIndex_1]] - degree 28, connects to 10 communities