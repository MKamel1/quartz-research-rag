---
type: community
cohesion: 0.14
members: 15
---

# build_corpus.py

**Cohesion:** 0.14 - loosely connected
**Members:** 15 nodes

## Members
- [[Connection]] - code
- [[Guaranteed-read-only connection (`mode=ro` URI) -- same pattern as     `appdash]] - rationale - app/build_corpus.py
- [[Launches `app.prefetch_pdfs` as a child in THIS process's group -- no `start_new]] - rationale - app/build_corpus.py
- [[One `app.ingest --paper-ids-file batch_file` invocation, blocking until that b]] - rationale - app/build_corpus.py
- [[One metadata-only `ordering=relevance` harvest for `focus_area_queries` -- arX]] - rationale - app/build_corpus.py
- [[Passes `date_from``date_to``categories` to `done_count` only when at least one]] - rationale - app/build_corpus.py
- [[_call_done_count()]] - code - app/build_corpus.py
- [[_done_ids()]] - code - app/build_corpus.py
- [[_relevance_rank()]] - code - app/build_corpus.py
- [[_ro_connect()]] - code - app/build_corpus.py
- [[_run_ingest()]] - code - app/build_corpus.py
- [[_spawn_prefetch()]] - code - app/build_corpus.py
- [[`python -m app.build_corpus` — the continuous cache-first corpus builder (OG-40]] - rationale - app/build_corpus.py
- [[build_corpus.py]] - code - app/build_corpus.py
- [[test_run_ingest_appends_telemetry_poll_interval_flag_only_when_set()]] - code - app/test_build_corpus.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/build_corpuspy
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_test_build_corpus.py]]
- 7 edges to [[_COMMUNITY_build_to_target]]
- 6 edges to [[_COMMUNITY_ensure_prefetch_running]]
- 2 edges to [[_COMMUNITY_cached_not_done]]
- 2 edges to [[_COMMUNITY__validate_cli_args]]
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY_load_config]]
- 1 edge to [[_COMMUNITY_PermanentError]]
- 1 edge to [[_COMMUNITY__order_by_relevance]]

## Top bridge nodes
- [[build_corpus.py]] - degree 26, connects to 9 communities
- [[_spawn_prefetch()]] - degree 5, connects to 3 communities
- [[_run_ingest()]] - degree 5, connects to 2 communities
- [[_call_done_count()]] - degree 4, connects to 2 communities
- [[_ro_connect()]] - degree 5, connects to 1 community