<script lang="ts">
  export let title: string;
  export let layers: string[];
</script>

<section class="section-shell">
  <div class="glass-panel rounded-[2rem] p-8 md:p-12">
    <div class="eyebrow">System View</div>
    <h2 class="mt-4 text-3xl font-semibold text-white md:text-5xl">{title}</h2>
    <div class="mt-10 grid gap-4 md:grid-cols-6">
      {#each layers as layer, index}
        <div class="relative rounded-3xl border border-white/10 bg-slate-950/55 p-5">
          <div class="text-xs uppercase tracking-[0.2em] text-cyan-200/70">0{index + 1}</div>
          <div class="mt-6 text-sm font-medium text-white">{layer}</div>
        </div>
      {/each}
    </div>
  </div>
</section>
