---
type: community
cohesion: 0.10
members: 42
---

# AdaptiveBatchSizer

**Cohesion:** 0.10 - loosely connected
**Members:** 42 nodes

## Members
- [[.__init__()]] - code - app/adaptive_batch_sizer.py
- [[._log_decision()]] - code - app/adaptive_batch_sizer.py
- [[.next_size()]] - code - app/adaptive_batch_sizer.py
- [[A fake vram_probe that yields each value in `values` in order, then repeats the]] - rationale - app/test_adaptive_batch_sizer.py
- [[Adaptive Pass-1 batch sizing (T-DOC21, `.claudeplansgiggly-tumbling-globe.md`)]] - rationale - app/adaptive_batch_sizer.py
- [[AdaptiveBatchSizer]] - code - app/adaptive_batch_sizer.py
- [[Append one CSV row -- real, structured evidence for a post-hoc investigation of]] - rationale - app/adaptive_batch_sizer.py
- [[Path]] - code
- [[Real free-VRAM probe, via `nvidia-smi` -- stdlib `subprocess`, no vendor SDK (sa]] - rationale - app/gpu_headroom.py
- [[Real, current free VRAM in MiB on GPU 0, or `None` if it can't be determined.]] - rationale - app/gpu_headroom.py
- [[Tests for `app.adaptive_batch_sizer.AdaptiveBatchSizer` (T-DOC21) -- offline, fa]] - rationale - app/test_adaptive_batch_sizer.py
- [[Tests for `app.gpu_headroom` (T-DOC21) -- offline, no real nvidia-smiGPU calls.]] - rationale - app/test_gpu_headroom.py
- [[Three real zones, not two shrink at or below `safety_margin_mib` (danger); grow]] - rationale - app/adaptive_batch_sizer.py
- [[_fake_completed()_1]] - code - app/test_gpu_headroom.py
- [[_probe()]] - code - app/test_adaptive_batch_sizer.py
- [[`next_size()` is the whole interface -- call it once per Pass-1 batch, immediate]] - rationale - app/adaptive_batch_sizer.py
- [[adaptive_batch_sizer.py]] - code - app/adaptive_batch_sizer.py
- [[free_vram_mib()]] - code - app/gpu_headroom.py
- [[gpu_headroom.py]] - code - app/gpu_headroom.py
- [[test_adaptive_batch_sizer.py]] - code - app/test_adaptive_batch_sizer.py
- [[test_decision_log_disabled_by_default_writes_no_file()]] - code - app/test_adaptive_batch_sizer.py
- [[test_decision_log_row_records_real_values_for_each_zone()]] - code - app/test_adaptive_batch_sizer.py
- [[test_decision_log_writes_header_once_then_one_row_per_call()]] - code - app/test_adaptive_batch_sizer.py
- [[test_default_vram_probe_is_the_real_free_vram_mib()]] - code - app/test_adaptive_batch_sizer.py
- [[test_explicit_growth_threshold_overrides_the_default()]] - code - app/test_adaptive_batch_sizer.py
- [[test_free_vram_mib_invokes_the_expected_nvidia_smi_command()]] - code - app/test_gpu_headroom.py
- [[test_free_vram_mib_never_raises_logs_a_warning_on_failure()]] - code - app/test_gpu_headroom.py
- [[test_free_vram_mib_parses_real_nvidia_smi_output_shape()]] - code - app/test_gpu_headroom.py
- [[test_free_vram_mib_returns_none_on_empty_output()]] - code - app/test_gpu_headroom.py
- [[test_free_vram_mib_returns_none_on_subprocess_failure()]] - code - app/test_gpu_headroom.py
- [[test_free_vram_mib_returns_none_on_unparseable_output()]] - code - app/test_gpu_headroom.py
- [[test_gpu_headroom.py]] - code - app/test_gpu_headroom.py
- [[test_grows_by_growth_step_when_free_vram_clears_the_growth_threshold()]] - code - app/test_adaptive_batch_sizer.py
- [[test_growth_ceilings_at_max_size_independent_of_how_much_vram_is_free()]] - code - app/test_adaptive_batch_sizer.py
- [[test_growth_threshold_defaults_to_twice_the_safety_margin()]] - code - app/test_adaptive_batch_sizer.py
- [[test_holds_current_size_when_the_vram_probe_returns_none()]] - code - app/test_adaptive_batch_sizer.py
- [[test_holds_steady_in_the_comfortable_zone_between_margin_and_growth_threshold()]] - code - app/test_adaptive_batch_sizer.py
- [[test_never_grows_blind_after_a_probe_failure_even_if_a_later_reading_would_have_grown()]] - code - app/test_adaptive_batch_sizer.py
- [[test_rejects_initial_size_above_max_size()]] - code - app/test_adaptive_batch_sizer.py
- [[test_rejects_initial_size_below_min_size()]] - code - app/test_adaptive_batch_sizer.py
- [[test_shrink_floors_at_min_size()]] - code - app/test_adaptive_batch_sizer.py
- [[test_shrinks_by_half_when_free_vram_is_at_or_below_the_safety_margin()]] - code - app/test_adaptive_batch_sizer.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/AdaptiveBatchSizer
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_test_orchestrator.py]]
- 3 edges to [[_COMMUNITY__build_orchestrator_for_hook_test]]
- 3 edges to [[_COMMUNITY_PaperRecord]]
- 2 edges to [[_COMMUNITY_assembly.py]]
- 2 edges to [[_COMMUNITY__StubOrchestrator]]
- 2 edges to [[_COMMUNITY_ParsedDoc]]
- 2 edges to [[_COMMUNITY_test_doctor.py]]
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY_build_ingestion_orchestrator]]
- 1 edge to [[_COMMUNITY_PaperRef]]
- 1 edge to [[_COMMUNITY_test_assembly.py]]
- 1 edge to [[_COMMUNITY_harvest_refs]]
- 1 edge to [[_COMMUNITY_Anchor]]

## Top bridge nodes
- [[AdaptiveBatchSizer]] - degree 43, connects to 11 communities
- [[adaptive_batch_sizer.py]] - degree 7, connects to 2 communities
- [[free_vram_mib()]] - degree 12, connects to 1 community
- [[gpu_headroom.py]] - degree 5, connects to 1 community