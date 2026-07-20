---
source_file: "rag/gpu_lock.py"
type: "code"
community: "assembly.py"
location: "L18"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/assemblypy
---

# FileGpuLock

## Connections
- [[.__init__()_41]] - `method` [EXTRACTED]
- [[._acquire_with_timeout()]] - `method` [EXTRACTED]
- [[.acquire()_3]] - `method` [EXTRACTED]
- [[TransientError]] - `uses` [INFERRED]
- [[acquire_gpu_lock_or_fail()]] - `calls` [EXTRACTED]
- [[assembly.py]] - `imports` [EXTRACTED]
- [[benchmark.py]] - `imports` [EXTRACTED]
- [[build_ingestion_orchestrator()]] - `calls` [EXTRACTED]
- [[build_mcp_server()]] - `calls` [EXTRACTED]
- [[gpu_lock.py_2]] - `contains` [EXTRACTED]
- [[reembed_experiment.py]] - `imports` [EXTRACTED]
- [[test_acquire_with_timeout_raises_transient_error_when_lock_is_held()]] - `calls` [EXTRACTED]
- [[test_acquire_with_timeout_succeeds_when_lock_is_free()]] - `calls` [EXTRACTED]
- [[test_acquire_without_timeout_still_blocks_forever_by_default()]] - `calls` [EXTRACTED]
- [[test_basic_enter_and_exit_is_clean()]] - `calls` [EXTRACTED]
- [[test_different_paths_do_not_contend()]] - `calls` [EXTRACTED]
- [[test_embed_raises_transient_error_when_gpu_lock_is_wedged()]] - `calls` [EXTRACTED]
- [[test_embedder.py_1]] - `imports` [EXTRACTED]
- [[test_file_gpu_lock_satisfies_the_gpu_lock_protocol()]] - `calls` [EXTRACTED]
- [[test_gpu_lock.py_1]] - `imports` [EXTRACTED]
- [[test_releases_on_exception()]] - `calls` [EXTRACTED]
- [[test_rerank_raises_transient_error_when_gpu_lock_is_wedged()]] - `calls` [EXTRACTED]
- [[test_reranker.py]] - `imports` [EXTRACTED]
- [[test_two_instances_on_the_same_path_are_mutually_exclusive()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/assemblypy