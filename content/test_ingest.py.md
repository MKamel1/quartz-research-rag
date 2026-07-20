---
source_file: "app/test_ingest.py"
type: "code"
community: "test_ingest.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_ingestpy
---

# test_ingest.py

## Connections
- [[Config]] - `imports` [EXTRACTED]
- [[EmbedderInfo_2]] - `imports` [EXTRACTED]
- [[FakeFlakyEmbedder]] - `contains` [EXTRACTED]
- [[FakeGpuLock]] - `imports` [EXTRACTED]
- [[FakeIngestState]] - `imports` [EXTRACTED]
- [[FakePopen]] - `contains` [EXTRACTED]
- [[FakeTeiLifecycle]] - `contains` [EXTRACTED]
- [[IngestionOrchestrator]] - `imports` [EXTRACTED]
- [[PaperRef]] - `imports` [EXTRACTED]
- [[StubHarvester]] - `contains` [EXTRACTED]
- [[Tests for `app.ingest` (T-DOC19 bug fix) -- offline, no real DockerGPUnetwork]] - `rationale_for` [EXTRACTED]
- [[TransientError]] - `imports` [EXTRACTED]
- [[_args()]] - `contains` [EXTRACTED]
- [[_cfg()_1]] - `contains` [EXTRACTED]
- [[_make_orchestrator()]] - `contains` [EXTRACTED]
- [[_reset_fake_popen()]] - `contains` [EXTRACTED]
- [[config.py]] - `imports_from` [EXTRACTED]
- [[doctor.py]] - `imports` [EXTRACTED]
- [[embedder.py]] - `imports_from` [EXTRACTED]
- [[errors.py]] - `imports_from` [EXTRACTED]
- [[fake_gpu_lock.py]] - `imports_from` [EXTRACTED]
- [[fake_ingest_state.py]] - `imports_from` [EXTRACTED]
- [[harvester.py]] - `imports_from` [EXTRACTED]
- [[ingest.py]] - `imports` [EXTRACTED]
- [[migrate()]] - `imports` [EXTRACTED]
- [[migrate.py]] - `imports_from` [EXTRACTED]
- [[orchestrator.py]] - `imports_from` [EXTRACTED]
- [[test_cleanup_scratch_dir_is_a_noop_for_none()]] - `contains` [EXTRACTED]
- [[test_cleanup_scratch_dir_removes_a_completed_runs_override_dir()]] - `contains` [EXTRACTED]
- [[test_cleanup_scratch_dir_tolerates_an_already_removed_dir()]] - `contains` [EXTRACTED]
- [[test_effective_config_limit_caps_corpus_cap()]] - `contains` [EXTRACTED]
- [[test_effective_config_limit_never_raises_corpus_cap_above_the_configured_value()]] - `contains` [EXTRACTED]
- [[test_effective_config_no_flags_returns_the_identical_config()]] - `contains` [EXTRACTED]
- [[test_effective_config_re_validates_and_rejects_a_bad_override()]] - `contains` [EXTRACTED]
- [[test_effective_config_scratch_and_limit_combine()]] - `contains` [EXTRACTED]
- [[test_effective_config_scratch_is_unique_per_call()]] - `contains` [EXTRACTED]
- [[test_effective_config_scratch_provisions_isolated_paths()]] - `contains` [EXTRACTED]
- [[test_ensure_db_migrated_auto_provisions_a_fresh_db()]] - `contains` [EXTRACTED]
- [[test_ensure_db_migrated_detects_unmigrated_db_via_missing_table()]] - `contains` [EXTRACTED]
- [[test_ensure_db_migrated_is_a_noop_on_an_already_migrated_db()]] - `contains` [EXTRACTED]
- [[test_fixture_reproduces_the_original_bug_shape()]] - `contains` [EXTRACTED]
- [[test_ingest_lock_path_differs_for_different_db_paths()]] - `contains` [EXTRACTED]
- [[test_ingest_lock_path_is_absolute_and_shared_across_configs_with_the_same_db_path()]] - `contains` [EXTRACTED]
- [[test_ingest_lock_path_resolves_a_relative_db_path_against_cwd()]] - `contains` [EXTRACTED]
- [[test_parse_workers_all_succeed_returns_normally()]] - `contains` [EXTRACTED]
- [[test_parse_workers_default_one_uses_original_subprocess_run()]] - `contains` [EXTRACTED]
- [[test_parse_workers_default_one_with_cwd_passes_cwd_kwarg()]] - `contains` [EXTRACTED]
- [[test_parse_workers_fails_the_run_if_any_worker_exits_nonzero()]] - `contains` [EXTRACTED]
- [[test_parse_workers_n_spawns_n_shard_subprocesses()]] - `contains` [EXTRACTED]
- [[test_parse_workers_n_with_cwd_passes_cwd_to_every_popen()]] - `contains` [EXTRACTED]
- [[test_preflight_gate_force_proceeds_despite_issues()]] - `contains` [EXTRACTED]
- [[test_preflight_gate_no_preflight_skips_the_check_entirely()]] - `contains` [EXTRACTED]
- [[test_preflight_gate_passes_silently_when_no_issues()]] - `contains` [EXTRACTED]
- [[test_preflight_gate_refuses_to_start_with_named_reason()]] - `contains` [EXTRACTED]
- [[test_run_finish_phase_default_on_stage_is_none()]] - `contains` [EXTRACTED]
- [[test_run_finish_phase_forwards_on_stage_to_build_ingestion_orchestrator()]] - `contains` [EXTRACTED]
- [[test_run_finish_phase_restarts_tei_before_the_topic_query_embed()]] - `contains` [EXTRACTED]
- [[test_validate_parse_workers_negative_exits_with_error()]] - `contains` [EXTRACTED]
- [[test_validate_parse_workers_one_is_accepted()]] - `contains` [EXTRACTED]
- [[test_validate_parse_workers_zero_exits_with_error()]] - `contains` [EXTRACTED]
- [[test_write_override_config_dir_leaves_falsy_path_fields_alone()]] - `contains` [EXTRACTED]
- [[test_write_override_config_dir_preserves_non_path_fields()]] - `contains` [EXTRACTED]
- [[test_write_override_config_dir_resolves_relative_paths_to_absolute()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_ingestpy