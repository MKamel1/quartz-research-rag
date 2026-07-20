---
source_file: "rag/test_contextual_header.py"
type: "code"
community: "FakeGpuLock"
location: "L21"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeGpuLock
---

# _client()

## Connections
- [[test_4xx_response_maps_to_permanent_error()]] - `calls` [EXTRACTED]
- [[test_5xx_response_maps_to_transient_error()]] - `calls` [EXTRACTED]
- [[test_connection_failure_maps_to_transient_error()]] - `calls` [EXTRACTED]
- [[test_contextual_header.py]] - `contains` [EXTRACTED]
- [[test_empty_chunk_returns_empty_string_without_calling_llm_or_lock()]] - `calls` [EXTRACTED]
- [[test_empty_llm_response_raises_permanent_error()]] - `calls` [EXTRACTED]
- [[test_empty_summary_returns_empty_string_without_calling_llm_or_lock()]] - `calls` [EXTRACTED]
- [[test_generate_accepts_a_custom_prompt_template()]] - `calls` [EXTRACTED]
- [[test_generate_acquires_the_gpu_lock_with_the_header_stage_label()]] - `calls` [EXTRACTED]
- [[test_generate_clamps_an_overlong_response_to_the_max_word_ceiling()]] - `calls` [EXTRACTED]
- [[test_generate_formats_prompt_with_summary_and_chunk()]] - `calls` [EXTRACTED]
- [[test_generate_returns_the_llm_response_text()]] - `calls` [EXTRACTED]
- [[test_response_missing_response_field_maps_to_permanent_error()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeGpuLock