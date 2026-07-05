<script lang="ts">
  import ContactPanel from '$lib/components/ContactPanel.svelte';
  import PageShell from '$lib/components/PageShell.svelte';
  import { getSiteContent } from '$lib/content/site';
  const content = getSiteContent('en');
</script>

<PageShell content={content} title="Contact" description={content.ctaBody}>
  <ContactPanel {content} />
</PageShell>
