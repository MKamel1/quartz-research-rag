---
source_file: "app/build_corpus.py"
type: "code"
community: "test_build_corpus.py"
location: "L100"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_build_corpuspy
---

# _normalize_date()

## Connections
- [[`Config.arxiv_date_from``arxiv_date_to` accept ISO `YYYY-MM-DD` or arXiv's comp]] - `rationale_for` [EXTRACTED]
- [[build_corpus.py]] - `contains` [EXTRACTED]
- [[done_count()]] - `calls` [EXTRACTED]
- [[test_build_corpus.py]] - `imports` [EXTRACTED]
- [[test_normalize_date_converts_compact_yyyymmdd()]] - `calls` [EXTRACTED]
- [[test_normalize_date_passes_through_iso()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_build_corpuspy