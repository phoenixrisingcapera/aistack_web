<script lang="ts">
  let mobileOpen = false;
  import type { LocaleContent } from '$lib/content/site';
  import LanguageSwitch from './LanguageSwitch.svelte';
  import Logo from './Logo.svelte';

  export let content: LocaleContent;
</script>

<header class="sticky top-0 z-50 border-b border-white/6 bg-slate-950/70 backdrop-blur-xl">
  <div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-8">
    <a href={content.locale === 'en' ? '/' : '/es'} aria-label="AIStack home">
      <Logo compact />
    </a>

    <nav class="hidden items-center gap-6 md:flex">
      {#each content.nav as item}
        <a href={item.href} class="text-sm text-slate-300 transition hover:text-white">{item.label}</a>
      {/each}
    </nav>

    <div class="flex items-center gap-3">
      <a href={content.locale === 'en' ? '/contact' : '/es/contacto'} class="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-100 md:inline-flex">
        {content.labels.audit}
      </a>
      <button type="button" class="inline-flex rounded-full border border-white/12 bg-white/4 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white md:hidden" on:click={() => (mobileOpen = !mobileOpen)} aria-expanded={mobileOpen} aria-label="Toggle navigation">
        {mobileOpen ? 'Close' : 'Menu'}
      </button>
      <LanguageSwitch locale={content.locale} label={content.labels.language} />
    </div>
  </div>

  {#if mobileOpen}
    <div class="border-t border-white/6 px-6 py-4 md:hidden">
      <nav class="flex flex-col gap-4">
        {#each content.nav as item}
          <a href={item.href} class="text-sm text-slate-300 transition hover:text-white" on:click={() => (mobileOpen = false)}>{item.label}</a>
        {/each}
        <a href={content.locale === 'en' ? '/contact' : '/es/contacto'} class="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-100" on:click={() => (mobileOpen = false)}>
          {content.labels.audit}
        </a>
      </nav>
    </div>
  {/if}
</header>
