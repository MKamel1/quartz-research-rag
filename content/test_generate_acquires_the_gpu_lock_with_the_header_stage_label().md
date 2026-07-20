---
source_file: "rag/test_contextual_header.py"
type: "code"
community: "FakeGpuLock"
location: "L109"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeGpuLock
---

# test_generate_acquires_the_gpu_lock_with_the_header_stage_label()

## Connections
- [[ContextualHeaderGenerator]] - `calls` [EXTRACTED]
- [[FakeGpuLock]] - `calls` [EXTRACTED]
- [[_client()]] - `calls` [EXTRACTED]
- [[_ok_handler()]] - `indirect_call` [INFERRED]
- [[test_contextual_header.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeGpuLock