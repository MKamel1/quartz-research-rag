---
type: community
cohesion: 0.20
members: 21
---

# ARCHITECTURE.md

**Cohesion:** 0.20 - loosely connected
**Members:** 21 nodes

## Members
- [[.phase0-datateval-results]] - document - PRD.md
- [[ADR-11 RAG pipeline — hybrid → RRF → rerank → synthesize]] - rationale - PRD.md
- [[AGENTS]] - document - AGENTS.md
- [[ARCHITECTURE]] - document - ARCHITECTURE.md
- [[CLAUDE]] - document - CLAUDE.md
- [[CONVENTIONS]] - document - CONVENTIONS.md
- [[DATA-CONTRACTS]] - document - DATA-CONTRACTS.md
- [[EXECUTION-READINESS-REVIEW]] - document - EXECUTION-READINESS-REVIEW.md
- [[Foundation Freeze Mechanism]] - concept - GIT-WORKFLOW.md
- [[GIT-WORKFLOW]] - document - GIT-WORKFLOW.md
- [[LESSONS-LEARNED]] - document - LESSONS-LEARNED.md
- [[M5 Ship criterion milestone]] - concept - WORK-BREAKDOWN.md
- [[PHASE0-RUNBOOK]] - document - PHASE0-RUNBOOK.md
- [[PRD]] - document - PRD.md
- [[README.md (agent-rag-research)]] - document - README.md
- [[T-DOC29 env-var leak in app]] - concept - WORK-BREAKDOWN.md
- [[T-DOC30 real killresume verification]] - concept - WORK-BREAKDOWN.md
- [[T-DOC33 real MCP ship-criterion verification]] - concept - WORK-BREAKDOWN.md
- [[T-F6 enforcement job]] - concept - WORK-BREAKDOWN.md
- [[TEST-STRATEGY]] - document - TEST-STRATEGY.md
- [[V0 Phase Definition]] - concept - CONTEXT.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/ARCHITECTUREmd
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_WORK-BREAKDOWN]]
- 5 edges to [[_COMMUNITY_ADR-12 Knowledge representation — claim-centric]]
- 4 edges to [[_COMMUNITY_ADR-06 PDF parsing — MinerUMarker + GROBID]]
- 2 edges to [[_COMMUNITY_Orchestrator module (M9)]]
- 2 edges to [[_COMMUNITY_ADR-01 Vector database — Qdrant]]
- 1 edge to [[_COMMUNITY_SearchFilters]]
- 1 edge to [[_COMMUNITY_Retriever module (M7)]]
- 1 edge to [[_COMMUNITY_T-DOC35 59 orphaned done-papers with no chunks]]
- 1 edge to [[_COMMUNITY_T-B1 Parser (M2)]]

## Top bridge nodes
- [[ARCHITECTURE]] - degree 15, connects to 4 communities
- [[PHASE0-RUNBOOK]] - degree 10, connects to 4 communities
- [[ADR-11 RAG pipeline — hybrid → RRF → rerank → synthesize]] - degree 7, connects to 3 communities
- [[DATA-CONTRACTS]] - degree 13, connects to 2 communities
- [[LESSONS-LEARNED]] - degree 9, connects to 2 communities