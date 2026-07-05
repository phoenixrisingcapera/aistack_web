<script lang="ts">
  import AdminLoginPanel from '$lib/components/AdminLoginPanel.svelte';
  import PageShell from '$lib/components/PageShell.svelte';
  import { getSiteContent } from '$lib/content/site';

  const content = getSiteContent('en');
</script>

<PageShell content={content} title="Admin Login" description="Internal AIStack admin login">
  <AdminLoginPanel {content} />
</PageShell>
