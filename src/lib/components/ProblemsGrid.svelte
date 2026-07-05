<script lang="ts">
  import type { Problem } from '$lib/content/site';
  export let items: Problem[];
</script>

<div class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
  {#each items as item}
    <article class="glass-panel rounded-3xl p-6">
      <div class="text-lg font-semibold text-white">{item.title}</div>
      <p class="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
    </article>
  {/each}
</div>
