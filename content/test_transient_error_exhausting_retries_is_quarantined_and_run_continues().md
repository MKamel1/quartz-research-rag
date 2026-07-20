---
source_file: "rag/test_harvester.py"
type: "code"
community: "FakeSource"
location: "L150"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeSource
---

# test_transient_error_exhausting_retries_is_quarantined_and_run_continues()

## Connections
- [[FakeSource]] - `calls` [EXTRACTED]
- [[QuarantineSink]] - `calls` [EXTRACTED]
- [[TransientError]] - `indirect_call` [INFERRED]
- [[harvest_all()]] - `calls` [EXTRACTED]
- [[make_harvester()]] - `calls` [EXTRACTED]
- [[test_harvester.py_1]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeSource