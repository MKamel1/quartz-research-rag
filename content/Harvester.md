---
source_file: "rag/harvester.py"
type: "code"
community: "PermanentError"
location: "L63"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/PermanentError
---

# Harvester

## Connections
- [[.__init__()_42]] - `method` [EXTRACTED]
- [[._backoff()_1]] - `method` [EXTRACTED]
- [[.harvest()_4]] - `method` [EXTRACTED]
- [[PaperRef]] - `uses` [INFERRED]
- [[PermanentError]] - `uses` [INFERRED]
- [[Preconditions `cap = 0`; `ordering` is whatever the injected `source` accepts]] - `rationale_for` [EXTRACTED]
- [[TransientError]] - `uses` [INFERRED]
- [[assembly.py]] - `imports` [EXTRACTED]
- [[build_ingestion_orchestrator()]] - `calls` [EXTRACTED]
- [[harvester.py_1]] - `contains` [EXTRACTED]
- [[make_harvester()]] - `calls` [INFERRED]
- [[prefetch_pdfs.py]] - `imports` [EXTRACTED]
- [[run()]] - `calls` [EXTRACTED]
- [[test_permanent_error_is_not_retried()]] - `calls` [INFERRED]
- [[test_transient_retry_applies_backoff()]] - `calls` [INFERRED]

#graphify/code #graphify/EXTRACTED #community/PermanentError