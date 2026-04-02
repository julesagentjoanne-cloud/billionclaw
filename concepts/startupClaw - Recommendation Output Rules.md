# startupClaw - Recommendation Output Rules

## Purpose
Define exactly how startupClaw should present recommendations so they are simple, actionable, and consistent.

## Simple overview
startupClaw recommendations should be output as:
- one **primary recommendation**
- one optional **secondary recommendation**
- a **prioritized checklist**
- the **top 3 actions to start with**
- one **success signal to watch**
- an optional **deeper path**

The goal is to help the founder move forward immediately without being overwhelmed.

## Core rule
Do not output a long strategy essay.
Do not output 10 equal-priority recommendations.
Do not output generic advice.

Output should always make it obvious:
- what the likely issue is
- why this is the priority now
- what to do first
- what signal will show progress

## Default recommendation format

### 1. Likely issue
- 

### 2. Why this is the priority now
- 

### 3. Primary recommendation
- Recommendation name:
- Related checklist:

### 4. Top 3 actions to start with
- [ ]
- [ ]
- [ ]

### 5. Full priority checklist
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]

### 6. Success signal to watch
- 

### 7. Confidence level
- Low / Medium / High

### 8. What startupClaw did
- researched:
- inferred:
- used signals from:
- still needs validation:

### 9. Execution status
- Fully executable now / Partially executable now / Blocked pending access
- If not fully executable:
  - what was prepared now:
  - what exact access/tool/account is still missing:

### 10. Optional deeper path
Only show if useful.
- deeper checklist / scorecard / intake option:

## Recommendation selection rule
### Always choose:
- one **primary** recommendation
- one **secondary** recommendation only if it directly supports the first

### Never choose:
- multiple unrelated priorities at once
- downstream optimization before upstream validation

## Output layering rule
### Founder-facing default
Keep it short:
- likely issue
- primary checklist
- top 3 actions
- success signal
- what startupClaw did

### Optional expanded version
Show only if requested or clearly useful:
- full checklist
- secondary recommendation
- deeper path
- more detailed reasoning
- execution handoff using [[startupClaw - Execution Handoff Template]]

## Stage-aware output rules

### Problem discovery
Default output should focus on:
- audience
- pain
- urgency
- validation

Avoid:
- heavy growth tactics
- scaling advice
- detailed channel optimization too early

### Solution validation
Default output should focus on:
- desirability
- willingness to pay
- offer strength
- positioning clarity

Avoid:
- scaling advice before value is validated

### Early revenue
Default output should focus on:
- offer/pricing
- conversion
- onboarding/activation
- strongest customer segment

### Repeatable acquisition
Default output should focus on:
- main channel quality
- messaging efficiency
- funnel performance
- measurement quality

### Scalable growth
Default output should focus on:
- retention
- operational leverage
- measurement / decision loops
- founder dependency reduction

## Bottleneck-aware output rules

### If bottleneck = demand
Output should prioritize:
- interviews
- pain validation
- urgency validation
- narrowing the best segment

### If bottleneck = positioning
Output should prioritize:
- value proposition clarity
- audience clarity
- problem framing
- message testing

### If bottleneck = offer
Output should prioritize:
- smallest useful offer
- package clarity
- value / pricing fit
- strongest outcome framing

### If bottleneck = acquisition
Output should prioritize:
- best-fit channel selection
- channel-message fit
- tighter distribution focus
- channel measurement

### If bottleneck = conversion
Output should prioritize:
- funnel mapping
- biggest drop-off point
- CTA clarity
- proof / objection handling

### If bottleneck = activation / onboarding
Output should prioritize:
- first value definition
- onboarding flow
- prompts / email sequence
- early drop-off instrumentation

### If bottleneck = retention
Output should prioritize:
- retained behavior definition
- cohort analysis
- repeat-value loop improvement
- lifecycle support

### If bottleneck = measurement
Output should prioritize:
- clear funnel stages
- key metrics definition
- one metric that matters
- decision-useful reporting

### If bottleneck = operations
Output should prioritize:
- recurring workflow cleanup
- SOP/checklist creation
- handoff fixes
- execution drag reduction

### If bottleneck = founder
Output should prioritize:
- identifying founder-only tasks
- delegation/systemization
- reducing decision bottlenecks

## Example output
### Likely issue
High first-month churn suggests the startup is failing to get users to first value fast enough.

### Why this is the priority now
If users churn before reaching value, adding more acquisition will likely waste effort.

### Primary recommendation
- Recommendation name: Improve onboarding and activation
- Related checklist: [[Onboarding Improvement Checklist]] + [[Activation Checklist]]

### Top 3 actions to start with
- [ ] define the first meaningful outcome clearly
- [ ] add a getting-started section or guided setup path
- [ ] create an onboarding email sequence tied to first-week milestones

### Success signal to watch
- increase in activation rate and lower first-month churn

### What startupClaw did
- researched likely pain points and likely alternatives
- inferred that users are dropping before first value
- used signals from churn pattern + activation/onboarding logic
- still needs validation through first-week drop-off instrumentation

### Optional deeper path
- [[Startup Assessment Scorecard]]

## Relationship to recommendation library
This note defines **how recommendations should be shown**.
[[startupClaw - Recommendation Library]] defines **what recommendations exist**.

## Related
- [[startupClaw - Recommendation Library]]
- [[startupClaw - Decision Logic]]
- [[startupClaw - Output Template]]
- [[Startup Assessment Scorecard]]
- [[Onboarding Checklist]]
- [[Activation Checklist]]
- [[Acquisition Checklist]]
- [[Retention Checklist]]
