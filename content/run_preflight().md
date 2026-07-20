---
source_file: "app/doctor.py"
type: "code"
community: "test_doctor.py"
location: "L171"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_doctorpy
---

# run_preflight()

## Connections
- [[Config]] - `references` [EXTRACTED]
- [[Every T-DOC43T-DOC52 check in one call -- disk, GPUVRAM, `.gpu.lock`, every re]] - `rationale_for` [EXTRACTED]
- [[PreflightIssue]] - `references` [EXTRACTED]
- [[_preflight_gate()]] - `calls` [EXTRACTED]
- [[check_disk_headroom()]] - `calls` [EXTRACTED]
- [[check_gpu_headroom()]] - `calls` [EXTRACTED]
- [[check_gpu_lock_free()]] - `calls` [EXTRACTED]
- [[check_services()]] - `calls` [EXTRACTED]
- [[doctor.py]] - `contains` [EXTRACTED]
- [[main()_1]] - `calls` [EXTRACTED]
- [[test_doctor.py]] - `imports` [EXTRACTED]
- [[test_run_preflight_fails_with_named_reason_when_a_service_is_down()]] - `calls` [EXTRACTED]
- [[test_run_preflight_passes_when_everything_healthy()]] - `calls` [EXTRACTED]
- [[test_run_preflight_reports_every_kind_of_issue_at_once()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_doctorpy