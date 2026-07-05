<script lang="ts">
  export let compact = false;
</script>

<div class="flex items-center gap-3">
  <svg viewBox="0 0 96 96" class={compact ? 'h-10 w-10' : 'h-12 w-12'} aria-hidden="true">
    <defs>
      <linearGradient id="aistack-logo-gradient" x1="10%" y1="10%" x2="90%" y2="90%">
        <stop offset="0%" stop-color="#5ac8fa" />
        <stop offset="100%" stop-color="#8b7dff" />
      </linearGradient>
    </defs>
    <path d="M49 12 20 84h12l7-18h19l6-14H45l7-18 21 50h13L56 12Z" fill="url(#aistack-logo-gradient)" />
    <circle cx="48" cy="38" r="4" fill="#f5f7fa" fill-opacity="0.9" />
    <circle cx="58" cy="58" r="3.6" fill="#f5f7fa" fill-opacity="0.82" />
    <circle cx="38" cy="58" r="3.6" fill="#f5f7fa" fill-opacity="0.82" />
    <path d="M48 38 38 58 58 58 48 38Z" stroke="#f5f7fa" stroke-opacity="0.5" stroke-width="2" fill="none" />
  </svg>

  <div>
    <div class="text-lg font-semibold tracking-[0.18em] text-white">AISTACK</div>
    {#if !compact}
      <div class="text-xs uppercase tracking-[0.24em] text-slate-400">AI Product Systems</div>
    {/if}
  </div>
</div>
