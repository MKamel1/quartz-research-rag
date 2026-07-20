---
type: community
cohesion: 0.22
members: 9
---

# Retriever module (M7)

**Cohesion:** 0.22 - loosely connected
**Members:** 9 nodes

## Members
- [[DocumentStore module (M5)]] - code - TEST-STRATEGY.md
- [[McpServer module (M8)]] - code - TEST-STRATEGY.md
- [[PaperSearchResponse_1]] - concept - DATA-CONTRACTS.md
- [[PaperSearchResult_1]] - concept - DATA-CONTRACTS.md
- [[Retriever module (M7)]] - code - TEST-STRATEGY.md
- [[SearchResponse_1]] - concept - DATA-CONTRACTS.md
- [[T-D1 DocumentStore (M5)]] - concept - WORK-BREAKDOWN.md
- [[T-E1 Retriever (M7)]] - concept - WORK-BREAKDOWN.md
- [[T-E2 McpServer (M8)]] - concept - WORK-BREAKDOWN.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Retriever_module_M7
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_Orchestrator module (M9)]]
- 1 edge to [[_COMMUNITY_ARCHITECTURE]]
- 1 edge to [[_COMMUNITY_M7 Retriever_1]]
- 1 edge to [[_COMMUNITY_GroundedResult]]
- 1 edge to [[_COMMUNITY_T-DOC35 59 orphaned done-papers with no chunks]]

## Top bridge nodes
- [[Retriever module (M7)]] - degree 6, connects to 2 communities
- [[T-E1 Retriever (M7)]] - degree 3, connects to 2 communities
- [[PaperSearchResult_1]] - degree 2, connects to 1 community
- [[T-D1 DocumentStore (M5)]] - degree 2, connects to 1 community