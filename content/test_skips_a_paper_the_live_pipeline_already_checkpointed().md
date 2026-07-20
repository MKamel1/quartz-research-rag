---
source_file: "app/test_prefetch_pdfs.py"
type: "code"
community: "test_prefetch_pdfs.py"
location: "L83"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_prefetch_pdfspy
---

# test_skips_a_paper_the_live_pipeline_already_checkpointed()

## Connections
- [[A paper already at ANY ingest_state stage (simulating the live fused-download-pa]] - `rationale_for` [EXTRACTED]
- [[SqliteIngestState]] - `calls` [EXTRACTED]
- [[StubHarvester_1]] - `calls` [EXTRACTED]
- [[_cfg()_2]] - `calls` [EXTRACTED]
- [[_make_ref()_2]] - `calls` [EXTRACTED]
- [[_mock_client()]] - `calls` [EXTRACTED]
- [[_no_sleep()]] - `indirect_call` [INFERRED]
- [[migrate()]] - `calls` [EXTRACTED]
- [[run()]] - `calls` [EXTRACTED]
- [[test_prefetch_pdfs.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_prefetch_pdfspy