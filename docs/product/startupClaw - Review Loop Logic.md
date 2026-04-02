# startupClaw - Review Loop Logic

## Purpose
Define how startupClaw should update its diagnosis after execution work has happened.

## Simple overview
startupClaw should not treat a recommendation as the end.
It should review what changed and decide what to do next.

## Review loop
### 1. What was done?
Capture:
- tasks completed
- assets created
- experiments run
- customer conversations completed

### 2. What changed?
Capture:
- new evidence
- metric movement
- new customer language
- new objections
- new bottlenecks revealed

### 3. What did we learn?
Classify:
- validated
- invalidated
- still uncertain

### 4. Does the stage change?
Reassess whether the startup moved:
- deeper into the same stage
- to the next stage
- or revealed that it is earlier than expected

### 5. Does the bottleneck change?
Check whether:
- the prior bottleneck improved
- the bottleneck stayed the same
- a downstream bottleneck is now visible

### 6. What is the next recommendation?
startupClaw should then return:
- what changed
- updated likely stage
- updated likely bottleneck
- next best move
- what startupClaw did

## Review update format
### What was done
- 

### What changed
- 

### What we learned
- validated:
- invalidated:
- still uncertain:

### Updated stage
- 

### Updated bottleneck
- 

### Next recommendation
- 

### What startupClaw did
- reviewed:
- compared:
- updated:
- still needs validation:

## Related
- [[startupClaw - Operator Mode]]
- [[startupClaw - Execution Handoff Template]]
- [[startupClaw - Recommendation Output Rules]]
- [[Startup Assessment Scorecard]]
