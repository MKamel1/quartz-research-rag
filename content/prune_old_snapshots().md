---
source_file: "app/snapshot.py"
type: "code"
community: "datetime"
location: "L176"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/datetime
---

# prune_old_snapshots()

## Connections
- [[Deletes all but the newest `keep` completed snapshot directories under `backup_r]] - `rationale_for` [EXTRACTED]
- [[Path_12]] - `references` [EXTRACTED]
- [[run_snapshot()]] - `calls` [EXTRACTED]
- [[snapshot.py]] - `contains` [EXTRACTED]
- [[test_prune_old_snapshots_is_a_no_op_when_fewer_than_keep_exist()]] - `calls` [EXTRACTED]
- [[test_prune_old_snapshots_keeps_only_the_newest_n()]] - `calls` [EXTRACTED]
- [[test_snapshot.py]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/datetime