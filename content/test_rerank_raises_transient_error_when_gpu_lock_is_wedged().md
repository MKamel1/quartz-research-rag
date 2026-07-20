---
source_file: "rag/test_reranker.py"
type: "code"
community: "TeiReranker"
location: "L262"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/TeiReranker
---

# test_rerank_raises_transient_error_when_gpu_lock_is_wedged()

## Connections
- [[.acquire()_5]] - `calls` [EXTRACTED]
- [[FileGpuLock]] - `calls` [EXTRACTED]
- [[TeiReranker]] - `calls` [EXTRACTED]
- [[TransientError]] - `indirect_call` [INFERRED]
- [[_candidates()_1]] - `calls` [EXTRACTED]
- [[test_reranker.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/TeiReranker