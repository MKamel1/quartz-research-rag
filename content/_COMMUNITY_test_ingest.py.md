---
type: community
cohesion: 0.05
members: 54
---

# test_ingest.py

**Cohesion:** 0.05 - loosely connected
**Members:** 54 nodes

## Members
- [[.__init__()_12]] - code - app/test_ingest.py
- [[.path()]] - code - rag/parser.py
- [[.wait()]] - code - app/test_ingest.py
- [[A --scratch run (its own unique db_path every time) must NOT share a lock with a]] - rationale - app/test_ingest.py
- [[A brand-new db_path (no file at all) must be detected as unmigrated and auto-pro]] - rationale - app/test_ingest.py
- [[A file that exists but was never migrated (no `ingest_state` table) must also tr]] - rationale - app/test_ingest.py
- [[A non-zero exit from ANY worker (e.g. an OOM'd shard) must fail the whole run, n]] - rationale - app/test_ingest.py
- [[An explicitly-disabled pdf cache () or an unset batch_size_log_path (None) mus]] - rationale - app/test_ingest.py
- [[Calling this on every startup must never re-run `migrate()` against an already-m]] - rationale - app/test_ingest.py
- [[FakePopen]] - code - app/test_ingest.py
- [[OG-492 two independently-built effective Configs that both resolve to the SAME]] - rationale - app/test_ingest.py
- [[Stand-in for `subprocess.Popen` -- records the argv it was launched with and ret]] - rationale - app/test_ingest.py
- [[T-DOC43 refuse to start with ONE clear message naming what's missing.]] - rationale - app/test_ingest.py
- [[T-DOC45T-DOC46 when a scratch config dir is in play, the single-worker path mu]] - rationale - app/test_ingest.py
- [[Tests for `app.ingest` (T-DOC19 bug fix) -- offline, no real DockerGPUnetwork]] - rationale - app/test_ingest.py
- [[The common (unedited) case `db_path` is relative (papers.db, the Config defau]] - rationale - app/test_ingest.py
- [[_args()]] - code - app/test_ingest.py
- [[_cfg()_1]] - code - app/test_ingest.py
- [[_reset_fake_popen()]] - code - app/test_ingest.py
- [[`--parse-workers N` (N1) must spawn exactly N `app.parse_phase` subprocesses, e]] - rationale - app/test_ingest.py
- [[`parse_workers=1` (the `--parse-workers` default) must be byte-for-byte the orig]] - rationale - app/test_ingest.py
- [[test_cleanup_scratch_dir_is_a_noop_for_none()]] - code - app/test_ingest.py
- [[test_cleanup_scratch_dir_removes_a_completed_runs_override_dir()]] - code - app/test_ingest.py
- [[test_cleanup_scratch_dir_tolerates_an_already_removed_dir()]] - code - app/test_ingest.py
- [[test_effective_config_limit_caps_corpus_cap()]] - code - app/test_ingest.py
- [[test_effective_config_limit_never_raises_corpus_cap_above_the_configured_value()]] - code - app/test_ingest.py
- [[test_effective_config_no_flags_returns_the_identical_config()]] - code - app/test_ingest.py
- [[test_effective_config_re_validates_and_rejects_a_bad_override()]] - code - app/test_ingest.py
- [[test_effective_config_scratch_and_limit_combine()]] - code - app/test_ingest.py
- [[test_effective_config_scratch_is_unique_per_call()]] - code - app/test_ingest.py
- [[test_effective_config_scratch_provisions_isolated_paths()]] - code - app/test_ingest.py
- [[test_ensure_db_migrated_auto_provisions_a_fresh_db()]] - code - app/test_ingest.py
- [[test_ensure_db_migrated_detects_unmigrated_db_via_missing_table()]] - code - app/test_ingest.py
- [[test_ensure_db_migrated_is_a_noop_on_an_already_migrated_db()]] - code - app/test_ingest.py
- [[test_ingest.py]] - code - app/test_ingest.py
- [[test_ingest_lock_path_differs_for_different_db_paths()]] - code - app/test_ingest.py
- [[test_ingest_lock_path_is_absolute_and_shared_across_configs_with_the_same_db_path()]] - code - app/test_ingest.py
- [[test_ingest_lock_path_resolves_a_relative_db_path_against_cwd()]] - code - app/test_ingest.py
- [[test_parse_workers_all_succeed_returns_normally()]] - code - app/test_ingest.py
- [[test_parse_workers_default_one_uses_original_subprocess_run()]] - code - app/test_ingest.py
- [[test_parse_workers_default_one_with_cwd_passes_cwd_kwarg()]] - code - app/test_ingest.py
- [[test_parse_workers_fails_the_run_if_any_worker_exits_nonzero()]] - code - app/test_ingest.py
- [[test_parse_workers_n_spawns_n_shard_subprocesses()]] - code - app/test_ingest.py
- [[test_parse_workers_n_with_cwd_passes_cwd_to_every_popen()]] - code - app/test_ingest.py
- [[test_preflight_gate_force_proceeds_despite_issues()]] - code - app/test_ingest.py
- [[test_preflight_gate_no_preflight_skips_the_check_entirely()]] - code - app/test_ingest.py
- [[test_preflight_gate_passes_silently_when_no_issues()]] - code - app/test_ingest.py
- [[test_preflight_gate_refuses_to_start_with_named_reason()]] - code - app/test_ingest.py
- [[test_validate_parse_workers_negative_exits_with_error()]] - code - app/test_ingest.py
- [[test_validate_parse_workers_one_is_accepted()]] - code - app/test_ingest.py
- [[test_validate_parse_workers_zero_exits_with_error()]] - code - app/test_ingest.py
- [[test_write_override_config_dir_leaves_falsy_path_fields_alone()]] - code - app/test_ingest.py
- [[test_write_override_config_dir_preserves_non_path_fields()]] - code - app/test_ingest.py
- [[test_write_override_config_dir_resolves_relative_paths_to_absolute()]] - code - app/test_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_ingestpy
SORT file.name ASC
```

## Connections to other communities
- 13 edges to [[_COMMUNITY_Config]]
- 7 edges to [[_COMMUNITY_FakeTeiLifecycle]]
- 5 edges to [[_COMMUNITY_PaperRef]]
- 4 edges to [[_COMMUNITY_test_embedder.py]]
- 3 edges to [[_COMMUNITY_migrate]]
- 3 edges to [[_COMMUNITY_FakeGpuLock]]
- 3 edges to [[_COMMUNITY_test_orchestrator.py]]
- 2 edges to [[_COMMUNITY_PermanentError]]
- 1 edge to [[_COMMUNITY_test_doctor.py]]
- 1 edge to [[_COMMUNITY_ingest.py]]
- 1 edge to [[_COMMUNITY_load_config]]
- 1 edge to [[_COMMUNITY_assembly.py]]
- 1 edge to [[_COMMUNITY_ParsedDoc]]
- 1 edge to [[_COMMUNITY_Figure]]

## Top bridge nodes
- [[test_ingest.py]] - degree 63, connects to 13 communities
- [[FakePopen]] - degree 15, connects to 6 communities
- [[_cfg()_1]] - degree 9, connects to 1 community
- [[test_ensure_db_migrated_is_a_noop_on_an_already_migrated_db()]] - degree 4, connects to 1 community
- [[.path()]] - degree 4, connects to 1 community