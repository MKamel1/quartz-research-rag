---
type: community
cohesion: 0.30
members: 15
---

# test_corpus_integrity.py

**Cohesion:** 0.30 - loosely connected
**Members:** 15 nodes

## Members
- [[Connection_1]] - code
- [[Every `ingest_state='done'` paper with zero `chunks` rows andor zero `blocks` r]] - rationale - app/corpus_integrity.py
- [[IntegrityOffender]] - code - app/corpus_integrity.py
- [[Tests for `app.corpus_integrity` (T-DOC35) -- synthetic in-memory-equivalent SQL]] - rationale - app/test_corpus_integrity.py
- [[_db()]] - code - app/test_corpus_integrity.py
- [[_insert_paper()]] - code - app/test_corpus_integrity.py
- [[`python -m app.corpus_integrity` -- standing corpus-integrity diagnostic (T-DOC3]] - rationale - app/corpus_integrity.py
- [[corpus_integrity.py]] - code - app/corpus_integrity.py
- [[find_done_papers_without_chunks()]] - code - app/corpus_integrity.py
- [[main()]] - code - app/corpus_integrity.py
- [[test_corpus_integrity.py]] - code - app/test_corpus_integrity.py
- [[test_flags_a_done_paper_with_blocks_but_no_chunks()]] - code - app/test_corpus_integrity.py
- [[test_flags_a_done_paper_with_zero_chunks_and_blocks()]] - code - app/test_corpus_integrity.py
- [[test_ignores_a_not_yet_done_paper_with_no_chunks()]] - code - app/test_corpus_integrity.py
- [[test_passes_a_healthy_done_paper()]] - code - app/test_corpus_integrity.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_corpus_integritypy
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_migrate]]
- 2 edges to [[_COMMUNITY_load_config]]

## Top bridge nodes
- [[test_corpus_integrity.py]] - degree 12, connects to 1 community
- [[corpus_integrity.py]] - degree 6, connects to 1 community
- [[_db()]] - degree 6, connects to 1 community
- [[main()]] - degree 3, connects to 1 community