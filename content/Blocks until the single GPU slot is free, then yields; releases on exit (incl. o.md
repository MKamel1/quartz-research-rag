---
source_file: "contracts/gpu_lock.py"
type: "rationale"
community: "GpuLock"
location: "L26"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/GpuLock
---

# Blocks until the single GPU slot is free, then yields; releases on exit (incl. o

## Connections
- [[.acquire()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/GpuLock