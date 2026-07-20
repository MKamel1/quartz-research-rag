---
type: community
cohesion: 0.10
members: 44
---

# test_obsidian_export.py

**Cohesion:** 0.10 - loosely connected
**Members:** 44 nodes

## Members
- [[.__init__()_13]] - code - app/test_obsidian_export.py
- [[.iter_papers()]] - code - app/obsidian_export.py
- [[.iter_papers()_1]] - code - app/test_obsidian_export.py
- [[ExportResult]] - code - app/obsidian_export.py
- [[Filename stem for `paper_id`. Keyed on `paper_id` alone (not title) `paper_id`]] - rationale - app/obsidian_export.py
- [[Namespace_5]] - code
- [[No `--out-dir` given default to an `obsidian_vault` dir next to the configured]] - rationale - app/obsidian_export.py
- [[Obsidian tags can't contain `.` -- categories like `cs.LG` become `cs-LG`.]] - rationale - app/obsidian_export.py
- [[PaperSource]] - code - app/obsidian_export.py
- [[Path_8]] - code
- [[Protocol]] - code
- [[Renders one note per paper plus `_index.md` into `out_dir`. Idempotent each pap]] - rationale - app/obsidian_export.py
- [[Tests for `app.obsidian_export` (T-V1-OBSIDIAN) -- offline, no GPUnetwork, no p]] - rationale - app/test_obsidian_export.py
- [[The one method this module needs from a paper store -- injected (CONVENTIONS]] - rationale - app/obsidian_export.py
- [[Unique `section_path`s from the paper's blocks, in reading order -- cheap becaus]] - rationale - app/obsidian_export.py
- [[_FakePaperSource]] - code - app/test_obsidian_export.py
- [[_parse_args()_3]] - code - app/obsidian_export.py
- [[_section_structure()]] - code - app/obsidian_export.py
- [[_tag()]] - code - app/obsidian_export.py
- [[`python -m app.obsidian_export` -- T-V1-OBSIDIAN a generated Obsidian note-per-]] - rationale - app/obsidian_export.py
- [[default_vault_dir()]] - code - app/obsidian_export.py
- [[export_vault()]] - code - app/obsidian_export.py
- [[main()_3]] - code - app/obsidian_export.py
- [[make_block()]] - code - app/test_obsidian_export.py
- [[make_paper_record()]] - code - app/test_obsidian_export.py
- [[make_paper_ref()]] - code - app/test_obsidian_export.py
- [[note_filename()]] - code - app/obsidian_export.py
- [[obsidian_export.py]] - code - app/obsidian_export.py
- [[print_summary()]] - code - app/obsidian_export.py
- [[render_index()]] - code - app/obsidian_export.py
- [[render_note()]] - code - app/obsidian_export.py
- [[slugify()]] - code - app/obsidian_export.py
- [[test_export_vault_against_real_document_store()]] - code - app/test_obsidian_export.py
- [[test_export_vault_leaves_other_vault_files_untouched()]] - code - app/test_obsidian_export.py
- [[test_export_vault_limit_caps_notes_written()]] - code - app/test_obsidian_export.py
- [[test_export_vault_regeneration_overwrites_not_duplicates()]] - code - app/test_obsidian_export.py
- [[test_export_vault_writes_a_note_per_paper_plus_index()]] - code - app/test_obsidian_export.py
- [[test_note_filename_keyed_on_paper_id_not_title()]] - code - app/test_obsidian_export.py
- [[test_obsidian_export.py]] - code - app/test_obsidian_export.py
- [[test_render_index_lists_every_paper_freshest_first()]] - code - app/test_obsidian_export.py
- [[test_render_note_frontmatter_and_summary_body()]] - code - app/test_obsidian_export.py
- [[test_render_note_section_structure_deduped_in_order()]] - code - app/test_obsidian_export.py
- [[test_slugify_is_stable_across_calls()]] - code - app/test_obsidian_export.py
- [[test_slugify_replaces_unsafe_characters()]] - code - app/test_obsidian_export.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_obsidian_exportpy
SORT file.name ASC
```

## Connections to other communities
- 15 edges to [[_COMMUNITY_PaperRecord]]
- 8 edges to [[_COMMUNITY_Anchor]]
- 7 edges to [[_COMMUNITY_ParsedDoc]]
- 4 edges to [[_COMMUNITY_load_config]]
- 4 edges to [[_COMMUNITY_Config]]
- 3 edges to [[_COMMUNITY_PaperRef]]
- 1 edge to [[_COMMUNITY_datetime]]
- 1 edge to [[_COMMUNITY___init__.py]]

## Top bridge nodes
- [[test_obsidian_export.py]] - degree 35, connects to 6 communities
- [[obsidian_export.py]] - degree 22, connects to 4 communities
- [[_FakePaperSource]] - degree 13, connects to 4 communities
- [[make_paper_record()]] - degree 13, connects to 2 communities
- [[main()_3]] - degree 8, connects to 2 communities