---
type: community
cohesion: 0.18
members: 34
---

# test_chunker.py

**Cohesion:** 0.18 - loosely connected
**Members:** 34 nodes

## Members
- [[A `ParsedDoc` whose Method section pairs a prose block (b0) with an equation blo]] - rationale - rag/test_chunker.py
- [[_block()]] - code - rag/test_chunker.py
- [[_chunk()]] - code - rag/test_chunker.py
- [[_config()]] - code - rag/test_chunker.py
- [[_long_prose_block()]] - code - rag/test_chunker.py
- [[_parsed_doc()_1]] - code - rag/test_chunker.py
- [[_sentinel_prose_block()]] - code - rag/test_chunker.py
- [[test_borrowed_equation_kept_whole_primary_copy_keeps_prose()]] - code - rag/test_chunker.py
- [[test_chunk_ids_stay_sequential_and_unique_with_overlap()]] - code - rag/test_chunker.py
- [[test_chunk_section_path_is_the_anchoring_blocks_section_path()]] - code - rag/test_chunker.py
- [[test_chunk_text_is_prefixed_with_title_and_section_path_before_the_body()]] - code - rag/test_chunker.py
- [[test_chunker.py_1]] - code - rag/test_chunker.py
- [[test_chunks_are_emitted_and_ids_are_unique()]] - code - rag/test_chunker.py
- [[test_code_block_is_never_emitted_stripped_of_context()]] - code - rag/test_chunker.py
- [[test_contextual_header_is_none_for_every_chunk()]] - code - rag/test_chunker.py
- [[test_equation_is_never_emitted_stripped_of_its_prose_context()]] - code - rag/test_chunker.py
- [[test_every_chunk_anchor_is_grounded_in_a_real_source_block()]] - code - rag/test_chunker.py
- [[test_expansion_off_splits_each_block_into_its_own_chunk()]] - code - rag/test_chunker.py
- [[test_first_split_sub_chunk_has_no_overlap()]] - code - rag/test_chunker.py
- [[test_heading_first_block_is_not_duplicated_in_chunk_text()]] - code - rag/test_chunker.py
- [[test_multi_block_chunk_anchors_to_the_first_block_in_the_group()]] - code - rag/test_chunker.py
- [[test_no_overlap_across_section_boundaries()]] - code - rag/test_chunker.py
- [[test_overlap_does_not_move_anchor_or_parent_id()]] - code - rag/test_chunker.py
- [[test_overlap_inert_under_expansion_off()]] - code - rag/test_chunker.py
- [[test_overlap_skipped_when_preceding_block_exceeds_threshold()]] - code - rag/test_chunker.py
- [[test_oversized_section_is_split_into_multiple_chunks()]] - code - rag/test_chunker.py
- [[test_oversized_section_split_still_keeps_equation_glued_to_its_prose()]] - code - rag/test_chunker.py
- [[test_parent_id_equals_anchor_block_id_by_construction()]] - code - rag/test_chunker.py
- [[test_parent_id_is_always_a_resolvable_block_id_never_a_chunk_id()]] - code - rag/test_chunker.py
- [[test_prose_first_block_chunk_text_is_unchanged_by_heading_dedup()]] - code - rag/test_chunker.py
- [[test_section_within_the_cap_is_not_split()]] - code - rag/test_chunker.py
- [[test_single_block_bigger_than_the_cap_is_still_emitted_whole()]] - code - rag/test_chunker.py
- [[test_split_sub_chunk_borrows_preceding_blocks_last_block()]] - code - rag/test_chunker.py
- [[test_split_sub_chunks_anchor_to_their_own_first_block_not_the_sections_first_block()]] - code - rag/test_chunker.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_chunkerpy
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_ParsedDoc]]
- 2 edges to [[_COMMUNITY_Config]]
- 1 edge to [[_COMMUNITY_load_config]]
- 1 edge to [[_COMMUNITY_Anchor]]
- 1 edge to [[_COMMUNITY___init__.py]]

## Top bridge nodes
- [[test_chunker.py_1]] - degree 38, connects to 5 communities
- [[_chunk()]] - degree 30, connects to 1 community
- [[_parsed_doc()_1]] - degree 26, connects to 1 community
- [[_block()]] - degree 8, connects to 1 community
- [[_config()]] - degree 5, connects to 1 community