---
source_file: "app/doctor.py"
type: "code"
community: "test_doctor.py"
location: "L83"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_doctorpy
---

# PreflightIssue

## Connections
- [[.__str__()]] - `method` [EXTRACTED]
- [[Config]] - `uses` [INFERRED]
- [[_FakeUsage]] - `uses` [INFERRED]
- [[check_disk_headroom()]] - `references` [EXTRACTED]
- [[check_gpu_headroom()]] - `references` [EXTRACTED]
- [[check_gpu_lock_free()]] - `references` [EXTRACTED]
- [[check_services()]] - `references` [EXTRACTED]
- [[doctor.py]] - `contains` [EXTRACTED]
- [[format_issues()]] - `references` [EXTRACTED]
- [[run_preflight()]] - `references` [EXTRACTED]
- [[test_check_disk_headroom_fails_with_named_reason_when_low()]] - `indirect_call` [INFERRED]
- [[test_doctor.py]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_doctorpy