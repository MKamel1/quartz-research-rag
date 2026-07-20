---
source_file: "rag/test_contextual_header.py"
type: "code"
community: "FakeGpuLock"
location: "L121"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeGpuLock
---

# test_generate_returns_the_llm_response_text()

## Connections
- [[ContextualHeaderGenerator]] - `calls` [EXTRACTED]
- [[FakeGpuLock]] - `calls` [EXTRACTED]
- [[_client()]] - `calls` [EXTRACTED]
- [[_ok_handler()]] - `indirect_call` [INFERRED]
- [[test_contextual_header.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeGpuLock