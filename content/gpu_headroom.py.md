---
source_file: "app/gpu_headroom.py"
type: "code"
community: "AdaptiveBatchSizer"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/AdaptiveBatchSizer
---

# gpu_headroom.py

## Connections
- [[Real free-VRAM probe, via `nvidia-smi` -- stdlib `subprocess`, no vendor SDK (sa]] - `rationale_for` [EXTRACTED]
- [[adaptive_batch_sizer.py]] - `imports_from` [EXTRACTED]
- [[doctor.py]] - `imports_from` [EXTRACTED]
- [[free_vram_mib()]] - `contains` [EXTRACTED]
- [[test_gpu_headroom.py]] - `imports_from` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/AdaptiveBatchSizer