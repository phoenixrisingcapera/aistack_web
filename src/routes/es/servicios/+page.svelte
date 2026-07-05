<script lang="ts">
  import CtaBand from '$lib/components/CtaBand.svelte';
  import PackagesGrid from '$lib/components/PackagesGrid.svelte';
  import PageShell from '$lib/components/PageShell.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import ServiceCardsGrid from '$lib/components/ServiceCardsGrid.svelte';
  import { services } from '$lib/content/services';
  import { servicesEs } from '$lib/content/services-es';
  import { getSiteContent } from '$lib/content/site';
  const content = getSiteContent('es');
  const localizedServices = services.map((service) => ({ ...service, ...servicesEs[service.slug] }));
</script>

<PageShell content={content} title="Servicios" description={content.packagesIntro}>
  <section class="section-shell pt-12 md:pt-20">
    <SectionHeading eyebrow="AIStack" title="Servicios para rescatar, reconstruir y llevar productos IA a produccion" copy="AIStack ayuda a founders, operadores y empresas a convertir prototipos fragiles, trabajo IA incompleto y sistemas de datos desordenados en productos y backends que realmente pueden operar." />
    <ServiceCardsGrid items={localizedServices} locale="es" />
  </section>
  <section class="section-shell">
    <SectionHeading eyebrow={content.labels.packages} title={content.packagesTitle} copy={content.packagesIntro} />
    <PackagesGrid items={content.packages} />
  </section>
  <CtaBand {content} />
</PageShell>
