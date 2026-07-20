---
type: community
cohesion: 0.08
members: 47
---

# test_harvester_arxiv_source.py

**Cohesion:** 0.08 - loosely connected
**Members:** 47 nodes

## Members
- [[Never exercised against the actual vendor before now -- only the canned Atom fee]] - rationale - rag/test_harvester_arxiv_source.py
- [[Offline unit tests for `ArxivSource` (T-A1) — feeds a canned arXiv Atom feed str]] - rationale - rag/test_harvester_arxiv_source.py
- [[T-DOC11 regression a real 250-paper ingest run found arXiv's search API silentl]] - rationale - rag/test_harvester_arxiv_source.py
- [[T-DOC58 a caller with its own retry loop (appassembly.py's `_fetch_by_ids_with]] - rationale - rag/test_harvester_arxiv_source.py
- [[The OG-45 filters and the OG-46 ordering are independent knobs -- both apply tog]] - rationale - rag/test_harvester_arxiv_source.py
- [[make_source()]] - code - rag/test_harvester_arxiv_source.py
- [[test_category_with_invalid_characters_is_rejected()]] - code - rag/test_harvester_arxiv_source.py
- [[test_derives_pdf_and_latex_urls_from_the_versioned_id()]] - code - rag/test_harvester_arxiv_source.py
- [[test_empty_feed_parses_to_no_entries()]] - code - rag/test_harvester_arxiv_source.py
- [[test_every_configured_focus_area_query_is_quoted()]] - code - rag/test_harvester_arxiv_source.py
- [[test_fetch_by_ids_429_diagnostics_carries_the_retry_after_header()]] - code - rag/test_harvester_arxiv_source.py
- [[test_fetch_by_ids_429_diagnostics_retry_after_absent_is_none()]] - code - rag/test_harvester_arxiv_source.py
- [[test_fetch_by_ids_chunks_large_id_lists_and_rate_limits_between_chunks()]] - code - rag/test_harvester_arxiv_source.py
- [[test_fetch_by_ids_empty_list_makes_no_requests()]] - code - rag/test_harvester_arxiv_source.py
- [[test_fetch_by_ids_maps_other_status_to_permanent_error()]] - code - rag/test_harvester_arxiv_source.py
- [[test_fetch_by_ids_maps_retryable_status_to_transient_error()]] - code - rag/test_harvester_arxiv_source.py
- [[test_fetch_by_ids_returns_parsed_refs()]] - code - rag/test_harvester_arxiv_source.py
- [[test_fetch_by_ids_uses_id_list_param_not_search_query()]] - code - rag/test_harvester_arxiv_source.py
- [[test_fetch_issues_one_query_per_focus_area_entry_not_one_combined_query()]] - code - rag/test_harvester_arxiv_source.py
- [[test_fetch_moves_to_the_next_focus_area_entry_when_one_is_exhausted()]] - code - rag/test_harvester_arxiv_source.py
- [[test_fetch_paginates_until_cap_reached()]] - code - rag/test_harvester_arxiv_source.py
- [[test_fetch_shares_one_cap_budget_across_focus_area_entries()]] - code - rag/test_harvester_arxiv_source.py
- [[test_fetch_stops_when_a_page_comes_back_empty()]] - code - rag/test_harvester_arxiv_source.py
- [[test_freshest_first_ordering_sorts_by_submitted_date_descending()]] - code - rag/test_harvester_arxiv_source.py
- [[test_harvester_arxiv_source.py]] - code - rag/test_harvester_arxiv_source.py
- [[test_hyphenated_single_token_term_is_quoted()]] - code - rag/test_harvester_arxiv_source.py
- [[test_malformed_date_from_is_rejected()]] - code - rag/test_harvester_arxiv_source.py
- [[test_malformed_date_to_is_rejected()]] - code - rag/test_harvester_arxiv_source.py
- [[test_malformed_xml_raises_permanent_error()]] - code - rag/test_harvester_arxiv_source.py
- [[test_multi_word_term_is_sent_as_a_quoted_phrase()]] - code - rag/test_harvester_arxiv_source.py
- [[test_parses_authors_and_categories()]] - code - rag/test_harvester_arxiv_source.py
- [[test_parses_dates()]] - code - rag/test_harvester_arxiv_source.py
- [[test_parses_id_into_base_paper_id_and_version()]] - code - rag/test_harvester_arxiv_source.py
- [[test_parses_title_and_abstract_collapsing_whitespace()]] - code - rag/test_harvester_arxiv_source.py
- [[test_query_with_an_open_ended_date_bound_uses_a_wildcard()]] - code - rag/test_harvester_arxiv_source.py
- [[test_query_with_categories_and_dates_combines_both_clauses()]] - code - rag/test_harvester_arxiv_source.py
- [[test_query_with_categories_only_adds_an_or_joined_cat_clause()]] - code - rag/test_harvester_arxiv_source.py
- [[test_query_with_dates_only_adds_a_submitted_date_range()]] - code - rag/test_harvester_arxiv_source.py
- [[test_query_with_neither_categories_nor_dates_is_unchanged()]] - code - rag/test_harvester_arxiv_source.py
- [[test_real_arxiv_api_quoted_multi_word_term_does_not_or_split()]] - code - rag/test_harvester_arxiv_source.py
- [[test_real_arxiv_api_returns_one_well_formed_paper_ref()]] - code - rag/test_harvester_arxiv_source.py
- [[test_relevance_ordering_also_gets_the_category_date_query_clauses()]] - code - rag/test_harvester_arxiv_source.py
- [[test_relevance_ordering_sorts_by_relevance()]] - code - rag/test_harvester_arxiv_source.py
- [[test_single_word_term_is_quoted_too()]] - code - rag/test_harvester_arxiv_source.py
- [[test_term_containing_a_backslash_is_rejected()]] - code - rag/test_harvester_arxiv_source.py
- [[test_term_containing_a_quote_is_rejected_not_injected()]] - code - rag/test_harvester_arxiv_source.py
- [[test_unsupported_ordering_raises_permanent_error()]] - code - rag/test_harvester_arxiv_source.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_harvester_arxiv_sourcepy
SORT file.name ASC
```

## Connections to other communities
- 20 edges to [[_COMMUNITY_PermanentError]]
- 3 edges to [[_COMMUNITY_load_config]]
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY_assembly.py]]

## Top bridge nodes
- [[test_harvester_arxiv_source.py]] - degree 52, connects to 4 communities
- [[make_source()]] - degree 40, connects to 1 community
- [[test_fetch_by_ids_429_diagnostics_carries_the_retry_after_header()]] - degree 4, connects to 1 community
- [[test_category_with_invalid_characters_is_rejected()]] - degree 3, connects to 1 community
- [[test_every_configured_focus_area_query_is_quoted()]] - degree 3, connects to 1 community