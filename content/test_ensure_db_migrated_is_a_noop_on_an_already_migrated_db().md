---
source_file: "app/test_ingest.py"
type: "code"
community: "test_ingest.py"
location: "L354"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_ingestpy
---

# test_ensure_db_migrated_is_a_noop_on_an_already_migrated_db()

## Connections
- [[.path()]] - `indirect_call` [INFERRED]
- [[Calling this on every startup must never re-run `migrate()` against an already-m]] - `rationale_for` [EXTRACTED]
- [[migrate()]] - `calls` [EXTRACTED]
- [[test_ingest.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_ingestpy