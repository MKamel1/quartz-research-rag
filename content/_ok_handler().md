---
source_file: "rag/test_contextual_header.py"
type: "code"
community: "FakeGpuLock"
location: "L27"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeGpuLock
---

# _ok_handler()

## Connections
- [[Request]] - `references` [EXTRACTED]
- [[Response]] - `references` [EXTRACTED]
- [[test_contextual_header.py]] - `contains` [EXTRACTED]
- [[test_generate_acquires_the_gpu_lock_with_the_header_stage_label()]] - `indirect_call` [INFERRED]
- [[test_generate_returns_the_llm_response_text()]] - `indirect_call` [INFERRED]

#graphify/code #graphify/EXTRACTED #community/FakeGpuLock