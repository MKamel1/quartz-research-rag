---
type: community
cohesion: 0.07
members: 51
---

# PermanentError

**Cohesion:** 0.07 - loosely connected
**Members:** 51 nodes

## Members
- [[._backoff()_1]] - code - rag/harvester.py
- [[._build_query()]] - code - rag/harvester.py
- [[._entry_to_ref()]] - code - rag/harvester.py
- [[._fetch_by_id_list()]] - code - rag/harvester.py
- [[._fetch_page()]] - code - rag/harvester.py
- [[._parse_date()]] - code - rag/harvester.py
- [[._parse_entries()]] - code - rag/harvester.py
- [[._validated_date()]] - code - rag/harvester.py
- [[.embed()_5]] - code - rag/test_orchestrator.py
- [[.fetch()_2]] - code - rag/harvester.py
- [[.fetch_by_ids()_1]] - code - rag/harvester.py
- [[.generate()_1]] - code - app/test_reembed_experiment.py
- [[.harvest()_4]] - code - rag/harvester.py
- [[.summarize()_1]] - code - rag/summarizer.py
- [[.unload()_1]] - code - rag/summarizer.py
- [[ArxivSource]] - code - rag/harvester.py
- [[Element]] - code
- [[Exception]] - code
- [[Exception_3]] - code
- [[FakeSource — the fake `Source` adapter Harvester (M1, owner A) injects in every]] - rationale - rag/fakes/fake_source.py
- [[Fetch specific, known papers by base arXiv id -- not the query-driven `fetch()`]] - rationale - rag/harvester.py
- [[Harvester]] - code - rag/harvester.py
- [[M1 Harvester (ARCHITECTURE.md M1 · Harvester, owner A).  `Harvester.harvest(fo]] - rationale - rag/harvester.py
- [[OllamaSummarizer]] - code - rag/summarizer.py
- [[One focus-area term - the full `search_query` value the existing quoted `all]] - rationale - rag/harvester.py
- [[PermanentError]] - code - contracts/errors.py
- [[Positive-example fixture for check (c) (cichecksblind_except.py) — catches the]] - rationale - ci/checks/negative_examples/blind_except_good.py
- [[Precondition `ordering` is `freshest_first` or `relevance` (DATA-CONTRACTS.]] - rationale - rag/harvester.py
- [[Preconditions `cap = 0`; `ordering` is whatever the injected `source` accepts]] - rationale - rag/harvester.py
- [[Proactively evict this model from GPU memory (ARCHITECTURE.md §3's two-phase ing]] - rationale - rag/summarizer.py
- [[Real `Source` paginates httpsexport.arxiv.orgapiquery (Atom feed) via `htt]] - rationale - rag/harvester.py
- [[Real `Summarizer` adapter one local generation-LLM call per paper, through an i]] - rationale - rag/summarizer.py
- [[Sibling test for contractserrors.py (T-F1 DoD imported by a trivial test).]] - rationale - contracts/test_errors.py
- [[Temporary failure — retry with bounded backoff, then quarantine if retries are]] - rationale - contracts/errors.py
- [[This paper is unusable — quarantine it and continue the run. Never kills the run]] - rationale - contracts/errors.py
- [[TransientError]] - code - contracts/errors.py
- [[_default_retry_sleep()_1]] - code - rag/harvester.py
- [[_paper_id_from_error()]] - code - rag/harvester.py
- [[_read()_1]] - code - ci/checks/negative_examples/blind_except_good.py
- [[_version_num()]] - code - rag/harvester.py
- [[blind_except_good.py]] - code - ci/checks/negative_examples/blind_except_good.py
- [[date_1]] - code
- [[fake_source.py]] - code - rag/fakes/fake_source.py
- [[harvester.py_1]] - code - rag/harvester.py
- [[load_paper()_1]] - code - ci/checks/negative_examples/blind_except_good.py
- [[test_catching_one_class_does_not_catch_a_sibling()]] - code - contracts/test_errors.py
- [[test_each_is_raisable_and_catchable_independently()]] - code - contracts/test_errors.py
- [[test_errors.py]] - code - contracts/test_errors.py
- [[test_fetch_applies_rate_limit_sleep_between_requests_across_focus_area_entries()]] - code - rag/test_harvester_arxiv_source.py
- [[test_real_arxiv_api_fetch_by_ids_returns_the_exact_requested_papers()]] - code - rag/test_harvester_arxiv_source.py
- [[test_three_classes_are_distinct_exception_subclasses()]] - code - contracts/test_errors.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/PermanentError
SORT file.name ASC
```

## Connections to other communities
- 29 edges to [[_COMMUNITY_FakeSource]]
- 25 edges to [[_COMMUNITY_PaperRef]]
- 23 edges to [[_COMMUNITY_ParsedDoc]]
- 21 edges to [[_COMMUNITY_TeiReranker]]
- 20 edges to [[_COMMUNITY_test_harvester_arxiv_source.py]]
- 19 edges to [[_COMMUNITY_assembly.py]]
- 16 edges to [[_COMMUNITY_test_embedder.py]]
- 15 edges to [[_COMMUNITY_test_orchestrator.py]]
- 13 edges to [[_COMMUNITY_FakeGpuLock]]
- 11 edges to [[_COMMUNITY_test_reembed_experiment.py]]
- 10 edges to [[_COMMUNITY_test_summarizer.py]]
- 7 edges to [[_COMMUNITY_prefetch_pdfs.py]]
- 7 edges to [[_COMMUNITY_GpuLock]]
- 7 edges to [[_COMMUNITY_parser.py]]
- 6 edges to [[_COMMUNITY_harvest_refs]]
- 6 edges to [[_COMMUNITY_PaperRecord]]
- 5 edges to [[_COMMUNITY__StubOrchestrator]]
- 5 edges to [[_COMMUNITY_test_vector_index.py]]
- 4 edges to [[_COMMUNITY_build_ingestion_orchestrator]]
- 4 edges to [[_COMMUNITY_test_assembly.py]]
- 4 edges to [[_COMMUNITY__build_orchestrator_for_hook_test]]
- 4 edges to [[_COMMUNITY_TeiEmbedder]]
- 4 edges to [[_COMMUNITY_VectorIndex]]
- 4 edges to [[_COMMUNITY_ContractError]]
- 4 edges to [[_COMMUNITY_test_parser.py]]
- 3 edges to [[_COMMUNITY_FakeTeiLifecycle]]
- 3 edges to [[_COMMUNITY_migrate]]
- 3 edges to [[_COMMUNITY__install_fake_do_parse]]
- 2 edges to [[_COMMUNITY_test_prefetch_pdfs.py]]
- 2 edges to [[_COMMUNITY_datetime]]
- 2 edges to [[_COMMUNITY_test_ingest.py]]
- 2 edges to [[_COMMUNITY___init__.py]]
- 2 edges to [[_COMMUNITY__fetch_references]]
- 2 edges to [[_COMMUNITY_Figure]]
- 2 edges to [[_COMMUNITY_Anchor]]
- 1 edge to [[_COMMUNITY_SearchFilters]]
- 1 edge to [[_COMMUNITY_FakeVectorStore]]
- 1 edge to [[_COMMUNITY_build_corpus.py]]

## Top bridge nodes
- [[TransientError]] - degree 127, connects to 29 communities
- [[PermanentError]] - degree 143, connects to 26 communities
- [[ArxivSource]] - degree 27, connects to 8 communities
- [[harvester.py_1]] - degree 17, connects to 8 communities
- [[fake_source.py]] - degree 12, connects to 7 communities