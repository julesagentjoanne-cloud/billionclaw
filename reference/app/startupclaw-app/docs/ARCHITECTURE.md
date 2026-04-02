# Technical Architecture

## Suggested stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel deployment
- optional Supabase persistence
- OpenAI-compatible LLM integration

## Pages
- `/` landing page
- `/analyze` business statement form
- `/report` generated report page
- `/agents` execution agent selection
- `/asset` generated asset output

## Core backend functions
- `interpretStartupIdea(input)`
- `expandAudiences(input)`
- `mapAlternativeBuyers(input)`
- `scoreStageAndBottleneck(input, research)`
- `generateFullReport(input, analysis)`
- `recommendAgent(report)`
- `generateAgentAsset(agentType, report)`

## First generated assets
- interview script
- landing page draft
- pricing test plan

## Data model
- Project
- InputStatement
- Report
- Recommendation
- AgentSelection
- GeneratedAsset
