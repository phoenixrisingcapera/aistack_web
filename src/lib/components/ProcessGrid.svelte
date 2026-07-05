<script lang="ts">
  import type { ProcessStep } from '$lib/content/site';
  export let items: ProcessStep[];
</script>

<div class="mt-12 grid gap-5 lg:grid-cols-5">
  {#each items as item, index}
    <article class="glass-panel rounded-3xl p-6">
      <div class="text-xs uppercase tracking-[0.22em] text-cyan-200/70">0{index + 1}</div>
      <h3 class="mt-4 text-lg font-semibold text-white">{item.title}</h3>
      <div class="mt-3 text-sm font-medium text-slate-200">{item.deliverable}</div>
      <p class="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
    </article>
  {/each}
</div>
