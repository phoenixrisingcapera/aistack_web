<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';
  import { env } from '$env/dynamic/public';
  import type { LocaleContent } from '$lib/content/site';

  type SchedulingSlot = {
    value: string;
    starts_at: string;
    timezone: string;
  };

  export let content: LocaleContent;

  const apiBaseUrl = env.PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000';

  let name = '';
  let email = '';
  let company = '';
  let message = '';
  let wantsMeeting = true;
  let requestedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  let selectedMeetingSlot = '';
  let slots: SchedulingSlot[] = [];
  let scheduleNotice = '';
  let isLoadingSlots = false;
  let isSubmitting = false;
  let status: 'idle' | 'success' | 'error' = 'idle';
  let feedback = '';
  let selectedOffer = '';

  const offerLabels: Record<string, { en: string; es: string }> = {
    'ai-systems-audit': { en: 'AI Systems Audit', es: 'Auditoria de sistemas IA' },
    'prototype-rescue-audit': { en: 'Prototype Rescue Audit', es: 'Auditoria de rescate de prototipo' },
    'ai-prototype-sprint': { en: 'AI Prototype Sprint', es: 'Sprint de prototipo IA' },
    'production-ai-build': { en: 'Production AI Build', es: 'Construccion IA en produccion' },
    'guardrails-cost-layer': { en: 'Guardrails & Cost Layer', es: 'Guardrails y control de costos' },
    'ai-build-partner': { en: 'AI Build Partner', es: 'Partner mensual IA' },
    'aistack-core-starter': { en: 'AIStack Core Starter', es: 'AIStack Core Starter' },
    'aistack-core-growth': { en: 'AIStack Core Growth', es: 'AIStack Core Growth' },
    'aistack-core-custom': { en: 'AIStack Core Custom', es: 'AIStack Core Custom' }
  };

  function offerName(slug: string) {
    return offerLabels[slug]?.[content.locale] ?? slug;
  }

  function maybePrefillOffer() {
    const offer = page.url.searchParams.get('offer') ?? '';
    if (!offer || selectedOffer === offer) {
      return;
    }

    selectedOffer = offer;
    if (!message.trim()) {
      message =
        content.locale === 'es'
          ? `Estoy interesado/a en ${offerName(offer)}. Me gustaria hablar de alcance, tiempos, pricing y el mejor siguiente paso.`
          : `I am interested in ${offerName(offer)}. I would like to discuss scope, timeline, pricing, and the best next step.`;
    }
  }

  async function loadSlots() {
    isLoadingSlots = true;

    try {
      const response = await fetch(`${apiBaseUrl}/api/scheduling/slots`);
      if (!response.ok) {
        throw new Error('Unable to load meeting slots right now.');
      }

      const data = await response.json();
      slots = data.slots ?? [];
      scheduleNotice = data.notice ?? '';
      if (!selectedMeetingSlot && slots.length > 0) {
        selectedMeetingSlot = slots[0].value;
      }
    } catch (error) {
      feedback = error instanceof Error ? error.message : 'Request failed.';
      status = 'error';
    } finally {
      isLoadingSlots = false;
    }
  }

  function requestedMeetingAt() {
    if (!wantsMeeting || !selectedMeetingSlot) {
      return null;
    }

    return selectedMeetingSlot;
  }

  function formatSlotForUser(value: string) {
    return new Intl.DateTimeFormat(undefined, {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short'
    }).format(new Date(value));
  }

  onMount(() => {
    maybePrefillOffer();
    loadSlots();
  });

  async function submitForm() {
    isSubmitting = true;
    status = 'idle';
    feedback = '';

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          company: company || null,
          message,
          offer: selectedOffer || null,
          requested_meeting_at: requestedMeetingAt(),
          requested_timezone: wantsMeeting ? requestedTimezone : null
        })
      });

      if (!response.ok) {
        throw new Error('Unable to send inquiry. Please try again.');
      }

      status = 'success';
      feedback = content.locale === 'es' ? 'Consulta enviada. Te responderemos pronto.' : 'Inquiry sent. We will reply soon.';
      name = '';
      email = '';
      company = '';
      message = '';
      wantsMeeting = true;
      selectedMeetingSlot = slots[0]?.value ?? '';
    } catch (error) {
      status = 'error';
      feedback = error instanceof Error ? error.message : 'Request failed.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<section class="section-shell">
  <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
    <div class="glass-panel rounded-[2rem] p-8 md:p-10">
      <div class="eyebrow">Contact</div>
      <h2 class="section-title !mt-3 !text-4xl">{content.contactTitle}</h2>
      <p class="section-copy">{content.contactIntro}</p>
      <div class="mt-8 space-y-3 text-sm text-slate-300">
        <div>acp2760@gmail.com</div>
        <div>Remote delivery for global teams and LATAM companies.</div>
      </div>
      {#if selectedOffer}
        <div class="mt-6 rounded-3xl border border-cyan-300/20 bg-cyan-300/8 p-4 text-sm text-cyan-100">
          {content.locale === 'es' ? 'Oferta seleccionada:' : 'Selected offer:'} <span class="font-medium text-white">{offerName(selectedOffer)}</span>
        </div>
      {/if}
      <ul class="mt-8 space-y-3 text-sm text-slate-200">
        {#each content.contactPoints as point}
          <li class="flex items-start gap-3">
            <span class="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span>
            <span>{point}</span>
          </li>
        {/each}
      </ul>
      <div class="mt-8 rounded-3xl border border-white/10 bg-slate-950/45 p-5 text-sm text-slate-300">
        <div class="font-medium text-white">{content.locale === 'en' ? 'Commercial shortcuts' : 'Atajos comerciales'}</div>
        <div class="mt-3 flex flex-wrap gap-3">
          <a href={content.locale === 'en' ? '/billing?offer=ai-systems-audit' : '/es/facturacion?offer=ai-systems-audit'} class="rounded-full border border-white/12 bg-white/4 px-4 py-2 transition hover:border-cyan-300/40 hover:text-white">{content.locale === 'en' ? 'Pay for audit' : 'Pagar auditoria'}</a>
          <a href={content.locale === 'en' ? '/billing?offer=ai-prototype-sprint' : '/es/facturacion?offer=ai-prototype-sprint'} class="rounded-full border border-white/12 bg-white/4 px-4 py-2 transition hover:border-cyan-300/40 hover:text-white">{content.locale === 'en' ? 'Prototype deposit' : 'Deposito de prototipo'}</a>
          <a href={content.locale === 'en' ? '/billing?offer=aistack-core-growth' : '/es/facturacion?offer=aistack-core-growth'} class="rounded-full border border-white/12 bg-white/4 px-4 py-2 transition hover:border-cyan-300/40 hover:text-white">AIStack Core</a>
        </div>
      </div>
    </div>

    <form class="glass-panel rounded-[2rem] p-8 md:p-10" on:submit|preventDefault={submitForm}>
      <div class="grid gap-5 md:grid-cols-2">
        <label class="block text-sm text-slate-200">
          Name
          <input class="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40" name="name" bind:value={name} required />
        </label>
        <label class="block text-sm text-slate-200">
          Email
          <input class="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40" name="email" type="email" bind:value={email} required />
        </label>
      </div>

      <label class="mt-5 block text-sm text-slate-200">
        Company
        <input class="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40" name="company" bind:value={company} />
      </label>

      <div class="mt-6 rounded-3xl border border-white/10 bg-slate-950/45 p-5">
        <label class="flex items-center gap-3 text-sm text-slate-200">
          <input type="checkbox" bind:checked={wantsMeeting} class="h-4 w-4" />
          <span>Book a discovery call</span>
        </label>

        {#if wantsMeeting}
          <div class="mt-5 grid gap-5 md:grid-cols-[1.4fr_0.6fr]">
            <label class="block text-sm text-slate-200">
              Available slots
              <select class="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40" bind:value={selectedMeetingSlot} required={wantsMeeting} disabled={isLoadingSlots || slots.length === 0}>
                {#each slots as slot}
                  <option value={slot.value}>{formatSlotForUser(slot.value)}</option>
                {/each}
              </select>
            </label>
            <label class="block text-sm text-slate-200">
              Your timezone
              <input class="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40" bind:value={requestedTimezone} placeholder="Europe/London" required={wantsMeeting} />
            </label>
          </div>
          <p class="mt-4 text-sm text-slate-400">{scheduleNotice || 'Available Monday to Thursday, 13:00 to 15:00 London time only.'}</p>
          {#if isLoadingSlots}
            <p class="mt-2 text-sm text-slate-500">Loading available slots...</p>
          {:else if slots.length === 0}
            <p class="mt-2 text-sm text-amber-300">No available slots are currently open in the Monday to Thursday 13:00-15:00 London window.</p>
          {/if}
        {/if}
      </div>

      <label class="mt-5 block text-sm text-slate-200">
        {content.labels.message}
        <textarea class="mt-2 min-h-40 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40" name="message" bind:value={message} required></textarea>
      </label>

      {#if feedback}
        <p class:text-emerald-300={status === 'success'} class:text-rose-300={status === 'error'} class="mt-5 text-sm">
          {feedback}
        </p>
      {/if}

      <button class="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:bg-slate-300" type="submit" disabled={isSubmitting}>
        {isSubmitting ? (content.locale === 'es' ? 'Enviando...' : 'Sending...') : content.labels.audit}
      </button>
    </form>
  </div>
</section>
