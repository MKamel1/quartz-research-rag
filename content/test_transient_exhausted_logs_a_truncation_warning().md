---
source_file: "rag/test_harvester.py"
type: "code"
community: "FakeSource"
location: "L177"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeSource
---

# test_transient_exhausted_logs_a_truncation_warning()

## Connections
- [[FakeSource]] - `calls` [EXTRACTED]
- [[QuarantineSink]] - `calls` [EXTRACTED]
- [[TransientError]] - `indirect_call` [INFERRED]
- [[harvest_all()]] - `calls` [EXTRACTED]
- [[make_harvester()]] - `calls` [EXTRACTED]
- [[test_harvester.py_1]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeSource