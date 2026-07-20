---
type: community
cohesion: 0.11
members: 47
---

# Retrieval Evaluation Tool

**Cohesion:** 0.11 - loosely connected
**Members:** 47 nodes

## Members
- [[.__init__()_20]] - code - app/test_retrieval_eval.py
- [[.retrieve()]] - code - app/test_retrieval_eval.py
- [[210-set questions carry no gold_block_id -- passage-level must be skipped (not s]] - rationale - app/test_retrieval_eval.py
- [[Calls the real (or fake) `retriever.retrieve(question_text, filters, k)` for eve]] - rationale - app/retrieval_eval.py
- [[End-to-end through run()+build_report() (not hand-built QuestionResults) so the]] - rationale - app/test_retrieval_eval.py
- [[FakeRetriever]] - code - app/test_retrieval_eval.py
- [[Loads a ground-truth file into `Question`s. Two supported shapes, distinguished]] - rationale - app/retrieval_eval.py
- [[Namespace_10]] - code
- [[One `results` entry as a beforeafter-diffable dict gold ids plus hitrank at b]] - rationale - app/retrieval_eval.py
- [[Path_11]] - code
- [[Question]] - code - app/retrieval_eval.py
- [[QuestionResult]] - code - app/retrieval_eval.py
- [[The case the ticket explicitly calls out the correct PAPER is present in the re]] - rationale - app/test_retrieval_eval.py
- [[Unit tests for `appretrieval_eval.py` (T-DOC41). Zero-GPU, zero-network every]] - rationale - app/test_retrieval_eval.py
- [[_hit()]] - code - app/test_retrieval_eval.py
- [[_parse_args()_8]] - code - app/retrieval_eval.py
- [[_print_summary()]] - code - app/retrieval_eval.py
- [[_question_row()]] - code - app/retrieval_eval.py
- [[_recall_mrr()]] - code - app/retrieval_eval.py
- [[`.retrieve(query, filters, k) - (listGroundedResult, None)`, the same shape]] - rationale - app/test_retrieval_eval.py
- [[`python -m app.retrieval_eval` -- T-DOC41 (Contextual Retrieval spike) the meas]] - rationale - app/retrieval_eval.py
- [[`results` is the `listGroundedResult` a real (or fake) `Retriever.retrieve()`]] - rationale - app/retrieval_eval.py
- [[build_report()]] - code - app/retrieval_eval.py
- [[load_questions()]] - code - app/retrieval_eval.py
- [[main()_6]] - code - app/retrieval_eval.py
- [[retrieval_eval.py]] - code - app/retrieval_eval.py
- [[run()_1]] - code - app/retrieval_eval.py
- [[score_question()]] - code - app/retrieval_eval.py
- [[test_build_report_handles_no_passage_scorable_questions()]] - code - app/test_retrieval_eval.py
- [[test_build_report_paper_vs_passage_granularity_and_by_type()]] - code - app/test_retrieval_eval.py
- [[test_build_report_per_question_array_default_on_via_full_pipeline()]] - code - app/test_retrieval_eval.py
- [[test_build_report_per_question_array_marks_errors()]] - code - app/test_retrieval_eval.py
- [[test_build_report_per_question_array_omitted_when_disabled()]] - code - app/test_retrieval_eval.py
- [[test_load_questions_joins_sibling_blind_file()]] - code - app/test_retrieval_eval.py
- [[test_load_questions_missing_text_raises()]] - code - app/test_retrieval_eval.py
- [[test_load_questions_multi_gold_paper_ids()]] - code - app/test_retrieval_eval.py
- [[test_load_questions_self_contained_record()]] - code - app/test_retrieval_eval.py
- [[test_retrieval_eval.py]] - code - app/test_retrieval_eval.py
- [[test_run_records_retrieval_error_without_aborting_the_whole_run()]] - code - app/test_retrieval_eval.py
- [[test_run_scores_each_question_via_the_retriever()]] - code - app/test_retrieval_eval.py
- [[test_score_question_multi_gold_paper_match()]] - code - app/test_retrieval_eval.py
- [[test_score_question_no_gold_block_id_is_not_passage_scored()]] - code - app/test_retrieval_eval.py
- [[test_score_question_no_hit_at_all()]] - code - app/test_retrieval_eval.py
- [[test_score_question_paper_and_passage_hit_at_rank_1()]] - code - app/test_retrieval_eval.py
- [[test_score_question_rank_reflects_position_not_just_presence()]] - code - app/test_retrieval_eval.py
- [[test_score_question_respects_k_truncation()]] - code - app/test_retrieval_eval.py
- [[test_score_question_right_paper_wrong_block_is_paper_hit_passage_miss()]] - code - app/test_retrieval_eval.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Retrieval_Evaluation_Tool
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY___init__.py]]
- 3 edges to [[_COMMUNITY_Anchor]]
- 2 edges to [[_COMMUNITY_Config]]
- 2 edges to [[_COMMUNITY_load_config]]

## Top bridge nodes
- [[test_retrieval_eval.py]] - degree 33, connects to 2 communities
- [[retrieval_eval.py]] - degree 15, connects to 2 communities
- [[FakeRetriever]] - degree 13, connects to 2 communities
- [[_hit()]] - degree 13, connects to 2 communities
- [[main()_6]] - degree 9, connects to 2 communities