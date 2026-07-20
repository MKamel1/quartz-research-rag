---
type: community
cohesion: 1.00
members: 2
---

# test_real_spawn_launches_build_corpus_not_ingest

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[OG-41 the dashboard's real launch command must be `python -m app.build_corpus -]] - rationale - app/dashboard/test_controller.py
- [[test_real_spawn_launches_build_corpus_not_ingest()]] - code - app/dashboard/test_controller.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_real_spawn_launches_build_corpus_not_ingest
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_test_controller.py]]

## Top bridge nodes
- [[test_real_spawn_launches_build_corpus_not_ingest()]] - degree 2, connects to 1 community