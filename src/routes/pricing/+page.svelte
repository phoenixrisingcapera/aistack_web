<script lang="ts">
  import PackagesGrid from '$lib/components/PackagesGrid.svelte';
  import PageShell from '$lib/components/PageShell.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import CtaBand from '$lib/components/CtaBand.svelte';
  import { getSiteContent } from '$lib/content/site';

  const content = getSiteContent('en');
</script>

<PageShell content={content} title="Pricing" description="Pricing for AIStack services, prototype rescue, backend builds, and AIStack Core subscriptions.">
  <section class="section-shell pt-12 md:pt-20">
    <SectionHeading eyebrow="Pricing" title="Services plus productized backend" copy="AIStack offers flexible implementation packages for businesses at different stages of AI adoption. Every engagement starts with understanding your workflow, data, risk, and commercial goal. From there, AIStack recommends the smallest useful system that can create measurable value." />
    <div class="mt-8 glass-panel rounded-[1.75rem] p-6 text-sm leading-7 text-slate-300">
      AIStack helps founders, operators, and businesses rescue, rebuild, and productionise unfinished AI and data projects. That includes AI product MVPs, internal tools, document intelligence, workflow automation, guardrails, cost control, and backend infrastructure that can actually support a real product.
    </div>
  </section>

  <section class="section-shell">
    <SectionHeading eyebrow="Services" title={content.packagesTitle} copy={content.packagesIntro} />
    <PackagesGrid items={content.packages} />
  </section>

  <section class="section-shell">
    <SectionHeading eyebrow="Platform" title={content.platformPackagesTitle} copy={content.platformPackagesIntro} />
    <PackagesGrid items={content.platformPackages} />
  </section>

  <CtaBand {content} />
</PageShell>
