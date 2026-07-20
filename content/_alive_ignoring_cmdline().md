---
source_file: "app/test_build_corpus.py"
type: "code"
community: "ensure_prefetch_running"
location: "L260"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/ensure_prefetch_running
---

# _alive_ignoring_cmdline()

## Connections
- [[Stands in for `_is_live_prefetch` in tests that spawn a harmless `sleep` process]] - `rationale_for` [EXTRACTED]
- [[test_build_corpus.py]] - `contains` [EXTRACTED]
- [[test_ensure_prefetch_running_launches_when_absent()]] - `indirect_call` [INFERRED]
- [[test_ensure_prefetch_running_replaces_a_dead_pid_file()]] - `indirect_call` [INFERRED]
- [[test_spawn_prefetch_redirects_stdout_and_stderr_to_a_dedicated_log()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/ensure_prefetch_running