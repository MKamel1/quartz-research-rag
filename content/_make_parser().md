---
source_file: "app/test_assembly.py"
type: "code"
community: "test_assembly.py"
location: "L61"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_assemblypy
---

# _make_parser()

## Connections
- [[_PdfDownloadParser]] - `references` [EXTRACTED]
- [[test_assembly.py]] - `contains` [EXTRACTED]
- [[test_cache_hit_returns_cached_bytes_with_zero_http_calls()]] - `calls` [EXTRACTED]
- [[test_cache_miss_downloads_live_and_writes_through()]] - `calls` [EXTRACTED]
- [[test_cache_miss_retry_path_still_writes_through_on_eventual_success()]] - `calls` [EXTRACTED]
- [[test_download_all_makes_zero_sleeps_when_the_whole_batch_is_cached()]] - `calls` [EXTRACTED]
- [[test_download_all_sleeps_only_for_the_live_ref_not_the_cached_one()]] - `calls` [EXTRACTED]
- [[test_no_cache_dir_configured_skips_cache_check_entirely()]] - `calls` [EXTRACTED]
- [[test_parse_batch_downloads_every_ref_and_returns_docs_in_order()]] - `calls` [EXTRACTED]
- [[test_parse_batch_falls_back_to_a_fresh_download_when_refs_dont_match_the_prefetch()]] - `calls` [EXTRACTED]
- [[test_parse_cache_hit_makes_zero_sleep_calls()]] - `calls` [EXTRACTED]
- [[test_parse_live_download_still_sleeps_exactly_as_before()]] - `calls` [EXTRACTED]
- [[test_permanent_failure_is_not_retried()]] - `calls` [EXTRACTED]
- [[test_prefetch_next_batch_downloads_overlap_the_current_batchs_gpu_call()]] - `calls` [EXTRACTED]
- [[test_prefetch_next_batch_is_a_noop_for_an_empty_list()]] - `calls` [EXTRACTED]
- [[test_prefetch_next_batch_is_reused_by_the_matching_parse_batch_call_not_redownloaded()]] - `calls` [EXTRACTED]
- [[test_sleeps_the_fixed_delay_after_each_download()]] - `calls` [EXTRACTED]
- [[test_transient_failure_is_retried_once_then_quarantined()]] - `calls` [EXTRACTED]
- [[test_transient_failure_recovers_on_retry()]] - `calls` [EXTRACTED]
- [[test_write_cache_tmp_path_differs_across_two_writer_pids()]] - `calls` [EXTRACTED]
- [[test_write_cache_tmp_path_is_pid_qualified_not_the_old_shared_fixed_name()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_assemblypy