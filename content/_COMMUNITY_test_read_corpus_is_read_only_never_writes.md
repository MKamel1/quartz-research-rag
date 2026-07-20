---
type: community
cohesion: 1.00
members: 2
---

# test_read_corpus_is_read_only_never_writes

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[Mechanical guarantee the ro connection must fail (degrade to nulls), not fall b]] - rationale - app/dashboard/test_status.py
- [[test_read_corpus_is_read_only_never_writes()]] - code - app/dashboard/test_status.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_read_corpus_is_read_only_never_writes
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_test_status.py]]

## Top bridge nodes
- [[test_read_corpus_is_read_only_never_writes()]] - degree 2, connects to 1 community