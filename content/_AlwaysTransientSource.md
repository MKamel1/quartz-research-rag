---
source_file: "app/test_assembly.py"
type: "code"
community: "_StubOrchestrator"
location: "L339"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/_StubOrchestrator
---

# _AlwaysTransientSource

## Connections
- [[.fetch()]] - `method` [EXTRACTED]
- [[A `Source` whose `fetch()` always raises `TransientError` -- stands in only for]] - `rationale_for` [EXTRACTED]
- [[AdaptiveBatchSizer]] - `uses` [INFERRED]
- [[Config]] - `uses` [INFERRED]
- [[PaperRef]] - `uses` [INFERRED]
- [[PermanentError]] - `uses` [INFERRED]
- [[TransientError]] - `uses` [INFERRED]
- [[test_assembly.py]] - `contains` [EXTRACTED]
- [[test_harvest_failure_is_written_to_the_quarantine_table()]] - `calls` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/_StubOrchestrator