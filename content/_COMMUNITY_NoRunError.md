---
type: community
cohesion: 0.09
members: 27
---

# NoRunError

**Cohesion:** 0.09 - loosely connected
**Members:** 27 nodes

## Members
- [[.__init__()_82]] - code - app/dashboard/test_server.py
- [[.liveness()]] - code - app/dashboard/test_server.py
- [[.pause()]] - code - app/dashboard/test_server.py
- [[.read_consistency()]] - code - app/dashboard/test_server.py
- [[.read_corpus()]] - code - app/dashboard/test_server.py
- [[.read_disk()]] - code - app/dashboard/test_server.py
- [[.read_downloader()]] - code - app/dashboard/test_server.py
- [[.read_downloads()]] - code - app/dashboard/test_server.py
- [[.read_telemetry()]] - code - app/dashboard/test_server.py
- [[.resume()]] - code - app/dashboard/test_server.py
- [[.retarget()]] - code - app/dashboard/test_server.py
- [[.start()_2]] - code - app/dashboard/test_server.py
- [[.stop()_1]] - code - app/dashboard/test_server.py
- [[DoubleRunError]] - code - app/dashboard/controller.py
- [[Fixed, known snapshot pieces -- `_status_dict` in server.py composes these into]] - rationale - app/dashboard/test_server.py
- [[NoRunError]] - code - app/dashboard/controller.py
- [[Raised when pauseresumestop is asked to act on a run that doesn't exist.]] - rationale - app/dashboard/controller.py
- [[Raised when startresume is refused because a run is already live (or not yet co]] - rationale - app/dashboard/controller.py
- [[RuntimeError_3]] - code
- [[_FakeController]] - code - app/dashboard/test_server.py
- [[_FakeStatus]] - code - app/dashboard/test_server.py
- [[`_status_dict` must pass `data_dir`, the manifest's `started_at`, and `target` t]] - rationale - app/dashboard/test_server.py
- [[running_server()]] - code - app/dashboard/test_server.py
- [[test_pause_with_no_running_run_raises()]] - code - app/dashboard/test_controller.py
- [[test_resume_with_no_manifest_raises()]] - code - app/dashboard/test_controller.py
- [[test_status_dict_threads_started_at_and_target_into_read_telemetry()]] - code - app/dashboard/test_server.py
- [[test_stop_with_no_running_run_raises()]] - code - app/dashboard/test_controller.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/NoRunError
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY_test_server.py]]
- 10 edges to [[_COMMUNITY_test_controller.py]]
- 7 edges to [[_COMMUNITY_controller.py]]
- 3 edges to [[_COMMUNITY_server.py]]

## Top bridge nodes
- [[NoRunError]] - degree 16, connects to 3 communities
- [[DoubleRunError]] - degree 13, connects to 3 communities
- [[running_server()]] - degree 5, connects to 2 communities
- [[.start()_2]] - degree 4, connects to 2 communities
- [[test_status_dict_threads_started_at_and_target_into_read_telemetry()]] - degree 4, connects to 2 communities