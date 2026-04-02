# startupclaw-private

A curated **knowledge-first** local export repo for the startupClaw venture-studio system.

## Intended architecture
- **Paperclip** -> operating system / runtime
- **startupClaw** -> venture-studio intelligence layer

This repo is mainly for:
- startupClaw knowledge
- agent definitions
- action modules
- methodology
- product/state logic

## Fastest handoff path
If you want another coding agent (like Claude Code) to ingest this repo, start with:
1. `CLAUDE_CODE_PROMPT.txt`
2. `CLAUDE_CODE_HANDOFF.md`
3. `PAPERCLIP_IMPORT_CHECKLIST.md`
4. `PAPERCLIP_MERGE_MAP.md`
5. `STARTUPCLAW_MASTER_INDEX.md`
6. `SYSTEM_TRANSFER.md`
7. `REPO_INVENTORY.md`

## Start here manually
1. `PAPERCLIP_MERGE_MAP.md`
2. `STARTUPCLAW_MASTER_INDEX.md`
3. `docs/methodology/startupClaw - PMF Intake and Pathfinding.md`

## What matters most here
### 1. `agents/`
The expert-agent layer.

### 2. `modules/`
The execution-module layer.

### 3. `docs/`
Methodology, workflows, product/state logic, merge guidance.

### 4. `concepts/`
Supporting concepts and product-integration notes.

## Optional reference
- `reference/app/startupclaw-app/`

This is included only as reference implementation.
If Paperclip is the OS, this is not the main thing to merge first.

## Recommended use
1. Start with the handoff files if another agent will ingest this repo
2. Read `STARTUPCLAW_MASTER_INDEX.md`
3. Read `docs/methodology/`
4. Move into `agents/` and `modules/`
5. Use `docs/product/` for state/workspace logic
6. Use the reference app only if you want UI ideas

## Excluded intentionally
- personal memory files
- unrelated workspace projects
- env files and secrets
- node_modules / build outputs

## Current status
This is a **local repo**, not yet pushed to GitHub.

# billionclaw
