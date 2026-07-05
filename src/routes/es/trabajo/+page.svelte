<script lang="ts">
  import CaseStudyGrid from '$lib/components/CaseStudyGrid.svelte';
  import CtaBand from '$lib/components/CtaBand.svelte';
  import PageShell from '$lib/components/PageShell.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import { getSiteContent } from '$lib/content/site';
  const content = getSiteContent('es');
</script>

<PageShell content={content} title="Trabajo" description={content.workIntro}>
  <section class="section-shell pt-12 md:pt-20">
    <SectionHeading eyebrow="Casos" title={content.workTitle} copy={content.workIntro} />
    <CaseStudyGrid items={content.caseStudies} locale={content.locale} />
  </section>
  <CtaBand {content} />
</PageShell>
