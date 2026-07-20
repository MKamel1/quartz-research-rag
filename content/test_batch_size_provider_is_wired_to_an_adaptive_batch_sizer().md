---
source_file: "app/test_assembly.py"
type: "code"
community: "_build_orchestrator_for_hook_test"
location: "L850"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/_build_orchestrator_for_hook_test
---

# test_batch_size_provider_is_wired_to_an_adaptive_batch_sizer()

## Connections
- [[AdaptiveBatchSizer]] - `indirect_call` [INFERRED]
- [[Config]] - `calls` [EXTRACTED]
- [[T-DOC21 `build_ingestion_orchestrator` wires `batch_size_provider` to a real]] - `rationale_for` [EXTRACTED]
- [[_build_orchestrator_for_hook_test()]] - `calls` [EXTRACTED]
- [[test_assembly.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/_build_orchestrator_for_hook_test