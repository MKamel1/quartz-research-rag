---
source_file: "ci/checks/test_checks.py"
type: "code"
community: "test_checks.py"
location: "L42"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_checkspy
---

# _fixture()

## Connections
- [[.from_whole_file()]] - `calls` [EXTRACTED]
- [[DiffFile]] - `references` [EXTRACTED]
- [[test_check_a_allows_vendor_name_inside_its_own_adapter()]] - `calls` [EXTRACTED]
- [[test_check_a_flags_vendor_leak_outside_its_adapter()]] - `calls` [EXTRACTED]
- [[test_check_a_passes_clean_file()]] - `calls` [EXTRACTED]
- [[test_check_b_flags_shadowed_contract_name()]] - `calls` [EXTRACTED]
- [[test_check_b_ignores_files_under_contracts()]] - `calls` [EXTRACTED]
- [[test_check_b_passes_non_colliding_name()]] - `calls` [EXTRACTED]
- [[test_check_c_fails_closed_when_ruff_itself_errors()]] - `calls` [EXTRACTED]
- [[test_check_c_flags_bare_and_blind_except()]] - `calls` [EXTRACTED]
- [[test_check_c_passes_specific_except()]] - `calls` [EXTRACTED]
- [[test_check_d_allows_env_read_inside_config()]] - `calls` [EXTRACTED]
- [[test_check_d_flags_env_read_in_app_now_that_scope_includes_it()]] - `calls` [EXTRACTED]
- [[test_check_d_flags_env_read_outside_config()]] - `calls` [EXTRACTED]
- [[test_check_d_passes_clean_app_file()]] - `calls` [EXTRACTED]
- [[test_check_d_passes_clean_file()]] - `calls` [EXTRACTED]
- [[test_check_f_exempts_contracts_directory()]] - `calls` [EXTRACTED]
- [[test_check_f_exempts_fakes_directory()]] - `calls` [EXTRACTED]
- [[test_check_f_flags_missing_gpu_lock_param()]] - `calls` [EXTRACTED]
- [[test_check_f_passes_with_gpu_lock_param()]] - `calls` [EXTRACTED]
- [[test_check_g_flags_module_with_no_sibling_test()]] - `calls` [EXTRACTED]
- [[test_check_g_ignores_files_outside_rag_and_contracts()]] - `calls` [EXTRACTED]
- [[test_check_h_allows_slicing_inside_document_store()]] - `calls` [EXTRACTED]
- [[test_check_h_flags_manual_slicing_outside_document_store()]] - `calls` [EXTRACTED]
- [[test_check_h_flags_new_adhoc_parse_site_elsewhere_in_same_file()]] - `calls` [EXTRACTED]
- [[test_check_h_flags_removesuffix_not_just_split()]] - `calls` [EXTRACTED]
- [[test_check_h_passes_clean_file()]] - `calls` [EXTRACTED]
- [[test_checks.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_checkspy