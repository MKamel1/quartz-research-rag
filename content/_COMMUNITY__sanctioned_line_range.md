---
type: community
cohesion: 0.67
members: 3
---

# _sanctioned_line_range

**Cohesion:** 0.67 - moderately connected
**Members:** 3 nodes

## Members
- [[Line range (1-indexed, `range` end exclusive) covering `SANCTIONED_FUNCTION`'s f]] - rationale - ci/checks/id_slicing.py
- [[_sanctioned_line_range()]] - code - ci/checks/id_slicing.py
- [[range]] - code

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_sanctioned_line_range
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_DiffFile]]
- 1 edge to [[_COMMUNITY_test_checks.py]]

## Top bridge nodes
- [[_sanctioned_line_range()]] - degree 4, connects to 2 communities