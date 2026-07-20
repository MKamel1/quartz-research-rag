---
source_file: "app/test_build_corpus.py"
type: "code"
community: "ensure_prefetch_running"
location: "L298"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/ensure_prefetch_running
---

# test_ensure_prefetch_running_launches_when_absent()

## Connections
- [[_alive_ignoring_cmdline()]] - `indirect_call` [INFERRED]
- [[_cleanup_pid()]] - `calls` [EXTRACTED]
- [[_prefetch_pid_path()]] - `calls` [EXTRACTED]
- [[ensure_prefetch_running()]] - `calls` [EXTRACTED]
- [[test_build_corpus.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/ensure_prefetch_running