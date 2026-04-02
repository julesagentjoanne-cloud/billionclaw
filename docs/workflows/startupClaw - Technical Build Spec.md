# startupClaw - Technical Build Spec

## Purpose
Provide a coding AI agent with a practical technical blueprint for building startupClaw.

## Product shape
### Frontend pages
1. Landing page
2. Business statement input page
3. Report results page
4. Agent selection page
5. Asset output page
6. Optional admin/demo/examples page

### Core product objects
- User (optional in MVP if anonymous flow is allowed)
- Project / Startup idea
- Input statement
- Report
- Recommendation
- Selected agent
- Generated asset
- Review update

## Suggested stack
Use a stack that is easy for coding agents to build and easy to host.

### Preferred
- Next.js
- TypeScript
- Tailwind CSS
- Vercel deployment
- Supabase (if persistence/auth needed)
- OpenAI-compatible LLM integration

### Reason
- fast to build
- easy to host
- good GitHub + CI flow
- popular and agent-friendly

## MVP architecture
### Frontend
- landing page
- form input for business statement
- structured report display
- card/list UI for agent options
- asset output display

### Backend/API
API routes or server functions for:
- interpret idea
- expand audiences
- map buyers
- generate report
- choose recommendation
- generate selected asset

### Persistence
For MVP, store:
- project input
- generated report
- selected agent
- generated assets

Can be:
- temporary session storage for fastest MVP
- Supabase/Postgres for durable projects

## Core backend functions
1. `interpretStartupIdea(input)`
2. `expandAudiences(input)`
3. `mapAlternativeBuyers(input)`
4. `scoreStageAndBottleneck(input, research)`
5. `generateFullReport(input, analysis)`
6. `recommendAgent(report)`
7. `generateAgentAsset(agentType, report)`
8. `reviewLoopUpdate(previousReport, newEvidence)`

## Prompting / orchestration layer
Use the startupClaw concepts as structured system logic, not just one giant prompt.

### Suggested orchestration order
1. idea interpretation
2. demand evidence lens
3. audience expansion
4. alternative buyer mapping
5. stage/bottleneck diagnosis
6. recommendation generation
7. agent recommendation
8. asset generation

## UI requirements
### Landing page
Must show:
- what goes in
- what comes out
- why it matters
- report example
- execution-agent concept

### Input page
- simple business statement input
- optional fields expandable
- clear CTA

### Results page
- startup report sections in readable cards
- one best next move highlighted
- recommended agent highlighted
- “what startupClaw did” transparency section

### Agent page
- cards for each agent
- what each produces
- recommended next agent first

### Asset page
- generated asset output
- copy/export functionality
- option to regenerate/refine

## Build phases
### Phase 1 - MVP
- landing page
- business statement input
- report generation
- one recommended agent
- 3-5 asset generators

### Phase 2
- persistence
- saved reports
- multiple agent support
- review loop

### Phase 3
- payment
- team/collab
- public report links
- templates/examples gallery

## Hosting
### Preferred deployment
- GitHub repo
- Vercel for frontend/app deployment
- Supabase for DB/auth if used
- environment variables for model/API keys

## Non-functional requirements
- fast load time
- readable report UI
- mobile-friendly enough for Product Hunt traffic
- easy demo path
- resilient error handling for model failures

## Related
- [[startupClaw - Product Requirements Document]]
- [[startupClaw - Orchestration Flow]]
- [[startupClaw - Full Report Template]]
