---
source_file: "rag/test_orchestrator.py"
type: "code"
community: "test_orchestrator.py"
location: "L260"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_orchestratorpy
---

# EmbedderSpy

## Connections
- [[.__init__()_70]] - `method` [EXTRACTED]
- [[.call_count()]] - `method` [EXTRACTED]
- [[.embed()_5]] - `method` [EXTRACTED]
- [[.info()_4]] - `method` [EXTRACTED]
- [[.new_orchestrator()]] - `calls` [EXTRACTED]
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
- [[PaperRecord]] - `uses` [INFERRED]
- [[PaperRef]] - `uses` [INFERRED]
- [[ParsedDoc]] - `uses` [INFERRED]
- [[PermanentError]] - `uses` [INFERRED]
- [[TransientError]] - `uses` [INFERRED]
- [[Wraps the committed FakeEmbedder, counting `embed()` calls (for the N+1 hoist as]] - `rationale_for` [EXTRACTED]
- [[test_before_embed_hook_fires_once_per_paper_right_before_that_papers_embed_call()]] - `calls` [EXTRACTED]
- [[test_embed_is_called_n_plus_one_times_not_two_n()]] - `calls` [EXTRACTED]
- [[test_on_stage_hook_on_the_resume_path_fires_embed_then_store_without_summarize()]] - `calls` [EXTRACTED]
- [[test_orchestrator.py]] - `contains` [EXTRACTED]
- [[test_permanent_embed_error_quarantines_immediately_no_retry()]] - `calls` [EXTRACTED]
- [[test_rerun_produces_no_duplicates_and_re_invokes_no_stage()]] - `calls` [EXTRACTED]
- [[test_resume_after_stored_reruns_upsert_and_reaches_done()]] - `calls` [EXTRACTED]
- [[test_resume_after_summarized_does_not_reinvoke_chunker_or_summarizer()]] - `calls` [EXTRACTED]
- [[test_transient_embed_error_exhausts_retries_then_quarantines_and_the_rest_complete()]] - `calls` [EXTRACTED]
- [[test_transient_embed_error_on_the_resume_path_is_also_guarded()]] - `calls` [EXTRACTED]
- [[test_transient_embed_error_recovers_after_bounded_retry()]] - `calls` [EXTRACTED]
- [[test_transient_topic_query_vec_error_exhausts_retries_then_crashes_loud()]] - `calls` [EXTRACTED]
- [[test_transient_topic_query_vec_error_recovers_after_bounded_retry()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_orchestratorpy