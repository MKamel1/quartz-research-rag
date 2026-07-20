---
source_file: "rag/test_reranker.py"
type: "code"
community: "TeiReranker"
location: "L336"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/TeiReranker
---

# test_real_reranker_accepts_a_full_max_batch_sized_batch()

## Connections
- [[FakeGpuLock]] - `calls` [EXTRACTED]
- [[TeiReranker]] - `calls` [EXTRACTED]
- [[TransientError]] - `indirect_call` [INFERRED]
- [[_candidates()_1]] - `calls` [EXTRACTED]
- [[test_reranker.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/TeiReranker