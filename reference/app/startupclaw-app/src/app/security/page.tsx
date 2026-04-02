import { env } from '@/lib/env';

export default function SecurityPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">startupClaw</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950">Security baseline</h1>
      <p className="mt-3 text-lg text-zinc-600">
        startupClaw is being built to support future paid execution agents safely, including Stripe-based payments.
      </p>

      <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-zinc-950">Configuration checks</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
          <li>NEXT_PUBLIC_APP_URL: {env.appUrl}</li>
          <li>OpenAI key configured: {env.openAiConfigured ? 'Yes' : 'No'}</li>
          <li>Stripe publishable key configured: {env.stripePublishableConfigured ? 'Yes' : 'No'}</li>
          <li>Stripe secret key configured: {env.stripeSecretConfigured ? 'Yes' : 'No'}</li>
        </ul>
      </section>

      <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-zinc-950">Security rules</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
          <li>Server-side secrets only for payment/session creation.</li>
          <li>Stripe Checkout first, custom flows later.</li>
          <li>Webhook verification before unlocking paid features.</li>
          <li>Server-side validation for all future write endpoints.</li>
          <li>Rate limiting before exposing report-generation endpoints publicly.</li>
        </ul>
      </section>
    </main>
  );
}
