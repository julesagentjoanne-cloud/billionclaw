# startupClaw Security Notes

## Purpose
Define the baseline security posture for startupClaw and prepare the app for safe future Stripe integration.

## Current baseline
- security headers via `src/middleware.ts`
- `.env.example` with explicit server/client variable separation
- no client-side handling of payment secrets
- no auth/persistence/payment logic implemented yet

## Security principles
### 1. Secrets stay server-side
Never expose:
- Stripe secret key
- webhook secret
- admin tokens
- server-only model keys

Use client-side env vars only for values explicitly intended for the browser.

### 2. Payments should use Stripe Checkout / server routes first
For the first payment version, prefer:
- server-side checkout session creation
- Stripe-hosted checkout
- webhook confirmation server-side

Avoid custom payment flows early unless there is a strong reason.

### 3. Trust webhooks, not redirects
After payment, do not trust only the browser redirect.
Use Stripe webhooks to confirm:
- payment succeeded
- subscription is active
- product entitlements should be granted

### 4. Validate all inputs server-side
Business statement input, agent requests, and future payment/account data must be validated server-side even if also validated in the UI.

### 5. Minimize sensitive storage
Only store what is necessary.
Do not store raw payment details.
If user accounts are added later, keep PII minimal.

## Stripe-ready implementation rules
### Environment variables
Use names like:
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_WEBHOOK_SECRET`

Rule:
- only `NEXT_PUBLIC_*` values may reach the browser
- all payment logic requiring secrets runs on the server

### Suggested payment flow
1. user chooses an agent/product
2. frontend calls a server route
3. server creates Stripe Checkout session
4. Stripe handles payment UI
5. webhook confirms payment/subscription
6. app unlocks the purchased execution flow

### Access control rule
Do not grant paid features on the client just because the UI says payment completed.
Grant them only after verified server-side confirmation.

## Hardening checklist
- [ ] keep secrets out of the client bundle
- [ ] add server-side validation for all submitted data
- [ ] use Stripe Checkout first
- [ ] verify Stripe webhooks
- [ ] log security-relevant failures cleanly
- [ ] keep dependencies updated
- [ ] avoid unnecessary third-party scripts on the landing/report pages
- [ ] add rate limiting when public write endpoints are introduced
- [ ] add auth before storing sensitive user/project history

## Future risks to watch
- prompt injection via user-entered startup statements
- accidental secret exposure in frontend env vars
- trusting client-side payment state
- weak input validation on report/agent endpoints
- storing too much founder/company data without access controls

## Recommended next technical hardening items
When implementation continues, add:
- schema validation (e.g. Zod) for all API inputs
- rate limiting for report-generation endpoints
- auth if persistence is added
- webhook signature verification for Stripe
- server-side logging for payment/report failures
