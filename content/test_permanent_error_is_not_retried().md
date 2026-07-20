---
source_file: "rag/test_harvester.py"
type: "code"
community: "FakeSource"
location: "L208"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeSource
---

# test_permanent_error_is_not_retried()

## Connections
- [[FakeSource]] - `calls` [EXTRACTED]
- [[Harvester]] - `calls` [INFERRED]
- [[PermanentError]] - `indirect_call` [INFERRED]
- [[QuarantineSink]] - `calls` [EXTRACTED]
- [[harvest_all()]] - `calls` [EXTRACTED]
- [[test_harvester.py_1]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeSource