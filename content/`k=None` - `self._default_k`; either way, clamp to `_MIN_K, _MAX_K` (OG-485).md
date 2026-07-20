---
source_file: "rag/mcp_server.py"
type: "rationale"
community: "McpServer"
location: "L140"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/McpServer
---

# `k=None` -> `self._default_k`; either way, clamp to `[_MIN_K, _MAX_K]` (OG-48#5)

## Connections
- [[._resolve_k()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/McpServer