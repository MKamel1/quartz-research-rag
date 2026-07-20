---
type: community
cohesion: 0.33
members: 6
---

# check_b

**Cohesion:** 0.33 - loosely connected
**Members:** 6 nodes

## Members
- [[Flags any added line in a non-`contracts` file that defines a class or `TypedDi]] - rationale - ci/checks/contract_shadowing.py
- [[_defined_name()]] - code - ci/checks/contract_shadowing.py
- [[check_b()]] - code - ci/checks/contract_shadowing.py
- [[test_check_b_flags_shadowed_contract_name()]] - code - ci/checks/test_checks.py
- [[test_check_b_ignores_files_under_contracts()]] - code - ci/checks/test_checks.py
- [[test_check_b_passes_non_colliding_name()]] - code - ci/checks/test_checks.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/check_b
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_test_checks.py]]
- 5 edges to [[_COMMUNITY_DiffFile]]
- 2 edges to [[_COMMUNITY_run_enforcement.py]]

## Top bridge nodes
- [[check_b()]] - degree 12, connects to 3 communities
- [[test_check_b_flags_shadowed_contract_name()]] - degree 3, connects to 1 community
- [[test_check_b_ignores_files_under_contracts()]] - degree 3, connects to 1 community
- [[test_check_b_passes_non_colliding_name()]] - degree 3, connects to 1 community
- [[_defined_name()]] - degree 2, connects to 1 community