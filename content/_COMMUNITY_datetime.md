---
type: community
cohesion: 0.09
members: 49
---

# datetime

**Cohesion:** 0.09 - loosely connected
**Members:** 49 nodes

## Members
- [[.__init__()_22]] - code - app/test_snapshot.py
- [[.create_and_download_snapshot()_1]] - code - app/snapshot.py
- [[.create_and_download_snapshot()_4]] - code - app/test_snapshot.py
- [[.create_and_download_snapshot()_3]] - code - app/test_snapshot.py
- [[Connection_3]] - code
- [[Delegates the vendor-specific create+download to `vector_index` (real adapter or]] - rationale - app/snapshot.py
- [[Deletes all but the newest `keep` completed snapshot directories under `backup_r]] - rationale - app/snapshot.py
- [[Namespace_12]] - code
- [[No `--backup-root` given default to a `backups` dir next to the configured `db]] - rationale - app/snapshot.py
- [[Path_12]] - code
- [[Path_18]] - code
- [[Protocol_3]] - code
- [[Records the call and writes a small fake snapshot file -- the offline stand-in f]] - rationale - app/test_snapshot.py
- [[Recursive copy of the blob directory into `dest_dirblobs`.]] - rationale - app/snapshot.py
- [[Runs all three backups into a `.partial` dir, writes `manifest.json`, and only t]] - rationale - app/snapshot.py
- [[SnapshotableVectorStore]] - code - app/snapshot.py
- [[Tests for `app.snapshot` (T-DOC57) -- offline, no real GPUvector-store service.]] - rationale - app/test_snapshot.py
- [[The one method this module needs from the vector store adapter -- injected (CONV]] - rationale - app/snapshot.py
- [[_FailingVectorStore]] - code - app/test_snapshot.py
- [[_FakeVectorStore]] - code - app/test_snapshot.py
- [[_base_config()_2]] - code - app/test_snapshot.py
- [[_cfg_with_real_sources()]] - code - app/test_snapshot.py
- [[_parse_args()_10]] - code - app/snapshot.py
- [[_seeded_db()]] - code - app/test_snapshot.py
- [[_table_row_counts()]] - code - app/snapshot.py
- [[`VACUUM INTO` a consistent copy of `db_path` into `dest_dirpapers.db`, opening]] - rationale - app/snapshot.py
- [[`python -m app.snapshot` -- T-DOC57 one-command, consistent backup of all V0 du]] - rationale - app/snapshot.py
- [[backup_blobs()]] - code - app/snapshot.py
- [[backup_sqlite()]] - code - app/snapshot.py
- [[backup_vector_store()]] - code - app/snapshot.py
- [[datetime]] - code
- [[default_backup_root()]] - code - app/snapshot.py
- [[main()_7]] - code - app/snapshot.py
- [[print_summary()_1]] - code - app/snapshot.py
- [[prune_old_snapshots()]] - code - app/snapshot.py
- [[run_snapshot()]] - code - app/snapshot.py
- [[snapshot.py]] - code - app/snapshot.py
- [[test_backup_blobs_copies_every_file()]] - code - app/test_snapshot.py
- [[test_backup_sqlite_copy_opens_and_has_the_same_row_count()]] - code - app/test_snapshot.py
- [[test_backup_sqlite_does_not_modify_the_source()]] - code - app/test_snapshot.py
- [[test_backup_vector_store_calls_create_and_download_and_reports_the_written_file()]] - code - app/test_snapshot.py
- [[test_backup_vector_store_raises_if_the_adapter_writes_nothing()]] - code - app/test_snapshot.py
- [[test_default_backup_root_is_a_backups_dir_next_to_db_path()]] - code - app/test_snapshot.py
- [[test_prune_old_snapshots_is_a_no_op_when_fewer_than_keep_exist()]] - code - app/test_snapshot.py
- [[test_prune_old_snapshots_keeps_only_the_newest_n()]] - code - app/test_snapshot.py
- [[test_run_snapshot_leaves_partial_dir_and_raises_when_the_vector_store_fails()]] - code - app/test_snapshot.py
- [[test_run_snapshot_prunes_to_the_newest_keep_snapshots_across_repeated_runs()]] - code - app/test_snapshot.py
- [[test_run_snapshot_writes_all_three_artifacts_and_a_manifest_then_renames_to_final()]] - code - app/test_snapshot.py
- [[test_snapshot.py]] - code - app/test_snapshot.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/datetime
SORT file.name ASC
```

## Connections to other communities
- 9 edges to [[_COMMUNITY_load_config]]
- 9 edges to [[_COMMUNITY_Config]]
- 3 edges to [[_COMMUNITY_migrate]]
- 2 edges to [[_COMMUNITY_ContractError]]
- 2 edges to [[_COMMUNITY_VectorIndex]]
- 2 edges to [[_COMMUNITY_ParsedDoc]]
- 2 edges to [[_COMMUNITY_SearchFilters]]
- 2 edges to [[_COMMUNITY_PermanentError]]
- 1 edge to [[_COMMUNITY_AdaptiveBatchSizer]]
- 1 edge to [[_COMMUNITY_assembly.py]]
- 1 edge to [[_COMMUNITY_build_corpus.py]]
- 1 edge to [[_COMMUNITY_controller.py]]
- 1 edge to [[_COMMUNITY_server.py]]
- 1 edge to [[_COMMUNITY_status.py]]
- 1 edge to [[_COMMUNITY_test_server.py]]
- 1 edge to [[_COMMUNITY_test_assembly.py]]
- 1 edge to [[_COMMUNITY_test_obsidian_export.py]]
- 1 edge to [[_COMMUNITY_test_prefetch_pdfs.py]]
- 1 edge to [[_COMMUNITY_test_reembed_experiment.py]]
- 1 edge to [[_COMMUNITY___init__.py]]
- 1 edge to [[_COMMUNITY_Anchor]]
- 1 edge to [[_COMMUNITY_test_orchestrator.py]]
- 1 edge to [[_COMMUNITY_test_document_store.py]]
- 1 edge to [[_COMMUNITY_test_harvester_arxiv_source.py]]
- 1 edge to [[_COMMUNITY_FakeVectorStore]]
- 1 edge to [[_COMMUNITY_test_vector_index.py]]

## Top bridge nodes
- [[datetime]] - degree 31, connects to 22 communities
- [[test_snapshot.py]] - degree 29, connects to 3 communities
- [[snapshot.py]] - degree 20, connects to 3 communities
- [[run_snapshot()]] - degree 17, connects to 3 communities
- [[default_backup_root()]] - degree 9, connects to 2 communities