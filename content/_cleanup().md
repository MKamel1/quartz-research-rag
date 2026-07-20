---
source_file: "app/dashboard/test_controller.py"
type: "code"
community: "test_controller.py"
location: "L36"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_controllerpy
---

# _cleanup()

## Connections
- [[Best-effort kill any leftover `sleep` process a test spawned but never confirme]] - `rationale_for` [EXTRACTED]
- [[test_concurrent_starts_are_serialized_exactly_one_run()]] - `calls` [EXTRACTED]
- [[test_controller.py]] - `contains` [EXTRACTED]
- [[test_default_run_has_null_paper_ids_file_and_no_kwarg_to_fake_spawn()]] - `calls` [EXTRACTED]
- [[test_manifest_write_is_atomic_no_tmp_file_left_behind()]] - `calls` [EXTRACTED]
- [[test_override_run_resolves_db_path_under_data_dir_not_repo_root()]] - `calls` [EXTRACTED]
- [[test_paper_ids_file_recorded_in_manifest_and_repassed_on_resume()]] - `calls` [EXTRACTED]
- [[test_pause_does_not_remove_the_override_dir()]] - `calls` [EXTRACTED]
- [[test_pause_escalates_to_sigkill_when_process_ignores_sigterm()]] - `calls` [EXTRACTED]
- [[test_pause_sends_sigterm_and_confirms_death()]] - `calls` [EXTRACTED]
- [[test_pause_signals_the_whole_process_group_not_just_the_leader_pid()]] - `calls` [EXTRACTED]
- [[test_resume_refuses_while_pausing_has_not_yet_confirmed_dead()]] - `calls` [EXTRACTED]
- [[test_resume_refuses_while_run_is_still_running()]] - `calls` [EXTRACTED]
- [[test_resume_relaunches_with_same_params()]] - `calls` [EXTRACTED]
- [[test_resume_reuses_the_same_run_cwd_and_pass_through_params()]] - `calls` [EXTRACTED]
- [[test_retarget_stops_current_run_then_starts_new_target()]] - `calls` [EXTRACTED]
- [[test_retarget_wires_og43_params_through()]] - `calls` [EXTRACTED]
- [[test_retarget_wires_og45_og46_params_through()]] - `calls` [EXTRACTED]
- [[test_retarget_with_nothing_running_just_starts()]] - `calls` [EXTRACTED]
- [[test_start_allowed_again_once_prior_run_confirmed_dead()]] - `calls` [EXTRACTED]
- [[test_start_falls_back_to_repo_root_config_when_data_dir_has_none()]] - `calls` [EXTRACTED]
- [[test_start_forwards_telemetry_poll_interval_and_batch_size_as_plain_flags()]] - `calls` [EXTRACTED]
- [[test_start_refuses_when_a_run_is_already_running()]] - `calls` [EXTRACTED]
- [[test_start_with_arxiv_categories_writes_override_config()]] - `calls` [EXTRACTED]
- [[test_start_with_arxiv_date_range_writes_override_config()]] - `calls` [EXTRACTED]
- [[test_start_with_keyword_already_in_base_config_is_a_no_op_override()]] - `calls` [EXTRACTED]
- [[test_start_with_keywords_augments_not_replaces_and_writes_override_config()]] - `calls` [EXTRACTED]
- [[test_start_with_no_edits_launches_in_the_real_data_dir_no_override()]] - `calls` [EXTRACTED]
- [[test_start_with_no_edits_reports_the_base_config_ordering_and_filters()]] - `calls` [EXTRACTED]
- [[test_start_with_ordering_matching_the_base_config_is_a_no_op_override()]] - `calls` [EXTRACTED]
- [[test_start_with_ordering_relevance_writes_override_config()]] - `calls` [EXTRACTED]
- [[test_start_with_parse_batch_size_writes_override_config_with_absolute_paths()]] - `calls` [EXTRACTED]
- [[test_start_writes_manifest_with_real_launch_shape()]] - `calls` [EXTRACTED]
- [[test_stop_escalates_to_sigkill_when_process_ignores_sigterm()]] - `calls` [EXTRACTED]
- [[test_stop_marks_done_not_paused()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_controllerpy