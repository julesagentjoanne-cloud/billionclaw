# startupClaw - Expert Roles and Skill Stacks

## Purpose
Define startupClaw agents as venture-studio expert roles with clear domains and skill stacks.

## Simple overview
A startupClaw agent should not just be a label like "GTM" or "creative".
It should behave like an expert a venture studio would hire for a specific domain.

Each expert has:
- a **domain** -> the territory they own
- a **job** -> the outcome they are hired to produce
- a **skill stack** -> the specific sub-skills they apply inside that domain

## Core rule
Model each startupClaw agent as:
- one expert role
- with one primary domain
- and a clear set of sub-skills inside that domain

This avoids vague agents and makes product integration easier.

## Example
### GTM Engineer
**Domain:** go-to-market execution

**Job:** create pipeline and learning through outbound/inbound experiments

**Skill stack:**
- prospect discovery
- segmentation
- list building
- outreach sequencing
- message crafting
- targeting logic
- channel testing
- reply handling
- pipeline feedback analysis

This is stronger than calling something just "GTM Agent" without skill detail.

## Why this matters
### 1. Better agent quality
A role with explicit skills is easier to design well.

### 2. Better orchestration
The system can route work based on sub-skills, not only broad categories.

### 3. Better UI
A founder can understand what the expert actually does.

### 4. Better product expansion
It becomes easier to add new expert roles and keep them consistent.

## Design rule for all agents
When defining a new agent, specify:
- expert role name
- domain owned
- sub-skills included
- outputs produced
- where it appears in the product

## Related
- [[Expert Agent Standard]]
- [[startupClaw - Agent Spec Template]]
- [[startupClaw - Product Integration Template]]
- [[startupClaw - Buyable Agent Catalog]]
