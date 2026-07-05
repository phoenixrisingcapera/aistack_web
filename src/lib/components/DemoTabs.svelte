<script lang="ts">
  import type { DemoTab } from '$lib/content/site';
  export let items: DemoTab[];

  let active = items[0]?.key ?? '';
  $: current = items.find((item) => item.key === active) ?? items[0];
</script>

<div class="mt-12 grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
  <div class="space-y-3">
    {#each items as item}
      <button
        type="button"
        on:click={() => (active = item.key)}
        class={`glass-panel w-full rounded-3xl p-5 text-left transition ${active === item.key ? 'border-cyan-300/35 bg-cyan-300/8' : ''}`}
      >
        <div class="text-lg font-semibold text-white">{item.label}</div>
        <div class="mt-2 text-sm leading-7 text-slate-300">{item.detail}</div>
      </button>
    {/each}
  </div>

  {#if current}
    <div class="glass-panel rounded-[2rem] p-8">
      <div class="grid gap-6 md:grid-cols-2">
        <div class="rounded-3xl border border-rose-300/18 bg-rose-300/6 p-6">
          <div class="eyebrow !text-rose-200/80">Before</div>
          <div class="mt-4 text-xl font-semibold text-white">{current.before}</div>
        </div>
        <div class="rounded-3xl border border-cyan-300/18 bg-cyan-300/6 p-6">
          <div class="eyebrow">After</div>
          <div class="mt-4 text-xl font-semibold text-white">{current.after}</div>
        </div>
      </div>

      <div class="mt-6 rounded-3xl border border-white/10 bg-slate-950/55 p-6 text-sm leading-7 text-slate-300">
        {current.detail}
      </div>
    </div>
  {/if}
</div>
