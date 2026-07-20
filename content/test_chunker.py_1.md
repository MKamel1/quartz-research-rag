---
source_file: "rag/test_chunker.py"
type: "code"
community: "test_chunker.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_chunkerpy
---

# test_chunker.py

## Connections
- [[Block]] - `imports` [EXTRACTED]
- [[Config]] - `imports` [EXTRACTED]
- [[ParsedDoc]] - `imports` [EXTRACTED]
- [[_block()]] - `contains` [EXTRACTED]
- [[_chunk()]] - `contains` [EXTRACTED]
- [[_config()]] - `contains` [EXTRACTED]
- [[_long_prose_block()]] - `contains` [EXTRACTED]
- [[_parsed_doc()_1]] - `contains` [EXTRACTED]
- [[_sentinel_prose_block()]] - `contains` [EXTRACTED]
- [[config.py]] - `imports_from` [EXTRACTED]
- [[parser.py]] - `imports_from` [EXTRACTED]
- [[provenance.py]] - `imports_from` [EXTRACTED]
- [[test_borrowed_equation_kept_whole_primary_copy_keeps_prose()]] - `contains` [EXTRACTED]
- [[test_chunk_ids_stay_sequential_and_unique_with_overlap()]] - `contains` [EXTRACTED]
- [[test_chunk_section_path_is_the_anchoring_blocks_section_path()]] - `contains` [EXTRACTED]
- [[test_chunk_text_is_prefixed_with_title_and_section_path_before_the_body()]] - `contains` [EXTRACTED]
- [[test_chunks_are_emitted_and_ids_are_unique()]] - `contains` [EXTRACTED]
- [[test_code_block_is_never_emitted_stripped_of_context()]] - `contains` [EXTRACTED]
- [[test_contextual_header_is_none_for_every_chunk()]] - `contains` [EXTRACTED]
- [[test_equation_is_never_emitted_stripped_of_its_prose_context()]] - `contains` [EXTRACTED]
- [[test_every_chunk_anchor_is_grounded_in_a_real_source_block()]] - `contains` [EXTRACTED]
- [[test_expansion_off_splits_each_block_into_its_own_chunk()]] - `contains` [EXTRACTED]
- [[test_first_split_sub_chunk_has_no_overlap()]] - `contains` [EXTRACTED]
- [[test_heading_first_block_is_not_duplicated_in_chunk_text()]] - `contains` [EXTRACTED]
- [[test_multi_block_chunk_anchors_to_the_first_block_in_the_group()]] - `contains` [EXTRACTED]
- [[test_no_overlap_across_section_boundaries()]] - `contains` [EXTRACTED]
- [[test_overlap_does_not_move_anchor_or_parent_id()]] - `contains` [EXTRACTED]
- [[test_overlap_inert_under_expansion_off()]] - `contains` [EXTRACTED]
- [[test_overlap_skipped_when_preceding_block_exceeds_threshold()]] - `contains` [EXTRACTED]
- [[test_oversized_section_is_split_into_multiple_chunks()]] - `contains` [EXTRACTED]
- [[test_oversized_section_split_still_keeps_equation_glued_to_its_prose()]] - `contains` [EXTRACTED]
- [[test_parent_id_equals_anchor_block_id_by_construction()]] - `contains` [EXTRACTED]
- [[test_parent_id_is_always_a_resolvable_block_id_never_a_chunk_id()]] - `contains` [EXTRACTED]
- [[test_prose_first_block_chunk_text_is_unchanged_by_heading_dedup()]] - `contains` [EXTRACTED]
- [[test_section_within_the_cap_is_not_split()]] - `contains` [EXTRACTED]
- [[test_single_block_bigger_than_the_cap_is_still_emitted_whole()]] - `contains` [EXTRACTED]
- [[test_split_sub_chunk_borrows_preceding_blocks_last_block()]] - `contains` [EXTRACTED]
- [[test_split_sub_chunks_anchor_to_their_own_first_block_not_the_sections_first_block()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_chunkerpy