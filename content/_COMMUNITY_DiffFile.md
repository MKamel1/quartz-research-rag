---
type: community
cohesion: 0.15
members: 30
---

# DiffFile

**Cohesion:** 0.15 - loosely connected
**Members:** 30 nodes

## Members
- [[.__str__()_1]] - code - ci/checks/model.py
- [[CONVENTIONS.md §12's nine PR-checklist items, mechanized (T-F6, WORK-BREAKDOWN.m]] - rationale - ci/checks/__init__.py
- [[Check (a) — CONVENTIONS.md §1  §12 a vendor SDK name may appear only inside it]] - rationale - ci/checks/vendor_isolation.py
- [[Check (b) — CONVENTIONS.md §0.2  §12 a diff must not define a type whose name]] - rationale - ci/checks/contract_shadowing.py
- [[Check (c) — CONVENTIONS.md §4  §12 no `except Exception` and no bare `except]] - rationale - ci/checks/blind_except.py
- [[Check (d) — CONVENTIONS.md §3  §12 no `os.getenv``os.environ` outside `ragco]] - rationale - ci/checks/env_leak.py
- [[Check (f) — CONVENTIONS.md §6  §12 a real `Embedder``Summarizer``Reranker` a]] - rationale - ci/checks/gpu_lock.py
- [[Check (g) — CONVENTIONS.md §0.7  §12 every module source file under `rag``co]] - rationale - ci/checks/sibling_tests.py
- [[Check (h) — CONVENTIONS.md §0.8  §12 no manual slicingparsing of the `.id` st]] - rationale - ci/checks/id_slicing.py
- [[DiffFile]] - code - ci/checks/model.py
- [[If `path` is a deleted `test_name.py` in `rag``contracts` scope whose sibling]] - rationale - ci/checks/sibling_tests.py
- [[One file's worth of input a check can look at.      `path` is the repo-relative]] - rationale - ci/checks/model.py
- [[One thing a check found wrong. `check` is the short id (e.g. a, gpu_lock) so]] - rationale - ci/checks/model.py
- [[Path_24]] - code
- [[The shared vocabulary every check in this package speaks `Violation` (a check's]] - rationale - ci/checks/model.py
- [[VendorRule]] - code - ci/checks/vendor_isolation.py
- [[Violation]] - code - ci/checks/model.py
- [[__init__.py_3]] - code - ci/checks/__init__.py
- [[_in_scope()]] - code - ci/checks/sibling_tests.py
- [[_surviving_module_for_deleted_test()]] - code - ci/checks/sibling_tests.py
- [[blind_except.py]] - code - ci/checks/blind_except.py
- [[check_a()]] - code - ci/checks/vendor_isolation.py
- [[contract_shadowing.py]] - code - ci/checks/contract_shadowing.py
- [[env_leak.py]] - code - ci/checks/env_leak.py
- [[gpu_lock.py]] - code - ci/checks/gpu_lock.py
- [[id_slicing.py]] - code - ci/checks/id_slicing.py
- [[in_pipeline_scope()]] - code - ci/checks/model.py
- [[model.py]] - code - ci/checks/model.py
- [[sibling_tests.py]] - code - ci/checks/sibling_tests.py
- [[vendor_isolation.py]] - code - ci/checks/vendor_isolation.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/DiffFile
SORT file.name ASC
```

## Connections to other communities
- 32 edges to [[_COMMUNITY_test_checks.py]]
- 6 edges to [[_COMMUNITY_run_enforcement.py]]
- 6 edges to [[_COMMUNITY_check_e]]
- 5 edges to [[_COMMUNITY_check_b]]
- 3 edges to [[_COMMUNITY_test_diff.py]]
- 2 edges to [[_COMMUNITY__find_init]]
- 1 edge to [[_COMMUNITY__sanctioned_line_range]]
- 1 edge to [[_COMMUNITY_ADR-06 PDF parsing — MinerUMarker + GROBID]]

## Top bridge nodes
- [[__init__.py_3]] - degree 22, connects to 4 communities
- [[Violation]] - degree 22, connects to 4 communities
- [[DiffFile]] - degree 23, connects to 3 communities
- [[model.py]] - degree 15, connects to 3 communities
- [[check_a()]] - degree 11, connects to 2 communities