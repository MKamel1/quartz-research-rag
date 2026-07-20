---
type: community
cohesion: 0.08
members: 39
---

# build_to_target

**Cohesion:** 0.08 - loosely connected
**Members:** 39 nodes

## Members
- [[A batch that DOES make progress must reset idle_passes -- a single earlier zero-]] - rationale - app/test_build_corpus.py
- [[Build the corpus to `target` done papers, cache-first ensure the downloader is]] - rationale - app/build_corpus.py
- [[Cache momentarily empty but the downloader is still working -- sleep and re-chec]] - rationale - app/test_build_corpus.py
- [[Default (freshest_first) must not touch `relevance_rank` at all -- zero behavior]] - rationale - app/test_build_corpus.py
- [[Default (no date filter, matching every other test in this file) must call     `]] - rationale - app/test_build_corpus.py
- [[Default (no filters at all) must still call `done_count(db_path)` with no kwargs]] - rationale - app/test_build_corpus.py
- [[Default (unset) must call `run_ingest` with the plain 4-positional signature --]] - rationale - app/test_build_corpus.py
- [[Each fake ingest run processes its whole batch (moves those ids from cached-no]] - rationale - app/test_build_corpus.py
- [[No cached-not-done ids yet (cold start) -- nothing to reorder, so the ranking ha]] - rationale - app/test_build_corpus.py
- [[Passes `telemetry_poll_interval` to `run_ingest` only when set -- same don't ha]] - rationale - app/build_corpus.py
- [[Path_3]] - code
- [[Reproduces the exact gap `done_count`'s fake tracks only papers done WITHIN the]] - rationale - app/test_build_corpus.py
- [[Same reproduction as the date-filter version above, but for `categories` a corp]] - rationale - app/test_build_corpus.py
- [[The exact parse_workers=0 shape cached_not_done keeps returning the SAME non-em]] - rationale - app/test_build_corpus.py
- [[The ranking harvest is a real (rate-limited) arXiv round trip -- must happen at]] - rationale - app/test_build_corpus.py
- [[_call_run_ingest()]] - code - app/build_corpus.py
- [[_fake_ensure_prefetch()]] - code - app/test_build_corpus.py
- [[_write_batch_ids()]] - code - app/build_corpus.py
- [[build_to_target()]] - code - app/build_corpus.py
- [[cached_not_done keeps returning the same 4 ids across 2 iterations (2 processed]] - rationale - app/test_build_corpus.py
- [[main()_10]] - code - app/build_corpus.py
- [[test_build_to_target_batch_size_caps_ids_per_iteration()]] - code - app/test_build_corpus.py
- [[test_build_to_target_category_filter_keeps_going_past_a_stale_global_done_count()]] - code - app/test_build_corpus.py
- [[test_build_to_target_date_filter_keeps_going_past_a_stale_global_done_count()]] - code - app/test_build_corpus.py
- [[test_build_to_target_default_ordering_never_calls_relevance_rank()]] - code - app/test_build_corpus.py
- [[test_build_to_target_forwards_telemetry_poll_interval_when_set()]] - code - app/test_build_corpus.py
- [[test_build_to_target_idle_guard_trips_after_max_idle_consecutive_waits()]] - code - app/test_build_corpus.py
- [[test_build_to_target_omits_telemetry_poll_interval_kwarg_when_unset()]] - code - app/test_build_corpus.py
- [[test_build_to_target_progress_resets_the_idle_counter()]] - code - app/test_build_corpus.py
- [[test_build_to_target_reaches_target_over_several_iterations()]] - code - app/test_build_corpus.py
- [[test_build_to_target_relevance_ordering_reorders_each_batch()]] - code - app/test_build_corpus.py
- [[test_build_to_target_relevance_ordering_with_empty_cache_never_ranks()]] - code - app/test_build_corpus.py
- [[test_build_to_target_relevance_rank_is_computed_once_and_memoized()]] - code - app/test_build_corpus.py
- [[test_build_to_target_stops_when_cache_exhausted_and_prefetch_dead()]] - code - app/test_build_corpus.py
- [[test_build_to_target_waits_when_caught_up_but_prefetch_still_alive()]] - code - app/test_build_corpus.py
- [[test_build_to_target_without_category_filter_calls_done_count_with_plain_signature()]] - code - app/test_build_corpus.py
- [[test_build_to_target_without_date_filter_calls_done_count_with_plain_signature()]] - code - app/test_build_corpus.py
- [[test_build_to_target_writes_batch_ids_file_and_passes_it_to_run_ingest()]] - code - app/test_build_corpus.py
- [[test_build_to_target_zero_net_progress_batch_counts_as_a_stall()]] - code - app/test_build_corpus.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/build_to_target
SORT file.name ASC
```

## Connections to other communities
- 20 edges to [[_COMMUNITY_test_build_corpus.py]]
- 7 edges to [[_COMMUNITY_build_corpus.py]]
- 5 edges to [[_COMMUNITY_ensure_prefetch_running]]
- 2 edges to [[_COMMUNITY_cached_not_done]]
- 2 edges to [[_COMMUNITY__validate_cli_args]]
- 1 edge to [[_COMMUNITY__order_by_relevance]]
- 1 edge to [[_COMMUNITY_test_build_to_target_calls_ensure_prefetch_exactly_once]]

## Top bridge nodes
- [[build_to_target()]] - degree 29, connects to 5 communities
- [[Path_3]] - degree 12, connects to 3 communities
- [[main()_10]] - degree 5, connects to 2 communities
- [[_fake_ensure_prefetch()]] - degree 19, connects to 1 community
- [[_call_run_ingest()]] - degree 4, connects to 1 community