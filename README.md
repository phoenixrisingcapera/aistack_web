# AIStack Web

Premium bilingual SvelteKit marketing site for AIStack.

## Stack

- SvelteKit 2
- Svelte 5
- TypeScript
- TailwindCSS v4
- Adapter Node for Railway-style deployment

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## API connection

- Set `PUBLIC_API_BASE_URL` to your FastAPI backend URL.
- Set `PUBLIC_SITE_URL` to your deployed site origin.
- Default local fallback: `http://127.0.0.1:8000`
- Set `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `ADMIN_SESSION_SECRET` on the backend.
- Sign in at `/admin/login`, then review submissions at `/admin/leads`.

## Billing and Stripe setup

- Commercial routes:
  - `/billing`
  - `/es/facturacion`
- Configure Stripe checkout links with public environment variables:
  - `PUBLIC_STRIPE_AUDIT_URL`
  - `PUBLIC_STRIPE_PROTOTYPE_RESCUE_AUDIT_URL`
  - `PUBLIC_STRIPE_PROTOTYPE_DEPOSIT_URL`
  - `PUBLIC_STRIPE_PRODUCTION_DEPOSIT_URL`
  - `PUBLIC_STRIPE_BUILD_PARTNER_URL`
  - `PUBLIC_STRIPE_CORE_STARTER_URL`
  - `PUBLIC_STRIPE_CORE_GROWTH_URL`
  - `PUBLIC_STRIPE_CORE_CUSTOM_URL`
- If a Stripe URL is missing, the UI falls back to contact or invoice-led billing.

## Main edit points

- Site copy and bilingual content: `src/lib/content/site.ts`
- Shared layout and navigation: `src/lib/components/PageShell.svelte`, `SiteHeader.svelte`, `SiteFooter.svelte`
- Homepage sections: `src/routes/+page.svelte`, `src/routes/es/+page.svelte`
- Services page: `src/routes/services/+page.svelte`, `src/routes/es/servicios/+page.svelte`
- Platform page: `src/routes/platform/+page.svelte`, `src/routes/es/plataforma/+page.svelte`
- Billing page: `src/routes/billing/+page.svelte`, `src/routes/es/facturacion/+page.svelte`
- Work pages and case studies: `src/routes/work/**`, `src/routes/es/trabajo/**`
- Contact page: `src/lib/components/ContactPanel.svelte`
- Brand assets: `static/favicon.svg`, `static/og-image.svg`

## Notes

- The visual system uses a lightweight CSS/SVG operating-layer aesthetic as the fast default baseline.
- The contact form currently opens the user's mail client via `mailto:` and can be replaced later with a FastAPI or Resend endpoint.
- CTA links currently point to the contact pages and can be swapped to a booking URL in one place.
