---
source_file: "rag/test_harvester.py"
type: "code"
community: "FakeSource"
location: "L68"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeSource
---

# QuarantineSink

## Connections
- [[.__call__()]] - `method` [EXTRACTED]
- [[.__init__()_42]] - `references` [EXTRACTED]
- [[.__init__()_55]] - `method` [EXTRACTED]
- [[.paper_ids()]] - `method` [EXTRACTED]
- [[FakeSource]] - `uses` [INFERRED]
- [[PermanentError]] - `uses` [INFERRED]
- [[Records `(paper_id, error)` the Harvester dead-letters, so a test can assert the]] - `rationale_for` [EXTRACTED]
- [[TransientError]] - `uses` [INFERRED]
- [[_sqlite_harvest_quarantine_sink()]] - `references` [EXTRACTED]
- [[test_harvester.py_1]] - `contains` [EXTRACTED]
- [[test_permanent_error_is_not_retried()]] - `calls` [EXTRACTED]
- [[test_permanent_error_is_quarantined_and_run_continues()]] - `calls` [EXTRACTED]
- [[test_permanent_error_logs_a_truncation_warning()]] - `calls` [EXTRACTED]
- [[test_transient_error_exhausting_retries_is_quarantined_and_run_continues()]] - `calls` [EXTRACTED]
- [[test_transient_error_is_retried_then_the_paper_is_yielded()]] - `calls` [EXTRACTED]
- [[test_transient_exhausted_logs_a_truncation_warning()]] - `calls` [EXTRACTED]
- [[test_transient_retry_applies_backoff()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeSource