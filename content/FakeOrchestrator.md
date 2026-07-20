---
source_file: "app/test_parse_phase.py"
type: "code"
community: "test_parse_phase.py"
location: "L19"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_parse_phasepy
---

# FakeOrchestrator

## Connections
- [[.__init__()_14]] - `method` [EXTRACTED]
- [[.harvest()_2]] - `method` [EXTRACTED]
- [[.parse_phase()]] - `method` [EXTRACTED]
- [[Config]] - `uses` [INFERRED]
- [[PaperRef]] - `uses` [INFERRED]
- [[test_parse_phase.py]] - `contains` [EXTRACTED]
- [[test_run_parse_phase_applies_shard_before_calling_parse_phase()]] - `calls` [EXTRACTED]
- [[test_run_parse_phase_uses_fetch_by_ids_when_ingest_paper_ids_set()]] - `calls` [EXTRACTED]
- [[test_run_parse_phase_uses_query_harvest_when_ingest_paper_ids_unset()]] - `calls` [EXTRACTED]
- [[test_run_parse_phase_wires_db_path_blob_dir_collection_from_config()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_parse_phasepy