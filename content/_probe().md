---
source_file: "app/test_adaptive_batch_sizer.py"
type: "code"
community: "AdaptiveBatchSizer"
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/AdaptiveBatchSizer
---

# _probe()

## Connections
- [[A fake vram_probe that yields each value in `values` in order, then repeats the]] - `rationale_for` [EXTRACTED]
- [[test_adaptive_batch_sizer.py]] - `contains` [EXTRACTED]
- [[test_decision_log_disabled_by_default_writes_no_file()]] - `calls` [EXTRACTED]
- [[test_decision_log_row_records_real_values_for_each_zone()]] - `calls` [EXTRACTED]
- [[test_decision_log_writes_header_once_then_one_row_per_call()]] - `calls` [EXTRACTED]
- [[test_explicit_growth_threshold_overrides_the_default()]] - `calls` [EXTRACTED]
- [[test_grows_by_growth_step_when_free_vram_clears_the_growth_threshold()]] - `calls` [EXTRACTED]
- [[test_growth_ceilings_at_max_size_independent_of_how_much_vram_is_free()]] - `calls` [EXTRACTED]
- [[test_growth_threshold_defaults_to_twice_the_safety_margin()]] - `calls` [EXTRACTED]
- [[test_holds_current_size_when_the_vram_probe_returns_none()]] - `calls` [EXTRACTED]
- [[test_holds_steady_in_the_comfortable_zone_between_margin_and_growth_threshold()]] - `calls` [EXTRACTED]
- [[test_never_grows_blind_after_a_probe_failure_even_if_a_later_reading_would_have_grown()]] - `calls` [EXTRACTED]
- [[test_shrink_floors_at_min_size()]] - `calls` [EXTRACTED]
- [[test_shrinks_by_half_when_free_vram_is_at_or_below_the_safety_margin()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/AdaptiveBatchSizer