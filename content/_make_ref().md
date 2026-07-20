---
source_file: "app/test_assembly.py"
type: "code"
community: "test_assembly.py"
location: "L47"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_assemblypy
---

# _make_ref()

## Connections
- [[PaperRef]] - `references` [EXTRACTED]
- [[test_assembly.py]] - `contains` [EXTRACTED]
- [[test_cache_hit_returns_cached_bytes_with_zero_http_calls()]] - `calls` [EXTRACTED]
- [[test_cache_miss_downloads_live_and_writes_through()]] - `calls` [EXTRACTED]
- [[test_cache_miss_retry_path_still_writes_through_on_eventual_success()]] - `calls` [EXTRACTED]
- [[test_download_all_makes_zero_sleeps_when_the_whole_batch_is_cached()]] - `calls` [EXTRACTED]
- [[test_download_all_sleeps_only_for_the_live_ref_not_the_cached_one()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_backoff_clamps_an_excessive_retry_after()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_backoff_falls_back_to_exponential_when_retry_after_absent()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_backoff_falls_back_to_exponential_when_retry_after_unparseable()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_backoff_honors_retry_after_http_date_form()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_backoff_honors_retry_after_seconds_form()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_cache_first_makes_zero_network_calls_when_both_files_are_cached()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_empty_pdf_cache_dir_disables_the_cache_check()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_falls_back_to_arxiv_for_a_pdf_only_cache_entry()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_only_fetches_the_ids_missing_from_cache()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_query_driven_path_is_unaffected_when_ingest_paper_ids_is_unset()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_retries_a_429_with_backoff_then_succeeds()]] - `calls` [EXTRACTED]
- [[test_no_cache_dir_configured_skips_cache_check_entirely()]] - `calls` [EXTRACTED]
- [[test_parse_batch_downloads_every_ref_and_returns_docs_in_order()]] - `calls` [EXTRACTED]
- [[test_parse_batch_falls_back_to_a_fresh_download_when_refs_dont_match_the_prefetch()]] - `calls` [EXTRACTED]
- [[test_parse_cache_hit_makes_zero_sleep_calls()]] - `calls` [EXTRACTED]
- [[test_parse_live_download_still_sleeps_exactly_as_before()]] - `calls` [EXTRACTED]
- [[test_permanent_failure_is_not_retried()]] - `calls` [EXTRACTED]
- [[test_prefetch_next_batch_downloads_overlap_the_current_batchs_gpu_call()]] - `calls` [EXTRACTED]
- [[test_prefetch_next_batch_is_reused_by_the_matching_parse_batch_call_not_redownloaded()]] - `calls` [EXTRACTED]
- [[test_sleeps_the_fixed_delay_after_each_download()]] - `calls` [EXTRACTED]
- [[test_transient_failure_is_retried_once_then_quarantined()]] - `calls` [EXTRACTED]
- [[test_transient_failure_recovers_on_retry()]] - `calls` [EXTRACTED]
- [[test_write_cache_tmp_path_differs_across_two_writer_pids()]] - `calls` [EXTRACTED]
- [[test_write_cache_tmp_path_is_pid_qualified_not_the_old_shared_fixed_name()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_assemblypy