---
source_file: "app/test_assembly.py"
type: "code"
community: "build_ingestion_orchestrator"
location: "L383"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/build_ingestion_orchestrator
---

# test_quarantine_sink_logs_and_does_not_raise_when_the_write_itself_fails()

## Connections
- [[TransientError]] - `calls` [EXTRACTED]
- [[_sqlite_harvest_quarantine_sink()]] - `calls` [EXTRACTED]
- [[`Harvester.harvest()`'s documented postcondition is that it never raises, which]] - `rationale_for` [EXTRACTED]
- [[test_assembly.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/build_ingestion_orchestrator