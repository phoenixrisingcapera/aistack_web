<script lang="ts">
  import type { CaseStudy, Locale } from '$lib/content/site';
  export let items: CaseStudy[];
  export let locale: Locale;

  function hrefFor(slug: string) {
    if (locale === 'es') {
      if (slug === 'visualizacion-de-datos') return '/es/trabajo/visualizacion-de-datos';
      return `/es/trabajo/${slug}`;
    }

    return `/work/${slug}`;
  }
</script>

<div class="mt-12 grid gap-5 lg:grid-cols-2">
  {#each items as item}
    <article class="glass-panel rounded-[1.9rem] p-7">
      <div class="flex items-center justify-between gap-4">
        <div class="text-xs uppercase tracking-[0.24em] text-cyan-200/75">{item.kind}</div>
        <a href={hrefFor(item.slug)} class="text-sm text-slate-300 transition hover:text-white">{locale === 'es' ? 'Ver caso' : 'Open case'}</a>
      </div>
      <h3 class="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
      <p class="mt-2 text-sm uppercase tracking-[0.16em] text-slate-400">{item.strap}</p>
      <p class="mt-5 text-sm leading-7 text-slate-300">{item.solution}</p>
      {#if item.liveUrl}
        <div class="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3">
          <div class="text-sm text-slate-300">{item.liveLabel}</div>
          <a href={item.liveUrl} target="_blank" rel="noreferrer" class="text-sm font-medium text-cyan-200 transition hover:text-white">{locale === 'es' ? 'Sitio en vivo' : 'Live site'}</a>
        </div>
      {/if}
    </article>
  {/each}
</div>
