---
type: community
cohesion: 0.19
members: 14
---

# ADR-06: PDF parsing — MinerU/Marker + GROBID

**Cohesion:** 0.19 - loosely connected
**Members:** 14 nodes

## Members
- [[ADR-02 Embedding model — Qwen3-Embedding-4B]] - rationale - PRD.md
- [[ADR-06 PDF parsing — MinerUMarker + GROBID]] - rationale - PRD.md
- [[ADR-10 Reranker — BGE-reranker-v2-m3]] - rationale - PRD.md
- [[BGE-M3 (embedding baseline)]] - concept - PRD.md
- [[BGE-reranker-v2-m3]] - concept - PRD.md
- [[Docling (PDF parser, conditional)]] - concept - PRD.md
- [[GROBID (metadatareference parser)]] - concept - PRD.md
- [[Marker (PDF parser, rejected)]] - concept - PRD.md
- [[MinerU (PDF parser)]] - concept - PRD.md
- [[Nougat (PDF parser, obsoletedropped)]] - concept - PRD.md
- [[Phase 0 Foundation & De-risking]] - document - PRD.md
- [[SCHEDULE.md (V0 build plan)]] - document - SCHEDULE.md
- [[migrations0001_init.sql]] - code - SCHEDULE.md
- [[phase0-results]] - document - phase0-results.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/ADR-06_PDF_parsing__MinerU/Marker__GROBID
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_ARCHITECTURE]]
- 2 edges to [[_COMMUNITY_ADR-01 Vector database — Qdrant]]
- 2 edges to [[_COMMUNITY_ADR-12 Knowledge representation — claim-centric]]
- 2 edges to [[_COMMUNITY_ADR-09 LLM serving stack — Ollama now, vLLM for V1]]
- 1 edge to [[_COMMUNITY_DiffFile]]
- 1 edge to [[_COMMUNITY_TeiReranker]]
- 1 edge to [[_COMMUNITY_WORK-BREAKDOWN]]

## Top bridge nodes
- [[Phase 0 Foundation & De-risking]] - degree 8, connects to 3 communities
- [[SCHEDULE.md (V0 build plan)]] - degree 8, connects to 3 communities
- [[ADR-02 Embedding model — Qwen3-Embedding-4B]] - degree 6, connects to 2 communities
- [[ADR-10 Reranker — BGE-reranker-v2-m3]] - degree 5, connects to 2 communities
- [[ADR-06 PDF parsing — MinerUMarker + GROBID]] - degree 9, connects to 1 community