---
type: community
cohesion: 0.28
members: 9
---

# ADR-09: LLM serving stack — Ollama now, vLLM for V1

**Cohesion:** 0.28 - loosely connected
**Members:** 9 nodes

## Members
- [[.phase0-dataknown-issue-pass2-oom]] - document - PRD.md
- [[.phase0-datavllm-spike-results]] - document - PRD.md
- [[ADR-03 Embedding serving — TEIInfinity]] - rationale - PRD.md
- [[ADR-09 LLM serving stack — Ollama now, vLLM for V1]] - rationale - PRD.md
- [[Ollama (LLM serving)]] - concept - PRD.md
- [[Phase 1 (V1) Claim Enrichment + KB]] - document - PRD.md
- [[T-VLLM-1 (vLLM embedder spike)]] - rationale - PRD.md
- [[TEI (Text Embeddings Inference)]] - concept - PRD.md
- [[vLLM (LLM serving)]] - concept - PRD.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/ADR-09_LLM_serving_stack__Ollama_now_vLLM_for_V1
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_ADR-12 Knowledge representation — claim-centric]]
- 2 edges to [[_COMMUNITY_GpuLock]]
- 2 edges to [[_COMMUNITY_ADR-06 PDF parsing — MinerUMarker + GROBID]]
- 1 edge to [[_COMMUNITY_TeiReranker]]
- 1 edge to [[_COMMUNITY_ADR-01 Vector database — Qdrant]]

## Top bridge nodes
- [[ADR-09 LLM serving stack — Ollama now, vLLM for V1]] - degree 7, connects to 2 communities
- [[TEI (Text Embeddings Inference)]] - degree 5, connects to 2 communities
- [[Phase 1 (V1) Claim Enrichment + KB]] - degree 4, connects to 2 communities
- [[Ollama (LLM serving)]] - degree 3, connects to 1 community