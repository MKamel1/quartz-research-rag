---
source_file: "app/test_reindex_idf.py"
type: "code"
community: "ContractError"
location: "L59"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/ContractError
---

# _FakeVectorIndex

## Connections
- [[.__init__()_19]] - `method` [EXTRACTED]
- [[.create_and_download_snapshot()_2]] - `method` [EXTRACTED]
- [[.has_idf_modifier()_1]] - `method` [EXTRACTED]
- [[.point_count()_1]] - `method` [EXTRACTED]
- [[.rebuild()_1]] - `method` [EXTRACTED]
- [[Config]] - `uses` [INFERRED]
- [[ContractError]] - `uses` [INFERRED]
- [[Fake `VectorIndex` for `run_reindex_idf` pre-set point count  IDF state, `rebu]] - `rationale_for` [EXTRACTED]
- [[test_already_has_idf_modifier_is_a_noop_no_rebuild_no_snapshot()]] - `calls` [EXTRACTED]
- [[test_default_flow_takes_a_fresh_snapshot_before_rebuilding()]] - `calls` [EXTRACTED]
- [[test_dry_run_reports_and_mutates_nothing()]] - `calls` [EXTRACTED]
- [[test_dry_run_with_i_have_a_snapshot_still_mutates_nothing_and_skips_verification()]] - `calls` [EXTRACTED]
- [[test_i_have_a_snapshot_proceeds_when_a_real_snapshot_is_present_and_takes_no_new_one()]] - `calls` [EXTRACTED]
- [[test_i_have_a_snapshot_refuses_when_no_snapshot_is_actually_present()]] - `calls` [EXTRACTED]
- [[test_i_have_a_snapshot_refuses_when_snapshot_is_for_a_different_collection()]] - `calls` [EXTRACTED]
- [[test_idf_modifier_still_missing_after_rebuild_raises()]] - `calls` [EXTRACTED]
- [[test_point_count_mismatch_after_rebuild_raises_and_does_not_report_success()]] - `calls` [EXTRACTED]
- [[test_reindex_idf.py]] - `contains` [EXTRACTED]
- [[test_successful_rebuild_reports_points_preserved_and_idf_set()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/ContractError