<script lang="ts">
  import type { LocaleContent } from '$lib/content/site';
  import Logo from './Logo.svelte';

  export let content: LocaleContent;
</script>

<footer class="border-t border-white/6">
  <div class="section-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
    <div>
      <Logo />
      <p class="mt-5 max-w-xl text-sm leading-7 text-slate-400">{content.footerNote}</p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2">
      <div>
        <div class="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{content.labels.navigation}</div>
        <div class="mt-4 flex flex-col gap-3 text-sm text-slate-300">
          {#each content.nav as item}
            <a href={item.href} class="transition hover:text-white">{item.label}</a>
          {/each}
        </div>
      </div>

      <div>
        <div class="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{content.labels.contact}</div>
        <div class="mt-4 flex flex-col gap-3 text-sm text-slate-300">
          <a href="mailto:acp2760@gmail.com" class="transition hover:text-white">acp2760@gmail.com</a>
        </div>
      </div>
    </div>
  </div>
</footer>
