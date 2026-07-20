---
source_file: "app/test_gpu_headroom.py"
type: "code"
community: "AdaptiveBatchSizer"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/AdaptiveBatchSizer
---

# test_gpu_headroom.py

## Connections
- [[Tests for `app.gpu_headroom` (T-DOC21) -- offline, no real nvidia-smiGPU calls.]] - `rationale_for` [EXTRACTED]
- [[_fake_completed()_1]] - `contains` [EXTRACTED]
- [[free_vram_mib()]] - `imports` [EXTRACTED]
- [[gpu_headroom.py]] - `imports_from` [EXTRACTED]
- [[test_free_vram_mib_invokes_the_expected_nvidia_smi_command()]] - `contains` [EXTRACTED]
- [[test_free_vram_mib_never_raises_logs_a_warning_on_failure()]] - `contains` [EXTRACTED]
- [[test_free_vram_mib_parses_real_nvidia_smi_output_shape()]] - `contains` [EXTRACTED]
- [[test_free_vram_mib_returns_none_on_empty_output()]] - `contains` [EXTRACTED]
- [[test_free_vram_mib_returns_none_on_subprocess_failure()]] - `contains` [EXTRACTED]
- [[test_free_vram_mib_returns_none_on_unparseable_output()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/AdaptiveBatchSizer