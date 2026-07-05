<script lang="ts">
  import CtaBand from '$lib/components/CtaBand.svelte';
  import PackagesGrid from '$lib/components/PackagesGrid.svelte';
  import PageShell from '$lib/components/PageShell.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import { getSiteContent } from '$lib/content/site';

  const content = getSiteContent('es');
</script>

<PageShell content={content} title="Plataforma" description={content.platformIntro}>
  <section class="section-shell pt-12 md:pt-20">
    <SectionHeading eyebrow="AIStack" title={content.platformTitle} copy={content.platformIntro} />
    <div class="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <article class="glass-panel rounded-[1.75rem] p-6">
        <p class="text-sm leading-7 text-slate-300">{content.platformBody}</p>
      </article>
      <article class="glass-panel rounded-[1.75rem] p-6">
        <div class="text-xs uppercase tracking-[0.18em] text-cyan-200/75">Incluye AIStack Core</div>
        <ul class="mt-4 space-y-3 text-sm text-slate-200">
          {#each content.platformModules as item}
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span>
              <span>{item}</span>
            </li>
          {/each}
        </ul>
      </article>
    </div>
  </section>

  <section class="section-shell">
    <SectionHeading eyebrow="Plataforma" title={content.platformPackagesTitle} copy={content.platformPackagesIntro} />
    <PackagesGrid items={content.platformPackages} />
  </section>

  <CtaBand {content} />
</PageShell>
