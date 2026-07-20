---
source_file: "app/tei_lifecycle.py"
type: "code"
community: "test_doctor.py"
location: "L43"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_doctorpy
---

# stop_tei_containers()

## Connections
- [[Best-effort stop both TEI containers so their VRAM is freed for MinerU during P]] - `rationale_for` [EXTRACTED]
- [[tei_lifecycle.py]] - `contains` [EXTRACTED]
- [[test_stop_tei_containers_is_best_effort_and_swallows_failures()]] - `calls` [EXTRACTED]
- [[test_stop_tei_containers_runs_docker_stop_with_both_container_names()]] - `calls` [EXTRACTED]
- [[test_tei_lifecycle.py]] - `imports` [EXTRACTED]
- [[verify_clean_gpu()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_doctorpy