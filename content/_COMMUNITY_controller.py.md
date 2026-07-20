---
type: community
cohesion: 0.05
members: 83
---

# controller.py

**Cohesion:** 0.05 - loosely connected
**Members:** 83 nodes

## Members
- [[(starttime_ticks, cmdline) for a currently-live `pid`, or `None` if it's dead or]] - rationale - app/dashboard/controller.py
- [[Best-effort identity capture right after spawn. A few quick retries `procpid]] - rationale - app/dashboard/controller.py
- [[Builds a run-scoped override `Config` + scratch `config.yaml` dir when `keywords]] - rationale - app/dashboard/controller.py
- [[Config.blob_dir]] - concept - config.yaml
- [[Config.db_path]] - concept - config.yaml
- [[Config.focus_area_queries (keyword tags)]] - concept - config.yaml
- [[Config.gpu_lock_path (.gpu.lock)]] - concept - config.yaml
- [[Config.hybrid_dense_weight]] - concept - config.yaml
- [[Config.parse_batch_size]] - concept - config.yaml
- [[Config.rerank_depth]] - concept - config.yaml
- [[Config.top_k]] - concept - config.yaml
- [[Corpus Dashboard frontend (index.html)]] - code - app/dashboard/static/index.html
- [[Corpus Expansion Research]] - document - docs/CORPUS-EXPANSION-RESEARCH.md
- [[Design Continuous Cache-First Corpus Build]] - rationale - docs/DESIGN-continuous-cache-first-build.md
- [[Design Corpus Dashboard]] - rationale - docs/DESIGN-corpus-dashboard.md
- [[Design Dashboard Control Panel (OG-43)]] - rationale - docs/DESIGN-dashboard-control-panel.md
- [[Fresh run with a new target. Refuses if a run is already live (`running``pausin]] - rationale - app/dashboard/controller.py
- [[If the manifest is in a live-looking status (`running``pausing``stopping`) but]] - rationale - app/dashboard/controller.py
- [[InvalidOverrideError]] - code - app/dashboard/controller.py
- [[OG-36 relevance_filter is dead code]] - concept - docs/CORPUS-EXPANSION-RESEARCH.md
- [[OG-38 Config.sources is inert]] - concept - docs/CORPUS-EXPANSION-RESEARCH.md
- [[OG-49 M10 removes a run's override `config.yaml` scratch dir (`_write_override_]] - rationale - app/dashboard/controller.py
- [[OG-491 the run's BASE config, loaded from `data_dirconfig.yaml` -- the real]] - rationale - app/dashboard/controller.py
- [[Passes each of `paper_ids_file``telemetry_poll_interval``batch_size` to `spawn]] - rationale - app/dashboard/controller.py
- [[Path_4]] - code
- [[Plain liveness (no identity check) -- used only to poll a PID we already verifie]] - rationale - app/dashboard/controller.py
- [[Raised when a config-derived override (`_maybe_build_override`) produces an inva]] - rationale - app/dashboard/controller.py
- [[Read-only `count() FROM ingest_state WHERE stage='done'` -- the one narrow, del]] - rationale - app/dashboard/controller.py
- [[Relaunch `app.build_corpus` with the SAME params as the existing manifest -- che]] - rationale - app/dashboard/controller.py
- [[Returns `pid` only if it's confirmed to still be the exact process this controll]] - rationale - app/dashboard/controller.py
- [[SIGTERM (escalating to a resend, then SIGKILL -- OG-495) the running process gr]] - rationale - app/dashboard/controller.py
- [[SIGTERM (escalating to a resend, then SIGKILL -- OG-495, `_terminate_with_escal]] - rationale - app/dashboard/controller.py
- [[SIGTERM the process group and wait; if it's not confirmed dead within `_DEATH_TI]] - rationale - app/dashboard/controller.py
- [[Signals the whole process group `pid` leads (`start_new_session=True` at spawn m]] - rationale - app/dashboard/controller.py
- [[SpawnFn]] - code
- [[Start a fresh run with a new target stop the current run if one is live, then]] - rationale - app/dashboard/controller.py
- [[T-DOC56 build_mcp_server ignored config.db_pathblob_dir]] - concept - WORK-BREAKDOWN.md
- [[The authoritative view of the current run the reconciled manifest. `status.py`]] - rationale - app/dashboard/controller.py
- [[The real launch, literally `env PYTHONPATH=repo python -m app.build_corpus --]] - rationale - app/dashboard/controller.py
- [[True iff this `running` manifest's own recorded `target` and `db_path` show fewe]] - rationale - app/dashboard/controller.py
- [[ValueError]] - code
- [[_build_manifest()]] - code - app/dashboard/controller.py
- [[_call_spawn()]] - code - app/dashboard/controller.py
- [[_capture_identity()]] - code - app/dashboard/controller.py
- [[_cleanup_run_cwd()]] - code - app/dashboard/controller.py
- [[_control_lock()]] - code - app/dashboard/controller.py
- [[_crashed_before_target()]] - code - app/dashboard/controller.py
- [[_done_count()]] - code - app/dashboard/controller.py
- [[_load_base_config()]] - code - app/dashboard/controller.py
- [[_manifest_path()]] - code - app/dashboard/controller.py
- [[_maybe_build_override()]] - code - app/dashboard/controller.py
- [[_pause_locked()]] - code - app/dashboard/controller.py
- [[_pid_running()]] - code - app/dashboard/controller.py
- [[_process_identity()]] - code - app/dashboard/controller.py
- [[_read_manifest()]] - code - app/dashboard/controller.py
- [[_resume_locked()]] - code - app/dashboard/controller.py
- [[_signal_group()]] - code - app/dashboard/controller.py
- [[_spawn()]] - code - app/dashboard/controller.py
- [[_start_locked()]] - code - app/dashboard/controller.py
- [[_stop_locked()]] - code - app/dashboard/controller.py
- [[_terminate_with_escalation()]] - code - app/dashboard/controller.py
- [[_verified_pid()]] - code - app/dashboard/controller.py
- [[_wait_for_death()]] - code - app/dashboard/controller.py
- [[_write_manifest()]] - code - app/dashboard/controller.py
- [[_write_override_config_dir()_1]] - code - app/dashboard/controller.py
- [[`appdashboardcontroller.py` -- the Run Controller startpauseresumestopret]] - rationale - app/dashboard/controller.py
- [[`data_dir` (OG-491) every relative-path field is resolved absolute against the]] - rationale - app/dashboard/controller.py
- [[`start`'s actual body -- called with `_control_lock(data_dir)` already held (by]] - rationale - app/dashboard/controller.py
- [[appbuild_corpus.py (build supervisor)]] - concept - docs/DESIGN-continuous-cache-first-build.md
- [[appdashboardcontroller.py (Run Controller)]] - concept - docs/DESIGN-corpus-dashboard.md
- [[appdashboardserver.py (Web App)]] - concept - docs/DESIGN-corpus-dashboard.md
- [[appdashboardstatus.py (Status Reader)]] - concept - docs/DESIGN-corpus-dashboard.md
- [[config.yaml]] - code - config.yaml
- [[controller.py]] - code - app/dashboard/controller.py
- [[liveness()]] - code - app/dashboard/controller.py
- [[pause()]] - code - app/dashboard/controller.py
- [[reconcile()]] - code - app/dashboard/controller.py
- [[resume()]] - code - app/dashboard/controller.py
- [[retarget()]] - code - app/dashboard/controller.py
- [[run_manifest.json coordination contract]] - concept - docs/DESIGN-corpus-dashboard.md
- [[start()]] - code - app/dashboard/controller.py
- [[stop()]] - code - app/dashboard/controller.py
- [[write-temp + `os.replace()` the rename is POSIX-atomic, so a concurrent reader]] - rationale - app/dashboard/controller.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/controllerpy
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_NoRunError]]
- 4 edges to [[_COMMUNITY_server.py]]
- 3 edges to [[_COMMUNITY_WORK-BREAKDOWN]]
- 3 edges to [[_COMMUNITY_test_controller.py]]
- 2 edges to [[_COMMUNITY_assembly.py]]
- 2 edges to [[_COMMUNITY_load_config]]
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY_test_server.py]]

## Top bridge nodes
- [[controller.py]] - degree 42, connects to 7 communities
- [[InvalidOverrideError]] - degree 9, connects to 2 communities
- [[config.yaml]] - degree 14, connects to 1 community
- [[_start_locked()]] - degree 13, connects to 1 community
- [[_resume_locked()]] - degree 11, connects to 1 community