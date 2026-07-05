<script lang="ts">
  import PackagesGrid from '$lib/components/PackagesGrid.svelte';
  import PageShell from '$lib/components/PageShell.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import CtaBand from '$lib/components/CtaBand.svelte';
  import { getSiteContent } from '$lib/content/site';

  const content = getSiteContent('es');
</script>

<PageShell content={content} title="Precios" description="Precios de servicios AIStack, rescate de prototipos, backend IA y suscripciones AIStack Core.">
  <section class="section-shell pt-12 md:pt-20">
    <SectionHeading eyebrow="Precios" title="Servicios mas backend productizado" copy="AIStack ofrece paquetes de implementacion flexibles para empresas en distintas etapas de adopcion IA. Cada proyecto empieza entendiendo workflow, datos, riesgo y objetivo comercial. Desde ahi, AIStack recomienda el sistema mas pequeño que pueda crear valor medible." />
    <div class="mt-8 glass-panel rounded-[1.75rem] p-6 text-sm leading-7 text-slate-300">
      AIStack ayuda a founders, operadores y empresas a rescatar, reconstruir y llevar a produccion proyectos IA y de datos incompletos. Eso incluye MVPs IA, herramientas internas, inteligencia documental, automatizacion, guardrails, control de costos y backend que realmente soporte un producto.
    </div>
  </section>

  <section class="section-shell">
    <SectionHeading eyebrow="Servicios" title={content.packagesTitle} copy={content.packagesIntro} />
    <PackagesGrid items={content.packages} />
  </section>

  <section class="section-shell">
    <SectionHeading eyebrow="Plataforma" title={content.platformPackagesTitle} copy={content.platformPackagesIntro} />
    <PackagesGrid items={content.platformPackages} />
  </section>

  <CtaBand {content} />
</PageShell>
