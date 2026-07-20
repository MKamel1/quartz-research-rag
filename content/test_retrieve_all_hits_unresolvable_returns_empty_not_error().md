---
source_file: "rag/test_retriever.py"
type: "code"
community: "FakeVectorStore"
location: "L432"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeVectorStore
---

# test_retrieve_all_hits_unresolvable_returns_empty_not_error()

## Connections
- [[FakeEmbedder]] - `calls` [EXTRACTED]
- [[FakeReranker]] - `calls` [EXTRACTED]
- [[FakeVectorStore]] - `calls` [EXTRACTED]
- [[RecordingDocStore_1]] - `calls` [EXTRACTED]
- [[_make_retriever()]] - `calls` [EXTRACTED]
- [[_seed_chunk()]] - `calls` [EXTRACTED]
- [[test_retriever.py_1]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeVectorStore