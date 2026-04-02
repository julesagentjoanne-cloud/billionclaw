# startupClaw - Orchestration Flow

## Purpose
Define the complete swarm/orchestration workflow for startupClaw so it can move from intake to diagnosis to action to review without needing another architecture note.

## Simple overview
startupClaw should work like a coordinated operator swarm with a simple surface and a structured backend.

The founder should experience:
1. short input
2. clear diagnosis
3. one best next move
4. useful work getting done
5. review of what changed
6. next move

The system underneath should coordinate the right modules in the right order.

## Core orchestration rule
At any moment, startupClaw should answer:
- what is the current stage?
- what is the main bottleneck?
- what is the fastest next action to get better signal or movement?
- which module should do that work?
- what should be reported back clearly?

## Full startupClaw swarm flow

### Phase 1. Intake
#### Goal
Capture the startup as-is with the least friction possible.

#### Inputs
Use:
- [[startupClaw - Business Statement Mode]] as the default simple entry
- [[startupClaw - Input Template]] as the deeper path when needed

#### Output
- startup thesis
- known facts
- known assumptions
- missing information

#### Trigger to move on
- enough signal exists to interpret the startup thesis

---

### Phase 2. Interpretation
#### Goal
Turn messy founder input into a usable hypothesis map.

This phase should also interpret the startup through a startup-generation lens informed by:
- YC-style demand and speed-to-signal thinking
- Hexa-style repeatable company-building support
- Rocket-style preference for visible demand and repeatable execution

#### Main questions
- what are they building?
- what problem are they trying to solve?
- what are people already doing today? ([[Demand as Existing Behavior]])
- who is the likely ICP? ([[ICP vs Persona]])
- which personas inside that ICP might treat this as Cat vs Cheese? ([[Cat vs Cheese Problems]])
- how close is the solution to money? ([[Revenue Proximity]])
- what is the initial wedge? ([[Initial Wedge vs Expansion Path]])
- can the founder realistically win in the likely channel? ([[Founder-Channel Fit]])
- what growth loop could compound if this works? ([[Compounding Growth Loops]])
- why now? ([[Why Now]])
- what founding insight exists? ([[Founding Insight]])
- what category story is strongest? ([[Category Story]])
- what distribution advantage exists? ([[Distribution Advantage]])
- what trust architecture is required? ([[Trust Architecture]])
- how end-user, manager, and executive views differ or align ([[Domain Specialist Perspectives]])
- can the wedge expand into a larger market? ([[Wedge-to-Market Expansion]])
- can the product become embedded in a habit/workflow? ([[Habit or Workflow Embedding]])
- where should leverage come from? ([[Leverage Architecture]])

#### Primary module
- [[startupClaw - Action Modules - Research]]

#### Output
- likely ICP
- likely personas
- likely Cat persona
- likely demand signals
- likely revenue proximity
- likely initial wedge
- likely founder-channel fit
- likely compounding growth loop
- likely why-now story
- likely founding insight
- likely category story
- likely distribution advantage
- likely trust architecture needs
- likely wedge-to-market expansion path
- likely habit/workflow embedding path
- likely leverage architecture

#### Trigger to move on
- startup thesis is clear enough to score stage and bottleneck

---

### Phase 3. Diagnosis
#### Goal
Infer stage, bottleneck, and best next move.

#### Use
- [[startupClaw - Decision Logic]]
- [[Startup Assessment Scorecard]]
- [[Growth Bottleneck Framework]]

#### Output
- likely stage
- likely bottleneck
- one best next move
- confidence level

#### Rule
Do not give multiple competing priorities.
Converge on one main bottleneck and one main next move.

#### Trigger to move on
- there is enough confidence to recommend action

---

### Phase 4. Recommendation
#### Goal
Present the diagnosis in a simple founder-usable way.

#### Use
- [[startupClaw - Output Template]]
- [[startupClaw - Full Report Template]]
- [[startupClaw - Recommendation Output Rules]]
- [[startupClaw - Recommendation Library]]

#### Output
- what seems most likely
- what is still uncertain
- one primary recommendation
- top 3 actions
- success signal
- what startupClaw did
- optional buyable execution agent suggestion via [[startupClaw - Buyable Agent Catalog]]

#### Rule
Simple first.
Detailed path optional.

#### Trigger to move on
- if the founder wants help acting on the recommendation, or if startupClaw can immediately create useful work without extra founder time

---

### Phase 5. Module selection
#### Goal
Choose the right action module to do the next useful work.

#### Selection logic
Choose the module that:
1. addresses the likely root bottleneck
2. gets the fastest real signal
3. reduces uncertainty or friction most efficiently
4. requires the least extra founder time for the learning produced

