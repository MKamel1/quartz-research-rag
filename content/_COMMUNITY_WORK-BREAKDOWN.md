---
type: community
cohesion: 0.06
members: 47
---

# WORK-BREAKDOWN.md

**Cohesion:** 0.06 - loosely connected
**Members:** 47 nodes

## Members
- [[Branch Naming Convention]] - concept - GIT-WORKFLOW.md
- [[Config.corpus_cap (30000)]] - concept - config.yaml
- [[OG-28 _ensure_collection race under parse-workers]] - concept - WORK-BREAKDOWN.md
- [[Principal Design Review RAG V0-V3]] - rationale - rag_v0_design_review.md
- [[T-DOC10 harvest quarantine visibility]] - concept - WORK-BREAKDOWN.md
- [[T-DOC12 parse phase error boundary]] - concept - WORK-BREAKDOWN.md
- [[T-DOC13 finish phase error boundary]] - concept - WORK-BREAKDOWN.md
- [[T-DOC15 MinerU VRAM peak doc fix]] - concept - WORK-BREAKDOWN.md
- [[T-DOC16 MinerU batch parse]] - concept - WORK-BREAKDOWN.md
- [[T-DOC17 quarantine diagnostics]] - concept - WORK-BREAKDOWN.md
- [[T-DOC18 PDF cache check]] - concept - WORK-BREAKDOWN.md
- [[T-DOC19 TEI Pass-1 eviction]] - concept - WORK-BREAKDOWN.md
- [[T-DOC20 doc-sync entry (GPU util audit)]] - concept - WORK-BREAKDOWN.md
- [[T-DOC32 quarantine write crash guard]] - concept - WORK-BREAKDOWN.md
- [[T-DOC43 preflightdoctor + service lifecycle]] - concept - WORK-BREAKDOWN.md
- [[T-DOC44 DB auto-provision]] - concept - WORK-BREAKDOWN.md
- [[T-DOC45 run-scoped corpus cap]] - concept - WORK-BREAKDOWN.md
- [[T-DOC46 scratchbenchmark run mode]] - concept - WORK-BREAKDOWN.md
- [[T-DOC47 run instrumentation & reporting]] - concept - WORK-BREAKDOWN.md
- [[T-DOC48 offlinecache-first ingest]] - concept - WORK-BREAKDOWN.md
- [[T-DOC49 arXiv 429 run-level backoffresume]] - concept - WORK-BREAKDOWN.md
- [[T-DOC4 PDF download rate-limit]] - concept - WORK-BREAKDOWN.md
- [[T-DOC50 prefetch stall visibility]] - concept - WORK-BREAKDOWN.md
- [[T-DOC51 N-worker Pass-1 parallelism]] - concept - WORK-BREAKDOWN.md
- [[T-DOC52 no container restart policy]] - concept - WORK-BREAKDOWN.md
- [[T-DOC53 MinerU vlm backend negative-result record]] - concept - WORK-BREAKDOWN.md
- [[T-DOC54 workstation-dashboard MCP history gaps]] - concept - WORK-BREAKDOWN.md
- [[T-DOC55 controlled benchmark harness]] - concept - WORK-BREAKDOWN.md
- [[T-DOC57 retrieval_eval per-question rows]] - concept - WORK-BREAKDOWN.md
- [[T-DOC58 arXiv 429 backoff honors Retry-After]] - concept - WORK-BREAKDOWN.md
- [[T-DOC59 finer telemetry sub-stages]] - concept - WORK-BREAKDOWN.md
- [[T-DOC5 before_embed unload race fix]] - concept - WORK-BREAKDOWN.md
- [[T-DOC60 enable IDF sparse on existing collection]] - concept - WORK-BREAKDOWN.md
- [[T-DOC61 prefetch stdout logging]] - concept - WORK-BREAKDOWN.md
- [[T-DOC62 chunker dedupe leading section header]] - concept - WORK-BREAKDOWN.md
- [[T-DOC63 retrieval diversify-by-paper]] - concept - WORK-BREAKDOWN.md
- [[T-DOC65 production config generation]] - concept - WORK-BREAKDOWN.md
- [[T-DOC66 MCP deploy runbook + connectivity doctor]] - concept - WORK-BREAKDOWN.md
- [[T-DOC67 delete stray repo-root papers.db]] - concept - WORK-BREAKDOWN.md
- [[T-DOC6 unload malformed response handling]] - concept - WORK-BREAKDOWN.md
- [[T-DOC7 PDF transient error retry]] - concept - WORK-BREAKDOWN.md
- [[T-DOC8 arXiv harvest query timeout split]] - concept - WORK-BREAKDOWN.md
- [[T-SEED 30k seed run]] - concept - WORK-BREAKDOWN.md
- [[T-V1-MCP self-describingorchestratable MCP (ADR-17)]] - concept - WORK-BREAKDOWN.md
- [[T-V1-OBSIDIAN Obsidian note-per-paper (implemented, PR 136)]] - concept - WORK-BREAKDOWN.md
- [[T-V1-S5 Spike 5 LLM-consumption behavior]] - concept - WORK-BREAKDOWN.md
- [[WORK-BREAKDOWN]] - document - WORK-BREAKDOWN.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/WORK-BREAKDOWNmd
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_ARCHITECTURE]]
- 8 edges to [[_COMMUNITY_V1 Claim Layer Design]]
- 5 edges to [[_COMMUNITY_M7 Retriever]]
- 3 edges to [[_COMMUNITY_controller.py]]
- 1 edge to [[_COMMUNITY_ADR-06 PDF parsing — MinerUMarker + GROBID]]

## Top bridge nodes
- [[WORK-BREAKDOWN]] - degree 62, connects to 5 communities
- [[T-DOC51 N-worker Pass-1 parallelism]] - degree 4, connects to 1 community
- [[T-DOC48 offlinecache-first ingest]] - degree 3, connects to 1 community
- [[T-V1-S5 Spike 5 LLM-consumption behavior]] - degree 3, connects to 1 community
- [[Config.corpus_cap (30000)]] - degree 2, connects to 1 community