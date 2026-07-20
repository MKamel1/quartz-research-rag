---
source_file: "rag/test_embedder.py"
type: "code"
community: "test_embedder.py"
location: "L431"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_embedderpy
---

# test_embed_raises_transient_error_when_gpu_lock_is_wedged()

## Connections
- [[.acquire()_4]] - `calls` [EXTRACTED]
- [[FileGpuLock]] - `calls` [EXTRACTED]
- [[TransientError]] - `indirect_call` [INFERRED]
- [[_build_real_embedder()]] - `calls` [EXTRACTED]
- [[test_embedder.py_1]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_embedderpy