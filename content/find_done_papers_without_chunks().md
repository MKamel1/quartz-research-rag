---
source_file: "app/corpus_integrity.py"
type: "code"
community: "test_corpus_integrity.py"
location: "L39"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_corpus_integritypy
---

# find_done_papers_without_chunks()

## Connections
- [[Connection_1]] - `references` [EXTRACTED]
- [[Every `ingest_state='done'` paper with zero `chunks` rows andor zero `blocks` r]] - `rationale_for` [EXTRACTED]
- [[IntegrityOffender]] - `references` [EXTRACTED]
- [[corpus_integrity.py]] - `contains` [EXTRACTED]
- [[main()]] - `calls` [EXTRACTED]
- [[test_corpus_integrity.py]] - `imports` [EXTRACTED]
- [[test_flags_a_done_paper_with_blocks_but_no_chunks()]] - `calls` [EXTRACTED]
- [[test_flags_a_done_paper_with_zero_chunks_and_blocks()]] - `calls` [EXTRACTED]
- [[test_ignores_a_not_yet_done_paper_with_no_chunks()]] - `calls` [EXTRACTED]
- [[test_passes_a_healthy_done_paper()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_corpus_integritypy