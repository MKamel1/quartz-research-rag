---
source_file: "app/test_assembly.py"
type: "code"
community: "harvest_refs"
location: "L983"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/harvest_refs
---

# test_harvest_refs_empty_pdf_cache_dir_disables_the_cache_check()

## Connections
- [[Config]] - `calls` [EXTRACTED]
- [[_StubArxivSource]] - `calls` [EXTRACTED]
- [[_make_ref()]] - `calls` [EXTRACTED]
- [[_write_cached_ref()]] - `calls` [EXTRACTED]
- [[`config.pdf_cache_dir = ` (T-DOC29's documented explicitly disabled sentinel]] - `rationale_for` [EXTRACTED]
- [[harvest_refs()]] - `calls` [EXTRACTED]
- [[test_assembly.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/harvest_refs