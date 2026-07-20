---
source_file: "rag/fakes/test_fake_gpu_lock.py"
type: "code"
community: "FakeGpuLock"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/FakeGpuLock
---

# test_fake_gpu_lock.py

## Connections
- [[FakeGpuLock]] - `imports` [EXTRACTED]
- [[GpuLock]] - `imports` [EXTRACTED]
- [[Tests for FakeGpuLock (T-F4) — no-op context manager behavior and `.acquired` re]] - `rationale_for` [EXTRACTED]
- [[fake_gpu_lock.py]] - `imports_from` [EXTRACTED]
- [[gpu_lock.py_1]] - `imports_from` [EXTRACTED]
- [[test_acquire_records_stage_in_acquired()]] - `contains` [EXTRACTED]
- [[test_acquire_yields_a_context_manager_that_does_not_block_or_error()]] - `contains` [EXTRACTED]
- [[test_context_manager_still_releases_on_exception()]] - `contains` [EXTRACTED]
- [[test_nested_acquires_all_record_correctly()]] - `contains` [EXTRACTED]
- [[test_satisfies_the_gpu_lock_protocol()]] - `contains` [EXTRACTED]
- [[test_sequential_acquires_all_record_correctly()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/FakeGpuLock