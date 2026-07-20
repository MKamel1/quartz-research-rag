---
type: community
cohesion: 0.08
members: 51
---

# FakeSource

**Cohesion:** 0.08 - loosely connected
**Members:** 51 nodes

## Members
- [[.__call__()]] - code - rag/test_harvester.py
- [[.__init__()_38]] - code - rag/fakes/fake_source.py
- [[.__init__()_43]] - code - rag/harvester.py
- [[.__init__()_42]] - code - rag/harvester.py
- [[.__init__()_55]] - code - rag/test_harvester.py
- [[._as_exception()]] - code - rag/fakes/fake_source.py
- [[._load_fixture()]] - code - rag/fakes/fake_source.py
- [[.fetch()_1]] - code - rag/fakes/fake_source.py
- [[.paper_ids()]] - code - rag/test_harvester.py
- [[A real `httpx.Client` for arXiv traffic, carrying the descriptive `_USER_AGENT`.]] - rationale - rag/harvester.py
- [[Build a Harvester with a no-op backoff so retry tests don't actually sleep.]] - rationale - rag/test_harvester.py
- [[Client_7]] - code
- [[ErrorMapEntry]] - code
- [[Exception_2]] - code
- [[FakeSource]] - code - rag/fakes/fake_source.py
- [[Ignores `focus_area``ordering` (this fake has one fixed fixture, not a queryabl]] - rationale - rag/fakes/fake_source.py
- [[InjectedError]] - code
- [[Path_28]] - code
- [[QuarantineSink]] - code - rag/test_harvester.py
- [[Records `(paper_id, error)` the Harvester dead-letters, so a test can assert the]] - rationale - rag/test_harvester.py
- [[RetrySleep_1]] - code
- [[Tests for FakeSource (T-F4) — fixture loading, the v1v2 dedup pair, and error i]] - rationale - rag/fakes/test_fake_source.py
- [[Yields a fixed list of `PaperRef`s loaded from a committed JSON fixture — no arX]] - rationale - rag/fakes/fake_source.py
- [[`categories``date_from``date_to` (OG-45, `Config.arxiv_categories`         `a]] - rationale - rag/harvester.py
- [[arXiv best-practice automated clients must send a descriptive User-Agent so the]] - rationale - rag/test_harvester.py
- [[arxiv_http_client()]] - code - rag/harvester.py
- [[harvest_all()]] - code - rag/test_harvester.py
- [[make_harvester()]] - code - rag/test_harvester.py
- [[test_arxiv_http_client_sends_descriptive_user_agent()]] - code - rag/test_harvester.py
- [[test_cap_limits_number_of_refs_yielded()]] - code - rag/fakes/test_fake_source.py
- [[test_dedup_collapses_the_two_versions_of_one_base_id()]] - code - rag/test_harvester.py
- [[test_dedup_keeps_the_latest_version()]] - code - rag/test_harvester.py
- [[test_error_injection_accepts_an_exception_instance()]] - code - rag/fakes/test_fake_source.py
- [[test_error_injection_does_not_affect_other_ids()]] - code - rag/fakes/test_fake_source.py
- [[test_error_injection_fail_n_then_succeed_recovers_after_fail_count_reaches()]] - code - rag/fakes/test_fake_source.py
- [[test_error_injection_raises_mapped_error_for_mapped_paper_id()]] - code - rag/fakes/test_fake_source.py
- [[test_error_injection_yields_earlier_refs_before_raising()]] - code - rag/fakes/test_fake_source.py
- [[test_fake_source.py]] - code - rag/fakes/test_fake_source.py
- [[test_fixture_contains_v1_and_v2_of_the_same_base_paper_id()]] - code - rag/fakes/test_fake_source.py
- [[test_harvester.py_1]] - code - rag/test_harvester.py
- [[test_no_truncation_warning_when_harvest_completes_cleanly()]] - code - rag/test_harvester.py
- [[test_permanent_error_is_not_retried()]] - code - rag/test_harvester.py
- [[test_permanent_error_is_quarantined_and_run_continues()]] - code - rag/test_harvester.py
- [[test_permanent_error_logs_a_truncation_warning()]] - code - rag/test_harvester.py
- [[test_resume_skips_already_seen_base_ids()]] - code - rag/test_harvester.py
- [[test_resume_with_all_seen_yields_nothing()]] - code - rag/test_harvester.py
- [[test_transient_error_exhausting_retries_is_quarantined_and_run_continues()]] - code - rag/test_harvester.py
- [[test_transient_error_is_retried_then_the_paper_is_yielded()]] - code - rag/test_harvester.py
- [[test_transient_exhausted_logs_a_truncation_warning()]] - code - rag/test_harvester.py
- [[test_transient_retry_applies_backoff()]] - code - rag/test_harvester.py
- [[test_yields_all_fixture_refs_up_to_cap()]] - code - rag/fakes/test_fake_source.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/FakeSource
SORT file.name ASC
```

## Connections to other communities
- 29 edges to [[_COMMUNITY_PermanentError]]
- 6 edges to [[_COMMUNITY_test_orchestrator.py]]
- 3 edges to [[_COMMUNITY_PaperRef]]
- 3 edges to [[_COMMUNITY_PaperRecord]]
- 2 edges to [[_COMMUNITY_assembly.py]]
- 2 edges to [[_COMMUNITY_ParsedDoc]]
- 1 edge to [[_COMMUNITY_build_ingestion_orchestrator]]
- 1 edge to [[_COMMUNITY_prefetch_pdfs.py]]
- 1 edge to [[_COMMUNITY_test_prefetch_pdfs.py]]
- 1 edge to [[_COMMUNITY_FakeVectorStore]]
- 1 edge to [[_COMMUNITY_Anchor]]

## Top bridge nodes
- [[FakeSource]] - degree 45, connects to 7 communities
- [[arxiv_http_client()]] - degree 8, connects to 3 communities
- [[test_harvester.py_1]] - degree 22, connects to 2 communities
- [[QuarantineSink]] - degree 17, connects to 2 communities
- [[test_fake_source.py]] - degree 14, connects to 2 communities