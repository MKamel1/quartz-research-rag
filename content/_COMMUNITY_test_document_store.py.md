---
type: community
cohesion: 0.10
members: 42
---

# test_document_store.py

**Cohesion:** 0.10 - loosely connected
**Members:** 42 nodes

## Members
- [[Sibling test for contractsprovenance.py (T-F1 DoD imported by a trivial test;]] - rationale - contracts/test_provenance.py
- [[_by_id()]] - code - rag/test_document_store.py
- [[make_anchor()_1]] - code - rag/test_document_store.py
- [[make_block()_2]] - code - rag/test_document_store.py
- [[make_chunk()_1]] - code - rag/test_document_store.py
- [[make_paper_record()_2]] - code - rag/test_document_store.py
- [[make_paper_ref()_2]] - code - rag/test_document_store.py
- [[make_parsed_doc()_1]] - code - rag/test_document_store.py
- [[store()]] - code - rag/test_document_store.py
- [[test_anchor_bbox_wrong_arity_as_list_still_raises()]] - code - contracts/test_provenance.py
- [[test_anchor_bbox_wrong_arity_raises()]] - code - contracts/test_provenance.py
- [[test_anchor_constructs_with_valid_fields()]] - code - contracts/test_provenance.py
- [[test_anchor_is_frozen()]] - code - contracts/test_provenance.py
- [[test_anchor_negative_page_raises()]] - code - contracts/test_provenance.py
- [[test_anchor_wrong_type_raises()]] - code - contracts/test_provenance.py
- [[test_bbox_survives_json_round_trip()]] - code - contracts/test_provenance.py
- [[test_block_constructs_with_valid_fields_and_accepts_every_block_type()]] - code - contracts/test_provenance.py
- [[test_block_invalid_type_literal_raises()]] - code - contracts/test_provenance.py
- [[test_block_wrong_type_raises()]] - code - contracts/test_provenance.py
- [[test_delete_cleans_up_chunks_and_blocks_with_no_matching_papers_row()]] - code - rag/test_document_store.py
- [[test_delete_does_not_touch_another_papers_rows()]] - code - rag/test_document_store.py
- [[test_delete_of_unknown_paper_returns_empty_list()]] - code - rag/test_document_store.py
- [[test_delete_removes_rows_from_all_four_tables_and_the_blob()]] - code - rag/test_document_store.py
- [[test_delete_returns_the_chunk_and_summary_ids_removed()]] - code - rag/test_document_store.py
- [[test_delete_unknown_paper_id_is_a_safe_no_op()]] - code - rag/test_document_store.py
- [[test_document_store.py_1]] - code - rag/test_document_store.py
- [[test_foreign_keys_pragma_is_on_for_a_fresh_connection()]] - code - rag/test_document_store.py
- [[test_get_block_resolves_and_raises_on_unknown()]] - code - rag/test_document_store.py
- [[test_get_blocks_returns_all_blocks_for_paper()]] - code - rag/test_document_store.py
- [[test_get_chunk_resolves_and_raises_on_unknown()]] - code - rag/test_document_store.py
- [[test_get_span_returns_full_block_text_not_snippet()]] - code - rag/test_document_store.py
- [[test_get_summary_resolves_and_raises_on_unknown()]] - code - rag/test_document_store.py
- [[test_get_unknown_paper_returns_none()]] - code - rag/test_document_store.py
- [[test_iter_papers_yields_all_stored_papers()]] - code - rag/test_document_store.py
- [[test_markdown_blob_readable_after_a_relative_blob_dir_and_a_cwd_change()]] - code - rag/test_document_store.py
- [[test_provenance.py]] - code - contracts/test_provenance.py
- [[test_put_failure_on_reput_leaves_prior_blob_untouched()]] - code - rag/test_document_store.py
- [[test_put_get_round_trips_relevance_score()]] - code - rag/test_document_store.py
- [[test_put_get_round_trips_whole_record()]] - code - rag/test_document_store.py
- [[test_put_is_atomic_across_all_four_tables()]] - code - rag/test_document_store.py
- [[test_put_is_idempotent_and_reflects_new_content()]] - code - rag/test_document_store.py
- [[test_raw_delete_from_papers_with_children_present_is_rejected_not_silently_orphaning()]] - code - rag/test_document_store.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_document_storepy
SORT file.name ASC
```

## Connections to other communities
- 12 edges to [[_COMMUNITY_Anchor]]
- 6 edges to [[_COMMUNITY_ContractError]]
- 5 edges to [[_COMMUNITY_ParsedDoc]]
- 2 edges to [[_COMMUNITY_PaperRecord]]
- 2 edges to [[_COMMUNITY_PaperRef]]
- 2 edges to [[_COMMUNITY___init__.py]]
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY_assembly.py]]

## Top bridge nodes
- [[test_document_store.py_1]] - degree 43, connects to 8 communities
- [[test_provenance.py]] - degree 13, connects to 2 communities
- [[make_paper_record()_2]] - degree 21, connects to 1 community
- [[make_anchor()_1]] - degree 15, connects to 1 community
- [[make_chunk()_1]] - degree 10, connects to 1 community