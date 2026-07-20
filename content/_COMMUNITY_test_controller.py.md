---
type: community
cohesion: 0.05
members: 78
---

# test_controller.py

**Cohesion:** 0.05 - loosely connected
**Members:** 78 nodes

## Members
- [[A bad override value (parse_batch_size must be  0, contractsconfig.py) must be]] - rationale - app/dashboard/test_controller.py
- [[A normal (query-driven) run passes NO paper_ids_file kwarg -- so the 5-positiona]] - rationale - app/dashboard/test_controller.py
- [[A paused edited run must come back with the SAME override dir (and pass-through]] - rationale - app/dashboard/test_controller.py
- [[A process wedged in a blocking call that swallows SIGTERM (e.g. mid-syscall in a]] - rationale - app/dashboard/test_controller.py
- [[A run that edits nothing must launch exactly the old way -- no override scratch]] - rationale - app/dashboard/test_controller.py
- [[A run whose process dies WITHOUT going through pausestop (a crash) is caught by]] - rationale - app/dashboard/test_controller.py
- [[A spawn fake that accepts arbitrary kwargs (unlike the plain 5-positional `_fake]] - rationale - app/dashboard/test_controller.py
- [[A user-initiated stop is final (module docstring, no later resume) -- its overri]] - rationale - app/dashboard/test_controller.py
- [[An unedited run's `run_cwd` IS the real data dir -- `stop`'s cleanup must never]] - rationale - app/dashboard/test_controller.py
- [[An unedited run's manifest still carries the (unedited) orderingfilter values -]] - rationale - app/dashboard/test_controller.py
- [[Best-effort kill any leftover `sleep` process a test spawned but never confirme]] - rationale - app/dashboard/test_controller.py
- [[Contrast case for the fix above when `ingest_state` shows done_count = target,]] - rationale - app/dashboard/test_controller.py
- [[Launches `sleep 100` as its own process-group leader -- same `start_new_session=]] - rationale - app/dashboard/test_controller.py
- [[No data_dirconfig.yaml (e.g. a freshtest data dir) -- must fall back to the re]] - rationale - app/dashboard/test_controller.py
- [[OG-40 a cache-first run stores `paper_ids_file` in the manifest, hands it to `s]] - rationale - app/dashboard/test_controller.py
- [[OG-43 owner decision editing keywords AUGMENTS focus_area_queries (adds topics)]] - rationale - app/dashboard/test_controller.py
- [[OG-45 unlike keywords, categorydate filters REPLACE the base config's value fo]] - rationale - app/dashboard/test_controller.py
- [[OG-46 dashboard-launched runs may opt into arXiv-relevance ordering.]] - rationale - app/dashboard/test_controller.py
- [[OG-471 two concurrent POST apicontrol starts must not both pass the double-r]] - rationale - app/dashboard/test_controller.py
- [[OG-491 an overridden run must load its BASE config from data_dirconfig.yaml (]] - rationale - app/dashboard/test_controller.py
- [[Re-adding an already-present keyword changes nothing -- no override dir needed.]] - rationale - app/dashboard/test_controller.py
- [[Simulates PID reuse after the real spawned process exits, some other live proce]] - rationale - app/dashboard/test_controller.py
- [[Simulates a slow-to-die process signaled (status pausing) but genuinely still]] - rationale - app/dashboard/test_controller.py
- [[Tests for `app.dashboard.controller` -- offline, no real GPUnetworkingest. Eve]] - rationale - app/dashboard/test_controller.py
- [[The override config.yaml's path-valued fields (db_pathblob_dirpdf_cache_dir..]] - rationale - app/dashboard/test_controller.py
- [[The real failure mode this whole mechanism defends against a manifest says `run]] - rationale - app/dashboard/test_controller.py
- [[_cleanup()]] - code - app/dashboard/test_controller.py
- [[_fake_spawn()]] - code - app/dashboard/test_controller.py
- [[_kwargs_spawn()]] - code - app/dashboard/test_controller.py
- [[_spawn_recorder()]] - code - app/dashboard/test_controller.py
- [[`resume()` reuses `run_cwd` verbatim (see the test above) -- `pause` must leave]] - rationale - app/dashboard/test_controller.py
- [[`retarget` (stop-then-start) is the Apply new settings while live path -- edit]] - rationale - app/dashboard/test_controller.py
- [[`start_new_session=True` at spawn makes the leader its own process-group leader]] - rationale - app/dashboard/test_controller.py
- [[test_capture_identity_retries_past_the_env_wrappers_transitional_cmdline()]] - code - app/dashboard/test_controller.py
- [[test_concurrent_starts_are_serialized_exactly_one_run()]] - code - app/dashboard/test_controller.py
- [[test_control_lock_is_mutually_exclusive()]] - code - app/dashboard/test_controller.py
- [[test_controller.py]] - code - app/dashboard/test_controller.py
- [[test_default_run_has_null_paper_ids_file_and_no_kwarg_to_fake_spawn()]] - code - app/dashboard/test_controller.py
- [[test_guard_sees_through_a_stale_running_status_once_pid_is_dead()]] - code - app/dashboard/test_controller.py
- [[test_manifest_write_is_atomic_no_tmp_file_left_behind()]] - code - app/dashboard/test_controller.py
- [[test_override_run_resolves_db_path_under_data_dir_not_repo_root()]] - code - app/dashboard/test_controller.py
- [[test_paper_ids_file_recorded_in_manifest_and_repassed_on_resume()]] - code - app/dashboard/test_controller.py
- [[test_pause_does_not_remove_the_override_dir()]] - code - app/dashboard/test_controller.py
- [[test_pause_escalates_to_sigkill_when_process_ignores_sigterm()]] - code - app/dashboard/test_controller.py
- [[test_pause_refuses_to_signal_a_pid_reused_by_an_unrelated_process()]] - code - app/dashboard/test_controller.py
- [[test_pause_sends_sigterm_and_confirms_death()]] - code - app/dashboard/test_controller.py
- [[test_pause_signals_the_whole_process_group_not_just_the_leader_pid()]] - code - app/dashboard/test_controller.py
- [[test_real_spawn_appends_telemetry_and_batch_size_flags_when_set()]] - code - app/dashboard/test_controller.py
- [[test_real_spawn_omits_telemetry_and_batch_size_flags_when_unset()]] - code - app/dashboard/test_controller.py
- [[test_reconcile_marks_clean_finish_as_done_when_target_reached()]] - code - app/dashboard/test_controller.py
- [[test_reconcile_removes_override_dir_once_a_crashed_run_self_heals()]] - code - app/dashboard/test_controller.py
- [[test_resume_refuses_while_pausing_has_not_yet_confirmed_dead()]] - code - app/dashboard/test_controller.py
- [[test_resume_refuses_while_run_is_still_running()]] - code - app/dashboard/test_controller.py
- [[test_resume_relaunches_with_same_params()]] - code - app/dashboard/test_controller.py
- [[test_resume_reuses_the_same_run_cwd_and_pass_through_params()]] - code - app/dashboard/test_controller.py
- [[test_retarget_stops_current_run_then_starts_new_target()]] - code - app/dashboard/test_controller.py
- [[test_retarget_wires_og43_params_through()]] - code - app/dashboard/test_controller.py
- [[test_retarget_wires_og45_og46_params_through()]] - code - app/dashboard/test_controller.py
- [[test_retarget_with_nothing_running_just_starts()]] - code - app/dashboard/test_controller.py
- [[test_start_allowed_again_once_prior_run_confirmed_dead()]] - code - app/dashboard/test_controller.py
- [[test_start_falls_back_to_repo_root_config_when_data_dir_has_none()]] - code - app/dashboard/test_controller.py
- [[test_start_forwards_telemetry_poll_interval_and_batch_size_as_plain_flags()]] - code - app/dashboard/test_controller.py
- [[test_start_refuses_when_a_run_is_already_running()]] - code - app/dashboard/test_controller.py
- [[test_start_rejects_an_invalid_override_before_spawning()]] - code - app/dashboard/test_controller.py
- [[test_start_with_arxiv_categories_writes_override_config()]] - code - app/dashboard/test_controller.py
- [[test_start_with_arxiv_date_range_writes_override_config()]] - code - app/dashboard/test_controller.py
- [[test_start_with_keyword_already_in_base_config_is_a_no_op_override()]] - code - app/dashboard/test_controller.py
- [[test_start_with_keywords_augments_not_replaces_and_writes_override_config()]] - code - app/dashboard/test_controller.py
- [[test_start_with_no_edits_launches_in_the_real_data_dir_no_override()]] - code - app/dashboard/test_controller.py
- [[test_start_with_no_edits_reports_the_base_config_ordering_and_filters()]] - code - app/dashboard/test_controller.py
- [[test_start_with_ordering_matching_the_base_config_is_a_no_op_override()]] - code - app/dashboard/test_controller.py
- [[test_start_with_ordering_relevance_writes_override_config()]] - code - app/dashboard/test_controller.py
- [[test_start_with_parse_batch_size_writes_override_config_with_absolute_paths()]] - code - app/dashboard/test_controller.py
- [[test_start_writes_manifest_with_real_launch_shape()]] - code - app/dashboard/test_controller.py
- [[test_stop_escalates_to_sigkill_when_process_ignores_sigterm()]] - code - app/dashboard/test_controller.py
- [[test_stop_marks_done_not_paused()]] - code - app/dashboard/test_controller.py
- [[test_stop_removes_an_edited_runs_override_dir()]] - code - app/dashboard/test_controller.py
- [[test_stop_with_no_override_never_touches_the_real_data_dir()]] - code - app/dashboard/test_controller.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_controllerpy
SORT file.name ASC
```

## Connections to other communities
- 10 edges to [[_COMMUNITY_NoRunError]]
- 3 edges to [[_COMMUNITY_controller.py]]
- 1 edge to [[_COMMUNITY_test_capture_identity_accepts_a_cmdline_that_never_went_through_env]]
- 1 edge to [[_COMMUNITY_test_capture_identity_falls_back_to_env_cmdline_if_it_never_resolves]]
- 1 edge to [[_COMMUNITY_test_capture_identity_still_retries_through_proc_not_ready_yet]]
- 1 edge to [[_COMMUNITY_test_real_spawn_ignores_paper_ids_file_kwarg_without_erroring]]
- 1 edge to [[_COMMUNITY_test_real_spawn_launches_build_corpus_not_ingest]]
- 1 edge to [[_COMMUNITY_test_verified_pid_rejects_manifest_with_no_stored_identity]]

## Top bridge nodes
- [[test_controller.py]] - degree 62, connects to 8 communities
- [[_fake_spawn()]] - degree 19, connects to 1 community
- [[test_resume_refuses_while_pausing_has_not_yet_confirmed_dead()]] - degree 5, connects to 1 community
- [[test_pause_refuses_to_signal_a_pid_reused_by_an_unrelated_process()]] - degree 4, connects to 1 community
- [[test_resume_refuses_while_run_is_still_running()]] - degree 4, connects to 1 community