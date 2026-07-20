---
source_file: "rag/test_contextual_header.py"
type: "code"
community: "FakeGpuLock"
location: "L143"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeGpuLock
---

# test_5xx_response_maps_to_transient_error()

## Connections
- [[ContextualHeaderGenerator]] - `calls` [EXTRACTED]
- [[FakeGpuLock]] - `calls` [EXTRACTED]
- [[TransientError]] - `indirect_call` [INFERRED]
- [[_client()]] - `calls` [EXTRACTED]
- [[test_contextual_header.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeGpuLock