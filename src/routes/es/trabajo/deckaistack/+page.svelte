<script lang="ts">
  import CaseStudyPage from '$lib/components/CaseStudyPage.svelte';
  import { getCaseStudy, getSiteContent } from '$lib/content/site';
  const content = getSiteContent('es');
  const item = getCaseStudy('es', 'deckaistack');
</script>

{#if item}
  <CaseStudyPage {content} {item} />
{/if}
