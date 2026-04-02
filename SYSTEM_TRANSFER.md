# SYSTEM_TRANSFER

## What this repo is
This repo contains the **startupClaw venture-studio intelligence layer** prepared for import into another system, especially **Paperclip**.

## One-sentence model
- **Paperclip** runs the system
- **startupClaw** decides how the venture studio should think, route work, and update startup state

## What should be imported first
### 1. PMF front door
- intake
- startup interpretation
- stage/bottleneck assessment
- PMF path generation
- next-agent routing

Files:
- `docs/methodology/startupClaw - PMF Intake and Pathfinding.md`
- `docs/workflows/startupClaw - Input Template.md`
- `docs/workflows/startupClaw - Decision Logic.md`

### 2. Expert-agent system
Import the expert-agent definitions and standards.

Files:
- `docs/methodology/Expert Agent Standard.md`
- `docs/methodology/startupClaw - Expert Roles and Skill Stacks.md`
- `agents/`

### 3. Execution-module system
Import the action modules the agents actually run.

Files:
- `modules/`

### 4. Startup state model
Import the startup workspace/state logic.

Files:
- `docs/product/startupClaw - Product Data Model - Startup Workspace.md`
- `docs/product/startupClaw - Execution Status and Tool Access Rule.md`
- `docs/product/startupClaw - Product Surfaces by Agent.md`

## Core rules that must survive the import
- Agents are modeled as venture-studio experts with domain + skill stack.
- Major outputs should use strategic decomposition before execution.
- The startup is treated as changing state over time, not a one-shot input.
- Tasks generate state updates, evidence objects, and field history.
- Founder override is allowed for key strategic truths.
- The system should always clarify what is executable now vs blocked by missing access.
- PMF pathfinding is a first-class mechanism.

## What is optional
- `reference/app/startupclaw-app/` is optional reference only.

## Best first deliverable in the target repo
A first successful import should produce:
1. startup intake + PMF pathfinding
2. imported agent definitions
3. imported execution modules
4. startup state/workspace model
5. import summary documenting what was merged and what still needs implementation
