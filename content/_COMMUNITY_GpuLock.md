---
type: community
cohesion: 0.09
members: 32
---

# GpuLock

**Cohesion:** 0.09 - loosely connected
**Members:** 32 nodes

## Members
- [[.__init__()_25]] - code - ci/checks/negative_examples/gpu_lock_good.py
- [[.__init__()_31]] - code - rag/contextual_header.py
- [[.__init__()_48]] - code - rag/reranker.py
- [[.__init__()_50]] - code - rag/summarizer.py
- [[.acquire()]] - code - contracts/gpu_lock.py
- [[.acquire()_1]] - code - contracts/test_gpu_lock.py
- [[AbstractContextManager]] - code
- [[Blocks until the single GPU slot is free, then yields; releases on exit (incl. o]] - rationale - contracts/gpu_lock.py
- [[Client_5]] - code
- [[Client_8]] - code
- [[Client_9]] - code
- [[GpuLock]] - code - contracts/gpu_lock.py
- [[GpuLock — cross-process serialization for GPU-bound stages (DATA-CONTRACTS.md G]] - rationale - contracts/gpu_lock.py
- [[Missing `acquire` entirely — must not satisfy the GpuLock protocol.]] - rationale - contracts/test_gpu_lock.py
- [[OllamaSummarizer — the real `Summarizer` adapter (T-C2, M3B) over the local gene]] - rationale - rag/summarizer.py
- [[Positive-example fixture for check (f) (cichecksgpu_lock.py) — the real adapte]] - rationale - ci/checks/negative_examples/gpu_lock_good.py
- [[Protocol_4]] - code
- [[RetrySleep_3]] - code
- [[Sibling test for contractsgpu_lock.py (T-F1 DoD imported by a trivial test).]] - rationale - contracts/test_gpu_lock.py
- [[TeiEmbedder_1]] - code - ci/checks/negative_examples/gpu_lock_good.py
- [[TeiEmbedder — the real `Embedder` adapter (T-C3, M4) over the batching-optimized]] - rationale - rag/embedder.py
- [[_ConformingLock]] - code - contracts/test_gpu_lock.py
- [[_NonConformingLock]] - code - contracts/test_gpu_lock.py
- [[_default_retry_sleep()]] - code - rag/embedder.py
- [[embedder.py_1]] - code - rag/embedder.py
- [[gpu_lock.py_1]] - code - contracts/gpu_lock.py
- [[gpu_lock_good.py]] - code - ci/checks/negative_examples/gpu_lock_good.py
- [[summarizer.py]] - code - rag/summarizer.py
- [[test_acquire_yields_a_context_manager_that_is_a_no_op_by_default_shape()]] - code - contracts/test_gpu_lock.py
- [[test_conforming_class_satisfies_the_protocol()]] - code - contracts/test_gpu_lock.py
- [[test_gpu_lock.py]] - code - contracts/test_gpu_lock.py
- [[test_non_conforming_class_does_not_satisfy_the_protocol()]] - code - contracts/test_gpu_lock.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/GpuLock
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_assembly.py]]
- 7 edges to [[_COMMUNITY_PermanentError]]
- 7 edges to [[_COMMUNITY_FakeGpuLock]]
- 4 edges to [[_COMMUNITY_TeiReranker]]
- 3 edges to [[_COMMUNITY_TeiEmbedder]]
- 2 edges to [[_COMMUNITY___init__.py]]
- 2 edges to [[_COMMUNITY_test_embedder.py]]
- 2 edges to [[_COMMUNITY_ADR-09 LLM serving stack — Ollama now, vLLM for V1]]
- 2 edges to [[_COMMUNITY_test_summarizer.py]]
- 1 edge to [[_COMMUNITY_test_reembed_experiment.py]]
- 1 edge to [[_COMMUNITY_ContractError]]
- 1 edge to [[_COMMUNITY_Anchor]]
- 1 edge to [[_COMMUNITY_ParsedDoc]]

## Top bridge nodes
- [[GpuLock]] - degree 28, connects to 6 communities
- [[summarizer.py]] - degree 14, connects to 6 communities
- [[embedder.py_1]] - degree 13, connects to 6 communities
- [[gpu_lock.py_1]] - degree 11, connects to 4 communities
- [[.__init__()_48]] - degree 4, connects to 1 community