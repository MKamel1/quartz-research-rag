---
source_file: "app/retrieval_eval.py"
type: "code"
community: "Retrieval Evaluation Tool"
location: "L134"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Retrieval_Evaluation_Tool
---

# run()

## Connections
- [[Calls the real (or fake) `retriever.retrieve(question_text, filters, k)` for eve]] - `rationale_for` [EXTRACTED]
- [[Question]] - `references` [EXTRACTED]
- [[QuestionResult]] - `references` [EXTRACTED]
- [[main()_6]] - `calls` [EXTRACTED]
- [[retrieval_eval.py]] - `contains` [EXTRACTED]
- [[score_question()]] - `calls` [EXTRACTED]
- [[test_build_report_per_question_array_default_on_via_full_pipeline()]] - `calls` [EXTRACTED]
- [[test_build_report_per_question_array_marks_errors()]] - `calls` [EXTRACTED]
- [[test_retrieval_eval.py]] - `imports` [EXTRACTED]
- [[test_run_records_retrieval_error_without_aborting_the_whole_run()]] - `calls` [EXTRACTED]
- [[test_run_scores_each_question_via_the_retriever()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Retrieval_Evaluation_Tool