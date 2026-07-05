<script lang="ts">
  import AdminLeadsPanel from '$lib/components/AdminLeadsPanel.svelte';
  import PageShell from '$lib/components/PageShell.svelte';
  import { getSiteContent } from '$lib/content/site';

  const content = getSiteContent('en');
</script>

<PageShell content={content} title="Admin Leads" description="Internal AIStack leads dashboard">
  <AdminLeadsPanel {content} />
</PageShell>
