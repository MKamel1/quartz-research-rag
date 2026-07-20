---
type: community
cohesion: 0.18
members: 13
---

# M7 Retriever

**Cohesion:** 0.18 - loosely connected
**Members:** 13 nodes

## Members
- [[Agent-as-Reasoner Principle]] - concept - CONTEXT.md
- [[Hit_1]] - concept - DATA-CONTRACTS.md
- [[M5 DocumentStore]] - concept - ARCHITECTURE.md
- [[M6 VectorIndex]] - concept - ARCHITECTURE.md
- [[M7 Retriever]] - concept - ARCHITECTURE.md
- [[M8 McpServer]] - concept - ARCHITECTURE.md
- [[PaperRecord_1]] - concept - DATA-CONTRACTS.md
- [[Reranker  RerankCandidate]] - concept - DATA-CONTRACTS.md
- [[RetrievalCoverage_1]] - concept - DATA-CONTRACTS.md
- [[SearchFilters_1]] - concept - DATA-CONTRACTS.md
- [[Spike 2 — Retrieval Quality]] - concept - PHASE0-RUNBOOK.md
- [[T-DOC41 Contextual retrieval AB spike (saturated eval)]] - rationale - LESSONS-LEARNED.md
- [[appdashboard (Corpus Dashboard)]] - code - ARCHITECTURE.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/M7_Retriever
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_M9 IngestionOrchestrator]]
- 2 edges to [[_COMMUNITY_GroundedResult]]
- 1 edge to [[_COMMUNITY_M2 Parser]]
- 1 edge to [[_COMMUNITY_Retriever module (M7)]]

## Top bridge nodes
- [[M7 Retriever]] - degree 9, connects to 2 communities
- [[M6 VectorIndex]] - degree 7, connects to 2 communities
- [[M5 DocumentStore]] - degree 4, connects to 1 community
- [[PaperRecord_1]] - degree 2, connects to 1 community
- [[Reranker  RerankCandidate]] - degree 2, connects to 1 community