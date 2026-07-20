---
source_file: "rag/summarizer.py"
type: "code"
community: "test_summarizer.py"
location: "L77"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_summarizerpy
---

# _fit_for_summarization()

## Connections
- [[.summarize()_1]] - `calls` [EXTRACTED]
- [[Drops low-value sections, then truncates further if the paper still doesn't fit]] - `rationale_for` [EXTRACTED]
- [[summarizer.py]] - `contains` [EXTRACTED]
- [[test_fit_for_summarization_drops_appendix_section()]] - `calls` [EXTRACTED]
- [[test_fit_for_summarization_drops_references_section()]] - `calls` [EXTRACTED]
- [[test_fit_for_summarization_num_ctx_scales_with_length_within_bounds()]] - `calls` [EXTRACTED]
- [[test_fit_for_summarization_truncates_and_clamps_for_huge_input()]] - `calls` [EXTRACTED]
- [[test_summarizer.py]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_summarizerpy