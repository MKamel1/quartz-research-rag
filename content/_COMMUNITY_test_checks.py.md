---
type: community
cohesion: 0.11
members: 40
---

# test_checks.py

**Cohesion:** 0.11 - loosely connected
**Members:** 40 nodes

## Members
- [[.from_whole_file()]] - code - ci/checks/model.py
- [[Path_23]] - code
- [[Read `repo_root  path` off disk and treat every line as added.          `logica]] - rationale - ci/checks/model.py
- [[Self-test suite for CONVENTIONS.md §12(a)-(h) mechanized in this package (T-F6's]] - rationale - ci/checks/test_checks.py
- [[T-DOC29 `PIPELINE_SCOPE_PREFIXES` (cichecksmodel.py) now includes `app` --]] - rationale - ci/checks/test_checks.py
- [[_fixture()]] - code - ci/checks/test_checks.py
- [[check_c()]] - code - ci/checks/blind_except.py
- [[check_d()]] - code - ci/checks/env_leak.py
- [[check_f()]] - code - ci/checks/gpu_lock.py
- [[check_g()]] - code - ci/checks/sibling_tests.py
- [[check_h()]] - code - ci/checks/id_slicing.py
- [[test_check_a_allows_vendor_name_inside_its_own_adapter()]] - code - ci/checks/test_checks.py
- [[test_check_a_flags_vendor_leak_outside_its_adapter()]] - code - ci/checks/test_checks.py
- [[test_check_a_passes_clean_file()]] - code - ci/checks/test_checks.py
- [[test_check_c_fails_closed_when_ruff_itself_errors()]] - code - ci/checks/test_checks.py
- [[test_check_c_flags_bare_and_blind_except()]] - code - ci/checks/test_checks.py
- [[test_check_c_passes_specific_except()]] - code - ci/checks/test_checks.py
- [[test_check_d_allows_env_read_inside_config()]] - code - ci/checks/test_checks.py
- [[test_check_d_flags_env_read_in_app_now_that_scope_includes_it()]] - code - ci/checks/test_checks.py
- [[test_check_d_flags_env_read_outside_config()]] - code - ci/checks/test_checks.py
- [[test_check_d_passes_clean_app_file()]] - code - ci/checks/test_checks.py
- [[test_check_d_passes_clean_file()]] - code - ci/checks/test_checks.py
- [[test_check_f_exempts_contracts_directory()]] - code - ci/checks/test_checks.py
- [[test_check_f_exempts_fakes_directory()]] - code - ci/checks/test_checks.py
- [[test_check_f_flags_missing_gpu_lock_param()]] - code - ci/checks/test_checks.py
- [[test_check_f_passes_with_gpu_lock_param()]] - code - ci/checks/test_checks.py
- [[test_check_g_flags_deleted_test_file_whose_module_still_exists()]] - code - ci/checks/test_checks.py
- [[test_check_g_flags_module_with_no_sibling_test()]] - code - ci/checks/test_checks.py
- [[test_check_g_ignores_deleted_test_file_outside_pipeline_scope()]] - code - ci/checks/test_checks.py
- [[test_check_g_ignores_deleted_test_file_whose_module_is_also_deleted()]] - code - ci/checks/test_checks.py
- [[test_check_g_ignores_files_outside_rag_and_contracts()]] - code - ci/checks/test_checks.py
- [[test_check_g_passes_module_with_real_sibling_test()]] - code - ci/checks/test_checks.py
- [[test_check_h_allows_sanctioned_helper_in_real_retriever()]] - code - ci/checks/test_checks.py
- [[test_check_h_allows_slicing_inside_document_store()]] - code - ci/checks/test_checks.py
- [[test_check_h_flags_manual_slicing_outside_document_store()]] - code - ci/checks/test_checks.py
- [[test_check_h_flags_new_adhoc_parse_site_elsewhere_in_same_file()]] - code - ci/checks/test_checks.py
- [[test_check_h_flags_removesuffix_not_just_split()]] - code - ci/checks/test_checks.py
- [[test_check_h_passes_clean_file()]] - code - ci/checks/test_checks.py
- [[test_checks.py]] - code - ci/checks/test_checks.py
- [[test_every_negative_example_is_valid_python()]] - code - ci/checks/test_checks.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_checkspy
SORT file.name ASC
```

## Connections to other communities
- 32 edges to [[_COMMUNITY_DiffFile]]
- 17 edges to [[_COMMUNITY_run_enforcement.py]]
- 8 edges to [[_COMMUNITY_check_e]]
- 7 edges to [[_COMMUNITY_check_b]]
- 2 edges to [[_COMMUNITY__find_init]]
- 1 edge to [[_COMMUNITY__sanctioned_line_range]]
- 1 edge to [[_COMMUNITY__FakeHTTPResponse]]

## Top bridge nodes
- [[test_checks.py]] - degree 57, connects to 5 communities
- [[check_h()]] - degree 15, connects to 3 communities
- [[check_f()]] - degree 13, connects to 3 communities
- [[_fixture()]] - degree 28, connects to 2 communities
- [[check_g()]] - degree 16, connects to 2 communities