---
source_file: "app/test_prefetch_pdfs.py"
type: "code"
community: "test_prefetch_pdfs.py"
location: "L212"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_prefetch_pdfspy
---

# test_restart_never_redownloads_a_file_already_on_disk()

## Connections
- [[A `.pdf` already present (e.g. from a pass that downloaded it but got killed bef]] - `rationale_for` [EXTRACTED]
- [[StubHarvester_1]] - `calls` [EXTRACTED]
- [[_cached_count()]] - `calls` [EXTRACTED]
- [[_cfg()_2]] - `calls` [EXTRACTED]
- [[_make_ref()_2]] - `calls` [EXTRACTED]
- [[_mock_client()]] - `calls` [EXTRACTED]
- [[_no_sleep()]] - `indirect_call` [INFERRED]
- [[migrate()]] - `calls` [EXTRACTED]
- [[run()]] - `calls` [EXTRACTED]
- [[test_prefetch_pdfs.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_prefetch_pdfspy