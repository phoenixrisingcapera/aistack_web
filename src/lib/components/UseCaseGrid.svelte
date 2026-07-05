<script lang="ts">
  export let title = 'Example use cases';
  export let items: string[] = [];
</script>

<article class="glass-panel rounded-[1.75rem] p-6">
  <div class="text-xs uppercase tracking-[0.18em] text-cyan-200/75">{title}</div>
  <div class="mt-5 grid gap-3 sm:grid-cols-2">
    {#each items as item}
      <div class="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm text-slate-200">{item}</div>
    {/each}
  </div>
</article>
