---
source_file: "rag/test_harvester.py"
type: "code"
community: "FakeSource"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeSource
---

# test_harvester.py

## Connections
- [[FakeSource]] - `imports` [EXTRACTED]
- [[PermanentError]] - `imports` [EXTRACTED]
- [[QuarantineSink]] - `contains` [EXTRACTED]
- [[TransientError]] - `imports` [EXTRACTED]
- [[arxiv_http_client()]] - `imports` [EXTRACTED]
- [[errors.py]] - `imports_from` [EXTRACTED]
- [[fake_source.py]] - `imports_from` [EXTRACTED]
- [[harvest_all()]] - `contains` [EXTRACTED]
- [[make_harvester()]] - `contains` [EXTRACTED]
- [[test_arxiv_http_client_sends_descriptive_user_agent()]] - `contains` [EXTRACTED]
- [[test_dedup_collapses_the_two_versions_of_one_base_id()]] - `contains` [EXTRACTED]
- [[test_dedup_keeps_the_latest_version()]] - `contains` [EXTRACTED]
- [[test_no_truncation_warning_when_harvest_completes_cleanly()]] - `contains` [EXTRACTED]
- [[test_permanent_error_is_not_retried()]] - `contains` [EXTRACTED]
- [[test_permanent_error_is_quarantined_and_run_continues()]] - `contains` [EXTRACTED]
- [[test_permanent_error_logs_a_truncation_warning()]] - `contains` [EXTRACTED]
- [[test_resume_skips_already_seen_base_ids()]] - `contains` [EXTRACTED]
- [[test_resume_with_all_seen_yields_nothing()]] - `contains` [EXTRACTED]
- [[test_transient_error_exhausting_retries_is_quarantined_and_run_continues()]] - `contains` [EXTRACTED]
- [[test_transient_error_is_retried_then_the_paper_is_yielded()]] - `contains` [EXTRACTED]
- [[test_transient_exhausted_logs_a_truncation_warning()]] - `contains` [EXTRACTED]
- [[test_transient_retry_applies_backoff()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeSource