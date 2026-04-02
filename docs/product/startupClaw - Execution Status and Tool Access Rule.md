# startupClaw - Execution Status and Tool Access Rule

## Purpose
Make it explicit when startupClaw can fully execute work and when it is blocked by missing tool access, missing integrations, or account requirements.

## Core rule
When recommending or planning work, always distinguish between:
- what can be done directly now
- what can be partially prepared now
- what still requires user help because access is missing

## Status labels
### 1. Fully executable now
Use when the needed files, logic, and available tools are enough to complete the task directly.

### 2. Partially executable now
Use when startupClaw can do some of the work now, but a later step depends on an external tool, missing integration, or account access.

### 3. Blocked pending access
Use when the task depends on:
- a missing MCP/integration
- a third-party account the assistant cannot create or access
- credentials, API keys, OAuth approval, or human login
- tool permissions not currently available

## Communication rule
When a task is not fully executable, explicitly say:
- what was completed
- what remains
- what exact access/tool/account is missing
- whether the missing piece is optional or required

## Common examples
- Can design the workflow, prompts, spec, and UI mapping now
- Cannot create or log into a third-party SaaS account unless the user provides access
- Cannot use an unavailable MCP/integration if it is not connected in the current environment
- Can prepare import files, SOPs, and templates even when direct execution is blocked

## Product rule
If a future product feature depends on unavailable external tools, still define:
- the ideal integration path
- the fallback/manual path
- the UI state for blocked or missing access

## Related
- [[startupClaw - Product Integration Template]]
- [[startupClaw - Product UI Mapping Checklist]]
- [[startupClaw - Agent Spec Template]]
