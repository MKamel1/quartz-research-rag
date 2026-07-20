---
type: community
cohesion: 0.10
members: 36
---

# status.py

**Cohesion:** 0.10 - loosely connected
**Members:** 36 nodes

## Members
- [[A guaranteed-read-only connection (`mode=ro` URI), or `None` if the file is miss]] - rationale - app/dashboard/status.py
- [[A live `nvidia-smi` sample (`apptelemetry.py`'s sampler only ever aggregates it]] - rationale - app/dashboard/status.py
- [[Best-effort, read-only point count via the vector store's own REST API over stdl]] - rationale - app/dashboard/status.py
- [[COUNT() of `ingest_state` rows at `stage='done'` with `updated_at = started_at]] - rationale - app/dashboard/status.py
- [[Connection_2]] - code
- [[Current stage, papershour, ETA, wall-clock (from the run's telemetry JSONL at]] - rationale - app/dashboard/status.py
- [[Is `app.prefetch_pdfs` alive, and its download pace -- `run_cwd` is the director]] - rationale - app/dashboard/status.py
- [[Path_6]] - code
- [[Stage funnel (+ quarantine count) and top quarantine reasons, from `data_dirp]] - rationale - app/dashboard/status.py
- [[The events JSONL accumulates one short segment per `app.ingest` launch (resume r]] - rationale - app/dashboard/status.py
- [[_count_done_since()]] - code - app/dashboard/status.py
- [[_current_stage()]] - code - app/dashboard/status.py
- [[_elapsed_seconds_since()]] - code - app/dashboard/status.py
- [[_eta_seconds()]] - code - app/dashboard/status.py
- [[_funnel_from_stage_counts()]] - code - app/dashboard/status.py
- [[_is_live_prefetch()_1]] - code - app/dashboard/status.py
- [[_null_funnel()]] - code - app/dashboard/status.py
- [[_per_run_papers_per_hour()]] - code - app/dashboard/status.py
- [[_query_vector_store_point_count()_1]] - code - app/dashboard/status.py
- [[_read_gpu()]] - code - app/dashboard/status.py
- [[_read_latest_run_events()]] - code - app/dashboard/status.py
- [[_read_prefetch_pid()_1]] - code - app/dashboard/status.py
- [[_ro_connect()_1]] - code - app/dashboard/status.py
- [[_tail_download_pace()]] - code - app/dashboard/status.py
- [[_wall_clock_seconds()]] - code - app/dashboard/status.py
- [[`appdashboardstatus.py` -- the Status Reader read-only views of `ingest_state]] - rationale - app/dashboard/status.py
- [[`shutil.disk_usage(data_dir)` -- one cheap stdlib call. Degrades to nulls if `da]] - rationale - app/dashboard/status.py
- [[`sqlite_done` (papers) vs `vector_points` (chunks+summaries -- one paper produce]] - rationale - app/dashboard/status.py
- [[pid+cmdline identity check -- same pattern as `appbuild_corpus.py_is_live_pre]] - rationale - app/dashboard/status.py
- [[read_consistency()]] - code - app/dashboard/status.py
- [[read_corpus()]] - code - app/dashboard/status.py
- [[read_disk()]] - code - app/dashboard/status.py
- [[read_downloader()]] - code - app/dashboard/status.py
- [[read_downloads()]] - code - app/dashboard/status.py
- [[read_telemetry()]] - code - app/dashboard/status.py
- [[status.py]] - code - app/dashboard/status.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/statuspy
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY_server.py]]
- 1 edge to [[_COMMUNITY_test_status.py]]

## Top bridge nodes
- [[status.py]] - degree 25, connects to 3 communities