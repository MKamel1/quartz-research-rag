---
source_file: "rag/test_reranker.py"
type: "code"
community: "TeiReranker"
location: "L223"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/TeiReranker
---

# _SpyGpuLock

## Connections
- [[.__init__()_76]] - `method` [EXTRACTED]
- [[._ctx()_1]] - `method` [EXTRACTED]
- [[.acquire()_5]] - `method` [EXTRACTED]
- [[FakeGpuLock]] - `uses` [INFERRED]
- [[PermanentError]] - `uses` [INFERRED]
- [[Records whether the lock is currently held -- proves a backoff sleep happens wit]] - `rationale_for` [EXTRACTED]
- [[RerankCandidate]] - `uses` [INFERRED]
- [[TeiReranker]] - `uses` [INFERRED]
- [[TransientError]] - `uses` [INFERRED]
- [[test_backoff_sleep_happens_with_the_gpu_lock_already_released()_1]] - `calls` [EXTRACTED]
- [[test_reranker.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/TeiReranker