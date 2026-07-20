---
source_file: "app/test_assembly.py"
type: "code"
community: "harvest_refs"
location: "L875"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/harvest_refs
---

# _StubArxivSource

## Connections
- [[.__init__()_7]] - `method` [EXTRACTED]
- [[.fetch_by_ids()]] - `method` [EXTRACTED]
- [[AdaptiveBatchSizer]] - `uses` [INFERRED]
- [[Config]] - `uses` [INFERRED]
- [[PaperRef]] - `uses` [INFERRED]
- [[PermanentError]] - `uses` [INFERRED]
- [[Records every `fetch_by_ids` call and returns canned refs  raises canned errors]] - `rationale_for` [EXTRACTED]
- [[TransientError]] - `uses` [INFERRED]
- [[test_assembly.py]] - `contains` [EXTRACTED]
- [[test_fetch_by_ids_backoff_clamps_an_excessive_retry_after()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_backoff_falls_back_to_exponential_when_retry_after_absent()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_backoff_falls_back_to_exponential_when_retry_after_unparseable()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_backoff_honors_retry_after_http_date_form()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_backoff_honors_retry_after_seconds_form()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_empty_pdf_cache_dir_disables_the_cache_check()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_falls_back_to_arxiv_for_a_pdf_only_cache_entry()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_only_fetches_the_ids_missing_from_cache()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_raises_once_the_429_retry_budget_is_exhausted()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_retries_a_429_with_backoff_then_succeeds()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/harvest_refs