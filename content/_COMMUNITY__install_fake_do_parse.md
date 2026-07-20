---
type: community
cohesion: 0.28
members: 13
---

# _install_fake_do_parse

**Cohesion:** 0.28 - loosely connected
**Members:** 13 nodes

## Members
- [[A `mineru.cli.common.do_parse`-shaped stand-in writes valid output for every st]] - rationale - rag/test_parser.py
- [[Inject a fake `mineru.cli.common` module (bearing `do_parse = fake_do_parse`) st]] - rationale - rag/test_parser.py
- [[_fake_do_parse_writing()]] - code - rag/test_parser.py
- [[_install_fake_do_parse()]] - code - rag/test_parser.py
- [[_one_page_pdf_bytes()]] - code - rag/test_parser.py
- [[_stem_of()]] - code - rag/test_parser.py
- [[test_parse_batch_maps_do_parse_exception_to_permanent_error()]] - code - rag/test_parser.py
- [[test_parse_batch_raises_and_returns_nothing_when_one_members_output_is_missing()]] - code - rag/test_parser.py
- [[test_parse_batch_rejects_mismatched_paper_ids_length()]] - code - rag/test_parser.py
- [[test_parse_batch_rejects_unparseable_member_before_calling_do_parse()]] - code - rag/test_parser.py
- [[test_parse_batch_returns_parseddocs_in_order_on_full_success()]] - code - rag/test_parser.py
- [[test_parse_batch_single_item_batch_works()]] - code - rag/test_parser.py
- [[test_parse_uses_caller_supplied_paper_id_even_when_content_has_a_different_arxiv_watermark()]] - code - rag/test_parser.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_install_fake_do_parse
SORT file.name ASC
```

## Connections to other communities
- 14 edges to [[_COMMUNITY_test_parser.py]]
- 3 edges to [[_COMMUNITY_PermanentError]]
- 1 edge to [[_COMMUNITY_ContractError]]

## Top bridge nodes
- [[test_parse_batch_raises_and_returns_nothing_when_one_members_output_is_missing()]] - degree 6, connects to 2 communities
- [[test_parse_batch_maps_do_parse_exception_to_permanent_error()]] - degree 4, connects to 2 communities
- [[test_parse_batch_rejects_unparseable_member_before_calling_do_parse()]] - degree 4, connects to 2 communities
- [[test_parse_batch_rejects_mismatched_paper_ids_length()]] - degree 3, connects to 2 communities
- [[_install_fake_do_parse()]] - degree 8, connects to 1 community