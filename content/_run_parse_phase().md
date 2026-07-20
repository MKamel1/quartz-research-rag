---
source_file: "app/parse_phase.py"
type: "code"
community: "test_parse_phase.py"
location: "L41"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_parse_phasepy
---

# _run_parse_phase()

## Connections
- [[Config]] - `references` [EXTRACTED]
- [[Pass 1 setup + run -- pulled out of `__main__` (same pattern as `appingest.py`']] - `rationale_for` [EXTRACTED]
- [[_shard()]] - `calls` [EXTRACTED]
- [[build_ingestion_orchestrator()]] - `calls` [EXTRACTED]
- [[harvest_refs()]] - `calls` [EXTRACTED]
- [[parse_phase.py]] - `contains` [EXTRACTED]
- [[test_parse_phase.py]] - `imports` [EXTRACTED]
- [[test_run_parse_phase_applies_shard_before_calling_parse_phase()]] - `calls` [EXTRACTED]
- [[test_run_parse_phase_uses_fetch_by_ids_when_ingest_paper_ids_set()]] - `calls` [EXTRACTED]
- [[test_run_parse_phase_uses_query_harvest_when_ingest_paper_ids_unset()]] - `calls` [EXTRACTED]
- [[test_run_parse_phase_wires_db_path_blob_dir_collection_from_config()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_parse_phasepy