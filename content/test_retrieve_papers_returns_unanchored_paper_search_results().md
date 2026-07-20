---
source_file: "rag/test_retriever.py"
type: "code"
community: "FakeVectorStore"
location: "L551"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeVectorStore
---

# test_retrieve_papers_returns_unanchored_paper_search_results()

## Connections
- [[FakeEmbedder]] - `calls` [EXTRACTED]
- [[FakeReranker]] - `calls` [EXTRACTED]
- [[FakeVectorStore]] - `calls` [EXTRACTED]
- [[GroundedResult]] - `indirect_call` [INFERRED]
- [[RecordingDocStore_1]] - `calls` [EXTRACTED]
- [[_make_retriever()]] - `calls` [EXTRACTED]
- [[_seed_summary()]] - `calls` [EXTRACTED]
- [[test_retriever.py_1]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeVectorStore