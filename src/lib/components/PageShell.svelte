<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';
  import type { LocaleContent } from '$lib/content/site';
  import { getPublicSiteUrl } from '$lib/runtime';
  import SiteFooter from './SiteFooter.svelte';
  import SiteHeader from './SiteHeader.svelte';

  export let content: LocaleContent;
  export let title: string;
  export let description: string;
  export let noindex = false;

  const siteUrl = getPublicSiteUrl();

  function canonicalUrl() {
    return `${siteUrl}${page.url.pathname}`;
  }

  function alternatePaths() {
    const pathname = page.url.pathname;
    if (pathname.startsWith('/es')) {
      const english = pathname.replace(/^\/es/, '') || '/';
      return { en: `${siteUrl}${english}`, es: `${siteUrl}${pathname}` };
    }

    const spanish = pathname === '/' ? '/es' : `/es${pathname}`;
    return { en: `${siteUrl}${pathname}`, es: `${siteUrl}${spanish}` };
  }

  onMount(() => {
    document.documentElement.lang = content.locale;
  });
</script>

<svelte:head>
  <title>{title} | {content.siteTitle}</title>
  <meta name="description" content={description} />
  <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={`${title} | ${content.siteTitle}`} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/og-image.svg" />
  <meta property="og:url" content={canonicalUrl()} />
  <meta property="og:locale" content={content.locale === 'es' ? 'es_ES' : 'en_GB'} />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href={canonicalUrl()} />
  <link rel="alternate" hreflang="en" href={alternatePaths().en} />
  <link rel="alternate" hreflang="es" href={alternatePaths().es} />
  <link rel="alternate" hreflang="x-default" href={alternatePaths().en} />
</svelte:head>

<div class="min-h-screen bg-transparent text-white">
  <div class="pointer-events-none fixed inset-0 -z-10 grid-overlay opacity-40"></div>
  <SiteHeader {content} />
  <main>
    <slot />
  </main>
  <SiteFooter {content} />
</div>
