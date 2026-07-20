---
type: community
cohesion: 0.50
members: 4
---

# env_leak_bad.py

**Cohesion:** 0.50 - moderately connected
**Members:** 4 nodes

## Members
- [[Negative-example fixture for check (d) — CONVENTIONS.md §3§12 (cichecksenv_le]] - rationale - ci/checks/negative_examples/env_leak_bad.py
- [[env_leak_bad.py]] - code - ci/checks/negative_examples/env_leak_bad.py
- [[gpu_lock_path()]] - code - ci/checks/negative_examples/env_leak_bad.py
- [[top_k_from_env()]] - code - ci/checks/negative_examples/env_leak_bad.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/env_leak_badpy
SORT file.name ASC
```
