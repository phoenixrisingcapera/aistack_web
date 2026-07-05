<script lang="ts">
  export let title = '';
  export let subtitle = '';
  export let targetClients: string[] = [];
</script>

<section class="section-shell pt-12 md:pt-20">
  <div class="eyebrow">AIStack Service</div>
  <h1 class="mt-5 max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl">{title}</h1>
  <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{subtitle}</p>

  {#if targetClients.length}
    <div class="mt-10 glass-panel rounded-[1.75rem] p-6">
      <div class="text-xs uppercase tracking-[0.18em] text-cyan-200/75">Best fit for</div>
      <div class="mt-4 flex flex-wrap gap-3">
        {#each targetClients as client}
          <span class="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-slate-200">{client}</span>
        {/each}
      </div>
    </div>
  {/if}
</section>
