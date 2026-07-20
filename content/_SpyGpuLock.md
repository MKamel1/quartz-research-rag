---
source_file: "rag/test_embedder.py"
type: "code"
community: "test_embedder.py"
location: "L387"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_embedderpy
---

# _SpyGpuLock

## Connections
- [[.__init__()_54]] - `method` [EXTRACTED]
- [[._ctx()]] - `method` [EXTRACTED]
- [[.acquire()_4]] - `method` [EXTRACTED]
- [[EmbedderInfo_2]] - `uses` [INFERRED]
- [[FakeEmbedder]] - `uses` [INFERRED]
- [[FakeGpuLock]] - `uses` [INFERRED]
- [[PermanentError]] - `uses` [INFERRED]
- [[Records whether the lock is currently held (entered but not yet exited) -- prove]] - `rationale_for` [EXTRACTED]
- [[TransientError]] - `uses` [INFERRED]
- [[test_backoff_sleep_happens_with_the_gpu_lock_already_released()]] - `calls` [EXTRACTED]
- [[test_embedder.py_1]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_embedderpy