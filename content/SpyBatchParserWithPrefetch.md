---
source_file: "rag/test_orchestrator.py"
type: "code"
community: "Anchor"
location: "L1063"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Anchor
---

# SpyBatchParserWithPrefetch

## Connections
- [[.__init__()_75]] - `method` [EXTRACTED]
- [[.parse_batch()_2]] - `method` [EXTRACTED]
- [[.prefetch_next_batch()_1]] - `method` [EXTRACTED]
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
- [[SpyBatchParser]] - `inherits` [EXTRACTED]
- [[TransientError]] - `uses` [INFERRED]
- [[`SpyBatchParser` plus the optional `prefetch_next_batch` hook (T-DOC18 Layer 2,]] - `rationale_for` [EXTRACTED]
- [[test_orchestrator.py]] - `contains` [EXTRACTED]
- [[test_parse_phase_prefetch_excludes_refs_already_parsed_or_further_along()]] - `calls` [EXTRACTED]
- [[test_parse_phase_prefetches_the_next_batch_before_the_current_batchs_parse_batch_call()]] - `calls` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/Anchor