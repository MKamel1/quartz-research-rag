---
source_file: "app/dashboard/test_controller.py"
type: "code"
community: "test_controller.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_controllerpy
---

# test_controller.py

## Connections
- [[DoubleRunError]] - `imports` [EXTRACTED]
- [[InvalidOverrideError]] - `imports` [EXTRACTED]
- [[NoRunError]] - `imports` [EXTRACTED]
- [[Tests for `app.dashboard.controller` -- offline, no real GPUnetworkingest. Eve]] - `rationale_for` [EXTRACTED]
- [[_cleanup()]] - `contains` [EXTRACTED]
- [[_fake_spawn()]] - `contains` [EXTRACTED]
- [[_kwargs_spawn()]] - `contains` [EXTRACTED]
- [[_spawn_recorder()]] - `contains` [EXTRACTED]
- [[controller.py]] - `imports_from` [EXTRACTED]
- [[test_capture_identity_accepts_a_cmdline_that_never_went_through_env()]] - `contains` [EXTRACTED]
- [[test_capture_identity_falls_back_to_env_cmdline_if_it_never_resolves()]] - `contains` [EXTRACTED]
- [[test_capture_identity_retries_past_the_env_wrappers_transitional_cmdline()]] - `contains` [EXTRACTED]
- [[test_capture_identity_still_retries_through_proc_not_ready_yet()]] - `contains` [EXTRACTED]
- [[test_concurrent_starts_are_serialized_exactly_one_run()]] - `contains` [EXTRACTED]
- [[test_control_lock_is_mutually_exclusive()]] - `contains` [EXTRACTED]
- [[test_default_run_has_null_paper_ids_file_and_no_kwarg_to_fake_spawn()]] - `contains` [EXTRACTED]
- [[test_guard_sees_through_a_stale_running_status_once_pid_is_dead()]] - `contains` [EXTRACTED]
- [[test_manifest_write_is_atomic_no_tmp_file_left_behind()]] - `contains` [EXTRACTED]
- [[test_override_run_resolves_db_path_under_data_dir_not_repo_root()]] - `contains` [EXTRACTED]
- [[test_paper_ids_file_recorded_in_manifest_and_repassed_on_resume()]] - `contains` [EXTRACTED]
- [[test_pause_does_not_remove_the_override_dir()]] - `contains` [EXTRACTED]
- [[test_pause_escalates_to_sigkill_when_process_ignores_sigterm()]] - `contains` [EXTRACTED]
- [[test_pause_refuses_to_signal_a_pid_reused_by_an_unrelated_process()]] - `contains` [EXTRACTED]
- [[test_pause_sends_sigterm_and_confirms_death()]] - `contains` [EXTRACTED]
- [[test_pause_signals_the_whole_process_group_not_just_the_leader_pid()]] - `contains` [EXTRACTED]
- [[test_pause_with_no_running_run_raises()]] - `contains` [EXTRACTED]
- [[test_real_spawn_appends_telemetry_and_batch_size_flags_when_set()]] - `contains` [EXTRACTED]
- [[test_real_spawn_ignores_paper_ids_file_kwarg_without_erroring()]] - `contains` [EXTRACTED]
- [[test_real_spawn_launches_build_corpus_not_ingest()]] - `contains` [EXTRACTED]
- [[test_real_spawn_omits_telemetry_and_batch_size_flags_when_unset()]] - `contains` [EXTRACTED]
- [[test_reconcile_marks_clean_finish_as_done_when_target_reached()]] - `contains` [EXTRACTED]
- [[test_reconcile_removes_override_dir_once_a_crashed_run_self_heals()]] - `contains` [EXTRACTED]
- [[test_resume_refuses_while_pausing_has_not_yet_confirmed_dead()]] - `contains` [EXTRACTED]
- [[test_resume_refuses_while_run_is_still_running()]] - `contains` [EXTRACTED]
- [[test_resume_relaunches_with_same_params()]] - `contains` [EXTRACTED]
- [[test_resume_reuses_the_same_run_cwd_and_pass_through_params()]] - `contains` [EXTRACTED]
- [[test_resume_with_no_manifest_raises()]] - `contains` [EXTRACTED]
- [[test_retarget_stops_current_run_then_starts_new_target()]] - `contains` [EXTRACTED]
- [[test_retarget_wires_og43_params_through()]] - `contains` [EXTRACTED]
- [[test_retarget_wires_og45_og46_params_through()]] - `contains` [EXTRACTED]
- [[test_retarget_with_nothing_running_just_starts()]] - `contains` [EXTRACTED]
- [[test_start_allowed_again_once_prior_run_confirmed_dead()]] - `contains` [EXTRACTED]
- [[test_start_falls_back_to_repo_root_config_when_data_dir_has_none()]] - `contains` [EXTRACTED]
- [[test_start_forwards_telemetry_poll_interval_and_batch_size_as_plain_flags()]] - `contains` [EXTRACTED]
- [[test_start_refuses_when_a_run_is_already_running()]] - `contains` [EXTRACTED]
- [[test_start_rejects_an_invalid_override_before_spawning()]] - `contains` [EXTRACTED]
- [[test_start_with_arxiv_categories_writes_override_config()]] - `contains` [EXTRACTED]
- [[test_start_with_arxiv_date_range_writes_override_config()]] - `contains` [EXTRACTED]
- [[test_start_with_keyword_already_in_base_config_is_a_no_op_override()]] - `contains` [EXTRACTED]
- [[test_start_with_keywords_augments_not_replaces_and_writes_override_config()]] - `contains` [EXTRACTED]
- [[test_start_with_no_edits_launches_in_the_real_data_dir_no_override()]] - `contains` [EXTRACTED]
- [[test_start_with_no_edits_reports_the_base_config_ordering_and_filters()]] - `contains` [EXTRACTED]
- [[test_start_with_ordering_matching_the_base_config_is_a_no_op_override()]] - `contains` [EXTRACTED]
- [[test_start_with_ordering_relevance_writes_override_config()]] - `contains` [EXTRACTED]
- [[test_start_with_parse_batch_size_writes_override_config_with_absolute_paths()]] - `contains` [EXTRACTED]
- [[test_start_writes_manifest_with_real_launch_shape()]] - `contains` [EXTRACTED]
- [[test_stop_escalates_to_sigkill_when_process_ignores_sigterm()]] - `contains` [EXTRACTED]
- [[test_stop_marks_done_not_paused()]] - `contains` [EXTRACTED]
- [[test_stop_removes_an_edited_runs_override_dir()]] - `contains` [EXTRACTED]
- [[test_stop_with_no_override_never_touches_the_real_data_dir()]] - `contains` [EXTRACTED]
- [[test_stop_with_no_running_run_raises()]] - `contains` [EXTRACTED]
- [[test_verified_pid_rejects_manifest_with_no_stored_identity()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_controllerpy