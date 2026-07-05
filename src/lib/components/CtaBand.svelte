<script lang="ts">
  import type { LocaleContent } from '$lib/content/site';
  import { trackEvent } from '$lib/runtime';
  export let content: LocaleContent;
</script>

<section class="section-shell pt-10">
  <div class="glass-panel rounded-[2rem] p-8 md:p-12">
    <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
      <div>
        <div class="eyebrow">AIStack</div>
        <h2 class="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">{content.ctaTitle}</h2>
        <p class="mt-5 max-w-2xl text-base leading-8 text-slate-300">{content.ctaBody}</p>
      </div>

      <div class="flex flex-col gap-3 sm:flex-row">
        <a href={content.locale === 'en' ? '/contact' : '/es/contacto'} class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100" on:click={() => trackEvent('cta_click', { location: 'cta_band', cta: 'discovery_call' })}>
          {content.labels.audit}
        </a>
        <a href={content.locale === 'en' ? '/billing' : '/es/facturacion'} class="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/4 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-100" on:click={() => trackEvent('cta_click', { location: 'cta_band', cta: 'billing' })}>
          {content.locale === 'en' ? 'View billing options' : 'Ver opciones de facturacion'}
        </a>
      </div>
    </div>
  </div>
</section>
