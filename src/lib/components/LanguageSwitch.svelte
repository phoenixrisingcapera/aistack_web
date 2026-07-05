<script lang="ts">
  import type { Locale } from '$lib/content/site';

  export let locale: Locale;
  export let label: string;

  const target = locale === 'en' ? '/es' : '/';
</script>

<a
  href={target}
  class="rounded-full border border-white/12 bg-white/4 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
>
  {label}
</a>
