<script lang="ts">
  import type { LocaleContent } from '$lib/content/site';
  import { trackEvent } from '$lib/runtime';

  export let content: LocaleContent;
</script>

<section class="section-shell pt-12 md:pt-20">
  <div class="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
    <div>
      <div class="eyebrow">{content.announcement}</div>
      <h1 class="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">{content.hero.title}</h1>
      <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">{content.hero.body}</p>

      <div class="mt-8 flex flex-col gap-4 sm:flex-row">
        <a href={content.locale === 'en' ? '/contact' : '/es/contacto'} class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100" on:click={() => trackEvent('cta_click', { location: 'hero', cta: 'discovery_call' })}>
          {content.hero.primaryCta}
        </a>
        <a href={content.locale === 'en' ? '/work' : '/es/trabajo'} class="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/4 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300/40" on:click={() => trackEvent('cta_click', { location: 'hero', cta: 'live_work' })}>
          {content.hero.secondaryCta}
        </a>
      </div>

      <div class="mt-10 grid gap-4 md:grid-cols-3">
        {#each content.heroMetrics as item}
          <div class="glass-panel rounded-3xl p-5">
            <div class="text-sm font-medium text-white">{item.value}</div>
            <div class="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
          </div>
        {/each}
      </div>
    </div>

    <div class="relative">
      <div class="hero-orb glass-panel rounded-[2rem] p-6">
        <div class="aspect-square rounded-[1.6rem] border border-white/10 bg-slate-950/55 p-6 [perspective:1200px]">
          <div class="relative h-full w-full rounded-[1.4rem] border border-cyan-300/10 bg-slate-950/40 p-6 shadow-2xl [transform:rotateX(20deg)_rotateZ(-18deg)]">
            <div class="absolute inset-6 grid gap-3">
              {#each content.layers as layer, index}
                <div class="glass-panel panel-strong flex items-center justify-between rounded-2xl px-4 py-3" style={`margin-left:${index * 8}px; margin-right:${index * 8}px;`}>
                  <span class="text-sm font-medium text-white">{layer}</span>
                  <span class="h-2.5 w-2.5 rounded-full bg-cyan-300"></span>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 rounded-3xl border border-white/10 bg-white/3 p-5 text-sm leading-7 text-slate-300">
        {content.mission}
      </div>
    </div>
  </div>
</section>
