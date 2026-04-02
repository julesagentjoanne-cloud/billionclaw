# startupClaw - Decision Logic

## Purpose
Define how startupClaw should decide:
- likely startup stage
- likely bottleneck
- best next GTM move
- whether to keep things light or escalate into deeper diagnosis

## Simple overview
startupClaw should make decisions in this order:
1. understand the startup thesis
2. assess evidence vs assumption
3. place the startup in a likely stage
4. identify the likely bottleneck
5. recommend one best next move
6. decide whether deeper analysis is needed

## Decision order

### Step 1. Interpret the startup thesis
Use founder input plus external research to clarify:
- what the startup is building
- what problem it is trying to solve
- who likely has the problem
- what alternatives already exist
- what people are already doing today to solve the problem ([[Demand as Existing Behavior]])
- likely ICP and likely personas within that ICP ([[ICP vs Persona]])
- local optimum and global optimum audience options ([[Audience Expansion]])
- original buyer and alternative buyer options ([[Alternative Buyer Mapping]])
- which persona sees the problem as Cat vs Cheese ([[Cat vs Cheese Problems]])
- why someone may pay
- how close the solution is to revenue or obvious economic value ([[Revenue Proximity]])
- whether the founder has realistic channel leverage ([[Founder-Channel Fit]])
- what the initial wedge should be versus later expansion ([[Initial Wedge vs Expansion Path]])
- what a plausible compounding growth loop could be ([[Compounding Growth Loops]])
- why this matters now ([[Why Now]])
- what non-obvious edge/insight exists ([[Founding Insight]])
- what category story makes it easier to understand or sell ([[Category Story]])
- what distribution advantage may exist ([[Distribution Advantage]])
- what trust architecture is required to sell ([[Trust Architecture]])
- how end-user, manager, and executive perspectives differ or align ([[Domain Specialist Perspectives]])
- whether the wedge can expand into a large enough market ([[Wedge-to-Market Expansion]])
- whether the product can become embedded in a habit or workflow ([[Habit or Workflow Embedding]])
- where leverage should come from across founder/agents/systems ([[Leverage Architecture]])

### Step 2. Separate evidence from assumption
Classify what the startup currently has into:
- founder-provided belief
- AI-suggested hypothesis
- evidence-backed signal
- still unvalidated unknown

### Step 3. Infer likely stage
Use the strongest available signals to place the startup in one of 5 stages.

#### Stage 1 — Problem discovery
Use this stage when:
- the problem is still mostly a hypothesis
- target audience is unclear or broad
- little/no proof exists
- no strong customer validation exists yet

#### Stage 2 — Solution validation
Use this stage when:
- the problem looks plausible
- the startup has a proposed solution
- there is some early validation signal
- willingness to pay is still uncertain or lightly tested

#### Stage 3 — Early revenue
Use this stage when:
- the startup has early customers, pilots, or revenue
- acquisition is still inconsistent
- conversion and offer may still be fragile
- GTM is not yet reliably repeatable

#### Stage 4 — Repeatable acquisition
Use this stage when:
- at least one channel shows repeatable promise
- the startup can convert demand with some reliability
- there is enough signal to improve funnel performance systematically
- growth is possible, but still constrained by specific bottlenecks

#### Stage 5 — Scalable growth
Use this stage when:
- the startup has repeatable demand generation
- revenue is not purely founder-heroic
- operational, retention, measurement, or scaling bottlenecks matter more than basic validation

## Stage tie-break rule
If signals are mixed, choose the earliest stage that still appears unresolved.

Reason:
- a startup with some revenue can still be fundamentally in solution validation if the core value/willingness-to-pay loop is not stable yet.

## Step 4. Infer likely bottleneck
Use:
- founder input
- research signals
- stage logic
- [[Growth Bottleneck Framework]]
- [[Startup Assessment Scorecard]]

### Candidate bottlenecks
- demand
- positioning
- offer
- acquisition
- conversion
- activation
- retention
- operations
- measurement
- sequencing
- founder

### Bottleneck selection rules
#### Rule 1: prefer root cause over symptom
Example:
- low traffic may look like acquisition
- but if no one understands the value proposition, positioning may be the real bottleneck

