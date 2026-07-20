---
type: community
cohesion: 0.20
members: 19
---

# prefetch_pdfs.py

**Cohesion:** 0.20 - loosely connected
**Members:** 19 nodes

## Members
- [[Client_1]] - code
- [[Fetch `ref`'s PDF bytes and write them atomically to `cache_dirpaper_id.pdf`.]] - rationale - app/prefetch_pdfs.py
- [[Path_9]] - code
- [[Persist `ref` as `paper_id.json`, same atomic tmp-then-rename discipline as th]] - rationale - app/prefetch_pdfs.py
- [[Up to `_MAX_DOWNLOAD_RETRIES` retries on `TransientError`, exponential backoff f]] - rationale - app/prefetch_pdfs.py
- [[_cache_dir_from_config()]] - code - app/prefetch_pdfs.py
- [[_download_one()]] - code - app/prefetch_pdfs.py
- [[_download_with_retry()]] - code - app/prefetch_pdfs.py
- [[_pdf_path()]] - code - app/prefetch_pdfs.py
- [[_sidecar_path()]] - code - app/prefetch_pdfs.py
- [[_skip_marker_path()]] - code - app/prefetch_pdfs.py
- [[_target_from_config()]] - code - app/prefetch_pdfs.py
- [[_tmp_pdf_path()]] - code - app/prefetch_pdfs.py
- [[_write_sidecar()]] - code - app/prefetch_pdfs.py
- [[`python -m app.prefetch_pdfs` — standalone, GPU-free PDF backlog builder.  Why]] - rationale - app/prefetch_pdfs.py
- [[main()_4]] - code - app/prefetch_pdfs.py
- [[prefetch_pdfs.py]] - code - app/prefetch_pdfs.py
- [[test_tmp_pdf_path_differs_from_a_different_pids_tmp_path()]] - code - app/test_prefetch_pdfs.py
- [[test_tmp_pdf_path_is_qualified_by_this_process_pid()]] - code - app/test_prefetch_pdfs.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/prefetch_pdfspy
SORT file.name ASC
```

## Connections to other communities
- 16 edges to [[_COMMUNITY_test_prefetch_pdfs.py]]
- 7 edges to [[_COMMUNITY_PermanentError]]
- 4 edges to [[_COMMUNITY_load_config]]
- 4 edges to [[_COMMUNITY_PaperRef]]
- 3 edges to [[_COMMUNITY_prefetch_loop]]
- 3 edges to [[_COMMUNITY_Config]]
- 2 edges to [[_COMMUNITY__parse_args]]
- 1 edge to [[_COMMUNITY_assembly.py]]
- 1 edge to [[_COMMUNITY_ParsedDoc]]
- 1 edge to [[_COMMUNITY_FakeSource]]
- 1 edge to [[_COMMUNITY_test_orchestrator.py]]
- 1 edge to [[_COMMUNITY_migrate]]

## Top bridge nodes
- [[prefetch_pdfs.py]] - degree 31, connects to 12 communities
- [[main()_4]] - degree 6, connects to 3 communities
- [[_download_one()]] - degree 11, connects to 2 communities
- [[Path_9]] - degree 11, connects to 2 communities
- [[_download_with_retry()]] - degree 8, connects to 2 communities