---
type: community
cohesion: 0.16
members: 22
---

# harvest_refs

**Cohesion:** 0.16 - loosely connected
**Members:** 22 nodes

## Members
- [[.__init__()_7]] - code - app/test_assembly.py
- [[.fetch_by_ids()]] - code - app/test_assembly.py
- [[Backwards compatibility the current 2,542-file cache is `.pdf`-only (no `.json`]] - rationale - app/test_assembly.py
- [[Records every `fetch_by_ids` call and returns canned refs  raises canned errors]] - rationale - app/test_assembly.py
- [[The retry is bounded, not infinite -- once genuinely exhausted this must still s]] - rationale - app/test_assembly.py
- [[_StubArxivSource]] - code - app/test_assembly.py
- [[_transient_429()]] - code - app/test_assembly.py
- [[_write_cached_ref()]] - code - app/test_assembly.py
- [[`config.ingest_paper_ids` (optional list of base arXiv ids, T-EVAL harvest-scopi]] - rationale - app/assembly.py
- [[`config.pdf_cache_dir = ` (T-DOC29's documented explicitly disabled sentinel]] - rationale - app/test_assembly.py
- [[harvest_refs()]] - code - app/assembly.py
- [[test_fetch_by_ids_backoff_clamps_an_excessive_retry_after()]] - code - app/test_assembly.py
- [[test_fetch_by_ids_backoff_falls_back_to_exponential_when_retry_after_absent()]] - code - app/test_assembly.py
- [[test_fetch_by_ids_backoff_falls_back_to_exponential_when_retry_after_unparseable()]] - code - app/test_assembly.py
- [[test_fetch_by_ids_backoff_honors_retry_after_http_date_form()]] - code - app/test_assembly.py
- [[test_fetch_by_ids_backoff_honors_retry_after_seconds_form()]] - code - app/test_assembly.py
- [[test_harvest_refs_cache_first_makes_zero_network_calls_when_both_files_are_cached()]] - code - app/test_assembly.py
- [[test_harvest_refs_empty_pdf_cache_dir_disables_the_cache_check()]] - code - app/test_assembly.py
- [[test_harvest_refs_falls_back_to_arxiv_for_a_pdf_only_cache_entry()]] - code - app/test_assembly.py
- [[test_harvest_refs_only_fetches_the_ids_missing_from_cache()]] - code - app/test_assembly.py
- [[test_harvest_refs_raises_once_the_429_retry_budget_is_exhausted()]] - code - app/test_assembly.py
- [[test_harvest_refs_retries_a_429_with_backoff_then_succeeds()]] - code - app/test_assembly.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/harvest_refs
SORT file.name ASC
```

## Connections to other communities
- 26 edges to [[_COMMUNITY_test_assembly.py]]
- 13 edges to [[_COMMUNITY_Config]]
- 6 edges to [[_COMMUNITY_PermanentError]]
- 4 edges to [[_COMMUNITY_build_ingestion_orchestrator]]
- 4 edges to [[_COMMUNITY_PaperRef]]
- 2 edges to [[_COMMUNITY_assembly.py]]
- 2 edges to [[_COMMUNITY_test_parse_phase.py]]
- 1 edge to [[_COMMUNITY_AdaptiveBatchSizer]]
- 1 edge to [[_COMMUNITY_ingest.py]]

## Top bridge nodes
- [[harvest_refs()]] - degree 26, connects to 8 communities
- [[_StubArxivSource]] - degree 19, connects to 5 communities
- [[test_harvest_refs_raises_once_the_429_retry_budget_is_exhausted()]] - degree 6, connects to 3 communities
- [[test_harvest_refs_retries_a_429_with_backoff_then_succeeds()]] - degree 6, connects to 3 communities
- [[_write_cached_ref()]] - degree 6, connects to 3 communities