---
type: community
cohesion: 0.09
members: 23
---

# test_status.py

**Cohesion:** 0.09 - loosely connected
**Members:** 23 nodes

## Members
- [[Tests for `app.dashboard.status` -- offline, no real GPUnetworkmanifest. Every]] - rationale - app/dashboard/test_status.py
- [[test_elapsed_seconds_since_degrades_to_none_on_bad_input()]] - code - app/dashboard/test_status.py
- [[test_elapsed_seconds_since_parses_iso_started_at()]] - code - app/dashboard/test_status.py
- [[test_is_live_prefetch_false_for_a_dead_pid()]] - code - app/dashboard/test_status.py
- [[test_is_live_prefetch_false_for_non_prefetch_cmdline()]] - code - app/dashboard/test_status.py
- [[test_read_consistency_degrades_when_vector_store_unreachable()]] - code - app/dashboard/test_status.py
- [[test_read_consistency_reports_point_count()]] - code - app/dashboard/test_status.py
- [[test_read_consistency_verdict_none_when_done_count_unknown()]] - code - app/dashboard/test_status.py
- [[test_read_corpus_degrades_to_nulls_when_db_missing()]] - code - app/dashboard/test_status.py
- [[test_read_disk_degrades_to_nulls_when_path_missing()]] - code - app/dashboard/test_status.py
- [[test_read_disk_reports_usage()]] - code - app/dashboard/test_status.py
- [[test_read_downloader_degrades_to_nulls_when_no_run_cwd()]] - code - app/dashboard/test_status.py
- [[test_read_downloader_pace_degrades_when_log_missing()]] - code - app/dashboard/test_status.py
- [[test_read_downloader_pace_degrades_when_no_pace_line_yet()]] - code - app/dashboard/test_status.py
- [[test_read_downloader_reports_alive_for_a_real_prefetch_pdfs_process()]] - code - app/dashboard/test_status.py
- [[test_read_downloader_reports_dead_for_a_stale_pid()]] - code - app/dashboard/test_status.py
- [[test_read_downloader_reports_dead_when_pid_file_missing()]] - code - app/dashboard/test_status.py
- [[test_read_downloads_counts_pdfs_and_sidecars()]] - code - app/dashboard/test_status.py
- [[test_read_downloads_degrades_when_cache_dir_missing()]] - code - app/dashboard/test_status.py
- [[test_read_gpu_degrades_to_nulls_when_nvidia_smi_missing()]] - code - app/dashboard/test_status.py
- [[test_read_telemetry_missing_file_degrades_gracefully()]] - code - app/dashboard/test_status.py
- [[test_read_telemetry_none_events_path_degrades_gracefully()]] - code - app/dashboard/test_status.py
- [[test_status.py]] - code - app/dashboard/test_status.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_statuspy
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY__mark_done]]
- 7 edges to [[_COMMUNITY__seed]]
- 4 edges to [[_COMMUNITY__write_events]]
- 1 edge to [[_COMMUNITY_migrate]]
- 1 edge to [[_COMMUNITY_status.py]]
- 1 edge to [[_COMMUNITY_test_read_consistency_verdict_false_when_done_but_zero_points]]
- 1 edge to [[_COMMUNITY_test_read_consistency_verdict_true_when_nothing_done_yet]]
- 1 edge to [[_COMMUNITY_test_read_consistency_verdict_true_when_points_exist]]
- 1 edge to [[_COMMUNITY_test_read_corpus_is_read_only_never_writes]]
- 1 edge to [[_COMMUNITY_test_read_downloader_tails_its_own_dedicated_log_for_the_latest_pace_line]]

## Top bridge nodes
- [[test_status.py]] - degree 47, connects to 10 communities