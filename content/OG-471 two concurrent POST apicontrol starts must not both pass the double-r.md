---
source_file: "app/dashboard/test_controller.py"
type: "rationale"
community: "test_controller.py"
location: "L941"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/test_controllerpy
---

# OG-47#1: two concurrent POST /api/control starts must not both pass the double-r

## Connections
- [[test_concurrent_starts_are_serialized_exactly_one_run()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/test_controllerpy