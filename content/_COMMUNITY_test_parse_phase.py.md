---
type: community
cohesion: 0.12
members: 29
---

# test_parse_phase.py

**Cohesion:** 0.12 - loosely connected
**Members:** 29 nodes

## Members
- [[.__init__()_14]] - code - app/test_parse_phase.py
- [[.harvest()_2]] - code - app/test_parse_phase.py
- [[.parse_phase()]] - code - app/test_parse_phase.py
- [[Default behavior (`cfg.ingest_paper_ids` unset) must be completely unchanged th]] - rationale - app/test_parse_phase.py
- [[FakeOrchestrator]] - code - app/test_parse_phase.py
- [[Namespace_6]] - code
- [[Pass 1 setup + run -- pulled out of `__main__` (same pattern as `appingest.py`']] - rationale - app/parse_phase.py
- [[Round-robin (stride) slice, not a contiguous chunk `refsshard_indexshard_cou]] - rationale - app/parse_phase.py
- [[Sharding is a stride slice (`refsin`), not a contiguous chunk -- balances pa]] - rationale - app/test_parse_phase.py
- [[Tests for `app.parse_phase` (T-DOC29) -- offline, no real subprocessGPUnetwork]] - rationale - app/test_parse_phase.py
- [[The property that makes N concurrent workers safe to share one `papers.db` (T-DO]] - rationale - app/test_parse_phase.py
- [[_make_ref()_1]] - code - app/test_parse_phase.py
- [[_parse_args()_4]] - code - app/parse_phase.py
- [[_run_parse_phase()]] - code - app/parse_phase.py
- [[_shard()]] - code - app/parse_phase.py
- [[`_run_parse_phase`'s optional `shard_index``shard_count` kwargs must slice the]] - rationale - app/test_parse_phase.py
- [[`cfg.db_path``cfg.blob_dir``cfg.collection` (T-DOC29 real Config fields, not]] - rationale - app/test_parse_phase.py
- [[`cfg.ingest_paper_ids` (T-EVAL harvest-scoping override, T-DOC29 now a real Con]] - rationale - app/test_parse_phase.py
- [[`python -m app.parse_phase` — runs ONLY `IngestionOrchestrator.parse_phase()` (M]] - rationale - app/parse_phase.py
- [[parse_phase.py]] - code - app/parse_phase.py
- [[shard_index=0, shard_count=1 (the argparse defaults) must return every ref, unch]] - rationale - app/test_parse_phase.py
- [[test_parse_phase.py]] - code - app/test_parse_phase.py
- [[test_run_parse_phase_applies_shard_before_calling_parse_phase()]] - code - app/test_parse_phase.py
- [[test_run_parse_phase_uses_fetch_by_ids_when_ingest_paper_ids_set()]] - code - app/test_parse_phase.py
- [[test_run_parse_phase_uses_query_harvest_when_ingest_paper_ids_unset()]] - code - app/test_parse_phase.py
- [[test_run_parse_phase_wires_db_path_blob_dir_collection_from_config()]] - code - app/test_parse_phase.py
- [[test_shard_default_reproduces_todays_single_worker_behavior()]] - code - app/test_parse_phase.py
- [[test_shard_is_disjoint_and_complete()]] - code - app/test_parse_phase.py
- [[test_shard_round_robin_not_contiguous()]] - code - app/test_parse_phase.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_parse_phasepy
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_Config]]
- 8 edges to [[_COMMUNITY_PaperRef]]
- 4 edges to [[_COMMUNITY_load_config]]
- 2 edges to [[_COMMUNITY_harvest_refs]]
- 2 edges to [[_COMMUNITY_build_ingestion_orchestrator]]
- 2 edges to [[_COMMUNITY_ParsedDoc]]
- 1 edge to [[_COMMUNITY_assembly.py]]

## Top bridge nodes
- [[parse_phase.py]] - degree 14, connects to 7 communities
- [[test_parse_phase.py]] - degree 17, connects to 4 communities
- [[_run_parse_phase()]] - degree 11, connects to 3 communities
- [[FakeOrchestrator]] - degree 10, connects to 2 communities
- [[_shard()]] - degree 8, connects to 1 community