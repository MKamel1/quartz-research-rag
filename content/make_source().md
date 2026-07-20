---
source_file: "rag/test_harvester_arxiv_source.py"
type: "code"
community: "test_harvester_arxiv_source.py"
location: "L44"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_harvester_arxiv_sourcepy
---

# make_source()

## Connections
- [[ArxivSource]] - `calls` [EXTRACTED]
- [[test_category_with_invalid_characters_is_rejected()]] - `calls` [EXTRACTED]
- [[test_derives_pdf_and_latex_urls_from_the_versioned_id()]] - `calls` [EXTRACTED]
- [[test_empty_feed_parses_to_no_entries()]] - `calls` [EXTRACTED]
- [[test_every_configured_focus_area_query_is_quoted()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_429_diagnostics_carries_the_retry_after_header()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_429_diagnostics_retry_after_absent_is_none()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_chunks_large_id_lists_and_rate_limits_between_chunks()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_empty_list_makes_no_requests()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_maps_other_status_to_permanent_error()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_maps_retryable_status_to_transient_error()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_returns_parsed_refs()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_uses_id_list_param_not_search_query()]] - `calls` [EXTRACTED]
- [[test_fetch_issues_one_query_per_focus_area_entry_not_one_combined_query()]] - `calls` [EXTRACTED]
- [[test_fetch_moves_to_the_next_focus_area_entry_when_one_is_exhausted()]] - `calls` [EXTRACTED]
- [[test_fetch_paginates_until_cap_reached()]] - `calls` [EXTRACTED]
- [[test_fetch_shares_one_cap_budget_across_focus_area_entries()]] - `calls` [EXTRACTED]
- [[test_fetch_stops_when_a_page_comes_back_empty()]] - `calls` [EXTRACTED]
- [[test_freshest_first_ordering_sorts_by_submitted_date_descending()]] - `calls` [EXTRACTED]
- [[test_harvester_arxiv_source.py]] - `contains` [EXTRACTED]
- [[test_hyphenated_single_token_term_is_quoted()]] - `calls` [EXTRACTED]
- [[test_malformed_date_from_is_rejected()]] - `calls` [EXTRACTED]
- [[test_malformed_date_to_is_rejected()]] - `calls` [EXTRACTED]
- [[test_malformed_xml_raises_permanent_error()]] - `calls` [EXTRACTED]
- [[test_multi_word_term_is_sent_as_a_quoted_phrase()]] - `calls` [EXTRACTED]
- [[test_parses_authors_and_categories()]] - `calls` [EXTRACTED]
- [[test_parses_dates()]] - `calls` [EXTRACTED]
- [[test_parses_id_into_base_paper_id_and_version()]] - `calls` [EXTRACTED]
- [[test_parses_title_and_abstract_collapsing_whitespace()]] - `calls` [EXTRACTED]
- [[test_query_with_an_open_ended_date_bound_uses_a_wildcard()]] - `calls` [EXTRACTED]
- [[test_query_with_categories_and_dates_combines_both_clauses()]] - `calls` [EXTRACTED]
- [[test_query_with_categories_only_adds_an_or_joined_cat_clause()]] - `calls` [EXTRACTED]
- [[test_query_with_dates_only_adds_a_submitted_date_range()]] - `calls` [EXTRACTED]
- [[test_query_with_neither_categories_nor_dates_is_unchanged()]] - `calls` [EXTRACTED]
- [[test_relevance_ordering_also_gets_the_category_date_query_clauses()]] - `calls` [EXTRACTED]
- [[test_relevance_ordering_sorts_by_relevance()]] - `calls` [EXTRACTED]
- [[test_single_word_term_is_quoted_too()]] - `calls` [EXTRACTED]
- [[test_term_containing_a_backslash_is_rejected()]] - `calls` [EXTRACTED]
- [[test_term_containing_a_quote_is_rejected_not_injected()]] - `calls` [EXTRACTED]
- [[test_unsupported_ordering_raises_permanent_error()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_harvester_arxiv_sourcepy