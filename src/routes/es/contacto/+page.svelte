<script lang="ts">
  import ContactPanel from '$lib/components/ContactPanel.svelte';
  import PageShell from '$lib/components/PageShell.svelte';
  import { getSiteContent } from '$lib/content/site';
  const content = getSiteContent('es');
</script>

<PageShell content={content} title="Contacto" description={content.ctaBody}>
  <ContactPanel {content} />
</PageShell>
