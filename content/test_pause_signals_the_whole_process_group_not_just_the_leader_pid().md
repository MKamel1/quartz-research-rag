---
source_file: "app/dashboard/test_controller.py"
type: "code"
community: "test_controller.py"
location: "L104"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_controllerpy
---

# test_pause_signals_the_whole_process_group_not_just_the_leader_pid()

## Connections
- [[_cleanup()]] - `calls` [EXTRACTED]
- [[_fake_spawn()]] - `indirect_call` [INFERRED]
- [[`start_new_session=True` at spawn makes the leader its own process-group leader]] - `rationale_for` [EXTRACTED]
- [[test_controller.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_controllerpy