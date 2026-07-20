---
type: community
cohesion: 0.16
members: 18
---

# FakeTeiLifecycle

**Cohesion:** 0.16 - loosely connected
**Members:** 18 nodes

## Members
- [[.__init__()_11]] - code - app/test_ingest.py
- [[.__init__()_10]] - code - app/test_ingest.py
- [[.embed()_1]] - code - app/test_ingest.py
- [[.start_tei_containers()_1]] - code - app/test_ingest.py
- [[.stop_tei_containers()_1]] - code - app/test_ingest.py
- [[FakeFlakyEmbedder]] - code - app/test_ingest.py
- [[FakeTeiLifecycle]] - code - app/test_ingest.py
- [[Local, test-only stand-in for `app.tei_lifecycle`'s public interface (named `Fak]] - rationale - app/test_ingest.py
- [[No caller-supplied `on_stage` (every pre-T-DOC59 call site) forwards `None` -- t]] - rationale - app/test_ingest.py
- [[Reproduces the real `TeiEmbedder` hitting a `docker stop`-ped `rag-tei-embed` co]] - rationale - app/test_ingest.py
- [[Sanity check on the fixtures themselves calling `finish_phase()` before TEI has]] - rationale - app/test_ingest.py
- [[The actual fix `app.ingest._run_finish_phase` must call     `tei_lifecycle.star]] - rationale - app/test_ingest.py
- [[_make_orchestrator()]] - code - app/test_ingest.py
- [[`_run_finish_phase`'s `on_stage=` kwarg must reach `build_ingestion_orchestrator]] - rationale - app/test_ingest.py
- [[test_fixture_reproduces_the_original_bug_shape()]] - code - app/test_ingest.py
- [[test_run_finish_phase_default_on_stage_is_none()]] - code - app/test_ingest.py
- [[test_run_finish_phase_forwards_on_stage_to_build_ingestion_orchestrator()]] - code - app/test_ingest.py
- [[test_run_finish_phase_restarts_tei_before_the_topic_query_embed()]] - code - app/test_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/FakeTeiLifecycle
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_test_ingest.py]]
- 6 edges to [[_COMMUNITY_Config]]
- 5 edges to [[_COMMUNITY_PaperRef]]
- 4 edges to [[_COMMUNITY_test_embedder.py]]
- 3 edges to [[_COMMUNITY_PermanentError]]
- 3 edges to [[_COMMUNITY_FakeGpuLock]]
- 3 edges to [[_COMMUNITY_test_orchestrator.py]]

## Top bridge nodes
- [[FakeTeiLifecycle]] - degree 17, connects to 7 communities
- [[FakeFlakyEmbedder]] - degree 15, connects to 7 communities
- [[_make_orchestrator()]] - degree 10, connects to 6 communities
- [[test_run_finish_phase_default_on_stage_is_none()]] - degree 6, connects to 2 communities
- [[test_run_finish_phase_forwards_on_stage_to_build_ingestion_orchestrator()]] - degree 6, connects to 2 communities