---
type: community
cohesion: 0.17
members: 35
---

# test_mcp_server.py

**Cohesion:** 0.17 - loosely connected
**Members:** 35 nodes

## Members
- [[.__init__()_65]] - code - rag/test_mcp_server.py
- [[.__init__()_64]] - code - rag/test_mcp_server.py
- [[.get()_6]] - code - rag/test_mcp_server.py
- [[.get_blocks()_1]] - code - rag/test_mcp_server.py
- [[.get_span()_3]] - code - rag/test_mcp_server.py
- [[.method_names()]] - code - rag/test_mcp_server.py
- [[Minimal DocumentStore stand-in (M5, owner D) with a call log — enough for get_pa]] - rationale - rag/test_mcp_server.py
- [[RecordingDocStore]] - code - rag/test_mcp_server.py
- [[SpyRetriever]] - code - rag/test_mcp_server.py
- [[_anchor()]] - code - rag/test_mcp_server.py
- [[_citation()]] - code - rag/test_mcp_server.py
- [[_grounded()]] - code - rag/test_mcp_server.py
- [[_paper_result()]] - code - rag/test_mcp_server.py
- [[_server()]] - code - rag/test_mcp_server.py
- [[test_citation_resolves_via_get_span()]] - code - rag/test_mcp_server.py
- [[test_default_k_itself_defaults_to_10_when_not_passed()]] - code - rag/test_mcp_server.py
- [[test_get_paper_returns_paper_summary_view()]] - code - rag/test_mcp_server.py
- [[test_get_span_returns_verbatim_source_text()]] - code - rag/test_mcp_server.py
- [[test_mcp_server.py_1]] - code - rag/test_mcp_server.py
- [[test_search_papers_clamps_negative_and_huge_k()]] - code - rag/test_mcp_server.py
- [[test_search_papers_coverage_invariant()]] - code - rag/test_mcp_server.py
- [[test_search_papers_delegates_only_to_retrieve_papers()]] - code - rag/test_mcp_server.py
- [[test_search_papers_explicit_k_overrides_default_k()]] - code - rag/test_mcp_server.py
- [[test_search_papers_returns_paper_search_response_of_records()]] - code - rag/test_mcp_server.py
- [[test_search_papers_uses_default_k_when_caller_omits_it()]] - code - rag/test_mcp_server.py
- [[test_semantic_search_clamps_huge_k_to_max()]] - code - rag/test_mcp_server.py
- [[test_semantic_search_clamps_negative_k_to_min()]] - code - rag/test_mcp_server.py
- [[test_semantic_search_clamps_zero_k_to_min()]] - code - rag/test_mcp_server.py
- [[test_semantic_search_coverage_invariant()]] - code - rag/test_mcp_server.py
- [[test_semantic_search_delegates_only_to_retrieve()]] - code - rag/test_mcp_server.py
- [[test_semantic_search_explicit_k_overrides_default_k()]] - code - rag/test_mcp_server.py
- [[test_semantic_search_in_range_k_is_unaffected()]] - code - rag/test_mcp_server.py
- [[test_semantic_search_returns_search_response_of_records()]] - code - rag/test_mcp_server.py
- [[test_semantic_search_uses_default_k_when_caller_omits_it()]] - code - rag/test_mcp_server.py
- [[test_server_needs_only_retriever_and_document_store()]] - code - rag/test_mcp_server.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_mcp_serverpy
SORT file.name ASC
```

## Connections to other communities
- 31 edges to [[_COMMUNITY___init__.py]]
- 11 edges to [[_COMMUNITY_ParsedDoc]]
- 8 edges to [[_COMMUNITY_Anchor]]
- 5 edges to [[_COMMUNITY_RetrievalCoverage]]
- 4 edges to [[_COMMUNITY_PaperRecord]]
- 4 edges to [[_COMMUNITY_PaperRef]]

## Top bridge nodes
- [[test_mcp_server.py_1]] - degree 43, connects to 6 communities
- [[SpyRetriever]] - degree 37, connects to 6 communities
- [[RecordingDocStore]] - degree 35, connects to 6 communities
- [[test_get_paper_returns_paper_summary_view()]] - degree 10, connects to 4 communities
- [[_grounded()]] - degree 15, connects to 1 community