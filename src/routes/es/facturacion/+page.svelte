<script lang="ts">
  import { page } from '$app/state';
  import { env } from '$env/dynamic/public';
  import CtaBand from '$lib/components/CtaBand.svelte';
  import PageShell from '$lib/components/PageShell.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import { getSiteContent } from '$lib/content/site';
  import { trackEvent } from '$lib/runtime';

  const content = getSiteContent('es');

  const offers = [
    { slug: 'ai-systems-audit', title: 'Auditoria de sistemas IA', price: 'Desde £1,500', payment: '100% upfront', summary: 'La mejor primera compra para empresas que necesitan discovery pagado antes de construir.', checkoutUrl: env.PUBLIC_STRIPE_AUDIT_URL, checkoutLabel: 'Pagar auditoria upfront' },
    { slug: 'prototype-rescue-audit', title: 'Auditoria de rescate de prototipo', price: 'Desde £1,500', payment: '100% upfront', summary: 'Para proyectos IA incompletos, MVPs rotos y experimentos no-code que necesitan una ruta clara a produccion.', checkoutUrl: env.PUBLIC_STRIPE_PROTOTYPE_RESCUE_AUDIT_URL, checkoutLabel: 'Pagar auditoria de rescate' },
    { slug: 'ai-prototype-sprint', title: 'Sprint de prototipo IA', price: 'Desde £5,000', payment: 'Deposito 30-50%', summary: 'Usa Stripe para el deposito inicial y factura el resto despues de confirmar alcance.', checkoutUrl: env.PUBLIC_STRIPE_PROTOTYPE_DEPOSIT_URL, checkoutLabel: 'Pagar deposito de prototipo' },
    { slug: 'production-ai-build', title: 'Construccion IA en produccion', price: 'Desde £15,000', payment: 'Deposito o factura', summary: 'Para builds high-ticket, usa deposito y facturacion, no checkout total self-serve.', checkoutUrl: env.PUBLIC_STRIPE_PRODUCTION_DEPOSIT_URL, checkoutLabel: 'Pagar deposito de produccion' },
    { slug: 'ai-build-partner', title: 'Partner mensual IA', price: 'Desde £2,000/mes', payment: 'Suscripcion', summary: 'Soporte mensual con billing recurrente una vez cerrado el alcance.', checkoutUrl: env.PUBLIC_STRIPE_BUILD_PARTNER_URL, checkoutLabel: 'Iniciar suscripcion retainer' },
    { slug: 'aistack-core-starter', title: 'AIStack Core Starter', price: 'Desde £499/mes', payment: 'Suscripcion', summary: 'Plan de entrada para un workflow y un workspace.', checkoutUrl: env.PUBLIC_STRIPE_CORE_STARTER_URL, checkoutLabel: 'Iniciar suscripcion starter' },
    { slug: 'aistack-core-growth', title: 'AIStack Core Growth', price: 'Desde £1,500/mes', payment: 'Suscripcion', summary: 'El plan por defecto para empresas con uso operativo real.', checkoutUrl: env.PUBLIC_STRIPE_CORE_GROWTH_URL, checkoutLabel: 'Iniciar suscripcion growth' },
    { slug: 'aistack-core-custom', title: 'AIStack Core Custom', price: 'Desde £3,000/mes', payment: 'Factura custom', summary: 'Despliegue custom, private data, compliance o integraciones avanzadas.', checkoutUrl: env.PUBLIC_STRIPE_CORE_CUSTOM_URL, checkoutLabel: 'Solicitar billing custom' }
  ];

  function isSelected(slug: string) {
    return page.url.searchParams.get('offer') === slug;
  }

  function fallbackHref(slug: string) {
    return `/es/contacto?offer=${slug}`;
  }
</script>

<PageShell content={content} title="Facturacion" description="Elige una ruta de compra para servicios IA, depositos o suscripciones AIStack Core.">
  <section class="section-shell pt-12 md:pt-20">
    <SectionHeading eyebrow="Comercial" title="Facturacion y rutas de compra" copy="Usa Stripe checkout para auditorias, depositos y suscripciones cuando este configurado. Para builds grandes y planes custom, usa facturacion despues de confirmar alcance." />
    <div class="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <article class="glass-panel rounded-[1.75rem] p-6">
        <div class="text-xs uppercase tracking-[0.18em] text-cyan-200/75">Como factura AIStack</div>
        <ul class="mt-4 space-y-3 text-sm text-slate-200">
          <li class="flex items-start gap-3"><span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span><span>Auditoria IA: pago 100% upfront.</span></li>
          <li class="flex items-start gap-3"><span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span><span>Sprint de prototipo: deposito online y saldo por factura despues del kickoff.</span></li>
          <li class="flex items-start gap-3"><span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span><span>Build en produccion: flujo de deposito mas factura, no checkout total self-serve.</span></li>
          <li class="flex items-start gap-3"><span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span><span>AIStack Core y retainers: billing recurrente por suscripcion.</span></li>
          <li class="flex items-start gap-3"><span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span><span>Luego puedes sumar cargos por uso alrededor de AI runs, workflows, documentos o storage.</span></li>
        </ul>
      </article>
      <article class="glass-panel rounded-[1.75rem] p-6">
        <div class="text-xs uppercase tracking-[0.18em] text-cyan-200/75">Setup de Stripe</div>
        <p class="mt-4 text-sm leading-7 text-slate-300">Configura links publicos de checkout con variables como `PUBLIC_STRIPE_AUDIT_URL`, `PUBLIC_STRIPE_PROTOTYPE_DEPOSIT_URL` y `PUBLIC_STRIPE_CORE_GROWTH_URL`. Si falta un checkout URL, el sitio hace fallback a contacto o facturacion asistida.</p>
      </article>
    </div>
  </section>

  <section class="section-shell">
    <SectionHeading eyebrow="Ofertas" title="Elige una oferta" copy="Empieza con la ruta comercial mas pequeña que coincida con la etapa del cliente: auditoria, deposito, suscripcion o factura custom." />
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
              {offer.checkoutUrl ? offer.checkoutLabel : 'Solicitar link de facturacion'}
            </a>
            <a href={fallbackHref(offer.slug)} class="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-100">Hablar primero</a>
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
