---
source_file: "rag/test_retriever.py"
type: "code"
community: "FakeVectorStore"
location: "L321"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeVectorStore
---

# test_retrieve_pool_size_lets_reranker_promote_a_passage_ranked_below_k()

## Connections
- [[FakeEmbedder]] - `calls` [EXTRACTED]
- [[FakeReranker]] - `calls` [EXTRACTED]
- [[FakeVectorStore]] - `calls` [EXTRACTED]
- [[RecordingDocStore_1]] - `calls` [EXTRACTED]
- [[_make_retriever()]] - `calls` [EXTRACTED]
- [[_rrf_hits()]] - `calls` [EXTRACTED]
- [[_seed_chunk()]] - `calls` [EXTRACTED]
- [[test_retriever.py_1]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeVectorStore