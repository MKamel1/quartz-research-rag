---
source_file: "app/assembly.py"
type: "code"
community: "PaperRef"
location: "L229"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/PaperRef
---

# _PdfDownloadParser

## Connections
- [[.__init__()_1]] - `method` [EXTRACTED]
- [[._cache_path()]] - `method` [EXTRACTED]
- [[._download()]] - `method` [EXTRACTED]
- [[._download_all()]] - `method` [EXTRACTED]
- [[._download_once()]] - `method` [EXTRACTED]
- [[._read_cached()]] - `method` [EXTRACTED]
- [[._resolve_contents()]] - `method` [EXTRACTED]
- [[._write_cache()]] - `method` [EXTRACTED]
- [[.parse()]] - `method` [EXTRACTED]
- [[.parse_batch()]] - `method` [EXTRACTED]
- [[.prefetch_next_batch()]] - `method` [EXTRACTED]
- [[AdaptiveBatchSizer]] - `uses` [INFERRED]
- [[Bridges `IngestionOrchestrator`'s `parser.parse(ref PaperRef)` call to the real]] - `rationale_for` [EXTRACTED]
- [[Config]] - `uses` [INFERRED]
- [[EmbedderInfo_2]] - `uses` [INFERRED]
- [[IngestionOrchestrator]] - `uses` [INFERRED]
- [[OllamaSummarizer]] - `uses` [INFERRED]
- [[PaperRef]] - `uses` [INFERRED]
- [[ParsedDoc]] - `uses` [INFERRED]
- [[PermanentError]] - `uses` [INFERRED]
- [[SqliteIngestState]] - `uses` [INFERRED]
- [[TeiReranker]] - `uses` [INFERRED]
- [[TransientError]] - `uses` [INFERRED]
- [[_make_parser()]] - `references` [EXTRACTED]
- [[assembly.py]] - `contains` [EXTRACTED]
- [[build_ingestion_orchestrator()]] - `calls` [EXTRACTED]
- [[test_assembly.py]] - `imports` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/PaperRef