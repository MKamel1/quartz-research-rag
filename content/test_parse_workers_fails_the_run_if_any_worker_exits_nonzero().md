---
source_file: "app/test_ingest.py"
type: "code"
community: "test_ingest.py"
location: "L269"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_ingestpy
---

# test_parse_workers_fails_the_run_if_any_worker_exits_nonzero()

## Connections
- [[A non-zero exit from ANY worker (e.g. an OOM'd shard) must fail the whole run, n]] - `rationale_for` [EXTRACTED]
- [[FakePopen]] - `indirect_call` [INFERRED]
- [[test_ingest.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_ingestpy