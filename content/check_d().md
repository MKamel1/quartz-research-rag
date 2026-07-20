---
source_file: "ci/checks/env_leak.py"
type: "code"
community: "test_checks.py"
location: "L36"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_checkspy
---

# check_d()

## Connections
- [[DiffFile]] - `references` [EXTRACTED]
- [[Violation]] - `references` [EXTRACTED]
- [[__init__.py_3]] - `imports` [EXTRACTED]
- [[env_leak.py]] - `contains` [EXTRACTED]
- [[in_pipeline_scope()]] - `calls` [EXTRACTED]
- [[main()_8]] - `calls` [EXTRACTED]
- [[run_enforcement.py]] - `imports` [EXTRACTED]
- [[test_check_d_allows_env_read_inside_config()]] - `calls` [EXTRACTED]
- [[test_check_d_flags_env_read_in_app_now_that_scope_includes_it()]] - `calls` [EXTRACTED]
- [[test_check_d_flags_env_read_outside_config()]] - `calls` [EXTRACTED]
- [[test_check_d_passes_clean_app_file()]] - `calls` [EXTRACTED]
- [[test_check_d_passes_clean_file()]] - `calls` [EXTRACTED]
- [[test_checks.py]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_checkspy