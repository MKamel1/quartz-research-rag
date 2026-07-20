---
type: community
cohesion: 0.18
members: 15
---

# RetrievalCoverage

**Cohesion:** 0.18 - loosely connected
**Members:** 15 nodes

## Members
- [[.__init__()_49]] - code - rag/retriever.py
- [[._distinct_section_paths()_1]] - code - rag/retriever.py
- [[._hybrid_hits()]] - code - rag/retriever.py
- [[.retrieve()_1]] - code - rag/retriever.py
- [[.retrieve()_2]] - code - rag/test_mcp_server.py
- [[.retrieve_papers()]] - code - rag/retriever.py
- [[.retrieve_papers()_1]] - code - rag/test_mcp_server.py
- [[Constructor-injected collaborators only (CONVENTIONS §2) `embedder`, `vector_st]] - rationale - rag/retriever.py
- [[Passage-level search. Every result is grounded a resolvable `anchor` + `citatio]] - rationale - rag/retriever.py
- [[Recovers `paper_id` from a `summary`-kind `Hit.id``RerankCandidate.id` string.]] - rationale - rag/retriever.py
- [[RetrievalCoverage]] - code - contracts/retriever.py
- [[Retriever_2]] - code - rag/retriever.py
- [[T-DOC28 the true pre-rerankpre-top_k candidate-pool size behind one `retrieve(]] - rationale - contracts/retriever.py
- [[Whole-papersummary-level search. Deliberately unanchored — a summary has no blo]] - rationale - rag/retriever.py
- [[_paper_id_from_summary_hit_id()_1]] - code - rag/retriever.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/RetrievalCoverage
SORT file.name ASC
```

## Connections to other communities
- 15 edges to [[_COMMUNITY___init__.py]]
- 5 edges to [[_COMMUNITY_test_mcp_server.py]]
- 4 edges to [[_COMMUNITY_FakeVectorStore]]
- 4 edges to [[_COMMUNITY_SearchFilters]]
- 3 edges to [[_COMMUNITY_TeiReranker]]
- 2 edges to [[_COMMUNITY_McpServer]]
- 1 edge to [[_COMMUNITY_assembly.py]]
- 1 edge to [[_COMMUNITY_Config]]
- 1 edge to [[_COMMUNITY_ContractError]]
- 1 edge to [[_COMMUNITY_Anchor]]

## Top bridge nodes
- [[Retriever_2]] - degree 17, connects to 6 communities
- [[RetrievalCoverage]] - degree 20, connects to 5 communities
- [[.retrieve_papers()]] - degree 11, connects to 3 communities
- [[.retrieve()_1]] - degree 8, connects to 3 communities
- [[._hybrid_hits()]] - degree 4, connects to 1 community