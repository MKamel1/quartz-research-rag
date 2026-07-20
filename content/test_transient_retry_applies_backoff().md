---
source_file: "rag/test_harvester.py"
type: "code"
community: "FakeSource"
location: "L135"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeSource
---

# test_transient_retry_applies_backoff()

## Connections
- [[FakeSource]] - `calls` [EXTRACTED]
- [[Harvester]] - `calls` [INFERRED]
- [[QuarantineSink]] - `calls` [EXTRACTED]
- [[TransientError]] - `indirect_call` [INFERRED]
- [[harvest_all()]] - `calls` [EXTRACTED]
- [[test_harvester.py_1]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeSource