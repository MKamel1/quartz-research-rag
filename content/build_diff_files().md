---
source_file: "ci/checks/diff.py"
type: "code"
community: "test_diff.py"
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_diffpy
---

# build_diff_files()

## Connections
- [[DiffFile]] - `references` [EXTRACTED]
- [[One `DiffFile` per path in `paths` (repo-relative, e.g. from `changed_files.py`)]] - `rationale_for` [EXTRACTED]
- [[Path_21]] - `references` [EXTRACTED]
- [[_added_lines()]] - `calls` [EXTRACTED]
- [[diff.py]] - `contains` [EXTRACTED]
- [[main()_8]] - `calls` [EXTRACTED]
- [[run_enforcement.py]] - `imports` [EXTRACTED]
- [[test_build_diff_files_reports_added_lines_with_correct_line_numbers()]] - `calls` [EXTRACTED]
- [[test_build_diff_files_running_line_counter_survives_a_removal_before_an_addition()]] - `calls` [EXTRACTED]
- [[test_build_diff_files_skips_a_path_deleted_since_the_diff_base()]] - `calls` [EXTRACTED]
- [[test_build_diff_files_treats_a_brand_new_file_as_entirely_added()]] - `calls` [EXTRACTED]
- [[test_diff.py]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_diffpy