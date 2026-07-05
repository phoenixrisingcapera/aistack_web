<script lang="ts">
  import ServicePage from '$lib/components/ServicePage.svelte';
  export let data;
</script>

<ServicePage locale="es" service={data.service} allServices={data.allServices} relatedCaseStudies={data.relatedCaseStudies} relatedServices={data.relatedServices} />
