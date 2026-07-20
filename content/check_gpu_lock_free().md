---
source_file: "app/doctor.py"
type: "code"
community: "test_doctor.py"
location: "L117"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_doctorpy
---

# check_gpu_lock_free()

## Connections
- [[A held `.gpu.lock` at preflight time means another real ingestserve process alr]] - `rationale_for` [EXTRACTED]
- [[PreflightIssue]] - `references` [EXTRACTED]
- [[doctor.py]] - `contains` [EXTRACTED]
- [[run_preflight()]] - `calls` [EXTRACTED]
- [[test_check_gpu_lock_free_fails_with_named_reason_when_held()]] - `calls` [EXTRACTED]
- [[test_check_gpu_lock_free_never_holds_the_lock_past_returning()]] - `calls` [EXTRACTED]
- [[test_check_gpu_lock_free_passes_when_unheld()]] - `calls` [EXTRACTED]
- [[test_doctor.py]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_doctorpy