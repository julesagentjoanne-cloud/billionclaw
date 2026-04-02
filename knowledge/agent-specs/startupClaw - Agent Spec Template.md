# startupClaw - Agent Spec Template

## Purpose
Template for defining a startupClaw agent as durable operating logic before product integration.

## How to use
For every meaningful new agent, define the agent with this structure before or alongside UI implementation.

## Template
### 1. Agent name
- clear name

### 2. Purpose
- what job this agent exists to do

### 3. Simple overview
- one short explanation in plain language

### 4. Expert role, domain, and skill stack
- expert role name
- domain owned
- specific sub-skills inside that domain

### 5. When to use
- trigger conditions
- startup stages where it is most useful
- bottlenecks it addresses

### 6. Inputs
- what information/data/assets it needs

### 7. Core workflow
- step 1
- step 2
- step 3
- step 4

### 8. Pre-output reasoning pattern
- principle questions: what makes a strong output in this domain?
- decision questions: what tradeoffs or criteria matter most?
- application questions: how should those principles be applied to this startup specifically?

### 9. Decision rules
- how it decides what to recommend, generate, flag, or prioritize
- include explicit rules for prioritization, missing data, weak evidence, and when to escalate to human review

### 10. Outputs
- what it produces
- what the founder/team receives

### 11. Quality standard
- what good output looks like
- links to [[Expert Agent Standard]] where relevant

### 12. Failure modes
- common mistakes
- weak outputs to avoid
- when human review is required

### 13. Success signals
- what outcomes suggest the agent is working

### 14. Related agents/modules
- connected agents
- upstream/downstream modules

### 15. Notes for future product integration
- what parts should eventually be visible in the product
- should this map into product UI now, later, or remain mostly backend?
- what user-facing state, approval step, or editable surface would make the value obvious?

### 16. Execution status note
- is this agent fully executable now, only partially executable now, or blocked by missing tools/integrations/accounts?
- what assumptions or access constraints should be surfaced clearly to the founder?
- what part is AI-preparable now vs what still requires founder action or external system access?

### 17. Product mapping decision
- should this map into product UI now, later, or remain mostly backend?
- if now, what is the smallest visible product surface that makes the value obvious?
- if later, what condition should trigger promotion into UI?

## Related
- [[startupClaw - Product Integration Template]]
- [[startupClaw - Product UI Mapping Checklist]]
- [[startupClaw - Buyable Agent Catalog]]
- [[startupClaw - Orchestration Flow]]
