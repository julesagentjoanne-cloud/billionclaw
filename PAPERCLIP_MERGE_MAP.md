# PAPERCLIP_MERGE_MAP

## Purpose
Map startupClaw knowledge into Paperclip as the operating system.

## Core idea
- **Paperclip** -> runtime / operating system
- **startupClaw** -> venture-studio intelligence layer

## Start here
1. `STARTUPCLAW_MASTER_INDEX.md`
2. `docs/methodology/startupClaw - PMF Intake and Pathfinding.md`
3. `agents/`
4. `modules/`

## What to merge first into Paperclip
### 1. PMF intake and pathfinding
Use:
- `docs/methodology/startupClaw - PMF Intake and Pathfinding.md`
- `docs/workflows/startupClaw - Input Template.md`
- `docs/workflows/startupClaw - Decision Logic.md`

This gives Paperclip the intake + diagnosis + PMF-path front door.

### 2. Agent definitions
Use:
- `agents/`

These define:
- expert role
- domain
- skill stack
- when to use
- outputs
- pre-output reasoning pattern

### 3. Execution modules
Use:
- `modules/`

These define reusable work behaviors the agents can run.

### 4. Core standards and methodology
Use:
- `docs/methodology/`
- `docs/workflows/`
- `docs/product/`

This gives Paperclip:
- expert quality bar
- orchestration logic
- startup workspace/state model
- execution-status rules

### 5. Concepts and supporting notes
Use:
- `concepts/`

## Optional reference only
### App/UI implementation
Use only if helpful:
- `reference/app/startupclaw-app/`

This is not the main merge target if Paperclip is the real operating system.

## Recommended Paperclip merge order
1. PMF intake/pathfinding
2. methodology
3. agent definitions
4. execution modules
5. state model / product logic
6. optional UI ideas from reference app
