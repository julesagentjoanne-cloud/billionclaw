# Stripe Integration Plan

## Goal
Integrate Stripe in a way that is simple, secure, and consistent with startupClaw's MVP.

## What Stripe should be used for first
Use Stripe for:
- buying execution agents
- buying premium reports / deeper analysis
- later, subscriptions if ongoing agent help becomes a product tier

## First integration pattern
### Recommended
- Stripe Checkout
- server-side session creation
- webhook-driven fulfillment

### Avoid initially
- complicated embedded custom billing flows
- client-trusted payment confirmation
- custom subscription state logic without webhooks

## Minimal architecture
### Frontend
- choose product/agent
- call backend route to create checkout session
- redirect to Stripe Checkout

### Backend
- route: create checkout session
- route: webhook handler
- server-side mapping of purchased SKU -> unlocked feature

## Required secrets
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_WEBHOOK_SECRET`

## Webhook events to care about first
- `checkout.session.completed`
- `payment_intent.succeeded`
- `customer.subscription.created` (later if subscriptions)
- `customer.subscription.updated` (later)
- `customer.subscription.deleted` (later)

## Fulfillment rule
Only mark an execution agent/product as paid after webhook confirmation.

## Suggested first purchasable items
- Validation Agent pack
- Messaging Agent pack
- Offer Agent pack
- GTM Execution Agent pack
- Premium startup report

## Related
- [[SECURITY.md]]
