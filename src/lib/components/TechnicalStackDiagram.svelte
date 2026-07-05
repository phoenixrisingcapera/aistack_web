<script lang="ts">
  export let items: string[] = [];
</script>

<article class="glass-panel rounded-[1.75rem] p-6">
  <div class="text-xs uppercase tracking-[0.18em] text-cyan-200/75">Technical stack</div>
  <div class="mt-5 flex flex-wrap gap-3">
    {#each items as item, index}
      <div class="flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-slate-200">
        <span>{item}</span>
        {#if index < items.length - 1}
          <span class="text-cyan-200/60">/</span>
        {/if}
      </div>
    {/each}
  </div>
</article>
