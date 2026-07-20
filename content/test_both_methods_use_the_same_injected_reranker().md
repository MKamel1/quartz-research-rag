---
source_file: "rag/test_retriever.py"
type: "code"
community: "FakeVectorStore"
location: "L670"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeVectorStore
---

# test_both_methods_use_the_same_injected_reranker()

## Connections
- [[FakeEmbedder]] - `calls` [EXTRACTED]
- [[FakeReranker]] - `calls` [EXTRACTED]
- [[FakeVectorStore]] - `calls` [EXTRACTED]
- [[RecordingDocStore_1]] - `calls` [EXTRACTED]
- [[_make_retriever()]] - `calls` [EXTRACTED]
- [[_seed_chunk()]] - `calls` [EXTRACTED]
- [[_seed_summary()]] - `calls` [EXTRACTED]
- [[test_retriever.py_1]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeVectorStore