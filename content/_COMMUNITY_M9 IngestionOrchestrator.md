---
type: community
cohesion: 0.24
members: 12
---

# M9 IngestionOrchestrator

**Cohesion:** 0.24 - loosely connected
**Members:** 12 nodes

## Members
- [[Config_1]] - concept - DATA-CONTRACTS.md
- [[Error Handling Taxonomy (§4)]] - concept - CONVENTIONS.md
- [[GpuLock_1]] - concept - DATA-CONTRACTS.md
- [[Idempotency & ingest_state Pattern (§5)]] - concept - CONVENTIONS.md
- [[M1 Harvester]] - concept - ARCHITECTURE.md
- [[M3B Summarizer]] - concept - ARCHITECTURE.md
- [[M4 Embedder]] - concept - ARCHITECTURE.md
- [[M9 IngestionOrchestrator]] - concept - ARCHITECTURE.md
- [[MinerU + Summarizer VRAM co-residency OOM finding]] - rationale - LESSONS-LEARNED.md
- [[Single-GPU Rule (§6)]] - concept - CONVENTIONS.md
- [[T-DOC30 OS-level kill-mid-ingest resume verification]] - rationale - LESSONS-LEARNED.md
- [[appbuild_corpus.py (continuous corpus builder)]] - code - ARCHITECTURE.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/M9_IngestionOrchestrator
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_M7 Retriever_1]]
- 2 edges to [[_COMMUNITY_M2 Parser]]
- 1 edge to [[_COMMUNITY_GroundedResult]]

## Top bridge nodes
- [[M9 IngestionOrchestrator]] - degree 15, connects to 3 communities
- [[GpuLock_1]] - degree 5, connects to 1 community
- [[M4 Embedder]] - degree 3, connects to 1 community
- [[M3B Summarizer]] - degree 3, connects to 1 community