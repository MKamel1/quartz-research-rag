---
source_file: "rag/test_harvester.py"
type: "code"
community: "FakeSource"
location: "L163"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeSource
---

# test_permanent_error_is_quarantined_and_run_continues()

## Connections
- [[FakeSource]] - `calls` [EXTRACTED]
- [[PermanentError]] - `indirect_call` [INFERRED]
- [[QuarantineSink]] - `calls` [EXTRACTED]
- [[harvest_all()]] - `calls` [EXTRACTED]
- [[make_harvester()]] - `calls` [EXTRACTED]
- [[test_harvester.py_1]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeSource