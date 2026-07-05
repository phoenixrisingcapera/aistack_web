import { error } from '@sveltejs/kit';
import { caseStudiesBySlug } from '$lib/content/caseStudies';
import { services, servicesBySlug } from '$lib/content/services';
import { servicesEs } from '$lib/content/services-es';

export function entries() {
  return services.map((service) => ({ slug: service.slug }));
}

export function load({ params }) {
  const service = servicesBySlug[params.slug];
  const localized = servicesEs[params.slug];

  if (!service || !localized) {
    throw error(404, 'Service not found');
  }

  const localizedService = { ...service, ...localized };
  const allServices = services.map((item) => ({ ...item, ...servicesEs[item.slug] }));

  return {
    service: localizedService,
    allServices,
    relatedCaseStudies: service.relatedCaseStudies.map((slug) => caseStudiesBySlug[slug]).filter(Boolean),
    relatedServices: service.relatedServices.map((slug) => ({ ...servicesBySlug[slug], ...servicesEs[slug] })).filter(Boolean)
  };
}
