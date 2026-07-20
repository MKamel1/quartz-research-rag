---
type: community
cohesion: 0.18
members: 11
---

# ADR-01: Vector database — Qdrant

**Cohesion:** 0.18 - loosely connected
**Members:** 11 nodes

## Members
- [[ADR-01 Vector database — Qdrant]] - rationale - PRD.md
- [[ADR-04 Embedding model designed as replaceable]] - rationale - PRD.md
- [[ADR-07 Chunking — structure-aware (V0); contextual headers V1]] - rationale - PRD.md
- [[Chroma (vector DB, rejected for V0)]] - concept - PRD.md
- [[Goal G3 Proactive research radar]] - concept - PRD.md
- [[LanceDB (embedded vector DB fallback)]] - concept - PRD.md
- [[Phase 3 (v3) Proactive Research Radar]] - document - PRD.md
- [[Phase V0 Plain Grounded RAG Cache]] - document - PRD.md
- [[Phased Roadmap (§9)]] - document - PRD.md
- [[Qdrant (vector DB)]] - concept - PRD.md
- [[Qwen3-Embedding-4B]] - concept - PRD.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/ADR-01_Vector_database__Qdrant
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_ADR-12 Knowledge representation — claim-centric]]
- 2 edges to [[_COMMUNITY_ARCHITECTURE]]
- 2 edges to [[_COMMUNITY_ADR-06 PDF parsing — MinerUMarker + GROBID]]
- 1 edge to [[_COMMUNITY_SearchFilters]]
- 1 edge to [[_COMMUNITY_ADR-09 LLM serving stack — Ollama now, vLLM for V1]]

## Top bridge nodes
- [[Phased Roadmap (§9)]] - degree 5, connects to 3 communities
- [[Phase V0 Plain Grounded RAG Cache]] - degree 5, connects to 2 communities
- [[Qdrant (vector DB)]] - degree 3, connects to 2 communities
- [[ADR-07 Chunking — structure-aware (V0); contextual headers V1]] - degree 2, connects to 1 community
- [[Qwen3-Embedding-4B]] - degree 2, connects to 1 community