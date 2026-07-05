<script lang="ts">
  import type { CaseStudy, LocaleContent } from '$lib/content/site';
  import CtaBand from './CtaBand.svelte';
  import PageShell from './PageShell.svelte';

  export let content: LocaleContent;
  export let item: CaseStudy;
</script>

<PageShell content={content} title={item.title} description={item.solution}>
  <section class="section-shell pt-12 md:pt-20">
    <div class="eyebrow">{item.kind}</div>
    <h1 class="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">{item.title}</h1>
    <p class="mt-4 text-sm uppercase tracking-[0.18em] text-slate-400">{item.strap}</p>
    <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{item.solution}</p>
  </section>

  <section class="section-shell grid gap-6 lg:grid-cols-2 pt-0">
    <article class="glass-panel rounded-[2rem] p-8 md:p-10">
      <div class="eyebrow">{content.labels.problem}</div>
      <p class="mt-5 text-base leading-8 text-slate-300">{item.problem}</p>
    </article>

    <article class="glass-panel rounded-[2rem] p-8 md:p-10">
      <div class="eyebrow">{content.labels.solution}</div>
      <p class="mt-5 text-base leading-8 text-slate-300">{item.solution}</p>
    </article>
  </section>

  <section class="section-shell grid gap-6 lg:grid-cols-2 pt-0">
    <article class="glass-panel rounded-[2rem] p-8 md:p-10">
      <div class="eyebrow">{content.labels.capabilities}</div>
      <ul class="mt-6 space-y-4 text-sm text-slate-200">
        {#each item.capabilities as capability}
          <li class="flex gap-3"><span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span><span>{capability}</span></li>
        {/each}
      </ul>
    </article>

    <article class="glass-panel rounded-[2rem] p-8 md:p-10">
      <div class="eyebrow">{content.labels.outcomes}</div>
      <ul class="mt-6 space-y-4 text-sm text-slate-200">
        {#each item.outcomes as outcome}
          <li class="flex gap-3"><span class="mt-1 h-2 w-2 rounded-full bg-violet-300"></span><span>{outcome}</span></li>
        {/each}
      </ul>
    </article>
  </section>

  <CtaBand {content} />
</PageShell>
