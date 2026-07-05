<script lang="ts">
  export let title = 'Deliverables';
  export let items: string[] = [];
</script>

<article class="glass-panel rounded-[1.75rem] p-6">
  <div class="text-xs uppercase tracking-[0.18em] text-cyan-200/75">{title}</div>
  <ul class="mt-5 space-y-3 text-sm text-slate-200">
    {#each items as item}
      <li class="flex items-start gap-3"><span class="mt-1 h-2 w-2 rounded-full bg-violet-300"></span><span>{item}</span></li>
    {/each}
  </ul>
</article>
