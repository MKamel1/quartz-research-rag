---
source_file: "rag/test_reranker.py"
type: "code"
community: "TeiReranker"
location: "L187"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/TeiReranker
---

# test_permanent_error_is_never_retried()

## Connections
- [[FakeGpuLock]] - `calls` [EXTRACTED]
- [[PermanentError]] - `indirect_call` [INFERRED]
- [[TeiReranker]] - `calls` [EXTRACTED]
- [[_candidates()_1]] - `calls` [EXTRACTED]
- [[test_reranker.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/TeiReranker