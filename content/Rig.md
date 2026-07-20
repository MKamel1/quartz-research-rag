---
source_file: "rag/test_orchestrator.py"
type: "code"
community: "test_orchestrator.py"
location: "L391"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_orchestratorpy
---

# Rig

## Connections
- [[.__init__()_73]] - `method` [EXTRACTED]
- [[.ingest()_1]] - `method` [EXTRACTED]
- [[.new_orchestrator()]] - `method` [EXTRACTED]
- [[AdaptiveBatchSizer]] - `uses` [INFERRED]
- [[Anchor]] - `uses` [INFERRED]
- [[Block]] - `uses` [INFERRED]
- [[CheckpointArtifacts]] - `uses` [INFERRED]
- [[Chunk]] - `uses` [INFERRED]
- [[Config]] - `uses` [INFERRED]
- [[FakeEmbedder]] - `uses` [INFERRED]
- [[FakeGpuLock]] - `uses` [INFERRED]
- [[FakeIngestState]] - `uses` [INFERRED]
- [[FakeSource]] - `uses` [INFERRED]
- [[FakeSummarizer_1]] - `uses` [INFERRED]
- [[FakeVectorStore]] - `uses` [INFERRED]
- [[One end-to-end fake wiring. `document_store`, `vector_store` (raw FakeVectorStor]] - `rationale_for` [EXTRACTED]
- [[PaperRecord]] - `uses` [INFERRED]
- [[PaperRef]] - `uses` [INFERRED]
- [[ParsedDoc]] - `uses` [INFERRED]
- [[PermanentError]] - `uses` [INFERRED]
- [[TransientError]] - `uses` [INFERRED]
- [[done_ids()]] - `references` [EXTRACTED]
- [[stored_ids()]] - `references` [EXTRACTED]
- [[test_before_embed_hook_fires_once_per_paper_right_before_that_papers_embed_call()]] - `calls` [EXTRACTED]
- [[test_before_finish_phase_hook_fires_after_every_parse_and_before_any_summarize()]] - `calls` [EXTRACTED]
- [[test_before_parse_phase_hook_fires_before_any_parsing()]] - `calls` [EXTRACTED]
- [[test_delete_paper_does_not_touch_other_papers()]] - `calls` [EXTRACTED]
- [[test_delete_paper_of_unknown_paper_id_calls_vector_delete_with_no_ids()]] - `calls` [EXTRACTED]
- [[test_delete_paper_removes_the_paper_from_both_stores()]] - `calls` [EXTRACTED]
- [[test_embed_is_called_n_plus_one_times_not_two_n()]] - `calls` [EXTRACTED]
- [[test_every_stored_paper_has_a_non_null_relevance_score()]] - `calls` [EXTRACTED]
- [[test_full_run_stores_and_finishes_every_paper()]] - `calls` [EXTRACTED]
- [[test_on_stage_hook_fires_summarize_then_embed_then_store_in_order_per_paper()]] - `calls` [EXTRACTED]
- [[test_on_stage_hook_on_the_resume_path_fires_embed_then_store_without_summarize()]] - `calls` [EXTRACTED]
- [[test_orchestrator.py]] - `contains` [EXTRACTED]
- [[test_orchestrator_wraps_no_gpu_work_of_its_own()]] - `calls` [EXTRACTED]
- [[test_permanent_embed_error_quarantines_immediately_no_retry()]] - `calls` [EXTRACTED]
- [[test_poisoned_paper_is_quarantined_and_the_rest_complete()]] - `calls` [EXTRACTED]
- [[test_rerun_produces_no_duplicates_and_re_invokes_no_stage()]] - `calls` [EXTRACTED]
- [[test_resume_after_stored_reruns_upsert_and_reaches_done()]] - `calls` [EXTRACTED]
- [[test_resume_after_summarized_does_not_reinvoke_chunker_or_summarizer()]] - `calls` [EXTRACTED]
- [[test_source_of_truth_is_written_before_the_derived_index()]] - `calls` [EXTRACTED]
- [[test_transient_embed_error_exhausts_retries_then_quarantines_and_the_rest_complete()]] - `calls` [EXTRACTED]
- [[test_transient_embed_error_on_the_resume_path_is_also_guarded()]] - `calls` [EXTRACTED]
- [[test_transient_embed_error_recovers_after_bounded_retry()]] - `calls` [EXTRACTED]
- [[test_transient_parse_error_exhausts_retries_then_quarantines_and_the_rest_complete()]] - `calls` [EXTRACTED]
- [[test_transient_parse_error_recovers_after_bounded_retry()]] - `calls` [EXTRACTED]
- [[test_transient_summarize_error_exhausts_retries_then_quarantines_and_the_rest_complete()]] - `calls` [EXTRACTED]
- [[test_transient_summarize_error_recovers_after_bounded_retry()]] - `calls` [EXTRACTED]
- [[test_transient_topic_query_vec_error_exhausts_retries_then_crashes_loud()]] - `calls` [EXTRACTED]
- [[test_transient_topic_query_vec_error_recovers_after_bounded_retry()]] - `calls` [EXTRACTED]
- [[test_transient_upsert_error_exhausts_retries_then_quarantines_and_the_rest_complete()]] - `calls` [EXTRACTED]
- [[test_transient_upsert_error_recovers_after_bounded_retry()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_orchestratorpy