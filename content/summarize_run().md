---
source_file: "app/telemetry.py"
type: "code"
community: "summarize_run"
location: "L295"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/summarize_run
---

# summarize_run()

## Connections
- [[.finish()]] - `calls` [EXTRACTED]
- [[Builds one `RunSummary` from `ingest_state``quarantine``quarantine_diagnostics]] - `rationale_for` [EXTRACTED]
- [[GpuSample_1]] - `references` [EXTRACTED]
- [[RunSummary]] - `references` [EXTRACTED]
- [[summarize_by_stage()]] - `calls` [EXTRACTED]
- [[telemetry.py]] - `contains` [EXTRACTED]
- [[test_run_summary_format_includes_key_fields()]] - `calls` [EXTRACTED]
- [[test_summarize_run_consistent_when_vector_store_has_points_for_done_papers()]] - `calls` [EXTRACTED]
- [[test_summarize_run_counts_done_and_quarantined_with_reasons()]] - `calls` [EXTRACTED]
- [[test_summarize_run_flags_mismatch_when_done_papers_have_zero_points()]] - `calls` [EXTRACTED]
- [[test_summarize_run_survives_a_missing_database()]] - `calls` [EXTRACTED]
- [[test_summarize_run_unknown_when_vector_store_probe_fails()]] - `calls` [EXTRACTED]
- [[test_summarize_run_zero_wall_clock_never_divides_by_zero()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/summarize_run