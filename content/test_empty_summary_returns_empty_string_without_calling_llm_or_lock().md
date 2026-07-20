---
source_file: "rag/test_contextual_header.py"
type: "code"
community: "FakeGpuLock"
location: "L36"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeGpuLock
---

# test_empty_summary_returns_empty_string_without_calling_llm_or_lock()

## Connections
- [[ContextualHeaderGenerator]] - `calls` [EXTRACTED]
- [[FakeGpuLock]] - `calls` [EXTRACTED]
- [[_client()]] - `calls` [EXTRACTED]
- [[test_contextual_header.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeGpuLock