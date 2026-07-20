---
type: community
cohesion: 0.33
members: 6
---

# _FakeHTTPResponse

**Cohesion:** 0.33 - loosely connected
**Members:** 6 nodes

## Members
- [[.__enter__()_1]] - code - ci/checks/test_checks.py
- [[.__exit__()_1]] - code - ci/checks/test_checks.py
- [[.__init__()_28]] - code - ci/checks/test_checks.py
- [[.read()_1]] - code - ci/checks/test_checks.py
- [[Just enough of `http.client.HTTPResponse` for `_fetch_live_labels`' `with ... as]] - rationale - ci/checks/test_checks.py
- [[_FakeHTTPResponse]] - code - ci/checks/test_checks.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_FakeHTTPResponse
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_test_checks.py]]

## Top bridge nodes
- [[_FakeHTTPResponse]] - degree 6, connects to 1 community