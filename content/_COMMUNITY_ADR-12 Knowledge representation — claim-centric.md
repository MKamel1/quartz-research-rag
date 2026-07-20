---
type: community
cohesion: 0.13
members: 22
---

# ADR-12: Knowledge representation — claim-centric

**Cohesion:** 0.13 - loosely connected
**Members:** 22 nodes

## Members
- [[ADR-05 Relational store — SQLite]] - rationale - PRD.md
- [[ADR-08 Summarizationclaim-extraction LLM — tiered Qwen]] - rationale - PRD.md
- [[ADR-12 Knowledge representation — claim-centric]] - rationale - PRD.md
- [[ADR-13 Capture figurestables as artifacts during initial parse]] - rationale - PRD.md
- [[ADR-14 Mathequation handling — prose + LLM-described equations]] - rationale - PRD.md
- [[ADR-15 Graph RAG over citation + claim graphs]] - rationale - PRD.md
- [[ADR-16 Query-layer result contract — evidence tiers]] - rationale - PRD.md
- [[ADR-17 MCP server is self-describing & orchestratable]] - rationale - PRD.md
- [[CONTEXT]] - document - CONTEXT.md
- [[Data Model (claim-centric, §6)]] - document - PRD.md
- [[Goal G1 Zero-token knowledge cache]] - concept - PRD.md
- [[Goal G4 Living memory]] - concept - PRD.md
- [[Living Memory Design — Feasibility (§8)]] - document - PRD.md
- [[MCP legibility & orchestratability (§8.6)]] - document - PRD.md
- [[Obsidian (vaultderived view)]] - concept - PRD.md
- [[Phase 2 (V2) Cited-Answer Engine]] - document - PRD.md
- [[Query-layer result contract (§8.5)]] - document - PRD.md
- [[Qwen3-14B32B (summarizationclaimjudge LLM)]] - concept - PRD.md
- [[SQLite (relational store)]] - concept - PRD.md
- [[Storage layout, lifecycle, sizing & grounding (§6A)]] - document - PRD.md
- [[System Architecture (5 layers)]] - document - PRD.md
- [[Vision Living Research Brain]] - document - PRD.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/ADR-12_Knowledge_representation__claim-centric
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_ARCHITECTURE]]
- 3 edges to [[_COMMUNITY_ADR-01 Vector database — Qdrant]]
- 3 edges to [[_COMMUNITY_ADR-09 LLM serving stack — Ollama now, vLLM for V1]]
- 2 edges to [[_COMMUNITY___init__.py]]
- 2 edges to [[_COMMUNITY_ADR-06 PDF parsing — MinerUMarker + GROBID]]

## Top bridge nodes
- [[ADR-16 Query-layer result contract — evidence tiers]] - degree 7, connects to 3 communities
- [[ADR-12 Knowledge representation — claim-centric]] - degree 7, connects to 2 communities
- [[Storage layout, lifecycle, sizing & grounding (§6A)]] - degree 6, connects to 2 communities
- [[Query-layer result contract (§8.5)]] - degree 5, connects to 2 communities
- [[Living Memory Design — Feasibility (§8)]] - degree 7, connects to 1 community