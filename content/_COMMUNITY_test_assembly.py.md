---
type: community
cohesion: 0.09
members: 45
---

# test_assembly.py

**Cohesion:** 0.09 - loosely connected
**Members:** 45 nodes

## Members
- [[A 404 is a genuinely permanent failure (CONVENTIONS.md §4) -- no retry, immediat]] - rationale - app/test_assembly.py
- [[A 429 (or 502503504timeouttransport error) is TransientError, not PermanentE]] - rationale - app/test_assembly.py
- [[A fully-cached batch previously still slept `_PDF_DOWNLOAD_DELAY_SECONDS` per re]] - rationale - app/test_assembly.py
- [[A pre-placed `paper_id.pdf` in `cache_dir` (the prefetcher's own naming conven]] - rationale - app/test_assembly.py
- [[A single 429 followed by a 200 must succeed -- proves the retry actually recover]] - rationale - app/test_assembly.py
- [[A stalemismatched prefetch (refs the caller never actually asks `parse_batch()`]] - rationale - app/test_assembly.py
- [[Cache-miss + a transient failure that recovers on retry (existing retrybackoff]] - rationale - app/test_assembly.py
- [[Direct proof two concurrent writers (e.g. this live pipeline and the standalone]] - rationale - app/test_assembly.py
- [[Mixed batch (one cache hit, one live miss) in the same `parse_batch()` call exa]] - rationale - app/test_assembly.py
- [[No file in `cache_dir` yet -- unchanged live-download behavior (one HTTP call, s]] - rationale - app/test_assembly.py
- [[No prefetch involved -- proves `parse_batch()`'s own baseline behavior (T-DOC16)]] - rationale - app/test_assembly.py
- [[Once a batch has been prefetched, the later `parse_batch()` call for those exact]] - rationale - app/test_assembly.py
- [[Parse an HTTP `Retry-After` header value (RFC 9110 §10.2.3) into seconds-from-no]] - rationale - app/assembly.py
- [[Regression guard fixing the cache-hit case must not silently break the live-dow]] - rationale - app/test_assembly.py
- [[The last group of a run has no next batch (`parse_phase` slices past the end of]] - rationale - app/test_assembly.py
- [[The one test that actually proves the overlap exists (not just 'the code doesn't]] - rationale - app/test_assembly.py
- [[Unit tests for `app.assembly._PdfDownloadParser` (T-DOC4, T-DOC7) and the harves]] - rationale - app/test_assembly.py
- [[_make_parser()]] - code - app/test_assembly.py
- [[_make_ref()]] - code - app/test_assembly.py
- [[_parse_retry_after()]] - code - app/assembly.py
- [[`cache_dir=None` (the default) must behave exactly like caching didn't exist --]] - rationale - app/test_assembly.py
- [[test_assembly.py]] - code - app/test_assembly.py
- [[test_cache_hit_returns_cached_bytes_with_zero_http_calls()]] - code - app/test_assembly.py
- [[test_cache_miss_downloads_live_and_writes_through()]] - code - app/test_assembly.py
- [[test_cache_miss_retry_path_still_writes_through_on_eventual_success()]] - code - app/test_assembly.py
- [[test_download_all_makes_zero_sleeps_when_the_whole_batch_is_cached()]] - code - app/test_assembly.py
- [[test_download_all_sleeps_only_for_the_live_ref_not_the_cached_one()]] - code - app/test_assembly.py
- [[test_harvest_refs_query_driven_path_is_unaffected_when_ingest_paper_ids_is_unset()]] - code - app/test_assembly.py
- [[test_no_cache_dir_configured_skips_cache_check_entirely()]] - code - app/test_assembly.py
- [[test_parse_batch_downloads_every_ref_and_returns_docs_in_order()]] - code - app/test_assembly.py
- [[test_parse_batch_falls_back_to_a_fresh_download_when_refs_dont_match_the_prefetch()]] - code - app/test_assembly.py
- [[test_parse_cache_hit_makes_zero_sleep_calls()]] - code - app/test_assembly.py
- [[test_parse_live_download_still_sleeps_exactly_as_before()]] - code - app/test_assembly.py
- [[test_parse_retry_after_http_date_form()]] - code - app/test_assembly.py
- [[test_parse_retry_after_past_http_date_floors_to_zero()]] - code - app/test_assembly.py
- [[test_parse_retry_after_seconds_and_absent_and_unparseable_forms()]] - code - app/test_assembly.py
- [[test_permanent_failure_is_not_retried()]] - code - app/test_assembly.py
- [[test_prefetch_next_batch_downloads_overlap_the_current_batchs_gpu_call()]] - code - app/test_assembly.py
- [[test_prefetch_next_batch_is_a_noop_for_an_empty_list()]] - code - app/test_assembly.py
- [[test_prefetch_next_batch_is_reused_by_the_matching_parse_batch_call_not_redownloaded()]] - code - app/test_assembly.py
- [[test_sleeps_the_fixed_delay_after_each_download()]] - code - app/test_assembly.py
- [[test_transient_failure_is_retried_once_then_quarantined()]] - code - app/test_assembly.py
- [[test_transient_failure_recovers_on_retry()]] - code - app/test_assembly.py
- [[test_write_cache_tmp_path_differs_across_two_writer_pids()]] - code - app/test_assembly.py
- [[test_write_cache_tmp_path_is_pid_qualified_not_the_old_shared_fixed_name()]] - code - app/test_assembly.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_assemblypy
SORT file.name ASC
```

## Connections to other communities
- 26 edges to [[_COMMUNITY_harvest_refs]]
- 9 edges to [[_COMMUNITY_Config]]
- 8 edges to [[_COMMUNITY__build_orchestrator_for_hook_test]]
- 6 edges to [[_COMMUNITY_build_ingestion_orchestrator]]
- 4 edges to [[_COMMUNITY_assembly.py]]
- 4 edges to [[_COMMUNITY_PaperRef]]
- 4 edges to [[_COMMUNITY__StubOrchestrator]]
- 4 edges to [[_COMMUNITY_PermanentError]]
- 1 edge to [[_COMMUNITY_AdaptiveBatchSizer]]
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY_load_config]]
- 1 edge to [[_COMMUNITY_ParsedDoc]]

## Top bridge nodes
- [[test_assembly.py]] - degree 77, connects to 12 communities
- [[test_harvest_refs_query_driven_path_is_unaffected_when_ingest_paper_ids_is_unset()]] - degree 5, connects to 3 communities
- [[_make_ref()]] - degree 31, connects to 2 communities
- [[_make_parser()]] - degree 21, connects to 1 community
- [[_parse_retry_after()]] - degree 7, connects to 1 community