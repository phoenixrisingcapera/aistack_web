<script lang="ts">
  import type { CapabilityCaseStudy } from '$lib/content/caseStudies';

  export let items: CapabilityCaseStudy[] = [];
  export let locale: 'en' | 'es' = 'en';
</script>

<section class="section-shell pt-0">
  <div class="eyebrow">{locale === 'es' ? 'Casos relacionados' : 'Related case studies'}</div>
  <h2 class="section-title">{locale === 'es' ? 'Pruebas de capacidad conectadas a este servicio' : 'Capability proof linked to this service'}</h2>
  <div class="mt-12 grid gap-5 lg:grid-cols-2">
    {#each items as item}
      <article class="glass-panel rounded-[1.75rem] p-6">
        <div class="text-xs uppercase tracking-[0.18em] text-cyan-200/75">{item.status}</div>
        <h3 class="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
        <p class="mt-2 text-sm uppercase tracking-[0.16em] text-slate-400">{item.subtitle}</p>
        <p class="mt-5 text-sm leading-7 text-slate-300">{item.solution}</p>
        <ul class="mt-5 space-y-3 text-sm text-slate-200">
          {#each item.capabilities.slice(0, 4) as capability}
            <li class="flex items-start gap-3"><span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span><span>{capability}</span></li>
          {/each}
        </ul>
        {#if item.href}
          <a href={item.href} class="mt-6 inline-flex items-center text-sm font-medium text-cyan-200 transition hover:text-white">{locale === 'es' ? 'Ver caso' : 'Open case study'}</a>
        {/if}
      </article>
    {/each}
  </div>
</section>
