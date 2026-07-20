---
source_file: "app/reembed_experiment.py"
type: "code"
community: "test_reembed_experiment.py"
location: "L100"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_reembed_experimentpy
---

# reembed()

## Connections
- [[.embed()]] - `calls` [EXTRACTED]
- [[.generate()]] - `calls` [EXTRACTED]
- [[.get()]] - `calls` [EXTRACTED]
- [[.upsert()]] - `calls` [EXTRACTED]
- [[ReembedError]] - `calls` [EXTRACTED]
- [[Runs one AB arm embeds and upserts every chunk of every paper in `paper_ids` i]] - `rationale_for` [EXTRACTED]
- [[VectorPayload]] - `calls` [EXTRACTED]
- [[_DocumentStore]] - `references` [EXTRACTED]
- [[_EmbedderSeam]] - `references` [EXTRACTED]
- [[_HeaderGenerator]] - `references` [EXTRACTED]
- [[_VectorStore]] - `references` [EXTRACTED]
- [[reembed_experiment.py]] - `contains` [EXTRACTED]
- [[test_a_chunk_whose_header_generation_fails_still_gets_embedded_with_its_own_text()]] - `calls` [EXTRACTED]
- [[test_baseline_and_headered_runs_upsert_the_identical_chunk_id_set()]] - `calls` [EXTRACTED]
- [[test_baseline_embed_text_equals_the_chunks_own_unmodified_text()]] - `calls` [EXTRACTED]
- [[test_headered_embed_text_starts_with_the_header_then_the_original_text()]] - `calls` [EXTRACTED]
- [[test_headers_dict_has_one_entry_per_chunk_and_is_empty_in_baseline_mode()]] - `calls` [EXTRACTED]
- [[test_reembed_experiment.py]] - `imports` [EXTRACTED]
- [[test_unknown_paper_id_raises_reembed_error()]] - `calls` [EXTRACTED]
- [[test_with_headers_true_requires_a_header_generator()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_reembed_experimentpy