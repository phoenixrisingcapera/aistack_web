import { error } from '@sveltejs/kit';
import { caseStudiesBySlug } from '$lib/content/caseStudies';
import { services, servicesBySlug } from '$lib/content/services';

export function entries() {
  return services.map((service) => ({ slug: service.slug }));
}

export function load({ params }) {
  const service = servicesBySlug[params.slug];

  if (!service) {
    throw error(404, 'Service not found');
  }

  return {
    service,
    allServices: services,
    relatedCaseStudies: service.relatedCaseStudies.map((slug) => caseStudiesBySlug[slug]).filter(Boolean),
    relatedServices: service.relatedServices.map((slug) => servicesBySlug[slug]).filter(Boolean)
  };
}
