---
source_file: "app/test_doctor.py"
type: "code"
community: "test_doctor.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_doctorpy
---

# test_doctor.py

## Connections
- [[Config]] - `imports` [EXTRACTED]
- [[FileLock]] - `imports` [EXTRACTED]
- [[PreflightIssue]] - `imports` [EXTRACTED]
- [[Tests for `app.doctor` (T-DOC43T-DOC52) -- offline, no real DockerGPUnetwork]] - `rationale_for` [EXTRACTED]
- [[_FakeUsage]] - `contains` [EXTRACTED]
- [[_all_healthy()]] - `contains` [EXTRACTED]
- [[_cfg()]] - `contains` [EXTRACTED]
- [[check_disk_headroom()]] - `imports` [EXTRACTED]
- [[check_gpu_headroom()]] - `imports` [EXTRACTED]
- [[check_gpu_lock_free()]] - `imports` [EXTRACTED]
- [[check_services()]] - `imports` [EXTRACTED]
- [[config.py]] - `imports_from` [EXTRACTED]
- [[doctor.py]] - `imports_from` [EXTRACTED]
- [[format_issues()]] - `imports` [EXTRACTED]
- [[run_preflight()]] - `imports` [EXTRACTED]
- [[test_check_disk_headroom_fails_with_named_reason_when_low()]] - `contains` [EXTRACTED]
- [[test_check_disk_headroom_passes_when_plenty_free()]] - `contains` [EXTRACTED]
- [[test_check_gpu_headroom_fails_when_probe_cannot_read_vram()]] - `contains` [EXTRACTED]
- [[test_check_gpu_headroom_fails_with_named_reason_when_low()]] - `contains` [EXTRACTED]
- [[test_check_gpu_headroom_passes_when_plenty_free()]] - `contains` [EXTRACTED]
- [[test_check_gpu_lock_free_fails_with_named_reason_when_held()]] - `contains` [EXTRACTED]
- [[test_check_gpu_lock_free_never_holds_the_lock_past_returning()]] - `contains` [EXTRACTED]
- [[test_check_gpu_lock_free_passes_when_unheld()]] - `contains` [EXTRACTED]
- [[test_check_services_auto_starts_a_down_tei_container_via_tei_lifecycle()]] - `contains` [EXTRACTED]
- [[test_check_services_fails_with_named_reason_when_a_service_is_down()]] - `contains` [EXTRACTED]
- [[test_check_services_no_auto_start_never_attempts_a_restart()]] - `contains` [EXTRACTED]
- [[test_check_services_passes_when_everything_healthy()]] - `contains` [EXTRACTED]
- [[test_check_services_reports_multiple_down_services_in_one_pass()]] - `contains` [EXTRACTED]
- [[test_check_services_reports_tei_as_down_if_auto_start_does_not_fix_it()]] - `contains` [EXTRACTED]
- [[test_health_only_services_never_shell_out_to_docker()]] - `contains` [EXTRACTED]
- [[test_run_preflight_fails_with_named_reason_when_a_service_is_down()]] - `contains` [EXTRACTED]
- [[test_run_preflight_passes_when_everything_healthy()]] - `contains` [EXTRACTED]
- [[test_run_preflight_reports_every_kind_of_issue_at_once()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_doctorpy