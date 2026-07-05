<script lang="ts">
  import type { Service } from '$lib/content/site';
  export let items: Service[];
  export let detailBaseHref = '';
</script>

<div class="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
  {#each items as item}
    <article class="glass-panel rounded-[1.75rem] p-6">
      <div class="flex items-center justify-between gap-4">
        <h3 class="text-xl font-semibold text-white">{item.title}</h3>
        <div class="h-10 w-10 rounded-2xl border border-cyan-300/20 bg-cyan-300/10"></div>
      </div>
      <p class="mt-4 text-sm leading-7 text-slate-300">{item.summary}</p>
      <ul class="mt-6 space-y-3 text-sm text-slate-200">
        {#each item.bullets as bullet}
          <li class="flex items-start gap-3">
            <span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span>
            <span>{bullet}</span>
          </li>
        {/each}
      </ul>
      {#if detailBaseHref}
        <a href={`${detailBaseHref}/${item.slug}`} class="mt-6 inline-flex items-center text-sm font-medium text-cyan-200 transition hover:text-white">View service page</a>
      {/if}
    </article>
  {/each}
</div>
