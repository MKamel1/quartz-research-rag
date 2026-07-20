---
source_file: "app/test_ingest.py"
type: "code"
community: "test_ingest.py"
location: "L209"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/test_ingestpy
---

# FakePopen

## Connections
- [[.__init__()_12]] - `method` [EXTRACTED]
- [[.wait()]] - `method` [EXTRACTED]
- [[Config]] - `uses` [INFERRED]
- [[EmbedderInfo_2]] - `uses` [INFERRED]
- [[FakeGpuLock]] - `uses` [INFERRED]
- [[FakeIngestState]] - `uses` [INFERRED]
- [[IngestionOrchestrator]] - `uses` [INFERRED]
- [[PaperRef]] - `uses` [INFERRED]
- [[Stand-in for `subprocess.Popen` -- records the argv it was launched with and ret]] - `rationale_for` [EXTRACTED]
- [[TransientError]] - `uses` [INFERRED]
- [[test_ingest.py]] - `contains` [EXTRACTED]
- [[test_parse_workers_all_succeed_returns_normally()]] - `indirect_call` [INFERRED]
- [[test_parse_workers_default_one_uses_original_subprocess_run()]] - `indirect_call` [INFERRED]
- [[test_parse_workers_fails_the_run_if_any_worker_exits_nonzero()]] - `indirect_call` [INFERRED]
- [[test_parse_workers_n_spawns_n_shard_subprocesses()]] - `indirect_call` [INFERRED]

#graphify/code #graphify/INFERRED #community/test_ingestpy