#### Module map
##### If the need is unclear market / pain / audience
Use:
- [[startupClaw - Action Modules - Research]]
- [[startupClaw - Action Modules - Validation]]

##### If the need is unclear message / differentiation / resonance
Use:
- [[startupClaw - Action Modules - Messaging]]

##### If the need is unclear package / pricing / use case
Use:
- [[startupClaw - Action Modules - Offer]]

##### If the need is acquisition or GTM experimentation
Use:
- [[startupClaw - Action Modules - Growth Execution]]

##### If the need is campaign triage / budget direction / deciding what to pause or scale
Use:
- [[startupClaw - Action Modules - Kill-Scale]]

##### If the need is creative generation / creative refresh / ad testing breadth
Use:
- [[startupClaw - Action Modules - Creative Strategy]]
- [[Competitor Ad Intelligence]] as a supporting market-intelligence input

##### If the need is onboarding / activation / retention
Use:
- [[startupClaw - Action Modules - Onboarding & Retention]]

##### If the need is internal leverage / founder bottleneck / ops
Use:
- [[startupClaw - Action Modules - Operator Systems]]

#### Output
- chosen module
- why this module was selected
- expected artifact/output
- execution status: fully executable now, partially executable now, or blocked pending access
- whether the next step should also appear as a visible product UI state or review step

---

### Phase 6. Execution handoff
#### Goal
Convert diagnosis into a work package.

#### Use
- [[startupClaw - Execution Handoff Template]]

#### Output
- objective
- why this matters now
- priority checklist
- top 3 tasks
- assets to create
- success signal
- review point
- what startupClaw did

#### Rule
Execution handoff should be specific enough that work can start immediately.

---

### Phase 7. Asset generation
#### Goal
Actually produce the useful work product.

#### Use
- [[startupClaw - Asset Generators]]

#### Examples
- interview script
- willingness-to-pay test script
- landing page draft
- value proposition variants
- pricing test plan
- onboarding email sequence
- getting-started checklist
- delegation matrix
- SOP starter outline

#### Output
- generated asset(s)
- how to use them
- what result to watch

#### Rule
Do not just say what should be done if startupClaw can generate the next useful asset now.

---

### Phase 8. Work log / operator update
#### Goal
Make startupClaw feel like part of the team.

#### Output format
- what I found
- what I think is happening
- what I did
- what changed
- what is next

#### Rule
Always report action in a way that makes progress visible.

---

### Phase 9. Review loop
#### Goal
Update the diagnosis after action has happened.

#### Use
- [[startupClaw - Review Loop Logic]]

#### Inputs
- what was done
- new evidence
- metric movement
- new objections
- new customer language

#### Output
- updated stage
- updated bottleneck
- updated recommendation
- updated confidence
- what startupClaw did

#### Rule
The review loop should decide whether:
- stay in the same stage with better clarity
- move to next stage
- re-open an earlier assumption that turned out weaker than expected

---

## Built-in stopping rules
startupClaw should stop expanding work when:
- one useful work package has been created and handed off clearly
- additional analysis would not improve the next action much
- the founder has enough to act now
- the next best move requires new market feedback first

## Built-in escalation rules
startupClaw should escalate into deeper analysis when:
- the startup is complex enough that the simple layer is insufficient
- confidence is low and the decision matters materially
- multiple bottlenecks compete and need deeper scoring
- there is enough data to justify full scorecarding

## Built-in speed rules
- prefer fastest route to market signal
- prefer root cause over symptom
- prefer action over analysis when a useful asset can be created now
- prefer one main bottleneck over many minor ones
- prefer simple founder-facing outputs over framework dumps

## Built-in team-member rules
startupClaw should feel like:
- a coordinated operator
- a practical teammate
- a system that helps move work forward

Not like:
- a generic consultant report
- a static form tool
- a pile of disconnected recommendations

## Final operating model
### Surface layer
- simple input
- simple snapshot
- one next move

### Orchestration layer
- specialized modules
- selection logic
- execution handoff
- asset generation
- work logging
- review loop

### Outcome
A startup moves from:
- unclear idea / unclear bottleneck

to:
- structured diagnosis
- immediate useful work
- updated learning loop
- repeated movement toward revenue and growth

## Related
- [[Orchestrated Intelligence]]
- [[startupClaw]]
- [[startupClaw - One Page Overview]]
- [[startupClaw - Operator Mode]]
- [[startupClaw - Action Modules]]
- [[startupClaw - Execution Handoff Template]]
- [[startupClaw - Asset Generators]]
- [[startupClaw - Review Loop Logic]]
- [[Startup Assessment Scorecard]]
- [[GTM Advisory Operating System]]
