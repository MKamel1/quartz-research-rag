---
source_file: "rag/test_orchestrator.py"
type: "code"
community: "test_orchestrator.py"
location: "L345"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/test_orchestratorpy
---

# RecordingVectorIndex

## Connections
- [[.__init__()_72]] - `method` [EXTRACTED]
- [[.delete()_3]] - `method` [EXTRACTED]
- [[.new_orchestrator()]] - `calls` [EXTRACTED]
- [[.upsert()_3]] - `method` [EXTRACTED]
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
- [[Wraps a real FakeVectorStore, logging each `upsert` to the shared `events` and o]] - `rationale_for` [EXTRACTED]
- [[test_on_stage_hook_on_the_resume_path_fires_embed_then_store_without_summarize()]] - `calls` [EXTRACTED]
- [[test_orchestrator.py]] - `contains` [EXTRACTED]
- [[test_resume_after_stored_reruns_upsert_and_reaches_done()]] - `calls` [EXTRACTED]
- [[test_transient_embed_error_on_the_resume_path_is_also_guarded()]] - `calls` [EXTRACTED]
- [[test_transient_upsert_error_exhausts_retries_then_quarantines_and_the_rest_complete()]] - `calls` [EXTRACTED]
- [[test_transient_upsert_error_recovers_after_bounded_retry()]] - `calls` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/test_orchestratorpy