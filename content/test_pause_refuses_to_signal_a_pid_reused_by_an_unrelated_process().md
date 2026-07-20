---
source_file: "app/dashboard/test_controller.py"
type: "code"
community: "test_controller.py"
location: "L242"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/test_controllerpy
---

# test_pause_refuses_to_signal_a_pid_reused_by_an_unrelated_process()

## Connections
- [[NoRunError]] - `indirect_call` [INFERRED]
- [[Simulates PID reuse after the real spawned process exits, some other live proce]] - `rationale_for` [EXTRACTED]
- [[_fake_spawn()]] - `indirect_call` [INFERRED]
- [[test_controller.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/test_controllerpy