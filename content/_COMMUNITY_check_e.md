---
type: community
cohesion: 0.15
members: 14
---

# check_e

**Cohesion:** 0.15 - loosely connected
**Members:** 14 nodes

## Members
- [[Check (e) — CONVENTIONS.md §0.2  §12, WORK-BREAKDOWN.md T-F7 a diff touching a]] - rationale - ci/checks/foundation_label.py
- [[Path_22]] - code
- [[The path column of every non-comment, non-blank line in a CODEOWNERS file, e.g.]] - rationale - ci/checks/foundation_label.py
- [[_is_protected()]] - code - ci/checks/foundation_label.py
- [[`changed_paths` are repo-relative (no leading ``); `codeowners_paths` are CODEO]] - rationale - ci/checks/foundation_label.py
- [[check_e()]] - code - ci/checks/foundation_label.py
- [[foundation_label.py]] - code - ci/checks/foundation_label.py
- [[read_codeowners_paths()]] - code - ci/checks/foundation_label.py
- [[test_check_e_flags_protected_path_without_label()]] - code - ci/checks/test_checks.py
- [[test_check_e_matches_single_file_entries_exactly()]] - code - ci/checks/test_checks.py
- [[test_check_e_passes_when_no_protected_path_touched()]] - code - ci/checks/test_checks.py
- [[test_check_e_passes_with_label()]] - code - ci/checks/test_checks.py
- [[test_read_codeowners_paths_ignores_comments_and_blanks()]] - code - ci/checks/test_checks.py
- [[test_read_codeowners_paths_matches_real_file()]] - code - ci/checks/test_checks.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/check_e
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_test_checks.py]]
- 6 edges to [[_COMMUNITY_DiffFile]]
- 4 edges to [[_COMMUNITY_run_enforcement.py]]

## Top bridge nodes
- [[check_e()]] - degree 12, connects to 3 communities
- [[read_codeowners_paths()]] - degree 9, connects to 3 communities
- [[foundation_label.py]] - degree 7, connects to 1 community
- [[test_check_e_flags_protected_path_without_label()]] - degree 2, connects to 1 community
- [[test_check_e_matches_single_file_entries_exactly()]] - degree 2, connects to 1 community