<script lang="ts">
  import { env } from '$env/dynamic/public';
  import type { LocaleContent } from '$lib/content/site';

  export let content: LocaleContent;

  const apiBaseUrl = env.PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000';

  let email = '';
  let password = '';
  let isSubmitting = false;
  let error = '';

  async function login() {
    isSubmitting = true;
    error = '';

    try {
      const response = await fetch(`${apiBaseUrl}/api/admin/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Invalid admin credentials.');
      }

      window.location.href = '/admin/leads';
    } catch (err) {
      error = err instanceof Error ? err.message : 'Login failed.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<section class="section-shell pt-12 md:pt-20">
  <div class="mx-auto max-w-2xl glass-panel rounded-[2rem] p-8 md:p-10">
    <div class="eyebrow">Internal</div>
    <h1 class="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">Admin login</h1>
    <p class="mt-5 text-base leading-8 text-slate-300">Use your admin credentials to access {content.siteTitle} contact submissions.</p>

    <form class="mt-8" on:submit|preventDefault={login}>
      <label class="block text-sm text-slate-200">
        Email
        <input bind:value={email} class="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40" type="email" required />
      </label>

      <label class="mt-5 block text-sm text-slate-200">
        Password
        <input bind:value={password} class="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40" type="password" required />
      </label>

      {#if error}
        <p class="mt-5 text-sm text-rose-300">{error}</p>
      {/if}

      <button class="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:bg-slate-300" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  </div>
</section>
