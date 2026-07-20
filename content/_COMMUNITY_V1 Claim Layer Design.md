---
type: community
cohesion: 0.21
members: 14
---

# V1 Claim Layer Design

**Cohesion:** 0.21 - loosely connected
**Members:** 14 nodes

## Members
- [[Design V1 Claim Layer]] - rationale - docs/DESIGN-claim-layer-v1.md
- [[Module 1 Claim contract (contractsclaim.py)]] - concept - docs/DESIGN-claim-layer-v1.md
- [[Module 2 ClaimRelation contract]] - concept - docs/DESIGN-claim-layer-v1.md
- [[Module 3 ClaimExtractor seam (ragclaim_extractor.py)]] - concept - docs/DESIGN-claim-layer-v1.md
- [[Module 4 claim persistence (migrations0004_claims.sql)]] - concept - docs/DESIGN-claim-layer-v1.md
- [[Roadmap and Priorities, Plain English]] - document - docs/ROADMAP-AND-PRIORITIES-PLAIN-ENGLISH.md
- [[T-V1-CLAIM-EXTRACT claim extraction pipeline stage]] - concept - WORK-BREAKDOWN.md
- [[T-V1-CLAIM-SCHEMA claim data model (ADR-12)]] - concept - WORK-BREAKDOWN.md
- [[T-V1-DEDUP duplicate claim detection]] - concept - WORK-BREAKDOWN.md
- [[T-V1-HEADERS contextual-retrieval headers (ADR-07, HOLD)]] - concept - WORK-BREAKDOWN.md
- [[T-V1-S3 Spike 3 claim extraction feasibility (DONE, GO flag-only)]] - concept - WORK-BREAKDOWN.md
- [[T-V1-TIERS activate evidence-tier envelope BCD]] - concept - WORK-BREAKDOWN.md
- [[T-V1-VLLM generation-side vLLM migration]] - concept - WORK-BREAKDOWN.md
- [[The One Decision Needed, Plain English]] - document - docs/THE-DECISION-plain-english.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/V1_Claim_Layer_Design
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_WORK-BREAKDOWN]]
- 2 edges to [[_COMMUNITY_M7 Retriever]]

## Top bridge nodes
- [[T-V1-HEADERS contextual-retrieval headers (ADR-07, HOLD)]] - degree 3, connects to 2 communities
- [[T-V1-CLAIM-EXTRACT claim extraction pipeline stage]] - degree 6, connects to 1 community
- [[Roadmap and Priorities, Plain English]] - degree 5, connects to 1 community
- [[T-V1-CLAIM-SCHEMA claim data model (ADR-12)]] - degree 5, connects to 1 community
- [[The One Decision Needed, Plain English]] - degree 3, connects to 1 community