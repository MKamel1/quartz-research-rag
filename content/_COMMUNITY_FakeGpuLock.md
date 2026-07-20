---
type: community
cohesion: 0.12
members: 39
---

# FakeGpuLock

**Cohesion:** 0.12 - loosely connected
**Members:** 39 nodes

## Members
- [[.__init__()_35]] - code - rag/fakes/fake_gpu_lock.py
- [[.acquire()_2]] - code - rag/fakes/fake_gpu_lock.py
- [[.generate()_2]] - code - rag/contextual_header.py
- [[AbstractContextManager_1]] - code
- [[ContextualHeaderGenerator]] - code - rag/contextual_header.py
- [[ContextualHeaderGenerator — T-DOC41 (Contextual Retrieval spike, Approach A) rea]] - rationale - rag/contextual_header.py
- [[FakeGpuLock]] - code - rag/fakes/fake_gpu_lock.py
- [[FakeGpuLock — the default `GpuLock` dependency for every zero-GPU test of the re]] - rationale - rag/fakes/fake_gpu_lock.py
- [[No-op context manager — never blocks, never touches a real file or process. Reco]] - rationale - rag/fakes/fake_gpu_lock.py
- [[One local generation-LLM call per chunk, through an injected HTTP client pointed]] - rationale - rag/contextual_header.py
- [[Request]] - code
- [[Response]] - code
- [[T-DOC41 (Contextual Retrieval spike) — `ragcontextual_header.ContextualHeaderGe]] - rationale - rag/test_contextual_header.py
- [[Tests for FakeGpuLock (T-F4) — no-op context manager behavior and `.acquired` re]] - rationale - rag/fakes/test_fake_gpu_lock.py
- [[_clamp()]] - code - rag/contextual_header.py
- [[_client()]] - code - rag/test_contextual_header.py
- [[_ok_handler()]] - code - rag/test_contextual_header.py
- [[contextual_header.py]] - code - rag/contextual_header.py
- [[fake_gpu_lock.py]] - code - rag/fakes/fake_gpu_lock.py
- [[test_4xx_response_maps_to_permanent_error()]] - code - rag/test_contextual_header.py
- [[test_5xx_response_maps_to_transient_error()]] - code - rag/test_contextual_header.py
- [[test_acquire_records_stage_in_acquired()]] - code - rag/fakes/test_fake_gpu_lock.py
- [[test_acquire_yields_a_context_manager_that_does_not_block_or_error()]] - code - rag/fakes/test_fake_gpu_lock.py
- [[test_connection_failure_maps_to_transient_error()]] - code - rag/test_contextual_header.py
- [[test_context_manager_still_releases_on_exception()]] - code - rag/fakes/test_fake_gpu_lock.py
- [[test_contextual_header.py]] - code - rag/test_contextual_header.py
- [[test_empty_chunk_returns_empty_string_without_calling_llm_or_lock()]] - code - rag/test_contextual_header.py
- [[test_empty_llm_response_raises_permanent_error()]] - code - rag/test_contextual_header.py
- [[test_empty_summary_returns_empty_string_without_calling_llm_or_lock()]] - code - rag/test_contextual_header.py
- [[test_fake_gpu_lock.py]] - code - rag/fakes/test_fake_gpu_lock.py
- [[test_generate_accepts_a_custom_prompt_template()]] - code - rag/test_contextual_header.py
- [[test_generate_acquires_the_gpu_lock_with_the_header_stage_label()]] - code - rag/test_contextual_header.py
- [[test_generate_clamps_an_overlong_response_to_the_max_word_ceiling()]] - code - rag/test_contextual_header.py
- [[test_generate_formats_prompt_with_summary_and_chunk()]] - code - rag/test_contextual_header.py
- [[test_generate_returns_the_llm_response_text()]] - code - rag/test_contextual_header.py
- [[test_nested_acquires_all_record_correctly()]] - code - rag/fakes/test_fake_gpu_lock.py
- [[test_response_missing_response_field_maps_to_permanent_error()]] - code - rag/test_contextual_header.py
- [[test_satisfies_the_gpu_lock_protocol()]] - code - rag/fakes/test_fake_gpu_lock.py
- [[test_sequential_acquires_all_record_correctly()]] - code - rag/fakes/test_fake_gpu_lock.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/FakeGpuLock
SORT file.name ASC
```

## Connections to other communities
- 19 edges to [[_COMMUNITY_TeiReranker]]
- 16 edges to [[_COMMUNITY_test_embedder.py]]
- 16 edges to [[_COMMUNITY_test_summarizer.py]]
- 14 edges to [[_COMMUNITY_ParsedDoc]]
- 13 edges to [[_COMMUNITY_PermanentError]]
- 7 edges to [[_COMMUNITY_test_reembed_experiment.py]]
- 7 edges to [[_COMMUNITY_GpuLock]]
- 6 edges to [[_COMMUNITY_test_orchestrator.py]]
- 4 edges to [[_COMMUNITY_PaperRecord]]
- 3 edges to [[_COMMUNITY_test_ingest.py]]
- 3 edges to [[_COMMUNITY_FakeTeiLifecycle]]
- 2 edges to [[_COMMUNITY_assembly.py]]
- 2 edges to [[_COMMUNITY_FakeVectorStore]]
- 1 edge to [[_COMMUNITY_Anchor]]

## Top bridge nodes
- [[FakeGpuLock]] - degree 101, connects to 10 communities
- [[fake_gpu_lock.py]] - degree 11, connects to 7 communities
- [[contextual_header.py]] - degree 10, connects to 4 communities
- [[ContextualHeaderGenerator]] - degree 26, connects to 3 communities
- [[test_contextual_header.py]] - degree 22, connects to 2 communities