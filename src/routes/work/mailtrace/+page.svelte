<script lang="ts">
  import CaseStudyPage from '$lib/components/CaseStudyPage.svelte';
  import { getCaseStudy, getSiteContent } from '$lib/content/site';
  const content = getSiteContent('en');
  const item = getCaseStudy('en', 'mailtrace');
</script>

{#if item}
  <CaseStudyPage {content} {item} />
{/if}
