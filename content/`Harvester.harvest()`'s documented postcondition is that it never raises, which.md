---
source_file: "app/test_assembly.py"
type: "rationale"
community: "build_ingestion_orchestrator"
location: "L384"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/build_ingestion_orchestrator
---

# `Harvester.harvest()`'s documented postcondition is that it never raises, which

## Connections
- [[test_quarantine_sink_logs_and_does_not_raise_when_the_write_itself_fails()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/build_ingestion_orchestrator