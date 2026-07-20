---
type: community
cohesion: 0.09
members: 52
---

# test_reembed_experiment.py

**Cohesion:** 0.09 - loosely connected
**Members:** 52 nodes

## Members
- [[.__init__()_18]] - code - app/test_reembed_experiment.py
- [[.__init__()_16]] - code - app/test_reembed_experiment.py
- [[.__init__()_17]] - code - app/test_reembed_experiment.py
- [[.embed()]] - code - app/reembed_experiment.py
- [[.generate()]] - code - app/reembed_experiment.py
- [[.get()]] - code - app/reembed_experiment.py
- [[.get()_1]] - code - app/test_reembed_experiment.py
- [[.info()]] - code - app/reembed_experiment.py
- [[.upsert()]] - code - app/reembed_experiment.py
- [[Deterministic header text is derived from the chunk text, so a test can assert]] - rationale - app/test_reembed_experiment.py
- [[EmbedderInfo]] - code
- [[Minimal stand-in for `rag.document_store.DocumentStore.get()` -- an in-memory di]] - rationale - app/test_reembed_experiment.py
- [[Namespace_8]] - code
- [[Protocol_1]] - code
- [[ReembedError]] - code - app/reembed_experiment.py
- [[Refuses to run against the live collection (`Config.collection`, default `paper]] - rationale - app/reembed_experiment.py
- [[Runs one AB arm embeds and upserts every chunk of every paper in `paper_ids` i]] - rationale - app/reembed_experiment.py
- [[RuntimeError_2]] - code
- [[T-DOC41 (Contextual Retrieval spike) — `appreembed_experiment.py` test suite. Z]] - rationale - app/test_reembed_experiment.py
- [[The requested run can't proceed as configured -- an unknown paper id, a missing]] - rationale - app/reembed_experiment.py
- [[Vector]] - code
- [[_Args]] - code - app/test_reembed_experiment.py
- [[_DocumentStore]] - code - app/reembed_experiment.py
- [[_EmbedderSeam]] - code - app/reembed_experiment.py
- [[_FakeDocumentStore]] - code - app/test_reembed_experiment.py
- [[_FakeHeaderGenerator]] - code - app/test_reembed_experiment.py
- [[_HeaderGenerator]] - code - app/reembed_experiment.py
- [[_VectorStore]] - code - app/reembed_experiment.py
- [[_check_collection_is_not_production()]] - code - app/reembed_experiment.py
- [[_make_record()]] - code - app/test_reembed_experiment.py
- [[_make_ref()_3]] - code - app/test_reembed_experiment.py
- [[_paper_ids_from_args()]] - code - app/reembed_experiment.py
- [[_parse_args()_6]] - code - app/reembed_experiment.py
- [[_records()]] - code - app/test_reembed_experiment.py
- [[_write_headers_out()]] - code - app/reembed_experiment.py
- [[`python -m app.reembed_experiment` -- T-DOC41 (Contextual Retrieval spike) AB r]] - rationale - app/reembed_experiment.py
- [[reembed()]] - code - app/reembed_experiment.py
- [[reembed_experiment.py]] - code - app/reembed_experiment.py
- [[test_a_chunk_whose_header_generation_fails_still_gets_embedded_with_its_own_text()]] - code - app/test_reembed_experiment.py
- [[test_baseline_and_headered_runs_upsert_the_identical_chunk_id_set()]] - code - app/test_reembed_experiment.py
- [[test_baseline_embed_text_equals_the_chunks_own_unmodified_text()]] - code - app/test_reembed_experiment.py
- [[test_check_collection_is_not_production_rejects_the_live_collection_name()]] - code - app/test_reembed_experiment.py
- [[test_headered_embed_text_starts_with_the_header_then_the_original_text()]] - code - app/test_reembed_experiment.py
- [[test_headers_dict_has_one_entry_per_chunk_and_is_empty_in_baseline_mode()]] - code - app/test_reembed_experiment.py
- [[test_paper_ids_from_comma_separated_arg()]] - code - app/test_reembed_experiment.py
- [[test_paper_ids_from_file()]] - code - app/test_reembed_experiment.py
- [[test_paper_ids_missing_both_raises()]] - code - app/test_reembed_experiment.py
- [[test_reembed_experiment.py]] - code - app/test_reembed_experiment.py
- [[test_unknown_paper_id_raises_reembed_error()]] - code - app/test_reembed_experiment.py
- [[test_with_headers_true_requires_a_header_generator()]] - code - app/test_reembed_experiment.py
- [[test_write_headers_out_is_a_noop_when_path_is_none()]] - code - app/test_reembed_experiment.py
- [[test_write_headers_out_writes_json_when_path_given()]] - code - app/test_reembed_experiment.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_reembed_experimentpy
SORT file.name ASC
```

## Connections to other communities
- 22 edges to [[_COMMUNITY_FakeVectorStore]]
- 17 edges to [[_COMMUNITY_PaperRecord]]
- 16 edges to [[_COMMUNITY_Anchor]]
- 11 edges to [[_COMMUNITY_PermanentError]]
- 11 edges to [[_COMMUNITY_SearchFilters]]
- 8 edges to [[_COMMUNITY_test_embedder.py]]
- 7 edges to [[_COMMUNITY_FakeGpuLock]]
- 7 edges to [[_COMMUNITY_ParsedDoc]]
- 5 edges to [[_COMMUNITY_PaperRef]]
- 4 edges to [[_COMMUNITY_assembly.py]]
- 2 edges to [[_COMMUNITY_load_config]]
- 1 edge to [[_COMMUNITY_GpuLock]]
- 1 edge to [[_COMMUNITY_TeiEmbedder]]
- 1 edge to [[_COMMUNITY_VectorIndex]]
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY___init__.py]]

## Top bridge nodes
- [[test_reembed_experiment.py]] - degree 44, connects to 11 communities
- [[reembed_experiment.py]] - degree 32, connects to 11 communities
- [[_FakeDocumentStore]] - degree 20, connects to 6 communities
- [[_FakeHeaderGenerator]] - degree 17, connects to 6 communities
- [[_Args]] - degree 14, connects to 6 communities