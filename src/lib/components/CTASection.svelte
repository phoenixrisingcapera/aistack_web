<script lang="ts">
  export let headline = '';
  export let text = '';
  export let buttonLabel = 'Book a meeting';
  export let href = '/contact';
</script>

<section class="section-shell pt-0">
  <div class="glass-panel rounded-[2rem] p-8 md:p-10">
    <div class="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
      <div>
        <div class="eyebrow">Next step</div>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">{headline}</h2>
        <p class="mt-5 max-w-2xl text-base leading-8 text-slate-300">{text}</p>
      </div>
      <a href={href} class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">{buttonLabel}</a>
    </div>
  </div>
</section>
