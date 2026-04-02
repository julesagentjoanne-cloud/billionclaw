# startupClaw - Product Data Model - Startup Workspace

## Purpose
Define the core product data model for making startupClaw stateful over time instead of a one-shot report generator.

## Core rule
The startup should be stored as a changing object, not only as the initial founder input.

## Primary objects
### 1. Startup Workspace
Persistent record for one startup.

Fields:
- startup id
- startup name
- original input
- current stage
- current bottleneck
- recommended next agent
- current confidence summary
- last updated

### 2. State Field
Tracked strategic field that can change over time.

Examples:
- best audience
- best buyer
- best offer
- best channel
- best message
- current traction signal
- current proof level
- current trust level
- current stage

Per field store:
- current value
- confidence
- source task/agent
- founder override or not
- previous values
- last updated

### 3. Hypothesis
A candidate being explored.

Examples:
- audience = agencies
- audience = founder-led SaaS
- buyer = RevOps leader

Statuses:
- proposed
- researching
- tested
- winning
- rejected
- parked

### 4. Task
A unit of work assigned to an agent.

Fields:
- task id
- agent
- title
- status
- what AI is doing
- what is expected from user
- blocked reason if any
- outputs created
- resulting state updates

### 5. Output
Generated work product linked to a task.

### 6. State Update
A proposed or accepted change to startup state.

Fields:
- field changed
- old value
- new value
- confidence
- why it changed
- source task
- accepted/rejected/edited

### 7. Field History Entry
A durable history trail for a strategic field.

Fields:
- field id / label
- old value
- new value
- reason
- source

### 8. Evidence Object
Evidence attached to a strategic field or change.

Fields:
- field id / label
- summary
- source
- confidence

### 9. Timeline Event
Historical log of meaningful changes.

## UI rule
The product should make it easy to see:
- current startup stage
- current best hypotheses
- what was tested
- what changed
- what each agent did
- what still needs user confirmation or access

## Related
- [[startupClaw - Product Surfaces by Agent]]
- [[startupClaw - Execution Status and Tool Access Rule]]
