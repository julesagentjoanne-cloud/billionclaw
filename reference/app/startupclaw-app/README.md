# startupClaw

startupClaw turns a founder's business statement into:
- a startup intelligence report
- audience expansion
- alternative buyer mapping
- demand evidence interpretation
- stage and bottleneck diagnosis
- one best next move
- optional execution-agent outputs

## MVP goal
A founder should be able to:
1. enter a simple business statement
2. get a useful report
3. choose one execution agent
4. receive one immediately useful generated asset

## Recommended stack
- Next.js
- TypeScript
- Tailwind CSS
- Vercel
- optional Supabase for persistence/auth
- Stripe Checkout for future paid execution agents

## Security baseline
See:
- `docs/SECURITY.md`
- `docs/STRIPE_INTEGRATION_PLAN.md`

## Repo structure
- `app/` -> app routes/pages
- `components/` -> UI components
- `lib/` -> orchestration logic, helpers
- `prompts/` -> prompt templates / structured instructions
- `data/` -> example startup cases
- `docs/` -> product/build specs

## Current local status
This is the initial local scaffold prepared for a coding AI agent.

## Build priorities
1. Landing page
2. Business statement input page
3. Report page
4. Agent recommendation section
5. Asset output page
6. One demo case

## Core product story
Turn one startup idea statement into a startup report and execution path.
