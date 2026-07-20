---
source_file: "app/test_build_corpus.py"
type: "rationale"
community: "ensure_prefetch_running"
location: "L358"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/ensure_prefetch_running
---

# Guards against a recycled PID that happens to be some unrelated live process --

## Connections
- [[test_is_live_prefetch_false_for_a_process_whose_cmdline_does_not_name_prefetch()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/ensure_prefetch_running