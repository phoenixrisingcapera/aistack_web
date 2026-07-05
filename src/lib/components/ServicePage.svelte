<script lang="ts">
  import { page } from '$app/state';
  import CTASection from '$lib/components/CTASection.svelte';
  import DeliverablesList from '$lib/components/DeliverablesList.svelte';
  import FaqSection from '$lib/components/FaqSection.svelte';
  import PageShell from '$lib/components/PageShell.svelte';
  import ProblemGrid from '$lib/components/ProblemGrid.svelte';
  import RelatedCaseStudies from '$lib/components/RelatedCaseStudies.svelte';
  import ServiceHero from '$lib/components/ServiceHero.svelte';
  import ServiceNavigation from '$lib/components/ServiceNavigation.svelte';
  import TechnicalStackDiagram from '$lib/components/TechnicalStackDiagram.svelte';
  import UseCaseGrid from '$lib/components/UseCaseGrid.svelte';
  import OutcomeCards from '$lib/components/OutcomeCards.svelte';
  import type { CapabilityCaseStudy } from '$lib/content/caseStudies';
  import type { ServicePageContent } from '$lib/content/services';
  import { getSiteContent } from '$lib/content/site';
  import { getPublicSiteUrl } from '$lib/runtime';

  export let locale: 'en' | 'es';
  export let service: ServicePageContent;
  export let allServices: ServicePageContent[];
  export let relatedCaseStudies: CapabilityCaseStudy[];
  export let relatedServices: ServicePageContent[];

  const content = getSiteContent(locale);
  const siteUrl = getPublicSiteUrl();

  function serviceUrl() {
    return `${siteUrl}${page.url.pathname}`;
  }

  const faqTitle = locale === 'es' ? 'Preguntas sobre este servicio' : 'Questions about this service';
  const faqIntro =
    locale === 'es'
      ? 'Preguntas comunes que ayudan a entender cuando este servicio encaja y que tipo de problema resuelve.'
      : 'Common questions that help buyers understand when this service fits and what kind of problem it solves.';
  const relatedServicesLabel = locale === 'es' ? 'Servicios relacionados' : 'Related services';
</script>

<svelte:head>
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.seoDescription,
      url: serviceUrl(),
      provider: {
        '@type': 'Organization',
        name: 'AIStack',
        url: siteUrl
      },
      areaServed: ['United Kingdom', 'Latin America', 'Remote'],
      serviceType: service.title,
      audience: service.targetClients.map((name) => ({ '@type': 'Audience', audienceType: name })),
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock'
      },
      mainEntity: service.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    })}
  </script>
</svelte:head>

<PageShell content={content} title={service.seoTitle} description={service.seoDescription}>
  <ServiceHero title={service.heroHeadline} subtitle={service.heroSubheadline} targetClients={service.targetClients} />
  <ServiceNavigation items={allServices} currentSlug={service.slug} locale={locale} />
  <ProblemGrid title={locale === 'es' ? 'Cuando este servicio encaja' : 'When this service is the right fit'} items={service.problems} />

  <section class="section-shell grid gap-6 lg:grid-cols-2 pt-0">
    <DeliverablesList title={locale === 'es' ? 'Que construye AIStack' : 'What AIStack builds'} items={service.whatWeBuild} />
    <TechnicalStackDiagram items={service.technicalStack} />
  </section>

  <section class="section-shell grid gap-6 lg:grid-cols-2 pt-0">
    <DeliverablesList title={locale === 'es' ? 'Entregables' : 'Deliverables'} items={service.deliverables} />
    <UseCaseGrid title={locale === 'es' ? 'Casos de uso' : 'Example use cases'} items={service.useCases} />
  </section>

  <OutcomeCards title={locale === 'es' ? 'Resultados de negocio' : 'Business outcomes'} items={service.outcomes} />
  <RelatedCaseStudies items={relatedCaseStudies} locale={locale} />

  <section class="section-shell pt-0">
    <div class="glass-panel rounded-[1.75rem] p-6">
      <div class="text-xs uppercase tracking-[0.18em] text-cyan-200/75">{relatedServicesLabel}</div>
      <div class="mt-5 flex flex-wrap gap-3">
        {#each relatedServices as item}
          <a href={locale === 'es' ? `/es/servicios/${item.slug}` : `/services/${item.slug}`} class="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:text-white">{item.title}</a>
        {/each}
      </div>
    </div>
  </section>

  <FaqSection title={faqTitle} intro={faqIntro} items={service.faqs} {content} />
  <CTASection headline={service.ctaHeadline} text={service.ctaText} buttonLabel={service.ctaButtonLabel} href={locale === 'es' ? `/es/contacto?offer=${service.slug}` : `/contact?offer=${service.slug}`} />
</PageShell>
