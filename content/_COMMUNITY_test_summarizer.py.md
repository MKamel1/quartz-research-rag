---
type: community
cohesion: 0.10
members: 36
---

# test_summarizer.py

**Cohesion:** 0.10 - loosely connected
**Members:** 36 nodes

## Members
- [[A degenerate parse a figure but no usable prose block and whitespace-only markd]] - rationale - rag/test_summarizer.py
- [[A stubbed `apips` body listing the given models as currently loaded.]] - rationale - rag/test_summarizer.py
- [[Construct the real adapter injecting `FakeGpuLock` for `gpu_lock` (frozen param_1]] - rationale - rag/test_summarizer.py
- [[Drops low-value sections, then truncates further if the paper still doesn't fit]] - rationale - rag/summarizer.py
- [[Like `_build_summarizer`, but injects a real `client` (an `httpx.Client` wired t]] - rationale - rag/test_summarizer.py
- [[Response_1]] - code
- [[The real GPU-bound adapter in rag.summarizer — the class T-F6's gpu_lock check (]] - rationale - rag/test_summarizer.py
- [[_GoldenPaper]] - code - rag/test_summarizer.py
- [[_build_summarizer()]] - code - rag/test_summarizer.py
- [[_build_summarizer_with_client()]] - code - rag/test_summarizer.py
- [[_figures_only_doc()]] - code - rag/test_summarizer.py
- [[_fit_for_summarization()]] - code - rag/summarizer.py
- [[_prose_doc()]] - code - rag/test_summarizer.py
- [[_ps_response()]] - code - rag/test_summarizer.py
- [[_real_summarizer_cls()]] - code - rag/test_summarizer.py
- [[golden_papers()]] - code - rag/test_summarizer.py
- [[ponytail a minimal stand-in for Owner B's golden-fixture objects (paper_idpars]] - rationale - rag/test_summarizer.py
- [[real_summarizer()]] - code - rag/test_summarizer.py
- [[test_5xx_response_maps_to_transient_error()_3]] - code - rag/test_summarizer.py
- [[test_connection_failure_maps_to_transient_error()_3]] - code - rag/test_summarizer.py
- [[test_empty_markdown_parsed_doc_raises_permanent_error()]] - code - rag/test_summarizer.py
- [[test_figures_only_parsed_doc_raises_permanent_error()]] - code - rag/test_summarizer.py
- [[test_fit_for_summarization_drops_appendix_section()]] - code - rag/test_summarizer.py
- [[test_fit_for_summarization_drops_references_section()]] - code - rag/test_summarizer.py
- [[test_fit_for_summarization_num_ctx_scales_with_length_within_bounds()]] - code - rag/test_summarizer.py
- [[test_fit_for_summarization_truncates_and_clamps_for_huge_input()]] - code - rag/test_summarizer.py
- [[test_response_body_missing_response_field_maps_to_permanent_error()]] - code - rag/test_summarizer.py
- [[test_summaries_are_non_empty_and_non_degenerate_on_golden_fixtures()]] - code - rag/test_summarizer.py
- [[test_summarize_acquires_the_gpu_lock_with_the_summarize_stage_label()]] - code - rag/test_summarizer.py
- [[test_summarize_request_disables_thinking_and_sets_context_options()]] - code - rag/test_summarizer.py
- [[test_summarizer.py]] - code - rag/test_summarizer.py
- [[test_unload_is_best_effort_and_swallows_a_failed_request()]] - code - rag/test_summarizer.py
- [[test_unload_polls_api_ps_and_returns_promptly_once_the_model_is_gone()]] - code - rag/test_summarizer.py
- [[test_unload_sends_keep_alive_zero_with_no_prompt_and_does_not_acquire_the_lock()]] - code - rag/test_summarizer.py
- [[test_unload_swallows_a_malformed_api_ps_response_and_logs_a_warning()]] - code - rag/test_summarizer.py
- [[test_unload_times_out_and_logs_a_warning_if_the_model_never_disappears()]] - code - rag/test_summarizer.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_summarizerpy
SORT file.name ASC
```

## Connections to other communities
- 16 edges to [[_COMMUNITY_FakeGpuLock]]
- 10 edges to [[_COMMUNITY_PermanentError]]
- 8 edges to [[_COMMUNITY_ParsedDoc]]
- 3 edges to [[_COMMUNITY_Figure]]
- 2 edges to [[_COMMUNITY_GpuLock]]
- 1 edge to [[_COMMUNITY_assembly.py]]
- 1 edge to [[_COMMUNITY_Anchor]]
- 1 edge to [[_COMMUNITY___init__.py]]

## Top bridge nodes
- [[test_summarizer.py]] - degree 38, connects to 8 communities
- [[_GoldenPaper]] - degree 10, connects to 4 communities
- [[_fit_for_summarization()]] - degree 8, connects to 2 communities
- [[_figures_only_doc()]] - degree 6, connects to 2 communities
- [[test_5xx_response_maps_to_transient_error()_3]] - degree 5, connects to 2 communities