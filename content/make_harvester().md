---
source_file: "rag/test_harvester.py"
type: "code"
community: "FakeSource"
location: "L83"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeSource
---

# make_harvester()

## Connections
- [[Build a Harvester with a no-op backoff so retry tests don't actually sleep.]] - `rationale_for` [EXTRACTED]
- [[Harvester]] - `calls` [INFERRED]
- [[test_dedup_collapses_the_two_versions_of_one_base_id()]] - `calls` [EXTRACTED]
- [[test_dedup_keeps_the_latest_version()]] - `calls` [EXTRACTED]
- [[test_harvester.py_1]] - `contains` [EXTRACTED]
- [[test_no_truncation_warning_when_harvest_completes_cleanly()]] - `calls` [EXTRACTED]
- [[test_permanent_error_is_quarantined_and_run_continues()]] - `calls` [EXTRACTED]
- [[test_permanent_error_logs_a_truncation_warning()]] - `calls` [EXTRACTED]
- [[test_resume_skips_already_seen_base_ids()]] - `calls` [EXTRACTED]
- [[test_resume_with_all_seen_yields_nothing()]] - `calls` [EXTRACTED]
- [[test_transient_error_exhausting_retries_is_quarantined_and_run_continues()]] - `calls` [EXTRACTED]
- [[test_transient_error_is_retried_then_the_paper_is_yielded()]] - `calls` [EXTRACTED]
- [[test_transient_exhausted_logs_a_truncation_warning()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeSource