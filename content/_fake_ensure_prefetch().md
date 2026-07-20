---
source_file: "app/test_build_corpus.py"
type: "code"
community: "build_to_target"
location: "L376"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/build_to_target
---

# _fake_ensure_prefetch()

## Connections
- [[test_build_corpus.py]] - `contains` [EXTRACTED]
- [[test_build_to_target_batch_size_caps_ids_per_iteration()]] - `calls` [EXTRACTED]
- [[test_build_to_target_category_filter_keeps_going_past_a_stale_global_done_count()]] - `calls` [EXTRACTED]
- [[test_build_to_target_date_filter_keeps_going_past_a_stale_global_done_count()]] - `calls` [EXTRACTED]
- [[test_build_to_target_default_ordering_never_calls_relevance_rank()]] - `calls` [EXTRACTED]
- [[test_build_to_target_forwards_telemetry_poll_interval_when_set()]] - `calls` [EXTRACTED]
- [[test_build_to_target_idle_guard_trips_after_max_idle_consecutive_waits()]] - `calls` [EXTRACTED]
- [[test_build_to_target_omits_telemetry_poll_interval_kwarg_when_unset()]] - `calls` [EXTRACTED]
- [[test_build_to_target_progress_resets_the_idle_counter()]] - `calls` [EXTRACTED]
- [[test_build_to_target_reaches_target_over_several_iterations()]] - `calls` [EXTRACTED]
- [[test_build_to_target_relevance_ordering_reorders_each_batch()]] - `calls` [EXTRACTED]
- [[test_build_to_target_relevance_ordering_with_empty_cache_never_ranks()]] - `calls` [EXTRACTED]
- [[test_build_to_target_relevance_rank_is_computed_once_and_memoized()]] - `calls` [EXTRACTED]
- [[test_build_to_target_stops_when_cache_exhausted_and_prefetch_dead()]] - `calls` [EXTRACTED]
- [[test_build_to_target_waits_when_caught_up_but_prefetch_still_alive()]] - `calls` [EXTRACTED]
- [[test_build_to_target_without_category_filter_calls_done_count_with_plain_signature()]] - `calls` [EXTRACTED]
- [[test_build_to_target_without_date_filter_calls_done_count_with_plain_signature()]] - `calls` [EXTRACTED]
- [[test_build_to_target_writes_batch_ids_file_and_passes_it_to_run_ingest()]] - `calls` [EXTRACTED]
- [[test_build_to_target_zero_net_progress_batch_counts_as_a_stall()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/build_to_target