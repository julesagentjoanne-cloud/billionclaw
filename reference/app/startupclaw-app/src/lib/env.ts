export const env = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  openAiConfigured: Boolean(process.env.OPENAI_API_KEY),
  stripePublishableConfigured: Boolean(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY),
  stripeSecretConfigured: Boolean(process.env.STRIPE_SECRET_KEY),
};
