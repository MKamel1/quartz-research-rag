---
type: community
cohesion: 0.21
members: 35
---

# test_prefetch_pdfs.py

**Cohesion:** 0.21 - loosely connected
**Members:** 35 nodes

## Members
- [[.__init__()_15]] - code - app/test_prefetch_pdfs.py
- [[.harvest()_3]] - code - app/test_prefetch_pdfs.py
- [[10 downloads at `log_every=3` must log exactly 3 progress lines (at 3, 6, 9) --]] - rationale - app/test_prefetch_pdfs.py
- [[24 downloads at the default `log_every` must log zero progress lines -- confirms]] - rationale - app/test_prefetch_pdfs.py
- [[A `.pdf` already present (e.g. from a pass that downloaded it but got killed bef]] - rationale - app/test_prefetch_pdfs.py
- [[A paper already at ANY ingest_state stage (simulating the live fused-download-pa]] - rationale - app/test_prefetch_pdfs.py
- [[Client_3]] - code
- [[Mirrors `ragtest_ingest_state_sqlite.py`'s `StubHarvester` -- a fixed ref list,]] - rationale - app/test_prefetch_pdfs.py
- [[One harvest-then-download pass. Returns how many NEW files this call downloaded.]] - rationale - app/prefetch_pdfs.py
- [[Regression test for the exact scenario design review flagged as the blocker a p]] - rationale - app/test_prefetch_pdfs.py
- [[StubHarvester_1]] - code - app/test_prefetch_pdfs.py
- [[T-DOC48 the `PaperRef` this script already fetched to decide the download must]] - rationale - app/test_prefetch_pdfs.py
- [[_cached_count()]] - code - app/prefetch_pdfs.py
- [[_cfg()_2]] - code - app/test_prefetch_pdfs.py
- [[_make_ref()_2]] - code - app/test_prefetch_pdfs.py
- [[_mock_client()]] - code - app/test_prefetch_pdfs.py
- [[_no_sleep()]] - code - app/test_prefetch_pdfs.py
- [[`appprefetch_pdfs.py` — standalone PDF-backlog builder.  Covers the properties]] - rationale - app/test_prefetch_pdfs.py
- [[run()]] - code - app/prefetch_pdfs.py
- [[test_a_paper_already_done_survives_a_full_pass_completely_unchanged()]] - code - app/test_prefetch_pdfs.py
- [[test_no_sidecar_is_written_when_the_download_permanently_fails()]] - code - app/test_prefetch_pdfs.py
- [[test_permanent_download_failure_is_logged_as_a_warning()]] - code - app/test_prefetch_pdfs.py
- [[test_permanent_download_failure_writes_a_local_marker_and_does_not_stop_the_run()]] - code - app/test_prefetch_pdfs.py
- [[test_permanently_failed_paper_is_skipped_on_a_later_pass_without_a_request()]] - code - app/test_prefetch_pdfs.py
- [[test_prefetch_pdfs.py]] - code - app/test_prefetch_pdfs.py
- [[test_quarantined_paper_is_also_skipped()]] - code - app/test_prefetch_pdfs.py
- [[test_restart_after_a_crash_resumes_without_redownloading_and_finishes_the_backlog()]] - code - app/test_prefetch_pdfs.py
- [[test_restart_never_redownloads_a_file_already_on_disk()]] - code - app/test_prefetch_pdfs.py
- [[test_run_default_log_every_is_25()]] - code - app/test_prefetch_pdfs.py
- [[test_run_logs_a_progress_line_every_log_every_downloads_and_no_more()]] - code - app/test_prefetch_pdfs.py
- [[test_run_logs_harvest_phase_start_and_result()]] - code - app/test_prefetch_pdfs.py
- [[test_sidecar_is_written_alongside_a_successful_download()]] - code - app/test_prefetch_pdfs.py
- [[test_skips_a_paper_the_live_pipeline_already_checkpointed()]] - code - app/test_prefetch_pdfs.py
- [[test_stops_once_target_is_reached_even_with_more_refs_available()]] - code - app/test_prefetch_pdfs.py
- [[test_transient_failure_retries_with_backoff_floored_at_the_pdf_delay_then_gives_up_retryable()]] - code - app/test_prefetch_pdfs.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_prefetch_pdfspy
SORT file.name ASC
```

## Connections to other communities
- 28 edges to [[_COMMUNITY_migrate]]
- 16 edges to [[_COMMUNITY_prefetch_pdfs.py]]
- 8 edges to [[_COMMUNITY_prefetch_loop]]
- 5 edges to [[_COMMUNITY__parse_args]]
- 4 edges to [[_COMMUNITY_Config]]
- 3 edges to [[_COMMUNITY_PaperRef]]
- 2 edges to [[_COMMUNITY_PermanentError]]
- 1 edge to [[_COMMUNITY_FakeSource]]
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY_load_config]]
- 1 edge to [[_COMMUNITY_ParsedDoc]]
- 1 edge to [[_COMMUNITY_test_orchestrator.py]]

## Top bridge nodes
- [[test_prefetch_pdfs.py]] - degree 50, connects to 10 communities
- [[run()]] - degree 30, connects to 6 communities
- [[StubHarvester_1]] - degree 22, connects to 3 communities
- [[test_permanent_download_failure_writes_a_local_marker_and_does_not_stop_the_run()]] - degree 10, connects to 2 communities
- [[test_permanently_failed_paper_is_skipped_on_a_later_pass_without_a_request()]] - degree 9, connects to 2 communities