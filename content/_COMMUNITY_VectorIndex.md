---
type: community
cohesion: 0.14
members: 23
---

# VectorIndex

**Cohesion:** 0.14 - loosely connected
**Members:** 23 nodes

## Members
- [[.__init__()_80]] - code - rag/vector_index.py
- [[._call()]] - code - rag/vector_index.py
- [[._ensure_collection()]] - code - rag/vector_index.py
- [[._ranked_ids()]] - code - rag/vector_index.py
- [[.create_and_download_snapshot()_5]] - code - rag/vector_index.py
- [[.delete()_4]] - code - rag/vector_index.py
- [[.has_idf_modifier()_2]] - code - rag/vector_index.py
- [[.hybrid_search()_1]] - code - rag/vector_index.py
- [[.point_count()_2]] - code - rag/vector_index.py
- [[.rebuild()_3]] - code - rag/vector_index.py
- [[.upsert()_4]] - code - rag/vector_index.py
- [[Backup half of the vendor boundary (`appsnapshot.py`'s job, T-DOC57) create a]] - rationale - rag/vector_index.py
- [[Current number of points in the collection -- `appreindex_idf.py`'s (OG-27) bef]] - rationale - rag/vector_index.py
- [[Drop and recreate the collection in place, re-upserting every point it already h]] - rationale - rag/vector_index.py
- [[Removes the points for `ids` (chunk_idssummary_ids) — T-DOC40, the vector-store]] - rationale - rag/vector_index.py
- [[SparseVector]] - code
- [[SparseVectorParams]] - code
- [[VectorIndex]] - code - rag/vector_index.py
- [[Whether the sparse vector field is currently configured with the native IDF modi]] - rationale - rag/vector_index.py
- [[_point_id()]] - code - rag/vector_index.py
- [[_sparse_vector()]] - code - rag/vector_index.py
- [[_sparse_vector_params()]] - code - rag/vector_index.py
- [[`VectorIndex(host, port, collection_name, dim, hybrid_dense_weight=0.5)` — conne]] - rationale - rag/vector_index.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/VectorIndex
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY_SearchFilters]]
- 4 edges to [[_COMMUNITY_PermanentError]]
- 2 edges to [[_COMMUNITY_load_config]]
- 2 edges to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY_assembly.py]]
- 1 edge to [[_COMMUNITY_build_ingestion_orchestrator]]
- 1 edge to [[_COMMUNITY_Config]]
- 1 edge to [[_COMMUNITY_test_reembed_experiment.py]]
- 1 edge to [[_COMMUNITY_test_vector_index.py]]

## Top bridge nodes
- [[VectorIndex]] - degree 25, connects to 8 communities
- [[.hybrid_search()_1]] - degree 8, connects to 2 communities
- [[._call()]] - degree 10, connects to 1 community
- [[._ensure_collection()]] - degree 6, connects to 1 community
- [[.upsert()_4]] - degree 5, connects to 1 community