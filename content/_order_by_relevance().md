---
source_file: "app/build_corpus.py"
type: "code"
community: "_order_by_relevance"
location: "L343"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/_order_by_relevance
---

# _order_by_relevance()

## Connections
- [[`ids` (a `cached_not_done` batch), reordered so whichever ones also appear in]] - `rationale_for` [EXTRACTED]
- [[build_corpus.py]] - `contains` [EXTRACTED]
- [[build_to_target()]] - `calls` [EXTRACTED]
- [[test_build_corpus.py]] - `imports` [EXTRACTED]
- [[test_order_by_relevance_ignores_ranked_ids_not_in_the_batch()]] - `calls` [EXTRACTED]
- [[test_order_by_relevance_is_a_reordering_not_a_filter()]] - `calls` [EXTRACTED]
- [[test_order_by_relevance_puts_ranked_ids_first_in_rank_order()]] - `calls` [EXTRACTED]
- [[test_order_by_relevance_with_no_ranked_ids_falls_back_to_sorted()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/_order_by_relevance