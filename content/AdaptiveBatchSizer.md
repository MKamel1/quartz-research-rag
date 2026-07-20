---
source_file: "app/adaptive_batch_sizer.py"
type: "code"
community: "AdaptiveBatchSizer"
location: "L41"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/AdaptiveBatchSizer
---

# AdaptiveBatchSizer

## Connections
- [[.__init__()]] - `method` [EXTRACTED]
- [[._log_decision()]] - `method` [EXTRACTED]
- [[.next_size()]] - `method` [EXTRACTED]
- [[DocStoreDouble_1]] - `uses` [INFERRED]
- [[EmbedderSpy_1]] - `uses` [INFERRED]
- [[FakeSummarizer]] - `uses` [INFERRED]
- [[RecordingVectorIndex_1]] - `uses` [INFERRED]
- [[Rig]] - `uses` [INFERRED]
- [[SpyBatchParser]] - `uses` [INFERRED]
- [[SpyBatchParserWithPrefetch]] - `uses` [INFERRED]
- [[SpyChunker_1]] - `uses` [INFERRED]
- [[SpyParser_1]] - `uses` [INFERRED]
- [[StubHarvester_3]] - `uses` [INFERRED]
- [[SummarizerSpy_1]] - `uses` [INFERRED]
- [[_AlwaysTransientSource]] - `uses` [INFERRED]
- [[_FakeTeiLifecycle]] - `uses` [INFERRED]
- [[_PdfDownloadParser]] - `uses` [INFERRED]
- [[_StubArxivSource]] - `uses` [INFERRED]
- [[_StubOrchestrator]] - `uses` [INFERRED]
- [[`next_size()` is the whole interface -- call it once per Pass-1 batch, immediate]] - `rationale_for` [EXTRACTED]
- [[adaptive_batch_sizer.py]] - `contains` [EXTRACTED]
- [[assembly.py]] - `imports` [EXTRACTED]
- [[build_ingestion_orchestrator()]] - `calls` [EXTRACTED]
- [[test_adaptive_batch_sizer.py]] - `imports` [EXTRACTED]
- [[test_assembly.py]] - `imports` [EXTRACTED]
- [[test_batch_size_provider_is_wired_to_an_adaptive_batch_sizer()]] - `indirect_call` [INFERRED]
- [[test_decision_log_disabled_by_default_writes_no_file()]] - `calls` [EXTRACTED]
- [[test_decision_log_row_records_real_values_for_each_zone()]] - `calls` [EXTRACTED]
- [[test_decision_log_writes_header_once_then_one_row_per_call()]] - `calls` [EXTRACTED]
- [[test_default_vram_probe_is_the_real_free_vram_mib()]] - `calls` [EXTRACTED]
- [[test_explicit_growth_threshold_overrides_the_default()]] - `calls` [EXTRACTED]
- [[test_grows_by_growth_step_when_free_vram_clears_the_growth_threshold()]] - `calls` [EXTRACTED]
- [[test_growth_ceilings_at_max_size_independent_of_how_much_vram_is_free()]] - `calls` [EXTRACTED]
- [[test_growth_threshold_defaults_to_twice_the_safety_margin()]] - `calls` [EXTRACTED]
- [[test_holds_current_size_when_the_vram_probe_returns_none()]] - `calls` [EXTRACTED]
- [[test_holds_steady_in_the_comfortable_zone_between_margin_and_growth_threshold()]] - `calls` [EXTRACTED]
- [[test_never_grows_blind_after_a_probe_failure_even_if_a_later_reading_would_have_grown()]] - `calls` [EXTRACTED]
- [[test_orchestrator.py]] - `imports` [EXTRACTED]
- [[test_parse_phase_with_a_real_stateful_adaptive_sizer_grows_at_the_intended_rate()]] - `calls` [EXTRACTED]
- [[test_rejects_initial_size_above_max_size()]] - `calls` [EXTRACTED]
- [[test_rejects_initial_size_below_min_size()]] - `calls` [EXTRACTED]
- [[test_shrink_floors_at_min_size()]] - `calls` [EXTRACTED]
- [[test_shrinks_by_half_when_free_vram_is_at_or_below_the_safety_margin()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/AdaptiveBatchSizer