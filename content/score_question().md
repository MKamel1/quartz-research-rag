---
source_file: "app/retrieval_eval.py"
type: "code"
community: "Retrieval Evaluation Tool"
location: "L102"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Retrieval_Evaluation_Tool
---

# score_question()

## Connections
- [[Question]] - `references` [EXTRACTED]
- [[QuestionResult]] - `references` [EXTRACTED]
- [[`results` is the `listGroundedResult` a real (or fake) `Retriever.retrieve()`]] - `rationale_for` [EXTRACTED]
- [[retrieval_eval.py]] - `contains` [EXTRACTED]
- [[run()_1]] - `calls` [EXTRACTED]
- [[test_retrieval_eval.py]] - `imports` [EXTRACTED]
- [[test_score_question_multi_gold_paper_match()]] - `calls` [EXTRACTED]
- [[test_score_question_no_gold_block_id_is_not_passage_scored()]] - `calls` [EXTRACTED]
- [[test_score_question_no_hit_at_all()]] - `calls` [EXTRACTED]
- [[test_score_question_paper_and_passage_hit_at_rank_1()]] - `calls` [EXTRACTED]
- [[test_score_question_rank_reflects_position_not_just_presence()]] - `calls` [EXTRACTED]
- [[test_score_question_respects_k_truncation()]] - `calls` [EXTRACTED]
- [[test_score_question_right_paper_wrong_block_is_paper_hit_passage_miss()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Retrieval_Evaluation_Tool