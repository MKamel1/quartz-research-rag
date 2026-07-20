---
source_file: "app/test_snapshot.py"
type: "code"
community: "datetime"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/datetime
---

# test_snapshot.py

## Connections
- [[Config]] - `imports` [EXTRACTED]
- [[Tests for `app.snapshot` (T-DOC57) -- offline, no real GPUvector-store service.]] - `rationale_for` [EXTRACTED]
- [[_FailingVectorStore]] - `contains` [EXTRACTED]
- [[_FakeVectorStore]] - `contains` [EXTRACTED]
- [[_base_config()_2]] - `contains` [EXTRACTED]
- [[_cfg_with_real_sources()]] - `contains` [EXTRACTED]
- [[_seeded_db()]] - `contains` [EXTRACTED]
- [[backup_blobs()]] - `imports` [EXTRACTED]
- [[backup_sqlite()]] - `imports` [EXTRACTED]
- [[backup_vector_store()]] - `imports` [EXTRACTED]
- [[config.py]] - `imports_from` [EXTRACTED]
- [[datetime]] - `imports_from` [EXTRACTED]
- [[default_backup_root()]] - `imports` [EXTRACTED]
- [[migrate()]] - `imports` [EXTRACTED]
- [[migrate.py]] - `imports_from` [EXTRACTED]
- [[prune_old_snapshots()]] - `imports` [EXTRACTED]
- [[run_snapshot()]] - `imports` [EXTRACTED]
- [[snapshot.py]] - `imports_from` [EXTRACTED]
- [[test_backup_blobs_copies_every_file()]] - `contains` [EXTRACTED]
- [[test_backup_sqlite_copy_opens_and_has_the_same_row_count()]] - `contains` [EXTRACTED]
- [[test_backup_sqlite_does_not_modify_the_source()]] - `contains` [EXTRACTED]
- [[test_backup_vector_store_calls_create_and_download_and_reports_the_written_file()]] - `contains` [EXTRACTED]
- [[test_backup_vector_store_raises_if_the_adapter_writes_nothing()]] - `contains` [EXTRACTED]
- [[test_default_backup_root_is_a_backups_dir_next_to_db_path()]] - `contains` [EXTRACTED]
- [[test_prune_old_snapshots_is_a_no_op_when_fewer_than_keep_exist()]] - `contains` [EXTRACTED]
- [[test_prune_old_snapshots_keeps_only_the_newest_n()]] - `contains` [EXTRACTED]
- [[test_run_snapshot_leaves_partial_dir_and_raises_when_the_vector_store_fails()]] - `contains` [EXTRACTED]
- [[test_run_snapshot_prunes_to_the_newest_keep_snapshots_across_repeated_runs()]] - `contains` [EXTRACTED]
- [[test_run_snapshot_writes_all_three_artifacts_and_a_manifest_then_renames_to_final()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/datetime