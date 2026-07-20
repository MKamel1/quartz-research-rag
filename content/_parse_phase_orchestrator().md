---
source_file: "rag/test_orchestrator.py"
type: "code"
community: "test_orchestrator.py"
location: "L945"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_orchestratorpy
---

# _parse_phase_orchestrator()

## Connections
- [[Config]] - `calls` [EXTRACTED]
- [[IngestionOrchestrator]] - `references` [EXTRACTED]
- [[SpyChunker_1]] - `calls` [EXTRACTED]
- [[test_orchestrator.py]] - `contains` [EXTRACTED]
- [[test_parse_phase_batch_failure_fallback_still_quarantines_a_genuinely_bad_paper()]] - `calls` [EXTRACTED]
- [[test_parse_phase_batch_failure_falls_back_to_singular_path_for_every_paper()]] - `calls` [EXTRACTED]
- [[test_parse_phase_batch_size_provider_is_called_exactly_once_per_batch()]] - `calls` [EXTRACTED]
- [[test_parse_phase_batch_success_checkpoints_all_papers_normally()]] - `calls` [EXTRACTED]
- [[test_parse_phase_handles_a_short_final_batch()]] - `calls` [EXTRACTED]
- [[test_parse_phase_prefetch_excludes_refs_already_parsed_or_further_along()]] - `calls` [EXTRACTED]
- [[test_parse_phase_prefetches_the_next_batch_before_the_current_batchs_parse_batch_call()]] - `calls` [EXTRACTED]
- [[test_parse_phase_skips_batch_call_for_papers_already_parsed_or_further_along()]] - `calls` [EXTRACTED]
- [[test_parse_phase_uses_a_fixed_size_by_default_when_no_batch_size_provider_is_injected()]] - `calls` [EXTRACTED]
- [[test_parse_phase_uses_the_batch_size_provider_when_injected_not_the_fixed_config_value()]] - `calls` [EXTRACTED]
- [[test_parse_phase_with_a_real_stateful_adaptive_sizer_grows_at_the_intended_rate()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_orchestratorpy