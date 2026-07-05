<script lang="ts">
  export let eyebrow = '';
  export let title = '';
  export let copy = '';
</script>

<div>
  {#if eyebrow}
    <div class="eyebrow">{eyebrow}</div>
  {/if}
  <h2 class="section-title">{title}</h2>
  {#if copy}
    <p class="section-copy">{copy}</p>
  {/if}
</div>
