---
source_file: "contracts/ingest_state.py"
type: "code"
community: "test_orchestrator.py"
location: "L51"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_orchestratorpy
---

# Checkpoint

## Connections
- [[.__init__()_29]] - `method` [EXTRACTED]
- [[.checkpoint()]] - `calls` [EXTRACTED]
- [[.get()_3]] - `references` [EXTRACTED]
- [[.get()_4]] - `references` [EXTRACTED]
- [[Chunk]] - `uses` [INFERRED]
- [[FakeIngestState]] - `uses` [INFERRED]
- [[FrozenModel]] - `uses` [INFERRED]
- [[ParsedDoc]] - `uses` [INFERRED]
- [[SqliteIngestState]] - `uses` [INFERRED]
- [[The row shape returned by `state.get(paper_id)` `stage` (the frozen `ingest_sta]] - `rationale_for` [EXTRACTED]
- [[__init__.py_4]] - `imports` [EXTRACTED]
- [[fake_ingest_state.py]] - `imports` [EXTRACTED]
- [[ingest_state.py]] - `contains` [EXTRACTED]
- [[ingest_state_sqlite.py]] - `imports` [EXTRACTED]
- [[test_checkpoint_holds_stage_and_artifacts()]] - `calls` [EXTRACTED]
- [[test_ingest_state.py]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_orchestratorpy