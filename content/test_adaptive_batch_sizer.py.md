---
source_file: "app/test_adaptive_batch_sizer.py"
type: "code"
community: "AdaptiveBatchSizer"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/AdaptiveBatchSizer
---

# test_adaptive_batch_sizer.py

## Connections
- [[AdaptiveBatchSizer]] - `imports` [EXTRACTED]
- [[Tests for `app.adaptive_batch_sizer.AdaptiveBatchSizer` (T-DOC21) -- offline, fa]] - `rationale_for` [EXTRACTED]
- [[_probe()]] - `contains` [EXTRACTED]
- [[adaptive_batch_sizer.py]] - `imports_from` [EXTRACTED]
- [[free_vram_mib()]] - `imports` [EXTRACTED]
- [[test_decision_log_disabled_by_default_writes_no_file()]] - `contains` [EXTRACTED]
- [[test_decision_log_row_records_real_values_for_each_zone()]] - `contains` [EXTRACTED]
- [[test_decision_log_writes_header_once_then_one_row_per_call()]] - `contains` [EXTRACTED]
- [[test_default_vram_probe_is_the_real_free_vram_mib()]] - `contains` [EXTRACTED]
- [[test_explicit_growth_threshold_overrides_the_default()]] - `contains` [EXTRACTED]
- [[test_grows_by_growth_step_when_free_vram_clears_the_growth_threshold()]] - `contains` [EXTRACTED]
- [[test_growth_ceilings_at_max_size_independent_of_how_much_vram_is_free()]] - `contains` [EXTRACTED]
- [[test_growth_threshold_defaults_to_twice_the_safety_margin()]] - `contains` [EXTRACTED]
- [[test_holds_current_size_when_the_vram_probe_returns_none()]] - `contains` [EXTRACTED]
- [[test_holds_steady_in_the_comfortable_zone_between_margin_and_growth_threshold()]] - `contains` [EXTRACTED]
- [[test_never_grows_blind_after_a_probe_failure_even_if_a_later_reading_would_have_grown()]] - `contains` [EXTRACTED]
- [[test_rejects_initial_size_above_max_size()]] - `contains` [EXTRACTED]
- [[test_rejects_initial_size_below_min_size()]] - `contains` [EXTRACTED]
- [[test_shrink_floors_at_min_size()]] - `contains` [EXTRACTED]
- [[test_shrinks_by_half_when_free_vram_is_at_or_below_the_safety_margin()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/AdaptiveBatchSizer