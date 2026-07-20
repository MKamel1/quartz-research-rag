---
source_file: "app/dashboard/controller.py"
type: "code"
community: "NoRunError"
location: "L115"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/NoRunError
---

# NoRunError

## Connections
- [[.stop()_1]] - `calls` [EXTRACTED]
- [[Raised when pauseresumestop is asked to act on a run that doesn't exist.]] - `rationale_for` [EXTRACTED]
- [[RuntimeError_3]] - `inherits` [EXTRACTED]
- [[_FakeController]] - `uses` [INFERRED]
- [[_FakeMcpServer_1]] - `uses` [INFERRED]
- [[_FakeStatus]] - `uses` [INFERRED]
- [[_pause_locked()]] - `calls` [EXTRACTED]
- [[_resume_locked()]] - `calls` [EXTRACTED]
- [[_stop_locked()]] - `calls` [EXTRACTED]
- [[controller.py]] - `contains` [EXTRACTED]
- [[test_controller.py]] - `imports` [EXTRACTED]
- [[test_pause_refuses_to_signal_a_pid_reused_by_an_unrelated_process()]] - `indirect_call` [INFERRED]
- [[test_pause_with_no_running_run_raises()]] - `indirect_call` [INFERRED]
- [[test_resume_with_no_manifest_raises()]] - `indirect_call` [INFERRED]
- [[test_server.py]] - `imports` [EXTRACTED]
- [[test_stop_with_no_running_run_raises()]] - `indirect_call` [INFERRED]

#graphify/code #graphify/EXTRACTED #community/NoRunError