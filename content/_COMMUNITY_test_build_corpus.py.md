---
type: community
cohesion: 0.15
members: 25
---

# test_build_corpus.py

**Cohesion:** 0.15 - loosely connected
**Members:** 25 nodes

## Members
- [[Connection_4]] - code
- [[How many papers `ingest_state` currently has at stage='done' -- the loop's own s]] - rationale - app/build_corpus.py
- [[Matches `ragharvester.pyArxivSource`'s own truthy `if self._categories` chec]] - rationale - app/test_build_corpus.py
- [[Minimal `papers` row -- same pattern as `apptest_corpus_integrity.py_insert_p]] - rationale - app/test_build_corpus.py
- [[Same semantics as `ragharvester.pyArxivSource`'s own `cat` OR-clause a pape]] - rationale - app/test_build_corpus.py
- [[Tests for `app.build_corpus` -- offline, no real GPUnetworkingestprefetch sub]] - rationale - app/test_build_corpus.py
- [[_insert_paper()_1]] - code - app/test_build_corpus.py
- [[_normalize_date()]] - code - app/build_corpus.py
- [[`Config.arxiv_date_from``arxiv_date_to` accept ISO `YYYY-MM-DD` or arXiv's comp]] - rationale - app/build_corpus.py
- [[done_count()]] - code - app/build_corpus.py
- [[test_build_corpus.py]] - code - app/test_build_corpus.py
- [[test_build_to_target_default_max_idle_matches_module_constant()]] - code - app/test_build_corpus.py
- [[test_done_count_category_filter_excludes_not_yet_done_papers()]] - code - app/test_build_corpus.py
- [[test_done_count_category_filter_is_an_or_match_like_the_harvester()]] - code - app/test_build_corpus.py
- [[test_done_count_category_filter_of_missing_db_is_zero()]] - code - app/test_build_corpus.py
- [[test_done_count_combined_date_and_category_filter_requires_both()]] - code - app/test_build_corpus.py
- [[test_done_count_counts_only_done_stage()]] - code - app/test_build_corpus.py
- [[test_done_count_date_filter_accepts_compact_yyyymmdd()]] - code - app/test_build_corpus.py
- [[test_done_count_date_filter_counts_only_papers_published_in_range()]] - code - app/test_build_corpus.py
- [[test_done_count_date_filter_excludes_not_yet_done_papers()]] - code - app/test_build_corpus.py
- [[test_done_count_date_filter_of_missing_db_is_zero()]] - code - app/test_build_corpus.py
- [[test_done_count_empty_categories_list_is_treated_as_no_filter()]] - code - app/test_build_corpus.py
- [[test_done_count_of_missing_db_is_zero()]] - code - app/test_build_corpus.py
- [[test_normalize_date_converts_compact_yyyymmdd()]] - code - app/test_build_corpus.py
- [[test_normalize_date_passes_through_iso()]] - code - app/test_build_corpus.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_build_corpuspy
SORT file.name ASC
```

## Connections to other communities
- 20 edges to [[_COMMUNITY_build_to_target]]
- 11 edges to [[_COMMUNITY_ensure_prefetch_running]]
- 8 edges to [[_COMMUNITY_build_corpus.py]]
- 6 edges to [[_COMMUNITY__validate_cli_args]]
- 5 edges to [[_COMMUNITY_cached_not_done]]
- 5 edges to [[_COMMUNITY__order_by_relevance]]
- 1 edge to [[_COMMUNITY_migrate]]
- 1 edge to [[_COMMUNITY_test_orchestrator.py]]
- 1 edge to [[_COMMUNITY_test_build_to_target_calls_ensure_prefetch_exactly_once]]

## Top bridge nodes
- [[test_build_corpus.py]] - degree 72, connects to 9 communities
- [[done_count()]] - degree 17, connects to 1 community
- [[_normalize_date()]] - degree 6, connects to 1 community