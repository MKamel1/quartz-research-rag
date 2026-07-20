---
type: community
cohesion: 0.13
members: 26
---

# run_enforcement.py

**Cohesion:** 0.13 - loosely connected
**Members:** 26 nodes

## Members
- [[Check (e)'s label list -- fetched live from the GitHub API when possible (see mo]] - rationale - ci/run_enforcement.py
- [[Computes the changed-file list the enforcement job scans — the one thing that di]] - rationale - ci/checks/changed_files.py
- [[Convenience wrapper `list_changed_paths(compute_diff_base(...), repo_root)`.]] - rationale - ci/checks/changed_files.py
- [[Every top-level class name defined in `contracts_dir`'s own `.py` files (excludi]] - rationale - ci/checks/contract_shadowing.py
- [[Path_19]] - code
- [[Path_20]] - code
- [[Repo-relative paths changed between `diff_base` and `HEAD`. A path deleted by th]] - rationale - ci/checks/changed_files.py
- [[Repo-relative paths the diff between `diff_base` and `HEAD` deleted -- the sub]] - rationale - ci/checks/changed_files.py
- [[The refsha to diff `HEAD` against, given the GitHub Actions event that triggere]] - rationale - ci/checks/changed_files.py
- [[_fetch_live_labels()]] - code - ci/run_enforcement.py
- [[_load_event()]] - code - ci/run_enforcement.py
- [[_merge_base()]] - code - ci/checks/changed_files.py
- [[_pr_labels()]] - code - ci/run_enforcement.py
- [[`GET` a PR's current labels straight from GitHub -- the Issues API also serves P]] - rationale - ci/run_enforcement.py
- [[changed_files.py]] - code - ci/checks/changed_files.py
- [[compute_changed_files()]] - code - ci/checks/changed_files.py
- [[compute_diff_base()]] - code - ci/checks/changed_files.py
- [[discover_contract_names()]] - code - ci/checks/contract_shadowing.py
- [[list_changed_paths()]] - code - ci/checks/changed_files.py
- [[list_deleted_paths()]] - code - ci/checks/changed_files.py
- [[main()_8]] - code - ci/run_enforcement.py
- [[run_enforcement.py]] - code - ci/run_enforcement.py
- [[test_discover_contract_names_finds_real_types()]] - code - ci/checks/test_checks.py
- [[test_pr_labels_falls_back_to_cached_event_when_live_call_fails()]] - code - ci/checks/test_checks.py
- [[test_pr_labels_falls_back_to_cached_event_without_a_token()]] - code - ci/checks/test_checks.py
- [[test_pr_labels_uses_live_api_labels_not_stale_cached_event()]] - code - ci/checks/test_checks.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/run_enforcementpy
SORT file.name ASC
```

## Connections to other communities
- 17 edges to [[_COMMUNITY_test_checks.py]]
- 10 edges to [[_COMMUNITY_test_diff.py]]
- 6 edges to [[_COMMUNITY_DiffFile]]
- 4 edges to [[_COMMUNITY_check_e]]
- 2 edges to [[_COMMUNITY_check_b]]

## Top bridge nodes
- [[run_enforcement.py]] - degree 25, connects to 5 communities
- [[main()_8]] - degree 18, connects to 5 communities
- [[discover_contract_names()]] - degree 8, connects to 2 communities
- [[compute_diff_base()]] - degree 10, connects to 1 community
- [[changed_files.py]] - degree 8, connects to 1 community