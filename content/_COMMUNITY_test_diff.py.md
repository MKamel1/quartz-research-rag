---
type: community
cohesion: 0.18
members: 24
---

# test_diff.py

**Cohesion:** 0.18 - loosely connected
**Members:** 24 nodes

## Members
- [[CompletedProcess]] - code
- [[Direct unit tests for the composition seams `cirun_enforcement.py` wires togeth]] - rationale - ci/checks/test_diff.py
- [[One `DiffFile` per path in `paths` (repo-relative, e.g. from `changed_files.py`)]] - rationale - ci/checks/diff.py
- [[Path_21]] - code
- [[Path_25]] - code
- [[Turns a real `git diff` into `DiffFile`s — the one place that understands unifie]] - rationale - ci/checks/diff.py
- [[_added_lines()]] - code - ci/checks/diff.py
- [[_commit()]] - code - ci/checks/test_diff.py
- [[_git()]] - code - ci/checks/test_diff.py
- [[_init_repo()]] - code - ci/checks/test_diff.py
- [[_is_scannable()]] - code - ci/run_enforcement.py
- [[build_diff_files()]] - code - ci/checks/diff.py
- [[diff.py]] - code - ci/checks/diff.py
- [[test_build_diff_files_reports_added_lines_with_correct_line_numbers()]] - code - ci/checks/test_diff.py
- [[test_build_diff_files_running_line_counter_survives_a_removal_before_an_addition()]] - code - ci/checks/test_diff.py
- [[test_build_diff_files_skips_a_path_deleted_since_the_diff_base()]] - code - ci/checks/test_diff.py
- [[test_build_diff_files_treats_a_brand_new_file_as_entirely_added()]] - code - ci/checks/test_diff.py
- [[test_compute_diff_base_first_push_falls_back_to_merge_base_with_default_branch()]] - code - ci/checks/test_diff.py
- [[test_compute_diff_base_push_uses_before_sha_when_present()]] - code - ci/checks/test_diff.py
- [[test_diff.py]] - code - ci/checks/test_diff.py
- [[test_is_scannable_accepts_an_ordinary_python_file()]] - code - ci/checks/test_diff.py
- [[test_is_scannable_rejects_negative_examples_fixtures()]] - code - ci/checks/test_diff.py
- [[test_is_scannable_rejects_non_python_files()]] - code - ci/checks/test_diff.py
- [[test_is_scannable_rejects_proof_socket_block_files()]] - code - ci/checks/test_diff.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_diffpy
SORT file.name ASC
```

## Connections to other communities
- 10 edges to [[_COMMUNITY_run_enforcement.py]]
- 3 edges to [[_COMMUNITY_DiffFile]]

## Top bridge nodes
- [[build_diff_files()]] - degree 12, connects to 2 communities
- [[diff.py]] - degree 7, connects to 2 communities
- [[test_diff.py]] - degree 20, connects to 1 community
- [[_is_scannable()]] - degree 7, connects to 1 community
- [[test_compute_diff_base_first_push_falls_back_to_merge_base_with_default_branch()]] - degree 5, connects to 1 community