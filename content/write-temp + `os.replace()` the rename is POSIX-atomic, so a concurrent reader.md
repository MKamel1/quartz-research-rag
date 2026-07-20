---
source_file: "app/dashboard/controller.py"
type: "rationale"
community: "controller.py"
location: "L143"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/controllerpy
---

# write-temp + `os.replace()`: the rename is POSIX-atomic, so a concurrent reader

## Connections
- [[_write_manifest()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/controllerpy