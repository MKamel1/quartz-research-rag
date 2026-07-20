---
type: community
cohesion: 0.29
members: 10
---

# prefetch_loop

**Cohesion:** 0.29 - loosely connected
**Members:** 10 nodes

## Members
- [[A pass that finds new papers, even if the corpus is still below target afterward]] - rationale - app/test_prefetch_pdfs.py
- [[The harvest-then-download-then-maybe-sleep loop `main()` runs forever. Pulled ou]] - rationale - app/prefetch_pdfs.py
- [[_loop_cfg()]] - code - app/test_prefetch_pdfs.py
- [[`max_idle=None` (the default -- `--max-idle` absent) must never stop the loop on]] - rationale - app/test_prefetch_pdfs.py
- [[prefetch_loop()]] - code - app/prefetch_pdfs.py
- [[test_prefetch_loop_default_max_idle_is_unbounded_matching_pre_t_doc50_behavior()]] - code - app/test_prefetch_pdfs.py
- [[test_prefetch_loop_idle_counter_resets_on_any_pass_with_progress()]] - code - app/test_prefetch_pdfs.py
- [[test_prefetch_loop_reports_a_loud_stall_line_and_sleeps_before_the_next_pass()]] - code - app/test_prefetch_pdfs.py
- [[test_prefetch_loop_stops_with_a_terminal_message_after_max_idle_passes()]] - code - app/test_prefetch_pdfs.py
- [[test_target_reached_line_is_logged_via_prefetch_loop()]] - code - app/test_prefetch_pdfs.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/prefetch_loop
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_test_prefetch_pdfs.py]]
- 3 edges to [[_COMMUNITY_prefetch_pdfs.py]]
- 2 edges to [[_COMMUNITY_Config]]

## Top bridge nodes
- [[prefetch_loop()]] - degree 12, connects to 3 communities
- [[_loop_cfg()]] - degree 7, connects to 2 communities
- [[test_prefetch_loop_default_max_idle_is_unbounded_matching_pre_t_doc50_behavior()]] - degree 4, connects to 1 community
- [[test_prefetch_loop_idle_counter_resets_on_any_pass_with_progress()]] - degree 4, connects to 1 community
- [[test_prefetch_loop_reports_a_loud_stall_line_and_sleeps_before_the_next_pass()]] - degree 3, connects to 1 community