---
source_file: "app/assembly.py"
type: "code"
community: "harvest_refs"
location: "L181"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/harvest_refs
---

# harvest_refs()

## Connections
- [[ArxivSource]] - `calls` [EXTRACTED]
- [[Config]] - `references` [EXTRACTED]
- [[IngestionOrchestrator]] - `references` [EXTRACTED]
- [[PaperRef]] - `references` [EXTRACTED]
- [[Path_1]] - `calls` [EXTRACTED]
- [[_cached_ref()]] - `calls` [EXTRACTED]
- [[_fetch_by_ids_with_backoff()]] - `calls` [EXTRACTED]
- [[_run_finish_phase()]] - `calls` [EXTRACTED]
- [[_run_parse_phase()]] - `calls` [EXTRACTED]
- [[`config.ingest_paper_ids` (optional list of base arXiv ids, T-EVAL harvest-scopi]] - `rationale_for` [EXTRACTED]
- [[assembly.py]] - `contains` [EXTRACTED]
- [[ingest.py]] - `imports` [EXTRACTED]
- [[parse_phase.py]] - `imports` [EXTRACTED]
- [[test_assembly.py]] - `imports` [EXTRACTED]
- [[test_fetch_by_ids_backoff_clamps_an_excessive_retry_after()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_backoff_falls_back_to_exponential_when_retry_after_absent()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_backoff_falls_back_to_exponential_when_retry_after_unparseable()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_backoff_honors_retry_after_http_date_form()]] - `calls` [EXTRACTED]
- [[test_fetch_by_ids_backoff_honors_retry_after_seconds_form()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_cache_first_makes_zero_network_calls_when_both_files_are_cached()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_empty_pdf_cache_dir_disables_the_cache_check()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_falls_back_to_arxiv_for_a_pdf_only_cache_entry()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_only_fetches_the_ids_missing_from_cache()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_query_driven_path_is_unaffected_when_ingest_paper_ids_is_unset()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_raises_once_the_429_retry_budget_is_exhausted()]] - `calls` [EXTRACTED]
- [[test_harvest_refs_retries_a_429_with_backoff_then_succeeds()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/harvest_refs