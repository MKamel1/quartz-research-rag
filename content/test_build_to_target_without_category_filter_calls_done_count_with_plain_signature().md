---
source_file: "app/test_build_corpus.py"
type: "code"
community: "build_to_target"
location: "L801"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/build_to_target
---

# test_build_to_target_without_category_filter_calls_done_count_with_plain_signature()

## Connections
- [[Default (no filters at all) must still call `done_count(db_path)` with no kwargs]] - `rationale_for` [EXTRACTED]
- [[_fake_ensure_prefetch()]] - `calls` [EXTRACTED]
- [[build_to_target()]] - `calls` [EXTRACTED]
- [[test_build_corpus.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/build_to_target