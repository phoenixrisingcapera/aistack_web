<script lang="ts">
  import type { CaseStudy, LocaleContent } from '$lib/content/site';

  export let title: string;
  export let intro: string;
  export let items: CaseStudy[];
  export let content: LocaleContent;

  const liveItems = items.filter((item) => item.liveUrl);
</script>

<section class="section-shell pt-6 md:pt-8">
  <div class="glass-panel rounded-[2rem] p-8 md:p-10">
    <div class="eyebrow">{content.labels.livePortfolio}</div>
    <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
    <p class="mt-5 max-w-3xl text-base leading-8 text-slate-300">{intro}</p>

    <div class="mt-10 grid gap-4 lg:grid-cols-3">
      {#each liveItems as item}
        <a href={item.liveUrl} target="_blank" rel="noreferrer" class="rounded-[1.6rem] border border-white/10 bg-slate-950/50 p-6 transition hover:border-cyan-300/35 hover:bg-slate-950/70">
          <div class="text-xs uppercase tracking-[0.18em] text-cyan-200/80">{item.kind}</div>
          <h3 class="mt-4 text-xl font-semibold text-white">{item.title}</h3>
          <p class="mt-2 text-sm text-slate-400">{item.strap}</p>
          <div class="mt-6 text-sm font-medium text-cyan-200">{item.liveLabel}</div>
        </a>
      {/each}
    </div>
  </div>
</section>
