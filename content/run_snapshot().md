---
source_file: "app/snapshot.py"
type: "code"
community: "datetime"
location: "L145"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/datetime
---

# run_snapshot()

## Connections
- [[Config]] - `references` [EXTRACTED]
- [[Path_12]] - `references` [EXTRACTED]
- [[Runs all three backups into a `.partial` dir, writes `manifest.json`, and only t]] - `rationale_for` [EXTRACTED]
- [[SnapshotableVectorStore]] - `references` [EXTRACTED]
- [[backup_blobs()]] - `calls` [EXTRACTED]
- [[backup_sqlite()]] - `calls` [EXTRACTED]
- [[backup_vector_store()]] - `calls` [EXTRACTED]
- [[datetime]] - `references` [EXTRACTED]
- [[main()_7]] - `calls` [EXTRACTED]
- [[prune_old_snapshots()]] - `calls` [EXTRACTED]
- [[reindex_idf.py]] - `imports` [EXTRACTED]
- [[run_reindex_idf()]] - `calls` [EXTRACTED]
- [[snapshot.py]] - `contains` [EXTRACTED]
- [[test_run_snapshot_leaves_partial_dir_and_raises_when_the_vector_store_fails()]] - `calls` [EXTRACTED]
- [[test_run_snapshot_prunes_to_the_newest_keep_snapshots_across_repeated_runs()]] - `calls` [EXTRACTED]
- [[test_run_snapshot_writes_all_three_artifacts_and_a_manifest_then_renames_to_final()]] - `calls` [EXTRACTED]
- [[test_snapshot.py]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/datetime