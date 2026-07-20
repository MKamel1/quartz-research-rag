---
source_file: "app/prefetch_pdfs.py"
type: "code"
community: "prefetch_pdfs.py"
location: "L159"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/prefetch_pdfspy
---

# _skip_marker_path()

## Connections
- [[Path_9]] - `references` [EXTRACTED]
- [[_download_with_retry()]] - `calls` [EXTRACTED]
- [[prefetch_pdfs.py]] - `contains` [EXTRACTED]
- [[run()]] - `calls` [EXTRACTED]
- [[test_permanent_download_failure_writes_a_local_marker_and_does_not_stop_the_run()]] - `calls` [EXTRACTED]
- [[test_permanently_failed_paper_is_skipped_on_a_later_pass_without_a_request()]] - `calls` [EXTRACTED]
- [[test_prefetch_pdfs.py]] - `imports` [EXTRACTED]
- [[test_transient_failure_retries_with_backoff_floored_at_the_pdf_delay_then_gives_up_retryable()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/prefetch_pdfspy