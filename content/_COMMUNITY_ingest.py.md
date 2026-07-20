---
type: community
cohesion: 0.12
members: 21
---

# ingest.py

**Cohesion:** 0.12 - loosely connected
**Members:** 21 nodes

## Members
- [[Namespace_4]] - code
- [[OG-49 M10 removes the scratch `config.yaml` dir `_write_override_config_dir` wr]] - rationale - app/ingest.py
- [[OG-492 resolves the whole-run lock ABSOLUTE against `cfg.db_path`'s own direct]] - rationale - app/ingest.py
- [[OG-493 `--parse-workers 0` spawns ZERO Pass-1 subprocesses (`range(0)` in]] - rationale - app/ingest.py
- [[Pass 1 -- pulled out of `__main__` (same pattern as `_run_finish_phase`) so a te]] - rationale - app/ingest.py
- [[Path_7]] - code
- [[T-DOC44 `IngestionOrchestrator``DocumentStore` never create or verify schema t]] - rationale - app/ingest.py
- [[T-DOC45 (`--limit`)  T-DOC46 (`--scratch`) both are run-scoped overrides on th]] - rationale - app/ingest.py
- [[T-DOC45T-DOC46 Pass 1 runs `python -m app.parse_phase` as a separate process (]] - rationale - app/ingest.py
- [[T-DOC46 auto-provision isolated throwaway storage -- a temp `db_path` + `blob_d]] - rationale - app/ingest.py
- [[_cleanup_scratch_dir()]] - code - app/ingest.py
- [[_effective_config()]] - code - app/ingest.py
- [[_ensure_db_migrated()]] - code - app/ingest.py
- [[_ingest_lock_path()]] - code - app/ingest.py
- [[_parse_args()_2]] - code - app/ingest.py
- [[_run_parse_phase_subprocesses()]] - code - app/ingest.py
- [[_scratch_overrides()]] - code - app/ingest.py
- [[_validate_parse_workers()]] - code - app/ingest.py
- [[_write_override_config_dir()]] - code - app/ingest.py
- [[`python -m app.ingest` — the real IngestionOrchestrator composition root.  Runs]] - rationale - app/ingest.py
- [[ingest.py]] - code - app/ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/ingestpy
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_Config]]
- 3 edges to [[_COMMUNITY_test_doctor.py]]
- 3 edges to [[_COMMUNITY_load_config]]
- 3 edges to [[_COMMUNITY_migrate]]
- 2 edges to [[_COMMUNITY_assembly.py]]
- 2 edges to [[_COMMUNITY_build_ingestion_orchestrator]]
- 1 edge to [[_COMMUNITY_harvest_refs]]
- 1 edge to [[_COMMUNITY_telemetry.py]]
- 1 edge to [[_COMMUNITY_test_ingest.py]]

## Top bridge nodes
- [[ingest.py]] - degree 26, connects to 9 communities
- [[_effective_config()]] - degree 6, connects to 1 community
- [[_ensure_db_migrated()]] - degree 4, connects to 1 community
- [[_ingest_lock_path()]] - degree 4, connects to 1 community
- [[_write_override_config_dir()]] - degree 4, connects to 1 community