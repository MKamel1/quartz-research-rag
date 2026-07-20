---
type: community
cohesion: 0.15
members: 13
---

# _seed

**Cohesion:** 0.15 - loosely connected
**Members:** 13 nodes

## Members
- [[OG-44 `quarantine` is an append-only dead-letter log, never reconciled -- a pap]] - rationale - app/dashboard/test_status.py
- [[The common case (every quarantine row has a matching diagnostics row, as `_seed`]] - rationale - app/dashboard/test_status.py
- [[The exact run-3995 smoking gun 809 all-time done, ZERO of them since this run s]] - rationale - app/dashboard/test_status.py
- [[_seed()]] - code - app/dashboard/test_status.py
- [[`quarantine_diagnostics` (T-DOC17PR 83) postdates `quarantine` itself -- a pap]] - rationale - app/dashboard/test_status.py
- [[`stage_counts` {stage n} -- writes n distinct paper_ids at that stage.     `qu]] - rationale - app/dashboard/test_status.py
- [[ingest_state holds each paper's CURRENT stage only -- a paper at 'chunked' has a]] - rationale - app/dashboard/test_status.py
- [[test_read_corpus_excludes_quarantined_papers_that_later_succeeded()]] - code - app/dashboard/test_status.py
- [[test_read_corpus_funnel_is_cumulative_from_current_stage()]] - code - app/dashboard/test_status.py
- [[test_read_corpus_quarantine_reasons_grouped_and_sorted()]] - code - app/dashboard/test_status.py
- [[test_read_corpus_quarantine_reasons_omits_unknown_bucket_when_fully_diagnosed()]] - code - app/dashboard/test_status.py
- [[test_read_corpus_quarantine_reasons_surfaces_an_unknown_bucket_for_pre_diagnostics_rows()]] - code - app/dashboard/test_status.py
- [[test_read_telemetry_rate_is_none_when_zero_completions_since_started_at()]] - code - app/dashboard/test_status.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_seed
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_test_status.py]]
- 7 edges to [[_COMMUNITY__mark_done]]

## Top bridge nodes
- [[_seed()]] - degree 13, connects to 2 communities
- [[test_read_corpus_excludes_quarantined_papers_that_later_succeeded()]] - degree 4, connects to 2 communities
- [[test_read_telemetry_rate_is_none_when_zero_completions_since_started_at()]] - degree 4, connects to 2 communities
- [[test_read_corpus_funnel_is_cumulative_from_current_stage()]] - degree 3, connects to 1 community
- [[test_read_corpus_quarantine_reasons_omits_unknown_bucket_when_fully_diagnosed()]] - degree 3, connects to 1 community