#### Rule 2: use stage-aware bottlenecks
Example:
- early-stage startups are more likely to have problem / ICP / offer / positioning issues
- later-stage startups are more likely to have acquisition / conversion / retention / operational issues

#### Rule 3: evidence quality matters
If evidence is weak, startupClaw should prefer:
- “likely bottleneck” language
- plus a validation recommendation
instead of overconfident diagnosis

## Step 5. Recommend the best next move
startupClaw should recommend **one best next move**, not a list of ten.

### Selection logic
Choose the next move that:
- addresses the likely root bottleneck
- fits the current stage
- reduces the most uncertainty
- is realistic for the startup's current resources
- creates clearer signal for what to do next

## Stage-based recommendation rules

### If stage = Problem discovery
Prioritize moves that validate:
- audience
- pain
- urgency
- language

Best next moves often look like:
- run 10 customer interviews
- narrow ICP options
- validate problem intensity with forum/review/interview evidence

### If stage = Solution validation
Prioritize moves that validate:
- solution desirability
- willingness to pay
- strongest audience/pain pairing
- positioning clarity

Best next moves often look like:
- test a landing page / pitch
- validate willingness to pay with real conversations
- compare which audience reacts most strongly

### If stage = Early revenue
Prioritize moves that strengthen:
- offer clarity
- pricing
- conversion
- early customer quality

Best next moves often look like:
- tighten the offer
- reduce conversion friction
- focus on one high-signal customer segment

### If stage = Repeatable acquisition
Prioritize moves that improve:
- repeatable channel performance
- messaging
- funnel performance
- attribution / measurement

Best next moves often look like:
- improve channel focus
- improve funnel instrumentation
- improve positioning and conversion on the main channel

### If stage = Scalable growth
Prioritize moves that improve:
- leverage
- retention
- operational reliability
- decision quality
- founder dependency reduction

Best next moves often look like:
- reduce operational drag
- improve retention/expansion loops
- strengthen measurement and scaling processes

## Step 6. Decide whether to show deeper analysis
Default behavior:
- keep the default output simple
- show the one-page style snapshot first

Escalate into deeper analysis when:
- too many key unknowns remain
- the founder asks for more detail
- there is enough evidence to justify a deeper scorecard
- the startup complexity is high enough that the simple layer is not sufficient

## Confidence rule
Each major output should carry an implied confidence level based on:
- amount of founder detail
- quality of external research
- strength of evidence
- consistency of signals across sources

### Confidence bands
- **Low confidence** = mostly assumptions, weak evidence
- **Medium confidence** = some support, still meaningful uncertainty
- **High confidence** = multiple signals point in the same direction

### Confidence-driven behavior
- If confidence is **low**, startupClaw should default to a validation move instead of a scaling move.
- If confidence is **medium**, startupClaw can recommend a directional next move, but should make the remaining uncertainty explicit.
- If confidence is **high**, startupClaw can recommend a more committed next move and name the key metric or feedback loop to watch.

## Output rule
The founder-facing output should always answer:
1. what seems most likely?
2. what is still uncertain?
3. what should happen next?
4. how executable is this now: fully executable, partially executable, or blocked pending access?

## Founder decision surface rule
If the recommendation changes positioning, target audience, offer structure, or channel focus, startupClaw should also mark:
- what the founder should explicitly approve
- what can run automatically without approval
- what should become a visible product UI decision or review state

## Relationship to the broader system
startupClaw uses the light version of the deeper GTM logic.

If more precision is needed, it should hand off naturally into:
- [[Startup Assessment Scorecard]]
- [[Startup Intake Questionnaire]]
- [[Revenue Growth Diagnostic System]]

## Related
- [[startupClaw]]
- [[startupClaw - One Page Overview]]
- [[startupClaw - User Flow]]
- [[startupClaw - Input Template]]
- [[startupClaw - Output Template]]
- [[startupClaw - Recommendation Library]]
- [[startupClaw - Recommendation Output Rules]]
- [[Startup Assessment Scorecard]]
- [[Growth Bottleneck Framework]]
- [[Revenue Growth Diagnostic System]]
- [[GTM Advisory Operating System]]
