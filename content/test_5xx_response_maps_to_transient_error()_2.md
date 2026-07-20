---
source_file: "rag/test_reranker.py"
type: "code"
community: "TeiReranker"
location: "L123"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/TeiReranker
---

# test_5xx_response_maps_to_transient_error()

## Connections
- [[FakeGpuLock]] - `calls` [EXTRACTED]
- [[TeiReranker]] - `calls` [EXTRACTED]
- [[TransientError]] - `indirect_call` [INFERRED]
- [[_candidates()_1]] - `calls` [EXTRACTED]
- [[test_reranker.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/TeiReranker