---
source_file: "app/test_reembed_experiment.py"
type: "code"
community: "test_reembed_experiment.py"
location: "L102"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/test_reembed_experimentpy
---

# _FakeHeaderGenerator

## Connections
- [[.__init__()_17]] - `method` [EXTRACTED]
- [[.generate()_1]] - `method` [EXTRACTED]
- [[Anchor]] - `uses` [INFERRED]
- [[Chunk]] - `uses` [INFERRED]
- [[Deterministic header text is derived from the chunk text, so a test can assert]] - `rationale_for` [EXTRACTED]
- [[FakeEmbedder]] - `uses` [INFERRED]
- [[FakeVectorStore]] - `uses` [INFERRED]
- [[PaperRecord]] - `uses` [INFERRED]
- [[PaperRef]] - `uses` [INFERRED]
- [[ParsedDoc]] - `uses` [INFERRED]
- [[PermanentError]] - `uses` [INFERRED]
- [[ReembedError]] - `uses` [INFERRED]
- [[test_a_chunk_whose_header_generation_fails_still_gets_embedded_with_its_own_text()]] - `calls` [EXTRACTED]
- [[test_baseline_and_headered_runs_upsert_the_identical_chunk_id_set()]] - `calls` [EXTRACTED]
- [[test_headered_embed_text_starts_with_the_header_then_the_original_text()]] - `calls` [EXTRACTED]
- [[test_headers_dict_has_one_entry_per_chunk_and_is_empty_in_baseline_mode()]] - `calls` [EXTRACTED]
- [[test_reembed_experiment.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/test_reembed_experimentpy