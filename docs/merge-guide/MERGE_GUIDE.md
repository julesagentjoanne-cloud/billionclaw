# MERGE_GUIDE

## Goal
Help merge startupClaw into another system — especially Paperclip — without dragging along unnecessary local context.

## Best mental model
- Paperclip = operating system
- startupClaw = venture-studio intelligence and agent knowledge

## Merge layers

### 1. Knowledge-first merge (recommended)
Start with:
- `docs/methodology/`
- `agents/`
- `modules/`
- `concepts/`

This gives you:
- expert agents
- action modules
- reasoning standards
- venture-studio logic

### 2. Product/state model merge
Then use:
- `docs/product/`

This gives you:
- startup workspace model
- state updates / evidence / field history
- execution status rules
- product surfaces

### 3. Workflow/orchestration merge
Then use:
- `docs/workflows/`
- selected files from `modules/`

This gives you:
- orchestration
- decision routing
- task handoffs

### 4. Optional UI reference
Only if useful:
- `reference/app/startupclaw-app/`

## Recommended merge order
1. methodology
2. agents
3. modules
4. product/state model
5. workflows
6. optional app/UI reference

## Suggested first files to read
- `PAPERCLIP_MERGE_MAP.md`
- `docs/methodology/startupClaw.md`
- `docs/methodology/Expert Agent Standard.md`
- `agents/startupClaw - GTM Execution Agent.md`
- `agents/startupClaw - Creative Agent.md`
- `agents/startupClaw - Content Engine Agent.md`
- `docs/product/startupClaw - Product Data Model - Startup Workspace.md`

## What to review before pushing to GitHub
- local-machine path references
- duplicated docs that should be consolidated
- whether you want the reference app included at all
