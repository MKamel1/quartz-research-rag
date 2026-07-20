---
source_file: "app/dashboard/controller.py"
type: "code"
community: "NoRunError"
location: "L110"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/NoRunError
---

# DoubleRunError

## Connections
- [[Raised when startresume is refused because a run is already live (or not yet co]] - `rationale_for` [EXTRACTED]
- [[RuntimeError_3]] - `inherits` [EXTRACTED]
- [[_FakeController]] - `uses` [INFERRED]
- [[_FakeMcpServer_1]] - `uses` [INFERRED]
- [[_FakeStatus]] - `uses` [INFERRED]
- [[_resume_locked()]] - `calls` [EXTRACTED]
- [[_start_locked()]] - `calls` [EXTRACTED]
- [[controller.py]] - `contains` [EXTRACTED]
- [[test_controller.py]] - `imports` [EXTRACTED]
- [[test_resume_refuses_while_pausing_has_not_yet_confirmed_dead()]] - `indirect_call` [INFERRED]
- [[test_resume_refuses_while_run_is_still_running()]] - `indirect_call` [INFERRED]
- [[test_server.py]] - `imports` [EXTRACTED]
- [[test_start_refuses_when_a_run_is_already_running()]] - `indirect_call` [INFERRED]

#graphify/code #graphify/EXTRACTED #community/NoRunError