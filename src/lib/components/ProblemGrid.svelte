<script lang="ts">
  export let title = 'Problems';
  export let items: string[] = [];
</script>

<section class="section-shell pt-0">
  <div class="eyebrow">Problem</div>
  <h2 class="section-title">{title}</h2>
  <div class="mt-12 grid gap-5 lg:grid-cols-2">
    {#each items as item}
      <article class="glass-panel rounded-[1.75rem] p-6">
        <p class="text-sm leading-7 text-slate-200">{item}</p>
      </article>
    {/each}
  </div>
</section>
