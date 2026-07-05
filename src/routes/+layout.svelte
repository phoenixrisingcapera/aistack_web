<script lang="ts">
  import '../app.css';
</script>

<svelte:head>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://aistack.codes/#organization",
      "name": "AIStack",
      "url": "https://aistack.codes",
      "description": "AI implementation studio and reusable backend platform for consulting, product builds, and recurring AI infrastructure.",
      "foundingDate": "2024",
      "founder": {
        "@type": "Person",
        "name": "Andrea Capera",
        "jobTitle": "Founder & AI Product Builder",
        "description": "Data scientist and AI product builder focused on turning complex workflows into practical AI systems."
      },
      "knowsAbout": [
        "Artificial Intelligence",
        "AI Implementation",
        "Document Intelligence",
        "Machine Learning",
        "Data Science",
        "Workflow Automation",
        "Software Development"
      ],
      "offers": [
        {
          "@type": "Offer",
          "name": "AI Systems Audit",
          "description": "Paid discovery for companies that need AI but do not yet know what system to build."
        },
        {
          "@type": "Offer",
          "name": "AI Prototype Sprint",
          "description": "2-4 week sprint to build a credible, testable AI prototype."
        },
        {
          "@type": "Offer",
          "name": "Production AI Build",
          "description": "Full implementation for companies ready to deploy an AI product or internal tool."
        }
      ]
    }, null, 2)}
  </script>
</svelte:head>

<slot />
