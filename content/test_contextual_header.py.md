---
source_file: "rag/test_contextual_header.py"
type: "code"
community: "FakeGpuLock"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeGpuLock
---

# test_contextual_header.py

## Connections
- [[ContextualHeaderGenerator]] - `imports` [EXTRACTED]
- [[FakeGpuLock]] - `imports` [EXTRACTED]
- [[PermanentError]] - `imports` [EXTRACTED]
- [[T-DOC41 (Contextual Retrieval spike) — `ragcontextual_header.ContextualHeaderGe]] - `rationale_for` [EXTRACTED]
- [[TransientError]] - `imports` [EXTRACTED]
- [[_client()]] - `contains` [EXTRACTED]
- [[_ok_handler()]] - `contains` [EXTRACTED]
- [[contextual_header.py]] - `imports_from` [EXTRACTED]
- [[errors.py]] - `imports_from` [EXTRACTED]
- [[fake_gpu_lock.py]] - `imports_from` [EXTRACTED]
- [[test_4xx_response_maps_to_permanent_error()]] - `contains` [EXTRACTED]
- [[test_5xx_response_maps_to_transient_error()]] - `contains` [EXTRACTED]
- [[test_connection_failure_maps_to_transient_error()]] - `contains` [EXTRACTED]
- [[test_empty_chunk_returns_empty_string_without_calling_llm_or_lock()]] - `contains` [EXTRACTED]
- [[test_empty_llm_response_raises_permanent_error()]] - `contains` [EXTRACTED]
- [[test_empty_summary_returns_empty_string_without_calling_llm_or_lock()]] - `contains` [EXTRACTED]
- [[test_generate_accepts_a_custom_prompt_template()]] - `contains` [EXTRACTED]
- [[test_generate_acquires_the_gpu_lock_with_the_header_stage_label()]] - `contains` [EXTRACTED]
- [[test_generate_clamps_an_overlong_response_to_the_max_word_ceiling()]] - `contains` [EXTRACTED]
- [[test_generate_formats_prompt_with_summary_and_chunk()]] - `contains` [EXTRACTED]
- [[test_generate_returns_the_llm_response_text()]] - `contains` [EXTRACTED]
- [[test_response_missing_response_field_maps_to_permanent_error()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeGpuLock