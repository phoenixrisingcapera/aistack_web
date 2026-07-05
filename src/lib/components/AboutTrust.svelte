<script lang="ts">
  import type { LocaleContent } from '$lib/content/site';
  export let content: LocaleContent;
</script>

<section class="section-shell">
  <div class="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
    <div class="glass-panel rounded-[2rem] p-8 md:p-10">
      <div class="eyebrow">{content.labels.founder}</div>
      <h2 class="section-title !mt-3 !text-4xl">{content.aboutTitle}</h2>
      {#each content.aboutBody as paragraph}
        <p class="mt-5 max-w-2xl text-base leading-8 text-slate-300">{paragraph}</p>
      {/each}
    </div>

    <div class="glass-panel rounded-[2rem] p-8 md:p-10">
      <div class="eyebrow">{content.labels.trust}</div>
      <h2 class="section-title !mt-3 !text-4xl">{content.trustTitle}</h2>
      <ul class="mt-8 space-y-4 text-sm text-slate-200">
        {#each content.trustPoints as point}
          <li class="flex gap-3">
            <span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span>
            <span>{point}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
