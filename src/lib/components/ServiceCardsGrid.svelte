<script lang="ts">
  import type { ServicePageContent } from '$lib/content/services';

  export let items: ServicePageContent[] = [];
  export let locale: 'en' | 'es' = 'en';
</script>

<div class="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
  {#each items as item}
    <article class="glass-panel rounded-[1.75rem] p-6">
      <div class="text-xs uppercase tracking-[0.18em] text-cyan-200/75">{item.shortTitle}</div>
      <h3 class="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
      <p class="mt-4 text-sm leading-7 text-slate-300">{item.heroSubheadline}</p>
      <div class="mt-6 flex flex-wrap gap-2">
        {#each item.targetClients.slice(0, 3) as client}
          <span class="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-slate-200">{client}</span>
        {/each}
      </div>
      <a href={locale === 'es' ? `/es/servicios/${item.slug}` : `/services/${item.slug}`} class="mt-6 inline-flex items-center text-sm font-medium text-cyan-200 transition hover:text-white">{locale === 'es' ? 'Ver servicio' : 'View service page'}</a>
    </article>
  {/each}
</div>
