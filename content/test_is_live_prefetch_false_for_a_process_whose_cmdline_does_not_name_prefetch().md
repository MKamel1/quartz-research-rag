---
source_file: "app/test_build_corpus.py"
type: "code"
community: "ensure_prefetch_running"
location: "L357"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/ensure_prefetch_running
---

# test_is_live_prefetch_false_for_a_process_whose_cmdline_does_not_name_prefetch()

## Connections
- [[Guards against a recycled PID that happens to be some unrelated live process --]] - `rationale_for` [EXTRACTED]
- [[_cleanup_pid()]] - `calls` [EXTRACTED]
- [[_is_live_prefetch()]] - `calls` [EXTRACTED]
- [[test_build_corpus.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/ensure_prefetch_running