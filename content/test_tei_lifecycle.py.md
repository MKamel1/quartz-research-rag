---
source_file: "app/test_tei_lifecycle.py"
type: "code"
community: "test_doctor.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_doctorpy
---

# test_tei_lifecycle.py

## Connections
- [[Tests for `app.tei_lifecycle` (T-DOC19) -- offline, no real DockerGPUnetwork c]] - `rationale_for` [EXTRACTED]
- [[_healthy_client()]] - `contains` [EXTRACTED]
- [[start_tei_containers()]] - `imports` [EXTRACTED]
- [[stop_tei_containers()]] - `imports` [EXTRACTED]
- [[tei_lifecycle.py]] - `imports_from` [EXTRACTED]
- [[test_start_tei_containers_polls_until_both_endpoints_are_healthy()]] - `contains` [EXTRACTED]
- [[test_start_tei_containers_runs_docker_start_with_both_container_names()]] - `contains` [EXTRACTED]
- [[test_start_tei_containers_swallows_a_connection_error_as_unhealthy()]] - `contains` [EXTRACTED]
- [[test_start_tei_containers_swallows_docker_start_failure_and_still_polls_health()]] - `contains` [EXTRACTED]
- [[test_start_tei_containers_times_out_and_logs_a_warning_if_never_healthy()]] - `contains` [EXTRACTED]
- [[test_stop_tei_containers_is_best_effort_and_swallows_failures()]] - `contains` [EXTRACTED]
- [[test_stop_tei_containers_runs_docker_stop_with_both_container_names()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_doctorpy