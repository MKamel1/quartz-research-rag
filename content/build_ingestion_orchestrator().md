---
source_file: "app/assembly.py"
type: "code"
community: "build_ingestion_orchestrator"
location: "L471"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/build_ingestion_orchestrator
---

# build_ingestion_orchestrator()

## Connections
- [[AdaptiveBatchSizer]] - `calls` [EXTRACTED]
- [[ArxivSource]] - `calls` [EXTRACTED]
- [[Chunker]] - `calls` [EXTRACTED]
- [[Client]] - `calls` [EXTRACTED]
- [[Config]] - `references` [EXTRACTED]
- [[DocumentStore]] - `calls` [EXTRACTED]
- [[FileGpuLock]] - `calls` [EXTRACTED]
- [[Harvester]] - `calls` [EXTRACTED]
- [[IngestionOrchestrator]] - `references` [EXTRACTED]
- [[OllamaSummarizer]] - `calls` [EXTRACTED]
- [[Path_1]] - `calls` [EXTRACTED]
- [[SqliteIngestState]] - `calls` [EXTRACTED]
- [[TeiEmbedder_2]] - `calls` [EXTRACTED]
- [[VectorIndex]] - `calls` [EXTRACTED]
- [[_PdfDownloadParser]] - `calls` [EXTRACTED]
- [[_build_orchestrator_for_hook_test()]] - `calls` [EXTRACTED]
- [[_run_finish_phase()]] - `calls` [EXTRACTED]
- [[_run_parse_phase()]] - `calls` [EXTRACTED]
- [[_sqlite_harvest_quarantine_sink()]] - `calls` [EXTRACTED]
- [[assembly.py]] - `contains` [EXTRACTED]
- [[ingest.py]] - `imports` [EXTRACTED]
- [[parse_phase.py]] - `imports` [EXTRACTED]
- [[test_assembly.py]] - `imports` [EXTRACTED]
- [[test_build_ingestion_orchestrator_default_matches_prefetch_pdfs_default()]] - `calls` [EXTRACTED]
- [[test_build_ingestion_orchestrator_empty_pdf_cache_dir_disables_cache_and_logs()]] - `calls` [EXTRACTED]
- [[test_build_ingestion_orchestrator_wires_pdf_cache_dir_config_field()]] - `calls` [EXTRACTED]
- [[test_composition_e2e.py]] - `imports` [EXTRACTED]
- [[test_harvest_failure_is_written_to_the_quarantine_table()]] - `calls` [EXTRACTED]
- [[test_ingest_then_query_one_real_paper()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/build_ingestion_orchestrator