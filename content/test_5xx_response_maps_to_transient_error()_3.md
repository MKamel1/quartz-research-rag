---
source_file: "rag/test_summarizer.py"
type: "code"
community: "test_summarizer.py"
location: "L233"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_summarizerpy
---

# test_5xx_response_maps_to_transient_error()

## Connections
- [[FakeGpuLock]] - `calls` [EXTRACTED]
- [[TransientError]] - `indirect_call` [INFERRED]
- [[_build_summarizer_with_client()]] - `calls` [EXTRACTED]
- [[_prose_doc()]] - `calls` [EXTRACTED]
- [[test_summarizer.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_summarizerpy