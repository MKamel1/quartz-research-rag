---
source_file: "rag/fakes/fake_source.py"
type: "code"
community: "FakeSource"
location: "L57"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeSource
---

# FakeSource

## Connections
- [[.__init__()_38]] - `method` [EXTRACTED]
- [[._as_exception()]] - `method` [EXTRACTED]
- [[._load_fixture()]] - `method` [EXTRACTED]
- [[.fetch()_1]] - `method` [EXTRACTED]
- [[DocStoreDouble_1]] - `uses` [INFERRED]
- [[EmbedderSpy_1]] - `uses` [INFERRED]
- [[PaperRef]] - `uses` [INFERRED]
- [[PermanentError]] - `uses` [INFERRED]
- [[QuarantineSink]] - `uses` [INFERRED]
- [[RecordingVectorIndex_1]] - `uses` [INFERRED]
- [[Rig]] - `uses` [INFERRED]
- [[SpyBatchParser]] - `uses` [INFERRED]
- [[SpyBatchParserWithPrefetch]] - `uses` [INFERRED]
- [[SpyChunker_1]] - `uses` [INFERRED]
- [[SpyParser_1]] - `uses` [INFERRED]
- [[StubHarvester_3]] - `uses` [INFERRED]
- [[SummarizerSpy_1]] - `uses` [INFERRED]
- [[TransientError]] - `uses` [INFERRED]
- [[Yields a fixed list of `PaperRef`s loaded from a committed JSON fixture — no arX]] - `rationale_for` [EXTRACTED]
- [[__init__.py_6]] - `imports` [EXTRACTED]
- [[fake_source.py]] - `contains` [EXTRACTED]
- [[fixture_refs()]] - `calls` [EXTRACTED]
- [[test_cap_limits_number_of_refs_yielded()]] - `calls` [EXTRACTED]
- [[test_dedup_collapses_the_two_versions_of_one_base_id()]] - `calls` [EXTRACTED]
- [[test_dedup_keeps_the_latest_version()]] - `calls` [EXTRACTED]
- [[test_error_injection_accepts_an_exception_instance()]] - `calls` [EXTRACTED]
- [[test_error_injection_does_not_affect_other_ids()]] - `calls` [EXTRACTED]
- [[test_error_injection_fail_n_then_succeed_recovers_after_fail_count_reaches()]] - `calls` [EXTRACTED]
- [[test_error_injection_raises_mapped_error_for_mapped_paper_id()]] - `calls` [EXTRACTED]
- [[test_error_injection_yields_earlier_refs_before_raising()]] - `calls` [EXTRACTED]
- [[test_fake_source.py]] - `imports` [EXTRACTED]
- [[test_fixture_contains_v1_and_v2_of_the_same_base_paper_id()]] - `calls` [EXTRACTED]
- [[test_harvester.py_1]] - `imports` [EXTRACTED]
- [[test_no_truncation_warning_when_harvest_completes_cleanly()]] - `calls` [EXTRACTED]
- [[test_orchestrator.py]] - `imports` [EXTRACTED]
- [[test_permanent_error_is_not_retried()]] - `calls` [EXTRACTED]
- [[test_permanent_error_is_quarantined_and_run_continues()]] - `calls` [EXTRACTED]
- [[test_permanent_error_logs_a_truncation_warning()]] - `calls` [EXTRACTED]
- [[test_resume_skips_already_seen_base_ids()]] - `calls` [EXTRACTED]
- [[test_resume_with_all_seen_yields_nothing()]] - `calls` [EXTRACTED]
- [[test_transient_error_exhausting_retries_is_quarantined_and_run_continues()]] - `calls` [EXTRACTED]
- [[test_transient_error_is_retried_then_the_paper_is_yielded()]] - `calls` [EXTRACTED]
- [[test_transient_exhausted_logs_a_truncation_warning()]] - `calls` [EXTRACTED]
- [[test_transient_retry_applies_backoff()]] - `calls` [EXTRACTED]
- [[test_yields_all_fixture_refs_up_to_cap()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeSource