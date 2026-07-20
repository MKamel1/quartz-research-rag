---
source_file: "rag/test_embedder.py"
type: "code"
community: "test_embedder.py"
location: "L282"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_embedderpy
---

# test_5xx_response_maps_to_transient_error()

## Connections
- [[FakeGpuLock]] - `calls` [EXTRACTED]
- [[TransientError]] - `indirect_call` [INFERRED]
- [[_build_real_embedder()]] - `calls` [EXTRACTED]
- [[test_embedder.py_1]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_embedderpy