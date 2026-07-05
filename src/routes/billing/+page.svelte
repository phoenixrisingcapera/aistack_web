<script lang="ts">
  import { page } from '$app/state';
  import { env } from '$env/dynamic/public';
  import CtaBand from '$lib/components/CtaBand.svelte';
  import PageShell from '$lib/components/PageShell.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import { getSiteContent } from '$lib/content/site';
  import { trackEvent } from '$lib/runtime';

  const content = getSiteContent('en');

  const offers = [
    {
      slug: 'ai-systems-audit',
      title: 'AI Systems Audit',
      price: 'From £1,500',
      payment: '100% upfront',
      summary: 'Best first purchase for companies that need paid discovery before building.',
      checkoutUrl: env.PUBLIC_STRIPE_AUDIT_URL,
      checkoutLabel: 'Pay audit upfront'
    },
    {
      slug: 'prototype-rescue-audit',
      title: 'Prototype Rescue Audit',
      price: 'From £1,500',
      payment: '100% upfront',
      summary: 'For unfinished AI projects, broken MVPs, and no-code experiments that need a clear production path.',
      checkoutUrl: env.PUBLIC_STRIPE_PROTOTYPE_RESCUE_AUDIT_URL,
      checkoutLabel: 'Pay rescue audit upfront'
    },
    {
      slug: 'ai-prototype-sprint',
      title: 'AI Prototype Sprint',
      price: 'From £5,000',
      payment: '30-50% deposit',
      summary: 'Use Stripe checkout for the kickoff deposit, then invoice the remainder after scope confirmation.',
      checkoutUrl: env.PUBLIC_STRIPE_PROTOTYPE_DEPOSIT_URL,
      checkoutLabel: 'Pay prototype deposit'
    },
    {
      slug: 'production-ai-build',
      title: 'Production AI Build',
      price: 'From £15,000',
      payment: 'Deposit or invoice',
      summary: 'For high-ticket builds, use deposit and invoice flow rather than full self-serve checkout.',
      checkoutUrl: env.PUBLIC_STRIPE_PRODUCTION_DEPOSIT_URL,
      checkoutLabel: 'Pay production deposit'
    },
    {
      slug: 'ai-build-partner',
      title: 'AI Build Partner',
      price: 'From £2,000/month',
      payment: 'Subscription',
      summary: 'Monthly implementation support with recurring billing once scope is agreed.',
      checkoutUrl: env.PUBLIC_STRIPE_BUILD_PARTNER_URL,
      checkoutLabel: 'Start retainer subscription'
    },
    {
      slug: 'aistack-core-starter',
      title: 'AIStack Core Starter',
      price: 'From £499/month',
      payment: 'Subscription',
      summary: 'Entry subscription for one workflow and one workspace.',
      checkoutUrl: env.PUBLIC_STRIPE_CORE_STARTER_URL,
      checkoutLabel: 'Start starter subscription'
    },
    {
      slug: 'aistack-core-growth',
      title: 'AIStack Core Growth',
      price: 'From £1,500/month',
      payment: 'Subscription',
      summary: 'Best default plan for companies with real operational AI workflow usage.',
      checkoutUrl: env.PUBLIC_STRIPE_CORE_GROWTH_URL,
      checkoutLabel: 'Start growth subscription'
    },
    {
      slug: 'aistack-core-custom',
      title: 'AIStack Core Custom',
      price: 'From £3,000/month',
      payment: 'Custom invoice',
      summary: 'Custom deployment, private data, compliance, or advanced integrations.',
      checkoutUrl: env.PUBLIC_STRIPE_CORE_CUSTOM_URL,
      checkoutLabel: 'Request custom billing'
    }
  ];

  function isSelected(slug: string) {
    return page.url.searchParams.get('offer') === slug;
  }

  function fallbackHref(slug: string) {
    return `/contact?offer=${slug}`;
  }
</script>

<PageShell content={content} title="Billing" description="Choose a purchase path for AI services, deposits, or AIStack Core subscriptions.">
  <section class="section-shell pt-12 md:pt-20">
    <SectionHeading eyebrow="Commercial" title="Billing and purchase paths" copy="Use Stripe checkout for audits, deposits, and subscriptions where configured. For larger builds and custom plans, use invoice-led billing after scope confirmation." />
    <div class="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <article class="glass-panel rounded-[1.75rem] p-6">
        <div class="text-xs uppercase tracking-[0.18em] text-cyan-200/75">How AIStack bills</div>
        <ul class="mt-4 space-y-3 text-sm text-slate-200">
          <li class="flex items-start gap-3"><span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span><span>AI Systems Audit: pay 100% upfront.</span></li>
          <li class="flex items-start gap-3"><span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span><span>Prototype Sprint: pay a deposit online, then invoice the balance after kickoff.</span></li>
          <li class="flex items-start gap-3"><span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span><span>Production Build: use deposit plus invoice flow, not full self-serve checkout.</span></li>
          <li class="flex items-start gap-3"><span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span><span>AIStack Core and retainers: use recurring subscription billing.</span></li>
          <li class="flex items-start gap-3"><span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span><span>Usage-based charges can be layered later around AI runs, workflows, documents, or storage.</span></li>
        </ul>
      </article>
      <article class="glass-panel rounded-[1.75rem] p-6">
        <div class="text-xs uppercase tracking-[0.18em] text-cyan-200/75">Stripe setup</div>
        <p class="mt-4 text-sm leading-7 text-slate-300">Configure public checkout links with environment variables like `PUBLIC_STRIPE_AUDIT_URL`, `PUBLIC_STRIPE_PROTOTYPE_DEPOSIT_URL`, and `PUBLIC_STRIPE_CORE_GROWTH_URL`. If a checkout URL is missing, the site falls back to contact or invoice-led purchase flow.</p>
      </article>
    </div>
  </section>

  <section class="section-shell">
    <SectionHeading eyebrow="Offers" title="Choose an offer" copy="Start with the smallest purchase path that matches the buyer stage: audit, deposit, subscription, or custom invoice." />
    <div class="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
      {#each offers as offer}
        <article class:selected-offer={isSelected(offer.slug)} class="glass-panel rounded-[1.75rem] border border-white/8 p-6">
          <div class="text-xs uppercase tracking-[0.18em] text-cyan-200/75">{offer.payment}</div>
          <h3 class="mt-2 text-xl font-semibold text-white">{offer.title}</h3>
          <div class="mt-3 text-sm text-cyan-100">{offer.price}</div>
          <p class="mt-4 text-sm leading-7 text-slate-300">{offer.summary}</p>
          <div class="mt-6 flex flex-wrap gap-3">
            <a
              href={offer.checkoutUrl || fallbackHref(offer.slug)}
              target={offer.checkoutUrl ? '_blank' : undefined}
              rel={offer.checkoutUrl ? 'noreferrer' : undefined}
              class="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              on:click={() => trackEvent('billing_offer_click', { offer: offer.slug, mode: offer.checkoutUrl ? 'checkout' : 'fallback' })}
            >
              {offer.checkoutUrl ? offer.checkoutLabel : 'Request billing link'}
            </a>
            <a href={fallbackHref(offer.slug)} class="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-100">Talk first</a>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <CtaBand {content} />
</PageShell>

<style>
  .selected-offer {
    border-color: rgba(103, 232, 249, 0.55);
    box-shadow: 0 0 0 1px rgba(103, 232, 249, 0.2);
  }
</style>
