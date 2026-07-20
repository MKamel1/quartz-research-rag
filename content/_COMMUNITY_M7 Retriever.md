---
type: community
cohesion: 0.11
members: 27
---

# M7 Retriever

**Cohesion:** 0.11 - loosely connected
**Members:** 27 nodes

## Members
- [[AI Research Knowledge System Scope]] - document - research-kb-system-scope.md
- [[CI workflow (ci.yml)]] - code - .github/workflows/ci.yml
- [[Finding 2 primitive obsession on string IDs]] - rationale - rag_v0_design_review.md
- [[Finding 3 partial write orphan records on quarantine fallback]] - rationale - rag_v0_design_review.md
- [[Finding 4 test brittleness on extensible envelopes]] - rationale - rag_v0_design_review.md
- [[Finding 5 zero-GPUzero-network test isolation proxy]] - rationale - rag_v0_design_review.md
- [[Finding 6 summary retrieval seam breakdown]] - rationale - rag_v0_design_review.md
- [[M2 Parser_1]] - concept - owners/OWNER-B.md
- [[M3 Chunker_1]] - concept - owners/OWNER-C.md
- [[M3B Summarizer_1]] - concept - owners/OWNER-C.md
- [[M4 Embedder_1]] - concept - owners/OWNER-C.md
- [[M5 DocumentStore_1]] - concept - owners/OWNER-D.md
- [[M6 VectorIndex_1]] - concept - owners/OWNER-D.md
- [[M7 Retriever_1]] - concept - owners/OWNER-E.md
- [[M8 McpServer_1]] - concept - owners/OWNER-E.md
- [[Nightly real-adapter workflow]] - code - .github/workflows/nightly-real-adapters.yml
- [[Owner B brief (Parser)]] - document - owners/OWNER-B.md
- [[Owner C brief (ChunkerSummarizerEmbedder)]] - document - owners/OWNER-C.md
- [[Owner D brief (DocumentStoreVectorIndex)]] - document - owners/OWNER-D.md
- [[Owner E brief (RetrieverMcpServer)]] - document - owners/OWNER-E.md
- [[Owner F brief (Shared Foundation)]] - document - owners/OWNER-F.md
- [[Spike 1 lock MinerU as sole V0 Parser adapter]] - concept - phase0-results.md
- [[Spike 2 lock Qwen3-Embedding-4B + hybrid+rerank]] - concept - phase0-results.md
- [[T-DOC64 section-aware retrieval]] - concept - WORK-BREAKDOWN.md
- [[T-DOC9 CI testpaths app coverage]] - concept - WORK-BREAKDOWN.md
- [[Your Use Cases Can the System Do This]] - document - docs/YOUR-USE-CASES-can-the-system-do-this.md
- [[environment.yml]] - code - environment.yml

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/M7_Retriever
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_WORK-BREAKDOWN]]
- 2 edges to [[_COMMUNITY_V1 Claim Layer Design]]
- 1 edge to [[_COMMUNITY_Owner A brief (Harvester + Orchestrator)]]

## Top bridge nodes
- [[Owner C brief (ChunkerSummarizerEmbedder)]] - degree 6, connects to 1 community
- [[Owner F brief (Shared Foundation)]] - degree 5, connects to 1 community
- [[M3 Chunker_1]] - degree 4, connects to 1 community
- [[M6 VectorIndex_1]] - degree 4, connects to 1 community
- [[Your Use Cases Can the System Do This]] - degree 3, connects to 1 community