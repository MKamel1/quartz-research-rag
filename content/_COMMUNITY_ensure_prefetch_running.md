---
type: community
cohesion: 0.15
members: 20
---

# ensure_prefetch_running

**Cohesion:** 0.15 - loosely connected
**Members:** 20 nodes

## Members
- [[A live process whose cmdline names app.prefetch_pdfs must be reused, not duplica]] - rationale - app/test_build_corpus.py
- [[A stale prefetch.pid (process no longer alive, or alive but not actually prefetc]] - rationale - app/test_build_corpus.py
- [[Ensures `app.prefetch_pdfs` is running reuses an existing live one already trac]] - rationale - app/build_corpus.py
- [[Guards against a recycled PID that happens to be some unrelated live process --]] - rationale - app/test_build_corpus.py
- [[Stands in for `_is_live_prefetch` in tests that spawn a harmless `sleep` process]] - rationale - app/test_build_corpus.py
- [[T-DOCn `appdashboardstatus.pyread_downloader` used to tail the SHARED bui]] - rationale - app/test_build_corpus.py
- [[_alive_ignoring_cmdline()]] - code - app/test_build_corpus.py
- [[_cleanup_pid()]] - code - app/test_build_corpus.py
- [[_is_live_prefetch()]] - code - app/build_corpus.py
- [[_prefetch_pid_path()]] - code - app/build_corpus.py
- [[_read_prefetch_pid()]] - code - app/build_corpus.py
- [[_write_prefetch_pid()]] - code - app/build_corpus.py
- [[ensure_prefetch_running()]] - code - app/build_corpus.py
- [[pid+cmdline identity check alive AND its `procpidcmdline` actually names]] - rationale - app/build_corpus.py
- [[test_ensure_prefetch_running_launches_when_absent()]] - code - app/test_build_corpus.py
- [[test_ensure_prefetch_running_replaces_a_dead_pid_file()]] - code - app/test_build_corpus.py
- [[test_ensure_prefetch_running_reuses_an_existing_live_downloader()]] - code - app/test_build_corpus.py
- [[test_is_live_prefetch_false_for_a_dead_pid()_1]] - code - app/test_build_corpus.py
- [[test_is_live_prefetch_false_for_a_process_whose_cmdline_does_not_name_prefetch()]] - code - app/test_build_corpus.py
- [[test_spawn_prefetch_redirects_stdout_and_stderr_to_a_dedicated_log()]] - code - app/test_build_corpus.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/ensure_prefetch_running
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY_test_build_corpus.py]]
- 6 edges to [[_COMMUNITY_build_corpus.py]]
- 5 edges to [[_COMMUNITY_build_to_target]]

## Top bridge nodes
- [[ensure_prefetch_running()]] - degree 10, connects to 3 communities
- [[_prefetch_pid_path()]] - degree 8, connects to 3 communities
- [[_is_live_prefetch()]] - degree 7, connects to 3 communities
- [[test_spawn_prefetch_redirects_stdout_and_stderr_to_a_dedicated_log()]] - degree 5, connects to 2 communities
- [[_read_prefetch_pid()]] - degree 4, connects to 2 communities