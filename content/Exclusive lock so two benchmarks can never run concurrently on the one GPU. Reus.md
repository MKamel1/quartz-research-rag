---
source_file: "app/benchmark.py"
type: "rationale"
community: "test_benchmark.py"
location: "L178"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/test_benchmarkpy
---

# Exclusive lock so two benchmarks can never run concurrently on the one GPU. Reus

## Connections
- [[acquire_gpu_lock_or_fail()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/test_benchmarkpy