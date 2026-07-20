---
source_file: "rag/test_summarizer.py"
type: "code"
community: "test_summarizer.py"
location: "L126"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_summarizerpy
---

# _build_summarizer_with_client()

## Connections
- [[Like `_build_summarizer`, but injects a real `client` (an `httpx.Client` wired t]] - `rationale_for` [EXTRACTED]
- [[_real_summarizer_cls()]] - `calls` [EXTRACTED]
- [[test_5xx_response_maps_to_transient_error()_3]] - `calls` [EXTRACTED]
- [[test_connection_failure_maps_to_transient_error()_3]] - `calls` [EXTRACTED]
- [[test_response_body_missing_response_field_maps_to_permanent_error()]] - `calls` [EXTRACTED]
- [[test_summarize_request_disables_thinking_and_sets_context_options()]] - `calls` [EXTRACTED]
- [[test_summarizer.py]] - `contains` [EXTRACTED]
- [[test_unload_is_best_effort_and_swallows_a_failed_request()]] - `calls` [EXTRACTED]
- [[test_unload_polls_api_ps_and_returns_promptly_once_the_model_is_gone()]] - `calls` [EXTRACTED]
- [[test_unload_sends_keep_alive_zero_with_no_prompt_and_does_not_acquire_the_lock()]] - `calls` [EXTRACTED]
- [[test_unload_swallows_a_malformed_api_ps_response_and_logs_a_warning()]] - `calls` [EXTRACTED]
- [[test_unload_times_out_and_logs_a_warning_if_the_model_never_disappears()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_summarizerpy