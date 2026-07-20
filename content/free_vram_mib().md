---
source_file: "app/gpu_headroom.py"
type: "code"
community: "AdaptiveBatchSizer"
location: "L20"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/AdaptiveBatchSizer
---

# free_vram_mib()

## Connections
- [[Real, current free VRAM in MiB on GPU 0, or `None` if it can't be determined.]] - `rationale_for` [EXTRACTED]
- [[adaptive_batch_sizer.py]] - `imports` [EXTRACTED]
- [[check_gpu_headroom()]] - `calls` [EXTRACTED]
- [[gpu_headroom.py]] - `contains` [EXTRACTED]
- [[test_adaptive_batch_sizer.py]] - `imports` [EXTRACTED]
- [[test_free_vram_mib_invokes_the_expected_nvidia_smi_command()]] - `calls` [EXTRACTED]
- [[test_free_vram_mib_never_raises_logs_a_warning_on_failure()]] - `calls` [EXTRACTED]
- [[test_free_vram_mib_parses_real_nvidia_smi_output_shape()]] - `calls` [EXTRACTED]
- [[test_free_vram_mib_returns_none_on_empty_output()]] - `calls` [EXTRACTED]
- [[test_free_vram_mib_returns_none_on_subprocess_failure()]] - `calls` [EXTRACTED]
- [[test_free_vram_mib_returns_none_on_unparseable_output()]] - `calls` [EXTRACTED]
- [[test_gpu_headroom.py]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/AdaptiveBatchSizer