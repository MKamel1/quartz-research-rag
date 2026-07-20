---
source_file: "app/assembly.py"
type: "code"
community: "Config"
location: "L588"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Config
---

# build_mcp_server()

## Connections
- [[Client]] - `calls` [EXTRACTED]
- [[Config]] - `references` [EXTRACTED]
- [[DocumentStore]] - `calls` [EXTRACTED]
- [[FileGpuLock]] - `calls` [EXTRACTED]
- [[McpServer]] - `references` [EXTRACTED]
- [[Path_1]] - `calls` [EXTRACTED]
- [[Retriever_2]] - `calls` [EXTRACTED]
- [[TeiEmbedder_2]] - `calls` [EXTRACTED]
- [[TeiReranker]] - `calls` [EXTRACTED]
- [[VectorIndex]] - `calls` [EXTRACTED]
- [[_resolve_store_paths()]] - `calls` [EXTRACTED]
- [[assembly.py]] - `contains` [EXTRACTED]
- [[main()_6]] - `calls` [EXTRACTED]
- [[retrieval_eval.py]] - `imports` [EXTRACTED]
- [[serve.py]] - `imports` [EXTRACTED]
- [[test_assembly.py]] - `imports` [EXTRACTED]
- [[test_build_mcp_server_clamps_rerank_pool_size_to_the_rerankers_max_batch_size()]] - `calls` [EXTRACTED]
- [[test_build_mcp_server_default_k_matches_configs_own_default_top_k()]] - `calls` [EXTRACTED]
- [[test_build_mcp_server_rerank_pool_size_below_the_cap_passes_through_unclamped()]] - `calls` [EXTRACTED]
- [[test_build_mcp_server_wires_default_k_from_configs_top_k()]] - `calls` [EXTRACTED]
- [[test_composition_e2e.py]] - `imports` [EXTRACTED]
- [[test_ingest_then_query_one_real_paper()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Config