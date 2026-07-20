---
source_file: "rag/test_gpu_lock.py"
type: "code"
community: "assembly.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/assemblypy
---

# test_gpu_lock.py

## Connections
- [[FileGpuLock]] - `imports` [EXTRACTED]
- [[FileLock]] - `imports` [EXTRACTED]
- [[GpuLock]] - `imports` [EXTRACTED]
- [[Tests for FileGpuLock — the real GpuLock adapter. Runs in default CI no GPU, no]] - `rationale_for` [EXTRACTED]
- [[TransientError]] - `imports` [EXTRACTED]
- [[errors.py]] - `imports_from` [EXTRACTED]
- [[gpu_lock.py_1]] - `imports_from` [EXTRACTED]
- [[gpu_lock.py_2]] - `imports_from` [EXTRACTED]
- [[test_acquire_with_timeout_raises_transient_error_when_lock_is_held()]] - `contains` [EXTRACTED]
- [[test_acquire_with_timeout_succeeds_when_lock_is_free()]] - `contains` [EXTRACTED]
- [[test_acquire_without_timeout_still_blocks_forever_by_default()]] - `contains` [EXTRACTED]
- [[test_basic_enter_and_exit_is_clean()]] - `contains` [EXTRACTED]
- [[test_different_paths_do_not_contend()]] - `contains` [EXTRACTED]
- [[test_file_gpu_lock_satisfies_the_gpu_lock_protocol()]] - `contains` [EXTRACTED]
- [[test_releases_on_exception()]] - `contains` [EXTRACTED]
- [[test_two_instances_on_the_same_path_are_mutually_exclusive()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/assemblypy