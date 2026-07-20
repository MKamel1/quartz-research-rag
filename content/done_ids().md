---
source_file: "rag/test_orchestrator.py"
type: "code"
community: "test_orchestrator.py"
location: "L447"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_orchestratorpy
---

# done_ids()

## Connections
- [[Rig]] - `references` [EXTRACTED]
- [[test_full_run_stores_and_finishes_every_paper()]] - `calls` [EXTRACTED]
- [[test_on_stage_hook_fires_summarize_then_embed_then_store_in_order_per_paper()]] - `calls` [EXTRACTED]
- [[test_orchestrator.py]] - `contains` [EXTRACTED]
- [[test_permanent_embed_error_quarantines_immediately_no_retry()]] - `calls` [EXTRACTED]
- [[test_poisoned_paper_is_quarantined_and_the_rest_complete()]] - `calls` [EXTRACTED]
- [[test_resume_after_stored_reruns_upsert_and_reaches_done()]] - `calls` [EXTRACTED]
- [[test_resume_after_summarized_does_not_reinvoke_chunker_or_summarizer()]] - `calls` [EXTRACTED]
- [[test_transient_embed_error_exhausts_retries_then_quarantines_and_the_rest_complete()]] - `calls` [EXTRACTED]
- [[test_transient_embed_error_recovers_after_bounded_retry()]] - `calls` [EXTRACTED]
- [[test_transient_parse_error_exhausts_retries_then_quarantines_and_the_rest_complete()]] - `calls` [EXTRACTED]
- [[test_transient_parse_error_recovers_after_bounded_retry()]] - `calls` [EXTRACTED]
- [[test_transient_summarize_error_exhausts_retries_then_quarantines_and_the_rest_complete()]] - `calls` [EXTRACTED]
- [[test_transient_summarize_error_recovers_after_bounded_retry()]] - `calls` [EXTRACTED]
- [[test_transient_topic_query_vec_error_recovers_after_bounded_retry()]] - `calls` [EXTRACTED]
- [[test_transient_upsert_error_exhausts_retries_then_quarantines_and_the_rest_complete()]] - `calls` [EXTRACTED]
- [[test_transient_upsert_error_recovers_after_bounded_retry()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_orchestratorpy