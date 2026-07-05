<script lang="ts">
  import AboutTrust from '$lib/components/AboutTrust.svelte';
  import CtaBand from '$lib/components/CtaBand.svelte';
  import PageShell from '$lib/components/PageShell.svelte';
  import { getSiteContent } from '$lib/content/site';
  const content = getSiteContent('en');
</script>

<PageShell content={content} title="About" description={content.aboutBody[0]}>
  <div class="pt-12 md:pt-20">
    <AboutTrust {content} />
  </div>
  <CtaBand {content} />
</PageShell>
