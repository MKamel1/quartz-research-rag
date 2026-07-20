---
source_file: "app/test_reindex_idf.py"
type: "code"
community: "ContractError"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/ContractError
---

# test_reindex_idf.py

## Connections
- [[Config]] - `imports` [EXTRACTED]
- [[ContractError]] - `imports` [EXTRACTED]
- [[Tests for `app.reindex_idf` (OG-27) -- offline, no real GPUvector-store service]] - `rationale_for` [EXTRACTED]
- [[_FakeVectorIndex]] - `contains` [EXTRACTED]
- [[_base_config()_1]] - `contains` [EXTRACTED]
- [[_seeded_sources()]] - `contains` [EXTRACTED]
- [[_verify_snapshot_present()]] - `imports` [EXTRACTED]
- [[config.py]] - `imports_from` [EXTRACTED]
- [[datetime]] - `imports_from` [EXTRACTED]
- [[errors.py]] - `imports_from` [EXTRACTED]
- [[migrate()]] - `imports` [EXTRACTED]
- [[migrate.py]] - `imports_from` [EXTRACTED]
- [[reindex_idf.py]] - `imports_from` [EXTRACTED]
- [[run_reindex_idf()]] - `imports` [EXTRACTED]
- [[test_already_has_idf_modifier_is_a_noop_no_rebuild_no_snapshot()]] - `contains` [EXTRACTED]
- [[test_default_flow_takes_a_fresh_snapshot_before_rebuilding()]] - `contains` [EXTRACTED]
- [[test_dry_run_reports_and_mutates_nothing()]] - `contains` [EXTRACTED]
- [[test_dry_run_with_i_have_a_snapshot_still_mutates_nothing_and_skips_verification()]] - `contains` [EXTRACTED]
- [[test_i_have_a_snapshot_proceeds_when_a_real_snapshot_is_present_and_takes_no_new_one()]] - `contains` [EXTRACTED]
- [[test_i_have_a_snapshot_refuses_when_no_snapshot_is_actually_present()]] - `contains` [EXTRACTED]
- [[test_i_have_a_snapshot_refuses_when_snapshot_is_for_a_different_collection()]] - `contains` [EXTRACTED]
- [[test_idf_modifier_still_missing_after_rebuild_raises()]] - `contains` [EXTRACTED]
- [[test_point_count_mismatch_after_rebuild_raises_and_does_not_report_success()]] - `contains` [EXTRACTED]
- [[test_successful_rebuild_reports_points_preserved_and_idf_set()]] - `contains` [EXTRACTED]
- [[test_verify_snapshot_present_rejects_a_zero_byte_snapshot_file()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/ContractError