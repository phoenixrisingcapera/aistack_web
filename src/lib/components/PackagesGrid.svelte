<script lang="ts">
  import type { PackageTier } from '$lib/content/site';
  import { trackEvent } from '$lib/runtime';
  export let items: PackageTier[];
</script>

<div class="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
  {#each items as item}
    <article class="glass-panel rounded-[1.75rem] p-6">
      <div class="text-xs uppercase tracking-[0.18em] text-cyan-200/75">{item.price}</div>
      <h3 class="text-xl font-semibold text-white">{item.title}</h3>
      <p class="mt-4 text-sm leading-7 text-slate-300">{item.summary}</p>
      {#if item.bestFor?.length}
        <div class="mt-6 text-xs uppercase tracking-[0.18em] text-cyan-200/75">Best for</div>
        <ul class="mt-3 space-y-3 text-sm text-slate-200">
          {#each item.bestFor as fit}
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span>
              <span>{fit}</span>
            </li>
          {/each}
        </ul>
      {/if}
      <div class="mt-6 text-xs uppercase tracking-[0.18em] text-cyan-200/75">What you get</div>
      <ul class="mt-6 space-y-3 text-sm text-slate-200">
        {#each item.deliverables as deliverable}
          <li class="flex items-start gap-3">
            <span class="mt-1 h-2 w-2 rounded-full bg-violet-300"></span>
            <span>{deliverable}</span>
          </li>
        {/each}
      </ul>
      {#if item.outcome}
        <p class="mt-6 text-sm leading-7 text-slate-300">{item.outcome}</p>
      {/if}
      {#if item.ctaHref && item.ctaLabel}
        <a
          href={item.ctaHref}
          class="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          on:click={() => trackEvent('pricing_cta_click', { offer: item.slug ?? item.title, target: item.ctaHref ?? '' })}
        >
          {item.ctaLabel}
        </a>
      {/if}
    </article>
  {/each}
</div>
