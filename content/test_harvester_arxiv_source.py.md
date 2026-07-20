---
source_file: "rag/test_harvester_arxiv_source.py"
type: "code"
community: "test_harvester_arxiv_source.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_harvester_arxiv_sourcepy
---

# test_harvester_arxiv_source.py

## Connections
- [[ArxivSource]] - `imports` [EXTRACTED]
- [[Offline unit tests for `ArxivSource` (T-A1) — feeds a canned arXiv Atom feed str]] - `rationale_for` [EXTRACTED]
- [[PermanentError]] - `imports` [EXTRACTED]
- [[TransientError]] - `imports` [EXTRACTED]
- [[config.py_1]] - `imports_from` [EXTRACTED]
- [[datetime]] - `imports_from` [EXTRACTED]
- [[errors.py]] - `imports_from` [EXTRACTED]
- [[harvester.py_1]] - `imports_from` [EXTRACTED]
- [[load_config()]] - `imports` [EXTRACTED]
- [[make_source()]] - `contains` [EXTRACTED]
- [[test_category_with_invalid_characters_is_rejected()]] - `contains` [EXTRACTED]
- [[test_derives_pdf_and_latex_urls_from_the_versioned_id()]] - `contains` [EXTRACTED]
- [[test_empty_feed_parses_to_no_entries()]] - `contains` [EXTRACTED]
- [[test_every_configured_focus_area_query_is_quoted()]] - `contains` [EXTRACTED]
- [[test_fetch_applies_rate_limit_sleep_between_requests_across_focus_area_entries()]] - `contains` [EXTRACTED]
- [[test_fetch_by_ids_429_diagnostics_carries_the_retry_after_header()]] - `contains` [EXTRACTED]
- [[test_fetch_by_ids_429_diagnostics_retry_after_absent_is_none()]] - `contains` [EXTRACTED]
- [[test_fetch_by_ids_chunks_large_id_lists_and_rate_limits_between_chunks()]] - `contains` [EXTRACTED]
- [[test_fetch_by_ids_empty_list_makes_no_requests()]] - `contains` [EXTRACTED]
- [[test_fetch_by_ids_maps_other_status_to_permanent_error()]] - `contains` [EXTRACTED]
- [[test_fetch_by_ids_maps_retryable_status_to_transient_error()]] - `contains` [EXTRACTED]
- [[test_fetch_by_ids_returns_parsed_refs()]] - `contains` [EXTRACTED]
- [[test_fetch_by_ids_uses_id_list_param_not_search_query()]] - `contains` [EXTRACTED]
- [[test_fetch_issues_one_query_per_focus_area_entry_not_one_combined_query()]] - `contains` [EXTRACTED]
- [[test_fetch_moves_to_the_next_focus_area_entry_when_one_is_exhausted()]] - `contains` [EXTRACTED]
- [[test_fetch_paginates_until_cap_reached()]] - `contains` [EXTRACTED]
- [[test_fetch_shares_one_cap_budget_across_focus_area_entries()]] - `contains` [EXTRACTED]
- [[test_fetch_stops_when_a_page_comes_back_empty()]] - `contains` [EXTRACTED]
- [[test_freshest_first_ordering_sorts_by_submitted_date_descending()]] - `contains` [EXTRACTED]
- [[test_hyphenated_single_token_term_is_quoted()]] - `contains` [EXTRACTED]
- [[test_malformed_date_from_is_rejected()]] - `contains` [EXTRACTED]
- [[test_malformed_date_to_is_rejected()]] - `contains` [EXTRACTED]
- [[test_malformed_xml_raises_permanent_error()]] - `contains` [EXTRACTED]
- [[test_multi_word_term_is_sent_as_a_quoted_phrase()]] - `contains` [EXTRACTED]
- [[test_parses_authors_and_categories()]] - `contains` [EXTRACTED]
- [[test_parses_dates()]] - `contains` [EXTRACTED]
- [[test_parses_id_into_base_paper_id_and_version()]] - `contains` [EXTRACTED]
- [[test_parses_title_and_abstract_collapsing_whitespace()]] - `contains` [EXTRACTED]
- [[test_query_with_an_open_ended_date_bound_uses_a_wildcard()]] - `contains` [EXTRACTED]
- [[test_query_with_categories_and_dates_combines_both_clauses()]] - `contains` [EXTRACTED]
- [[test_query_with_categories_only_adds_an_or_joined_cat_clause()]] - `contains` [EXTRACTED]
- [[test_query_with_dates_only_adds_a_submitted_date_range()]] - `contains` [EXTRACTED]
- [[test_query_with_neither_categories_nor_dates_is_unchanged()]] - `contains` [EXTRACTED]
- [[test_real_arxiv_api_fetch_by_ids_returns_the_exact_requested_papers()]] - `contains` [EXTRACTED]
- [[test_real_arxiv_api_quoted_multi_word_term_does_not_or_split()]] - `contains` [EXTRACTED]
- [[test_real_arxiv_api_returns_one_well_formed_paper_ref()]] - `contains` [EXTRACTED]
- [[test_relevance_ordering_also_gets_the_category_date_query_clauses()]] - `contains` [EXTRACTED]
- [[test_relevance_ordering_sorts_by_relevance()]] - `contains` [EXTRACTED]
- [[test_single_word_term_is_quoted_too()]] - `contains` [EXTRACTED]
- [[test_term_containing_a_backslash_is_rejected()]] - `contains` [EXTRACTED]
- [[test_term_containing_a_quote_is_rejected_not_injected()]] - `contains` [EXTRACTED]
- [[test_unsupported_ordering_raises_permanent_error()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_harvester_arxiv_sourcepy