<script lang="ts">
  import CtaBand from '$lib/components/CtaBand.svelte';
  import PackagesGrid from '$lib/components/PackagesGrid.svelte';
  import PageShell from '$lib/components/PageShell.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import ServiceCardsGrid from '$lib/components/ServiceCardsGrid.svelte';
  import { services } from '$lib/content/services';
  import { getSiteContent } from '$lib/content/site';
  const content = getSiteContent('en');
</script>

<PageShell content={content} title="Services" description={content.packagesIntro}>
  <section class="section-shell pt-12 md:pt-20">
    <SectionHeading eyebrow="AIStack" title="Services built for real products" copy="AIStack helps founders, operators, and businesses rescue, rebuild, and productionise unfinished AI and data projects. These services are designed for companies that need backend architecture, data models, AI workflows, deployment, and operational control rather than another demo." />
    <ServiceCardsGrid items={services} />
  </section>
  <section class="section-shell">
    <SectionHeading eyebrow={content.labels.packages} title={content.packagesTitle} copy={content.packagesIntro} />
    <PackagesGrid items={content.packages} />
  </section>
  <CtaBand {content} />
</PageShell>
