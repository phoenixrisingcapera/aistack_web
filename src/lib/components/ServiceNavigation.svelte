<script lang="ts">
  import type { ServicePageContent } from '$lib/content/services';

  export let items: ServicePageContent[] = [];
  export let currentSlug = '';
  export let locale: 'en' | 'es' = 'en';
</script>

<nav class="section-shell pt-0">
  <div class="glass-panel rounded-[1.5rem] p-4">
    <div class="mb-4 text-xs uppercase tracking-[0.18em] text-cyan-200/75">Service navigation</div>
    <div class="flex flex-wrap gap-3">
      {#each items as item}
        <a
          href={locale === 'es' ? `/es/servicios/${item.slug}` : `/services/${item.slug}`}
          class={`rounded-full border bg-white/4 px-4 py-2 text-sm transition hover:border-cyan-300/40 hover:text-white ${item.slug === currentSlug ? 'border-cyan-300/40 text-white' : 'border-white/10 text-slate-300'}`}
        >
          {item.shortTitle}
        </a>
      {/each}
    </div>
  </div>
</nav>
