---
source_file: "ci/checks/vendor_isolation.py"
type: "code"
community: "DiffFile"
location: "L112"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/DiffFile
---

# check_a()

## Connections
- [[DiffFile]] - `references` [EXTRACTED]
- [[Violation]] - `references` [EXTRACTED]
- [[__init__.py_3]] - `imports` [EXTRACTED]
- [[in_pipeline_scope()]] - `calls` [EXTRACTED]
- [[main()_8]] - `calls` [EXTRACTED]
- [[run_enforcement.py]] - `imports` [EXTRACTED]
- [[test_check_a_allows_vendor_name_inside_its_own_adapter()]] - `calls` [EXTRACTED]
- [[test_check_a_flags_vendor_leak_outside_its_adapter()]] - `calls` [EXTRACTED]
- [[test_check_a_passes_clean_file()]] - `calls` [EXTRACTED]
- [[test_checks.py]] - `imports` [EXTRACTED]
- [[vendor_isolation.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/DiffFile