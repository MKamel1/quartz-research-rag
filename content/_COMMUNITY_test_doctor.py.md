---
type: community
cohesion: 0.05
members: 74
---

# test_doctor.py

**Cohesion:** 0.05 - loosely connected
**Members:** 74 nodes

## Members
- [[.__init__()_9]] - code - app/test_doctor.py
- [[.__str__()]] - code - app/doctor.py
- [[A held `.gpu.lock` at preflight time means another real ingestserve process alr]] - rationale - app/doctor.py
- [[Best-effort start both TEI containers back up, then block (bounded by     `_TEI]] - rationale - app/tei_lifecycle.py
- [[Best-effort stop both TEI containers so their VRAM is freed for MinerU during P]] - rationale - app/tei_lifecycle.py
- [[Client_2]] - code
- [[Client_4]] - code
- [[Every T-DOC43T-DOC52 check in one call -- disk, GPUVRAM, `.gpu.lock`, every re]] - rationale - app/doctor.py
- [[Free disk headroom at `path` (default cwd -- where `db_path``blob_dir` land by]] - rationale - app/doctor.py
- [[Health-ping every required service. T-DOC52 if either TEI endpoint is unhealthy]] - rationale - app/doctor.py
- [[Namespace_3]] - code
- [[One clear message naming everything that's missing (T-DOC43 refusing to start]] - rationale - app/doctor.py
- [[Path_16]] - code
- [[PreflightIssue]] - code - app/doctor.py
- [[Reuses `appgpu_headroom.py`'s real, already-built VRAM probe (T-DOC43 reuse]] - rationale - app/doctor.py
- [[T-DOC43 one clear message naming what's missing -- multiple simultaneous prob]] - rationale - app/test_doctor.py
- [[T-DOC43 a down service must be named, not just something failed.]] - rationale - app/test_doctor.py
- [[T-DOC43 refuse to start with one clear message naming every missing prerequisit]] - rationale - app/ingest.py
- [[T-DOC52 a down TEI endpoint gets one recovery attempt through the already-teste]] - rationale - app/test_doctor.py
- [[TEI (Text Embeddings Inference) container lifecycle — evict the Embedder+Reranke]] - rationale - app/tei_lifecycle.py
- [[Tests for `app.doctor` (T-DOC43T-DOC52) -- offline, no real DockerGPUnetwork]] - rationale - app/test_doctor.py
- [[Tests for `app.tei_lifecycle` (T-DOC19) -- offline, no real DockerGPUnetwork c]] - rationale - app/test_tei_lifecycle.py
- [[The probe must release its own zero-timeout acquire immediately -- a real orches]] - rationale - app/test_doctor.py
- [[The two containerized health-only services must never trigger a `docker start` -]] - rationale - app/test_doctor.py
- [[_FakeUsage]] - code - app/test_doctor.py
- [[_Service]] - code - app/doctor.py
- [[_all_healthy()]] - code - app/test_doctor.py
- [[_cfg()]] - code - app/test_doctor.py
- [[_healthy_client()]] - code - app/test_tei_lifecycle.py
- [[_is_healthy()]] - code - app/doctor.py
- [[_is_healthy()_1]] - code - app/tei_lifecycle.py
- [[_parse_args()_1]] - code - app/doctor.py
- [[_preflight_gate()]] - code - app/ingest.py
- [[`appgpu_headroom.py`'s own contract `None` on any failure -- doctor must treat]] - rationale - app/test_doctor.py
- [[`python -m app.doctor` -- T-DOC43T-DOC52 preflight readiness check + service a]] - rationale - app/doctor.py
- [[check_disk_headroom()]] - code - app/doctor.py
- [[check_gpu_headroom()]] - code - app/doctor.py
- [[check_gpu_lock_free()]] - code - app/doctor.py
- [[check_services()]] - code - app/doctor.py
- [[doctor.py]] - code - app/doctor.py
- [[format_issues()]] - code - app/doctor.py
- [[httpx.ConnectError (e.g. the container isn't listening yet) must count as not r]] - rationale - app/test_tei_lifecycle.py
- [[main()_1]] - code - app/doctor.py
- [[run_preflight()]] - code - app/doctor.py
- [[start_tei_containers()]] - code - app/tei_lifecycle.py
- [[stop_tei_containers()]] - code - app/tei_lifecycle.py
- [[tei_lifecycle.py]] - code - app/tei_lifecycle.py
- [[test_check_disk_headroom_fails_with_named_reason_when_low()]] - code - app/test_doctor.py
- [[test_check_disk_headroom_passes_when_plenty_free()]] - code - app/test_doctor.py
- [[test_check_gpu_headroom_fails_when_probe_cannot_read_vram()]] - code - app/test_doctor.py
- [[test_check_gpu_headroom_fails_with_named_reason_when_low()]] - code - app/test_doctor.py
- [[test_check_gpu_headroom_passes_when_plenty_free()]] - code - app/test_doctor.py
- [[test_check_gpu_lock_free_fails_with_named_reason_when_held()]] - code - app/test_doctor.py
- [[test_check_gpu_lock_free_never_holds_the_lock_past_returning()]] - code - app/test_doctor.py
- [[test_check_gpu_lock_free_passes_when_unheld()]] - code - app/test_doctor.py
- [[test_check_services_auto_starts_a_down_tei_container_via_tei_lifecycle()]] - code - app/test_doctor.py
- [[test_check_services_fails_with_named_reason_when_a_service_is_down()]] - code - app/test_doctor.py
- [[test_check_services_no_auto_start_never_attempts_a_restart()]] - code - app/test_doctor.py
- [[test_check_services_passes_when_everything_healthy()]] - code - app/test_doctor.py
- [[test_check_services_reports_multiple_down_services_in_one_pass()]] - code - app/test_doctor.py
- [[test_check_services_reports_tei_as_down_if_auto_start_does_not_fix_it()]] - code - app/test_doctor.py
- [[test_doctor.py]] - code - app/test_doctor.py
- [[test_health_only_services_never_shell_out_to_docker()]] - code - app/test_doctor.py
- [[test_run_preflight_fails_with_named_reason_when_a_service_is_down()]] - code - app/test_doctor.py
- [[test_run_preflight_passes_when_everything_healthy()]] - code - app/test_doctor.py
- [[test_run_preflight_reports_every_kind_of_issue_at_once()]] - code - app/test_doctor.py
- [[test_start_tei_containers_polls_until_both_endpoints_are_healthy()]] - code - app/test_tei_lifecycle.py
- [[test_start_tei_containers_runs_docker_start_with_both_container_names()]] - code - app/test_tei_lifecycle.py
- [[test_start_tei_containers_swallows_a_connection_error_as_unhealthy()]] - code - app/test_tei_lifecycle.py
- [[test_start_tei_containers_swallows_docker_start_failure_and_still_polls_health()]] - code - app/test_tei_lifecycle.py
- [[test_start_tei_containers_times_out_and_logs_a_warning_if_never_healthy()]] - code - app/test_tei_lifecycle.py
- [[test_stop_tei_containers_is_best_effort_and_swallows_failures()]] - code - app/test_tei_lifecycle.py
- [[test_stop_tei_containers_runs_docker_stop_with_both_container_names()]] - code - app/test_tei_lifecycle.py
- [[test_tei_lifecycle.py]] - code - app/test_tei_lifecycle.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_doctorpy
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_Config]]
- 4 edges to [[_COMMUNITY_load_config]]
- 3 edges to [[_COMMUNITY_assembly.py]]
- 3 edges to [[_COMMUNITY_ingest.py]]
- 2 edges to [[_COMMUNITY_test_benchmark.py]]
- 2 edges to [[_COMMUNITY_AdaptiveBatchSizer]]
- 1 edge to [[_COMMUNITY_test_ingest.py]]
- 1 edge to [[_COMMUNITY_build_ingestion_orchestrator]]

## Top bridge nodes
- [[doctor.py]] - degree 21, connects to 6 communities
- [[test_doctor.py]] - degree 33, connects to 3 communities
- [[tei_lifecycle.py]] - degree 9, connects to 3 communities
- [[_preflight_gate()]] - degree 5, connects to 2 communities
- [[run_preflight()]] - degree 14, connects to 1 community