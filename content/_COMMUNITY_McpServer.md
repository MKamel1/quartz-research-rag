---
type: community
cohesion: 0.15
members: 17
---

# McpServer

**Cohesion:** 0.15 - loosely connected
**Members:** 17 nodes

## Members
- [[.__init__()_45]] - code - rag/mcp_server.py
- [[._coverage()]] - code - rag/mcp_server.py
- [[._distinct_section_paths()]] - code - rag/mcp_server.py
- [[._resolve_k()]] - code - rag/mcp_server.py
- [[.get_paper()_1]] - code - rag/mcp_server.py
- [[.get_span()_2]] - code - rag/mcp_server.py
- [[.retriever()]] - code - rag/mcp_server.py
- [[.search_papers()_1]] - code - rag/mcp_server.py
- [[.semantic_search()_1]] - code - rag/mcp_server.py
- [[Constructor-injected collaborators only (CONVENTIONS §2) `retriever`, `document]] - rationale - rag/mcp_server.py
- [[McpServer]] - code - rag/mcp_server.py
- [[Passage-level search, delegated whole to `Retriever.retrieve()`. Always searches]] - rationale - rag/mcp_server.py
- [[Precondition `anchor` resolves to a stored block; else `ContractError` (a dangl]] - rationale - rag/mcp_server.py
- [[Precondition `paper_id` is a stored paper; else `ContractError`. Postcondition]] - rationale - rag/mcp_server.py
- [[Read-only access to the injected `Retriever`, for a caller that needs its raw]] - rationale - rag/mcp_server.py
- [[Whole-papersummary-level search, delegated whole to `Retriever.retrieve_papers(]] - rationale - rag/mcp_server.py
- [[`k=None` - `self._default_k`; either way, clamp to `_MIN_K, _MAX_K` (OG-485)]] - rationale - rag/mcp_server.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/McpServer
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY___init__.py]]
- 3 edges to [[_COMMUNITY_SearchFilters]]
- 2 edges to [[_COMMUNITY_ContractError]]
- 2 edges to [[_COMMUNITY_Anchor]]
- 2 edges to [[_COMMUNITY_RetrievalCoverage]]
- 1 edge to [[_COMMUNITY_assembly.py]]
- 1 edge to [[_COMMUNITY_Config]]

## Top bridge nodes
- [[McpServer]] - degree 22, connects to 7 communities
- [[.get_paper()_1]] - degree 6, connects to 2 communities
- [[.search_papers()_1]] - degree 6, connects to 2 communities
- [[.semantic_search()_1]] - degree 6, connects to 2 communities
- [[._coverage()]] - degree 5, connects to 2 communities