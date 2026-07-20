---
source_file: "app/doctor.py"
type: "code"
community: "test_doctor.py"
location: "L104"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_doctorpy
---

# check_gpu_headroom()

## Connections
- [[PreflightIssue]] - `references` [EXTRACTED]
- [[Reuses `appgpu_headroom.py`'s real, already-built VRAM probe (T-DOC43 reuse]] - `rationale_for` [EXTRACTED]
- [[doctor.py]] - `contains` [EXTRACTED]
- [[free_vram_mib()]] - `calls` [EXTRACTED]
- [[run_preflight()]] - `calls` [EXTRACTED]
- [[test_check_gpu_headroom_fails_when_probe_cannot_read_vram()]] - `calls` [EXTRACTED]
- [[test_check_gpu_headroom_fails_with_named_reason_when_low()]] - `calls` [EXTRACTED]
- [[test_check_gpu_headroom_passes_when_plenty_free()]] - `calls` [EXTRACTED]
- [[test_doctor.py]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_doctorpy