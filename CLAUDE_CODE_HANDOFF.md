# CLAUDE_CODE_HANDOFF

Use this file as the starting prompt/context for Claude Code when importing startupClaw into another repo.

## Objective
Extract the startupClaw knowledge, agent system, workflows, and product/state logic from this repo and merge the relevant parts into the target repo.

## High-level architecture
- **Paperclip** = operating system / runtime / orchestration environment
- **startupClaw** = venture-studio intelligence layer

Do not treat this repo as an app-first product.
Treat it primarily as a knowledge-and-agents system.

## What matters most
### 1. PMF intake + pathfinding
Read first:
- `docs/methodology/startupClaw - PMF Intake and Pathfinding.md`
- `docs/workflows/startupClaw - Input Template.md`
- `docs/workflows/startupClaw - Decision Logic.md`

### 2. Core methodology
Read:
- `docs/methodology/startupClaw.md`
- `docs/methodology/Expert Agent Standard.md`
- `docs/methodology/startupClaw - Expert Roles and Skill Stacks.md`

### 3. Expert agents
Read:
- `agents/`

Prioritize first:
- GTM Execution Agent
- Creative Agent
- Content Engine Agent
- Community Agent
- Messaging Agent
- Offer Agent

### 4. Execution modules
Read:
- `modules/`

### 5. Product/state logic
Read:
- `docs/product/startupClaw - Product Data Model - Startup Workspace.md`
- `docs/product/startupClaw - Product Surfaces by Agent.md`
- `docs/product/startupClaw - Execution Status and Tool Access Rule.md`

### 6. Workflow/orchestration
Read:
- `docs/workflows/startupClaw - Orchestration Flow.md`
- `docs/workflows/startupClaw - Execution Handoff Template.md`

## Merge strategy
1. absorb methodology and standards
2. absorb PMF intake/front-door logic
3. absorb agent specs
4. absorb action modules
5. absorb state/workspace logic
6. only then consider UI/reference app ideas if useful

## Key rules to preserve
- agents are modeled as venture-studio experts with domain + skill stack
- major outputs use strategic decomposition before execution
- startup state evolves over time through tasks, state updates, evidence, and field history
- founder can override key truths
- system should clearly distinguish what is executable now vs blocked by missing access
- PMF path generation is a first-class mechanism, not a side note

## What to ignore initially
- the reference app unless UI ideas are needed
- any implementation detail that does not help Paperclip ingest the knowledge/logic

## Deliverable expectation
After reading this repo, produce in the target repo:
- a mapped startupClaw methodology layer
- imported or adapted agent definitions
- imported or adapted execution modules
- startup intake + PMF pathfinding logic
- state/workspace model for startup evolution
- a short summary of what was merged, what was adapted, and what still needs manual design
