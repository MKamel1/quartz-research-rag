---
type: community
cohesion: 1.00
members: 2
---

# test_read_downloader_tails_its_own_dedicated_log_for_the_latest_pace_line

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[`_PREFETCH_LOG_NAME` (`prefetch.log`), not the shared run log -- T-DOCn a sha]] - rationale - app/dashboard/test_status.py
- [[test_read_downloader_tails_its_own_dedicated_log_for_the_latest_pace_line()]] - code - app/dashboard/test_status.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_read_downloader_tails_its_own_dedicated_log_for_the_latest_pace_line
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_test_status.py]]

## Top bridge nodes
- [[test_read_downloader_tails_its_own_dedicated_log_for_the_latest_pace_line()]] - degree 2, connects to 1 community