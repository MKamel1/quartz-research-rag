---
source_file: "app/dashboard/test_status.py"
type: "code"
community: "_mark_done"
location: "L44"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/_mark_done
---

# _mark_done()

## Connections
- [[Flips one existing `paper_id` to `stage='done'` -- used to simulate quarantined]] - `rationale_for` [EXTRACTED]
- [[test_count_done_since_scopes_by_updated_at()]] - `calls` [EXTRACTED]
- [[test_read_corpus_excludes_quarantined_papers_that_later_succeeded()]] - `calls` [EXTRACTED]
- [[test_read_telemetry_eta_is_none_when_target_already_reached()]] - `calls` [EXTRACTED]
- [[test_read_telemetry_eta_scopes_rate_per_run_but_remaining_off_total_done()]] - `calls` [EXTRACTED]
- [[test_read_telemetry_rate_is_none_when_elapsed_too_small()]] - `calls` [EXTRACTED]
- [[test_read_telemetry_rate_is_scoped_to_this_run_not_alltime_cumulative()]] - `calls` [EXTRACTED]
- [[test_status.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/_mark_done