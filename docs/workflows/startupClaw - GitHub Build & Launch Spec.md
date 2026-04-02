# startupClaw - GitHub Build & Launch Spec

## Purpose
Make it possible for a coding AI agent to build startupClaw from GitHub and prepare it for launch with minimal human intervention.

## Build objective
A coding agent should be able to:
1. create/update the GitHub repo
2. scaffold the app
3. implement the MVP
4. deploy it
5. prepare launch assets
6. leave the project in a state where Jules only needs to decide to launch

## Repository structure
### Suggested repo
- `/app` or `/src/app` -> Next.js app routes/pages
- `/components` -> UI components
- `/lib` -> orchestration logic, prompts, helpers
- `/prompts` -> structured prompt definitions if separated
- `/data` -> static examples / demo cases
- `/docs` -> launch notes / setup notes

## Branching / delivery rule
The coding agent should:
- build on a clean main branch or feature branch
- commit logical milestones
- keep a `README.md` with setup and launch steps
- keep `.env.example`

## Environment requirements
- LLM API key
- Supabase keys if persistence is used
- analytics key optional
- product URL/domain optional

## Launch-ready deliverables
### Product
- deployed app
- functioning input -> report flow
- functioning agent selection flow
- at least 3 generated asset types
- clean landing page

### Launch assets
- Product Hunt tagline options
- short description
- maker comment draft
- screenshot list / feature visual list
- one demo case preloaded
- one shareable report example

## Coding agent checklist
- [ ] create project scaffold
- [ ] implement landing page
- [ ] implement business statement input
- [ ] implement full report output
- [ ] implement recommendation block
- [ ] implement agent catalog UI
- [ ] implement at least 3 asset generators
- [ ] implement example/demo case
- [ ] deploy to hosting
- [ ] create README with launch instructions
- [ ] prepare launch assets

## “Launch” state definition
The project is ready for launch when:
- app is deployed
- demo flow works end to end
- screenshots can be taken from real UI
- at least one report and one agent flow are impressive enough to demo publicly
- launch copy is prepared
- only a final human go/no-go is needed

## Related
- [[startupClaw - Product Requirements Document]]
- [[startupClaw - Technical Build Spec]]
- [[startupClaw - Product Hunt Launch Checklist]]
