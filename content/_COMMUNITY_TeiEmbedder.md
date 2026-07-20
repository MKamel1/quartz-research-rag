---
type: community
cohesion: 0.22
members: 13
---

# TeiEmbedder

**Cohesion:** 0.22 - loosely connected
**Members:** 13 nodes

## Members
- [[.__init__()_33]] - code - rag/embedder.py
- [[._backoff()]] - code - rag/embedder.py
- [[._normalize()]] - code - rag/embedder.py
- [[._post_batch_with_retry()]] - code - rag/embedder.py
- [[.embed()_2]] - code - rag/embedder.py
- [[.info()_1]] - code - rag/embedder.py
- [[Client_6]] - code
- [[EmbedderInfo_3]] - code
- [[One sub-batch's `embed` call, retried up to `_max_retries` times on `TransientE]] - rationale - rag/embedder.py
- [[Real `Embedder` adapter one or more batched HTTP calls per `embed()` invocation]] - rationale - rag/embedder.py
- [[RetrySleep]] - code
- [[TeiEmbedder_2]] - code - rag/embedder.py
- [[Vector_1]] - code

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/TeiEmbedder
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_PermanentError]]
- 3 edges to [[_COMMUNITY_ContractError]]
- 3 edges to [[_COMMUNITY_GpuLock]]
- 1 edge to [[_COMMUNITY_assembly.py]]
- 1 edge to [[_COMMUNITY_build_ingestion_orchestrator]]
- 1 edge to [[_COMMUNITY_Config]]
- 1 edge to [[_COMMUNITY_test_reembed_experiment.py]]
- 1 edge to [[_COMMUNITY_test_embedder.py]]

## Top bridge nodes
- [[TeiEmbedder_2]] - degree 17, connects to 8 communities
- [[._post_batch_with_retry()]] - degree 6, connects to 1 community
- [[.embed()_2]] - degree 5, connects to 1 community
- [[.__init__()_33]] - degree 5, connects to 1 community
- [[._normalize()]] - degree 4, connects to 1 community