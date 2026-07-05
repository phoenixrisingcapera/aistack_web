<script lang="ts">
  import AboutTrust from '$lib/components/AboutTrust.svelte';
  import CaseStudyGrid from '$lib/components/CaseStudyGrid.svelte';
  import CtaBand from '$lib/components/CtaBand.svelte';
  import DemoTabs from '$lib/components/DemoTabs.svelte';
  import FaqSection from '$lib/components/FaqSection.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import LayerStack from '$lib/components/LayerStack.svelte';
  import LiveWorkStrip from '$lib/components/LiveWorkStrip.svelte';
  import PackagesGrid from '$lib/components/PackagesGrid.svelte';
  import PageShell from '$lib/components/PageShell.svelte';
  import ProblemsGrid from '$lib/components/ProblemsGrid.svelte';
  import ProcessGrid from '$lib/components/ProcessGrid.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import ServiceCardsGrid from '$lib/components/ServiceCardsGrid.svelte';
  import { featuredServiceSlugs, services } from '$lib/content/services';
  import { servicesEs } from '$lib/content/services-es';
  import { getSiteContent } from '$lib/content/site';

  const content = getSiteContent('es');
  const featuredServices = services.filter((service) => featuredServiceSlugs.includes(service.slug)).map((service) => ({ ...service, ...servicesEs[service.slug] }));
</script>

<PageShell content={content} title="Estudio de producto IA" description={content.hero.body}>
  <Hero {content} />
  <LiveWorkStrip title={content.liveNowTitle} intro={content.liveNowIntro} items={content.caseStudies} {content} />

  <section class="section-shell">
    <SectionHeading eyebrow="Problema" title={content.problemTitle} copy={content.problemIntro} />
    <ProblemsGrid items={content.problems} />
  </section>

  <LayerStack title={content.layersTitle} layers={content.layers} />

  <section class="section-shell">
    <SectionHeading eyebrow={content.labels.services} title="Servicios que convierten prototipos en productos" copy="AIStack ayuda a founders, operadores y empresas a rescatar trabajo IA incompleto, reconstruir arquitectura debil y llevar a produccion los sistemas que realmente importan. Los mejores puntos de entrada son product build, prototype rescue, backend infrastructure y guardrails." />
    <ServiceCardsGrid items={featuredServices} locale="es" />
    <a href="/es/servicios" class="mt-8 inline-flex items-center text-sm font-medium text-cyan-200 transition hover:text-white">Ver todos los servicios</a>
  </section>

  <section class="section-shell">
    <SectionHeading eyebrow="Demo interactiva" title={content.demoTitle} copy={content.demoIntro} />
    <DemoTabs items={content.demoTabs} />
  </section>

  <section class="section-shell">
    <SectionHeading eyebrow={content.labels.work} title={content.workTitle} copy={content.workIntro} />
    <CaseStudyGrid items={content.caseStudies} locale={content.locale} />
  </section>

  <section class="section-shell">
    <SectionHeading eyebrow={content.labels.process} title={content.processTitle} copy={content.processIntro} />
    <ProcessGrid items={content.process} />
  </section>

  <section class="section-shell">
    <SectionHeading eyebrow={content.labels.packages} title={content.packagesTitle} copy={content.packagesIntro} />
    <PackagesGrid items={content.packages} />
  </section>

  <section class="section-shell">
    <SectionHeading eyebrow="Plataforma" title={content.platformTitle} copy={content.platformIntro} />
    <PackagesGrid items={content.platformPackages} />
  </section>

  <FaqSection title={content.faqTitle} intro={content.faqIntro} items={content.faqs} />
  <AboutTrust {content} />
  <CtaBand {content} />
</PageShell>
