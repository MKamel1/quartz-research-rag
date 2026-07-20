---
source_file: "rag/test_contextual_header.py"
type: "code"
community: "FakeGpuLock"
location: "L179"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeGpuLock
---

# test_empty_llm_response_raises_permanent_error()

## Connections
- [[ContextualHeaderGenerator]] - `calls` [EXTRACTED]
- [[FakeGpuLock]] - `calls` [EXTRACTED]
- [[PermanentError]] - `indirect_call` [INFERRED]
- [[_client()]] - `calls` [EXTRACTED]
- [[test_contextual_header.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeGpuLock