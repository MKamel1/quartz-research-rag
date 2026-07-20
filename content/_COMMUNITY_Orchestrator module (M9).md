---
type: community
cohesion: 0.16
members: 15
---

# Orchestrator module (M9)

**Cohesion:** 0.16 - loosely connected
**Members:** 15 nodes

## Members
- [[Embedder module (M4)]] - code - TEST-STRATEGY.md
- [[FakeEmbedder_1]] - code - TEST-STRATEGY.md
- [[FakeGpuLock_1]] - code - TEST-STRATEGY.md
- [[FakeIngestState_1]] - code - TEST-STRATEGY.md
- [[FakeReranker_1]] - code - TEST-STRATEGY.md
- [[FakeSummarizer_2]] - code - TEST-STRATEGY.md
- [[FakeVectorStore_3]] - code - TEST-STRATEGY.md
- [[Orchestrator module (M9)]] - code - TEST-STRATEGY.md
- [[Summarizer module (M3B)]] - code - TEST-STRATEGY.md
- [[T-A2 IngestionOrchestrator (M9)]] - concept - WORK-BREAKDOWN.md
- [[T-C2 Summarizer (M3B)]] - concept - WORK-BREAKDOWN.md
- [[T-C3 Embedder (M4)]] - concept - WORK-BREAKDOWN.md
- [[T-D2 VectorIndex (M6)]] - concept - WORK-BREAKDOWN.md
- [[T-F4 The fakes]] - concept - WORK-BREAKDOWN.md
- [[VectorIndex module (M6)]] - code - TEST-STRATEGY.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Orchestrator_module_M9
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_ARCHITECTURE]]
- 2 edges to [[_COMMUNITY_Retriever module (M7)]]
- 1 edge to [[_COMMUNITY_FakeSource_1]]

## Top bridge nodes
- [[T-D2 VectorIndex (M6)]] - degree 3, connects to 2 communities
- [[T-F4 The fakes]] - degree 6, connects to 1 community
- [[FakeReranker_1]] - degree 2, connects to 1 community
- [[T-A2 IngestionOrchestrator (M9)]] - degree 2, connects to 1 community