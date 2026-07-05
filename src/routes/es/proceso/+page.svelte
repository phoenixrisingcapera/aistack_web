<script lang="ts">
  import CtaBand from '$lib/components/CtaBand.svelte';
  import PageShell from '$lib/components/PageShell.svelte';
  import ProcessGrid from '$lib/components/ProcessGrid.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import { getSiteContent } from '$lib/content/site';
  const content = getSiteContent('es');
</script>

<PageShell content={content} title="Proceso" description={content.processIntro}>
  <section class="section-shell pt-12 md:pt-20">
    <SectionHeading eyebrow="Metodo" title={content.processTitle} copy={content.processIntro} />
    <ProcessGrid items={content.process} />
  </section>
  <CtaBand {content} />
</PageShell>
