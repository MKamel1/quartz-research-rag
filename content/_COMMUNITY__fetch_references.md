---
type: community
cohesion: 0.40
members: 6
---

# _fetch_references

**Cohesion:** 0.40 - moderately connected
**Members:** 6 nodes

## Members
- [[Element_1]] - code
- [[One batched call to GROBID's `apiprocessCitationList` (not N calls, one per re]] - rationale - rag/parser.py
- [[_extract_idno()]] - code - rag/parser.py
- [[_extract_title()_1]] - code - rag/parser.py
- [[_fetch_references()]] - code - rag/parser.py
- [[_parse_grobid_tei()]] - code - rag/parser.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_fetch_references
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_parser.py]]
- 2 edges to [[_COMMUNITY_PermanentError]]
- 2 edges to [[_COMMUNITY_Figure]]

## Top bridge nodes
- [[_fetch_references()]] - degree 6, connects to 3 communities
- [[_parse_grobid_tei()]] - degree 6, connects to 3 communities
- [[_extract_idno()]] - degree 3, connects to 1 community
- [[_extract_title()_1]] - degree 3, connects to 1 community