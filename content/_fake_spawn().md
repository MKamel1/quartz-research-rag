---
source_file: "app/dashboard/test_controller.py"
type: "code"
community: "test_controller.py"
location: "L21"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/test_controllerpy
---

# _fake_spawn()

## Connections
- [[Launches `sleep 100` as its own process-group leader -- same `start_new_session=]] - `rationale_for` [EXTRACTED]
- [[test_controller.py]] - `contains` [EXTRACTED]
- [[test_default_run_has_null_paper_ids_file_and_no_kwarg_to_fake_spawn()]] - `indirect_call` [INFERRED]
- [[test_guard_sees_through_a_stale_running_status_once_pid_is_dead()]] - `indirect_call` [INFERRED]
- [[test_manifest_write_is_atomic_no_tmp_file_left_behind()]] - `indirect_call` [INFERRED]
- [[test_pause_refuses_to_signal_a_pid_reused_by_an_unrelated_process()]] - `indirect_call` [INFERRED]
- [[test_pause_sends_sigterm_and_confirms_death()]] - `indirect_call` [INFERRED]
- [[test_pause_signals_the_whole_process_group_not_just_the_leader_pid()]] - `indirect_call` [INFERRED]
- [[test_reconcile_marks_clean_finish_as_done_when_target_reached()]] - `indirect_call` [INFERRED]
- [[test_resume_refuses_while_pausing_has_not_yet_confirmed_dead()]] - `indirect_call` [INFERRED]
- [[test_resume_refuses_while_run_is_still_running()]] - `indirect_call` [INFERRED]
- [[test_resume_with_no_manifest_raises()]] - `indirect_call` [INFERRED]
- [[test_retarget_stops_current_run_then_starts_new_target()]] - `indirect_call` [INFERRED]
- [[test_retarget_with_nothing_running_just_starts()]] - `indirect_call` [INFERRED]
- [[test_start_allowed_again_once_prior_run_confirmed_dead()]] - `indirect_call` [INFERRED]
- [[test_start_refuses_when_a_run_is_already_running()]] - `indirect_call` [INFERRED]
- [[test_start_writes_manifest_with_real_launch_shape()]] - `indirect_call` [INFERRED]
- [[test_stop_marks_done_not_paused()]] - `indirect_call` [INFERRED]
- [[test_stop_with_no_override_never_touches_the_real_data_dir()]] - `indirect_call` [INFERRED]

#graphify/code #graphify/INFERRED #community/test_controllerpy