---
type: community
cohesion: 0.15
members: 26
---

# parser.py

**Cohesion:** 0.15 - loosely connected
**Members:** 26 nodes

## Members
- [[Bbox]] - code
- [[Invoke MinerU's `pipeline` backend in-process (see module docstring for why not]] - rationale - rag/parser.py
- [[Open `raw` with pypdfium2 as a cheap, model-free validation gate -- catches empt]] - rationale - rag/parser.py
- [[Parse N PDFs through one MinerU `do_parse` call instead of N separate ones -- se]] - rationale - rag/parser.py
- [[Parse `raw` PDF bytes into a `ParsedDoc` (ARCHITECTURE.md §M2).      Preconditio]] - rationale - rag/parser.py
- [[Path_30]] - code
- [[Read one document's MinerU output back off disk after `_call_do_parse` has run (]] - rationale - rag/parser.py
- [[Recognize the arXiv e-printLaTeX-source archive shape (gziptar) and fail with]] - rationale - rag/parser.py
- [[Shared per-document assembly (bbox rescaling`content_list` walk, the blocks-emp]] - rationale - rag/parser.py
- [[Single-document convenience wrapper around `_call_do_parse``_read_mineru_output]] - rationale - rag/parser.py
- [[Undo MinerU's `content_list.json` 0-1000-per-axis bbox normalization     (`miner]] - rationale - rag/parser.py
- [[Walk MinerU's `content_list` (already in reading order) building the four `Parse]] - rationale - rag/parser.py
- [[_assemble_parsed_doc()]] - code - rag/parser.py
- [[_build_blocks()]] - code - rag/parser.py
- [[_call_do_parse()]] - code - rag/parser.py
- [[_parser_id()]] - code - rag/parser.py
- [[_read_mineru_output()]] - code - rag/parser.py
- [[_reject_latex_archive()]] - code - rag/parser.py
- [[_rescale_bbox()]] - code - rag/parser.py
- [[_resolve_workdir()]] - code - rag/parser.py
- [[_run_mineru_pipeline()]] - code - rag/parser.py
- [[_validate_pdf()]] - code - rag/parser.py
- [[parse()]] - code - rag/parser.py
- [[parse_batch()]] - code - rag/parser.py
- [[parser.py_1]] - code - rag/parser.py
- [[ragparser.py — Parser adapter (T-B1, M2 · owner B).  Wraps MinerU (`pipeline` b]] - rationale - rag/parser.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/parserpy
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_PermanentError]]
- 7 edges to [[_COMMUNITY_Figure]]
- 6 edges to [[_COMMUNITY_ParsedDoc]]
- 5 edges to [[_COMMUNITY__fetch_references]]
- 4 edges to [[_COMMUNITY_assembly.py]]
- 3 edges to [[_COMMUNITY_ContractError]]
- 2 edges to [[_COMMUNITY__heading_depth]]
- 1 edge to [[_COMMUNITY_Anchor]]
- 1 edge to [[_COMMUNITY___init__.py]]
- 1 edge to [[_COMMUNITY_PaperRef]]

## Top bridge nodes
- [[parser.py_1]] - degree 31, connects to 9 communities
- [[parse_batch()]] - degree 13, connects to 4 communities
- [[_assemble_parsed_doc()]] - degree 11, connects to 4 communities
- [[_build_blocks()]] - degree 10, connects to 3 communities
- [[parse()]] - degree 10, connects to 2 communities