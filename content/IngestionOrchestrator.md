---
source_file: "rag/orchestrator.py"
type: "code"
community: "PaperRef"
location: "L118"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/PaperRef
---

# IngestionOrchestrator

## Connections
- [[.__init__()_46]] - `method` [EXTRACTED]
- [[._backoff()_2]] - `method` [EXTRACTED]
- [[._embed_topic_query_vec_with_retry()]] - `method` [EXTRACTED]
- [[._embed_with_retry()]] - `method` [EXTRACTED]
- [[._finish()]] - `method` [EXTRACTED]
- [[._finish_checkpoint()]] - `method` [EXTRACTED]
- [[._parse_with_retry()]] - `method` [EXTRACTED]
- [[._prepare()]] - `method` [EXTRACTED]
- [[._prepare_batch()]] - `method` [EXTRACTED]
- [[._stage()]] - `method` [EXTRACTED]
- [[._summarize_with_retry()]] - `method` [EXTRACTED]
- [[._upsert_record()]] - `method` [EXTRACTED]
- [[._upsert_with_retry()]] - `method` [EXTRACTED]
- [[.delete_paper()]] - `method` [EXTRACTED]
- [[.finish_phase()]] - `method` [EXTRACTED]
- [[.harvest()_5]] - `method` [EXTRACTED]
- [[.ingest()]] - `method` [EXTRACTED]
- [[.new_orchestrator()]] - `calls` [EXTRACTED]
- [[.parse_phase()_1]] - `method` [EXTRACTED]
- [[CheckpointArtifacts]] - `uses` [INFERRED]
- [[Chunk]] - `uses` [INFERRED]
- [[Config]] - `uses` [INFERRED]
- [[ContractError]] - `uses` [INFERRED]
- [[DocStoreDouble]] - `uses` [INFERRED]
- [[EmbedderSpy]] - `uses` [INFERRED]
- [[FakeFlakyEmbedder]] - `uses` [INFERRED]
- [[FakePopen]] - `uses` [INFERRED]
- [[FakeTeiLifecycle]] - `uses` [INFERRED]
- [[PaperRecord]] - `uses` [INFERRED]
- [[PaperRef]] - `uses` [INFERRED]
- [[ParsedDoc]] - `uses` [INFERRED]
- [[PermanentError]] - `uses` [INFERRED]
- [[PoisonedParser]] - `uses` [INFERRED]
- [[Preconditions every injected collaborator satisfies its documented interface]] - `rationale_for` [EXTRACTED]
- [[RecordingVectorIndex]] - `uses` [INFERRED]
- [[SpyChunker]] - `uses` [INFERRED]
- [[SpyParser]] - `uses` [INFERRED]
- [[StubHarvester]] - `uses` [INFERRED]
- [[StubHarvester_2]] - `uses` [INFERRED]
- [[SummarizerSpy]] - `uses` [INFERRED]
- [[TransientError]] - `uses` [INFERRED]
- [[_PdfDownloadParser]] - `uses` [INFERRED]
- [[_make_orchestrator()]] - `calls` [EXTRACTED]
- [[_parse_phase_orchestrator()]] - `references` [EXTRACTED]
- [[assembly.py]] - `imports` [EXTRACTED]
- [[build_ingestion_orchestrator()]] - `references` [EXTRACTED]
- [[harvest_refs()]] - `references` [EXTRACTED]
- [[orchestrator.py]] - `contains` [EXTRACTED]
- [[test_crash_and_restart_resumes_via_real_sqlite_schema_without_reinvoking_stages()]] - `calls` [EXTRACTED]
- [[test_ingest.py]] - `imports` [EXTRACTED]
- [[test_ingest_state_sqlite.py]] - `imports` [EXTRACTED]
- [[test_quarantine_write_failure_does_not_crash_the_batch()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/PaperRef