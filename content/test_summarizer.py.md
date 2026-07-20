---
source_file: "rag/test_summarizer.py"
type: "code"
community: "test_summarizer.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_summarizerpy
---

# test_summarizer.py

## Connections
- [[Block]] - `imports` [EXTRACTED]
- [[FakeGpuLock]] - `imports` [EXTRACTED]
- [[Figure]] - `imports` [EXTRACTED]
- [[ParsedDoc]] - `imports` [EXTRACTED]
- [[PermanentError]] - `imports` [EXTRACTED]
- [[TransientError]] - `imports` [EXTRACTED]
- [[_GoldenPaper]] - `contains` [EXTRACTED]
- [[_build_summarizer()]] - `contains` [EXTRACTED]
- [[_build_summarizer_with_client()]] - `contains` [EXTRACTED]
- [[_figures_only_doc()]] - `contains` [EXTRACTED]
- [[_fit_for_summarization()]] - `imports` [EXTRACTED]
- [[_prose_doc()]] - `contains` [EXTRACTED]
- [[_ps_response()]] - `contains` [EXTRACTED]
- [[_real_summarizer_cls()]] - `contains` [EXTRACTED]
- [[errors.py]] - `imports_from` [EXTRACTED]
- [[fake_gpu_lock.py]] - `imports_from` [EXTRACTED]
- [[golden_papers()]] - `contains` [EXTRACTED]
- [[parser.py]] - `imports_from` [EXTRACTED]
- [[provenance.py]] - `imports_from` [EXTRACTED]
- [[real_summarizer()]] - `contains` [EXTRACTED]
- [[summarizer.py]] - `imports_from` [EXTRACTED]
- [[test_5xx_response_maps_to_transient_error()_3]] - `contains` [EXTRACTED]
- [[test_connection_failure_maps_to_transient_error()_3]] - `contains` [EXTRACTED]
- [[test_empty_markdown_parsed_doc_raises_permanent_error()]] - `contains` [EXTRACTED]
- [[test_figures_only_parsed_doc_raises_permanent_error()]] - `contains` [EXTRACTED]
- [[test_fit_for_summarization_drops_appendix_section()]] - `contains` [EXTRACTED]
- [[test_fit_for_summarization_drops_references_section()]] - `contains` [EXTRACTED]
- [[test_fit_for_summarization_num_ctx_scales_with_length_within_bounds()]] - `contains` [EXTRACTED]
- [[test_fit_for_summarization_truncates_and_clamps_for_huge_input()]] - `contains` [EXTRACTED]
- [[test_response_body_missing_response_field_maps_to_permanent_error()]] - `contains` [EXTRACTED]
- [[test_summaries_are_non_empty_and_non_degenerate_on_golden_fixtures()]] - `contains` [EXTRACTED]
- [[test_summarize_acquires_the_gpu_lock_with_the_summarize_stage_label()]] - `contains` [EXTRACTED]
- [[test_summarize_request_disables_thinking_and_sets_context_options()]] - `contains` [EXTRACTED]
- [[test_unload_is_best_effort_and_swallows_a_failed_request()]] - `contains` [EXTRACTED]
- [[test_unload_polls_api_ps_and_returns_promptly_once_the_model_is_gone()]] - `contains` [EXTRACTED]
- [[test_unload_sends_keep_alive_zero_with_no_prompt_and_does_not_acquire_the_lock()]] - `contains` [EXTRACTED]
- [[test_unload_swallows_a_malformed_api_ps_response_and_logs_a_warning()]] - `contains` [EXTRACTED]
- [[test_unload_times_out_and_logs_a_warning_if_the_model_never_disappears()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_summarizerpy