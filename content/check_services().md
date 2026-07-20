---
source_file: "app/doctor.py"
type: "code"
community: "test_doctor.py"
location: "L142"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_doctorpy
---

# check_services()

## Connections
- [[Health-ping every required service. T-DOC52 if either TEI endpoint is unhealthy]] - `rationale_for` [EXTRACTED]
- [[PreflightIssue]] - `references` [EXTRACTED]
- [[_is_healthy()]] - `calls` [EXTRACTED]
- [[doctor.py]] - `contains` [EXTRACTED]
- [[run_preflight()]] - `calls` [EXTRACTED]
- [[start_tei_containers()]] - `calls` [EXTRACTED]
- [[test_check_services_auto_starts_a_down_tei_container_via_tei_lifecycle()]] - `calls` [EXTRACTED]
- [[test_check_services_fails_with_named_reason_when_a_service_is_down()]] - `calls` [EXTRACTED]
- [[test_check_services_no_auto_start_never_attempts_a_restart()]] - `calls` [EXTRACTED]
- [[test_check_services_passes_when_everything_healthy()]] - `calls` [EXTRACTED]
- [[test_check_services_reports_multiple_down_services_in_one_pass()]] - `calls` [EXTRACTED]
- [[test_check_services_reports_tei_as_down_if_auto_start_does_not_fix_it()]] - `calls` [EXTRACTED]
- [[test_doctor.py]] - `imports` [EXTRACTED]
- [[test_health_only_services_never_shell_out_to_docker()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_doctorpy