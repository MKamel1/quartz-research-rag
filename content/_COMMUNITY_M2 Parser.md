---
type: community
cohesion: 0.40
members: 5
---

# M2 Parser

**Cohesion:** 0.40 - moderately connected
**Members:** 5 nodes

## Members
- [[Block_1]] - concept - DATA-CONTRACTS.md
- [[M2 Parser]] - concept - ARCHITECTURE.md
- [[T-DOC31 Parser paper_id hash-fallback fix]] - rationale - LESSONS-LEARNED.md
- [[T-DOC35 59 chunkless papers re-ingested]] - rationale - LESSONS-LEARNED.md
- [[Vendor Dependency Isolation Rule (§1)]] - concept - CONVENTIONS.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/M2_Parser
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_M9 IngestionOrchestrator]]
- 1 edge to [[_COMMUNITY_GroundedResult]]
- 1 edge to [[_COMMUNITY_M7 Retriever_1]]

## Top bridge nodes
- [[M2 Parser]] - degree 5, connects to 2 communities
- [[Vendor Dependency Isolation Rule (§1)]] - degree 3, connects to 2 communities