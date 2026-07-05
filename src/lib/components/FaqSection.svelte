<script lang="ts">
  import type { FaqItem, LocaleContent } from '$lib/content/site';

  export let title: string;
  export let intro: string;
  export let items: FaqItem[];
  export let content: LocaleContent;
</script>

<section class="section-shell">
  <div class="glass-panel rounded-[2rem] p-8 md:p-10">
    <div class="eyebrow">{content.labels.faq}</div>
    <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
    <p class="mt-5 max-w-3xl text-base leading-8 text-slate-300">{intro}</p>

    <div class="mt-10 grid gap-4 lg:grid-cols-2">
      {#each items as item}
        <article class="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-6">
          <h3 class="text-lg font-semibold text-white">{item.question}</h3>
          <p class="mt-4 text-sm leading-7 text-slate-300">{item.answer}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
