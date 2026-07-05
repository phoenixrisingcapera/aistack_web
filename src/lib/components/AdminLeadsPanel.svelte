<script lang="ts">
  import { env } from '$env/dynamic/public';
  import { onMount } from 'svelte';
  import type { LocaleContent } from '$lib/content/site';

  type Submission = {
    id: number;
    name: string;
    email: string;
    company: string | null;
    message: string;
    status: 'new' | 'contacted' | 'archived';
    notes: string | null;
    last_contacted_at: string | null;
    requested_meeting_at: string | null;
    requested_timezone: string | null;
    created_at: string;
  };

  type Activity = {
    id: number;
    submission_id: number;
    action: string;
    detail: string | null;
    created_at: string;
  };

  type Metrics = {
    total: number;
    new: number;
    contacted: number;
    archived: number;
  };

  export let content: LocaleContent;

  const apiBaseUrl = env.PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000';

  let adminEmail = '';
  let submissions: Submission[] = [];
  let isLoading = true;
  let error = '';
  let savingId: number | null = null;
  let statusDrafts: Record<number, Submission['status']> = {};
  let noteDrafts: Record<number, string> = {};
  let search = '';
  let statusFilter: 'all' | Submission['status'] = 'all';
  let page = 1;
  let pageSize = 10;
  let total = 0;
  let sortBy: 'created_at' | 'name' | 'status' | 'last_contacted_at' = 'created_at';
  let sortOrder: 'asc' | 'desc' = 'desc';
  let activityBySubmission: Record<number, Activity[]> = {};
  let loadingActivityId: number | null = null;
  let selectedIds: number[] = [];
  let bulkStatus: Submission['status'] = 'contacted';
  let bulkNotes = '';
  let isBulkSaving = false;
  let metrics: Metrics = { total: 0, new: 0, contacted: 0, archived: 0 };

  function buildFilterQuery(includePagination = true) {
    const params = new URLSearchParams();
    if (statusFilter !== 'all') {
      params.set('status_filter', statusFilter);
    }
    if (search.trim()) {
      params.set('q', search.trim());
    }
    params.set('sort_by', sortBy);
    params.set('sort_order', sortOrder);
    if (includePagination) {
      params.set('page', String(page));
      params.set('page_size', String(pageSize));
    }
    const query = params.toString();
    return query ? `?${query}` : '';
  }

  async function loadMetrics() {
    const response = await fetch(`${apiBaseUrl}/api/contact-submissions/metrics`, {
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Failed to load lead metrics.');
    }

    const data = await response.json();
    metrics = {
      total: data.total ?? 0,
      new: data.new ?? 0,
      contacted: data.contacted ?? 0,
      archived: data.archived ?? 0
    };
  }

  async function loadLeads() {
    isLoading = true;
    error = '';

    try {
      const sessionResponse = await fetch(`${apiBaseUrl}/api/admin/session`, {
        credentials: 'include'
      });

      if (!sessionResponse.ok) {
        throw new Error('Unauthorized');
      }

      const sessionData = await sessionResponse.json();
      adminEmail = sessionData.email;

      await loadMetrics();

      const response = await fetch(`${apiBaseUrl}/api/contact-submissions${buildFilterQuery()}`, {
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Failed to load leads.');
      }

      const data = await response.json();
      submissions = data.submissions ?? [];
      total = data.total ?? 0;
      page = data.page ?? page;
      pageSize = data.page_size ?? pageSize;
      statusDrafts = Object.fromEntries(submissions.map((submission) => [submission.id, submission.status]));
      noteDrafts = Object.fromEntries(submissions.map((submission) => [submission.id, submission.notes ?? '']));
      activityBySubmission = {};
      selectedIds = selectedIds.filter((id) => submissions.some((submission) => submission.id === id));
    } catch (err) {
      submissions = [];
      if (err instanceof Error && err.message === 'Unauthorized') {
        window.location.href = '/admin/login';
        return;
      }
      error = err instanceof Error ? err.message : 'Request failed.';
    } finally {
      isLoading = false;
    }
  }

  async function logout() {
    await fetch(`${apiBaseUrl}/api/admin/logout`, {
      method: 'POST',
      credentials: 'include'
    });
    window.location.href = '/admin/login';
  }

  async function saveStatus(submissionId: number) {
    const status = statusDrafts[submissionId];
    const notes = noteDrafts[submissionId] ?? '';
    if (!status) {
      return;
    }

    savingId = submissionId;
    error = '';

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact-submissions/${submissionId}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status, notes: notes.trim() || null })
      });

      if (!response.ok) {
        throw new Error('Failed to update lead status.');
      }

      const data = await response.json();
      submissions = submissions.map((submission) =>
        submission.id === submissionId ? data.submission : submission
      );
      noteDrafts[submissionId] = data.submission.notes ?? '';
      statusDrafts[submissionId] = data.submission.status;
      await loadActivity(submissionId);
    } catch (err) {
      error = err instanceof Error ? err.message : 'Request failed.';
    } finally {
      savingId = null;
    }
  }

  async function loadActivity(submissionId: number) {
    loadingActivityId = submissionId;
    try {
      const response = await fetch(`${apiBaseUrl}/api/contact-submissions/${submissionId}/activities`, {
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Failed to load activity.');
      }

      const data = await response.json();
      activityBySubmission[submissionId] = data.activities ?? [];
    } catch (err) {
      error = err instanceof Error ? err.message : 'Request failed.';
    } finally {
      loadingActivityId = null;
    }
  }

  async function exportCsv() {
    const response = await fetch(`${apiBaseUrl}/api/contact-submissions/export${buildFilterQuery(false)}`, {
      credentials: 'include'
    });

    if (!response.ok) {
      error = 'Failed to export leads.';
      return;
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'aistack-leads.csv';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  async function applyBulkAction() {
    if (selectedIds.length === 0) {
      return;
    }

    isBulkSaving = true;
    error = '';

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact-submissions/bulk`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          submission_ids: selectedIds,
          status: bulkStatus,
          notes: bulkNotes.trim() || null
        })
      });

      if (!response.ok) {
        throw new Error('Failed to apply bulk action.');
      }

      selectedIds = [];
      bulkNotes = '';
      await loadLeads();
    } catch (err) {
      error = err instanceof Error ? err.message : 'Request failed.';
    } finally {
      isBulkSaving = false;
    }
  }

  function applyFilters() {
    page = 1;
    void loadLeads();
  }

  function nextPage() {
    if (page * pageSize >= total) return;
    page += 1;
    void loadLeads();
  }

  function previousPage() {
    if (page <= 1) return;
    page -= 1;
    void loadLeads();
  }

  function hasPendingChanges(submission: Submission) {
    return statusDrafts[submission.id] !== submission.status || (noteDrafts[submission.id] ?? '') !== (submission.notes ?? '');
  }

  function toggleSelected(submissionId: number, checked: boolean) {
    selectedIds = checked ? [...new Set([...selectedIds, submissionId])] : selectedIds.filter((id) => id !== submissionId);
  }

  function toggleSelectAll(checked: boolean) {
    selectedIds = checked ? submissions.map((submission) => submission.id) : [];
  }

  function isSelected(submissionId: number) {
    return selectedIds.includes(submissionId);
  }

  onMount(loadLeads);
</script>

<section class="section-shell pt-12 md:pt-20">
  <div class="glass-panel rounded-[2rem] p-8 md:p-10">
    <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <div class="eyebrow">Internal</div>
        <h1 class="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">{content.labels.adminLeads}</h1>
        {#if adminEmail}
          <p class="mt-4 text-sm text-slate-400">Signed in as {adminEmail}</p>
        {/if}
      </div>
      <button class="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/4 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40" type="button" on:click={logout}>
        Sign out
      </button>
    </div>

    {#if error}
      <p class="mt-6 text-sm text-rose-300">{error}</p>
    {/if}

    <div class="mt-8 grid gap-4 md:grid-cols-4">
      <div class="rounded-3xl border border-white/10 bg-slate-950/55 p-5">
        <div class="text-xs uppercase tracking-[0.18em] text-slate-500">Total</div>
        <div class="mt-3 text-3xl font-semibold text-white">{metrics.total}</div>
      </div>
      <div class="rounded-3xl border border-cyan-300/15 bg-cyan-300/5 p-5">
        <div class="text-xs uppercase tracking-[0.18em] text-cyan-200/80">New</div>
        <div class="mt-3 text-3xl font-semibold text-white">{metrics.new}</div>
      </div>
      <div class="rounded-3xl border border-violet-300/15 bg-violet-300/5 p-5">
        <div class="text-xs uppercase tracking-[0.18em] text-violet-200/80">Contacted</div>
        <div class="mt-3 text-3xl font-semibold text-white">{metrics.contacted}</div>
      </div>
      <div class="rounded-3xl border border-white/10 bg-slate-950/55 p-5">
        <div class="text-xs uppercase tracking-[0.18em] text-slate-500">Archived</div>
        <div class="mt-3 text-3xl font-semibold text-white">{metrics.archived}</div>
      </div>
    </div>

    <div class="mt-8 grid gap-4 md:grid-cols-[1fr_220px_220px_auto_auto]">
      <label class="block text-sm text-slate-200">
        Search
        <input bind:value={search} class="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40" placeholder="Name, email, company, message, notes" />
      </label>
      <label class="block text-sm text-slate-200">
        Status
        <select bind:value={statusFilter} class="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40">
          <option value="all">All</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="archived">Archived</option>
        </select>
      </label>
      <label class="block text-sm text-slate-200">
        Sort
        <select bind:value={sortBy} class="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40">
          <option value="created_at">Created</option>
          <option value="name">Name</option>
          <option value="status">Status</option>
          <option value="last_contacted_at">Last contacted</option>
        </select>
      </label>
      <button class="mt-6 inline-flex items-center justify-center rounded-full border border-white/12 bg-white/4 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300/40 md:mt-auto" type="button" on:click={() => { sortOrder = sortOrder === 'asc' ? 'desc' : 'asc'; void loadLeads(); }}>
        {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
      </button>
      <button class="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:bg-slate-300 md:mt-auto" type="button" on:click={applyFilters} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Apply filters'}
      </button>
      <button class="mt-6 inline-flex items-center justify-center rounded-full border border-white/12 bg-white/4 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300/40 md:mt-auto" type="button" on:click={exportCsv}>
        Export CSV
      </button>
    </div>

    <div class="mt-5 flex items-center justify-between text-sm text-slate-400">
      <div>{total} total leads</div>
      <div>Page {page} of {Math.max(1, Math.ceil(total / pageSize))}</div>
    </div>

    <div class="mt-6 rounded-[1.6rem] border border-white/10 bg-slate-950/50 p-5">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div class="text-sm font-medium text-slate-200">Bulk actions</div>
          <div class="mt-2 text-sm text-slate-400">{selectedIds.length} selected on this page</div>
        </div>
        <div class="grid gap-4 lg:grid-cols-[180px_1fr_auto] lg:items-end lg:min-w-[720px]">
          <label class="block text-sm text-slate-200">
            Status
            <select bind:value={bulkStatus} class="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-300/40">
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="archived">Archived</option>
            </select>
          </label>
          <label class="block text-sm text-slate-200">
            Notes
            <input bind:value={bulkNotes} class="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-300/40" placeholder="Optional shared note" />
          </label>
          <button class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:bg-slate-300" type="button" on:click={applyBulkAction} disabled={isBulkSaving || selectedIds.length === 0}>
            {isBulkSaving ? 'Applying...' : 'Apply bulk action'}
          </button>
        </div>
      </div>
    </div>

    <div class="mt-8 grid gap-4">
      {#if isLoading}
        <div class="rounded-3xl border border-white/10 bg-slate-950/50 p-6 text-sm text-slate-400">Loading leads...</div>
      {:else if submissions.length === 0 && !error}
        <div class="rounded-3xl border border-white/10 bg-slate-950/50 p-6 text-sm text-slate-400">No leads yet.</div>
      {/if}

      {#if submissions.length > 0}
        <label class="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm text-slate-300">
          <input type="checkbox" checked={selectedIds.length === submissions.length} on:change={(event) => toggleSelectAll((event.currentTarget as HTMLInputElement).checked)} />
          <span>Select all on this page</span>
        </label>
      {/if}

      {#each submissions as submission}
        <article class="rounded-[1.6rem] border border-white/10 bg-slate-950/55 p-6">
          <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div class="flex items-start gap-4">
              <input class="mt-1 h-4 w-4" type="checkbox" checked={isSelected(submission.id)} on:change={(event) => toggleSelected(submission.id, (event.currentTarget as HTMLInputElement).checked)} />
              <div>
              <h2 class="text-xl font-semibold text-white">{submission.name}</h2>
              <div class="mt-2 text-sm text-slate-300">{submission.email}</div>
              {#if submission.company}
                <div class="mt-1 text-sm text-slate-400">{submission.company}</div>
              {/if}
              </div>
            </div>
            <div class="flex flex-col items-start gap-3 md:items-end">
              <div class="text-xs uppercase tracking-[0.18em] text-slate-500">{new Date(submission.created_at).toLocaleString()}</div>
              <div class="flex items-center gap-3">
                <select bind:value={statusDrafts[submission.id]} class="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-white outline-none focus:border-cyan-300/40">
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="archived">Archived</option>
                </select>
                <button class="rounded-full border border-white/12 bg-white/4 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 disabled:cursor-not-allowed disabled:opacity-60" type="button" on:click={() => saveStatus(submission.id)} disabled={savingId === submission.id || !hasPendingChanges(submission)}>
                  {savingId === submission.id ? 'Saving...' : 'Save'}
                </button>
              </div>
            </div>
          </div>
          <p class="mt-5 whitespace-pre-wrap text-sm leading-7 text-slate-300">{submission.message}</p>
          <div class="mt-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
            <label class="block text-sm text-slate-200">
              Notes
              <textarea bind:value={noteDrafts[submission.id]} class="mt-2 min-h-28 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40"></textarea>
            </label>
            <div class="space-y-4 md:min-w-64">
              <div class="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm text-slate-400">
                <div class="font-medium text-slate-200">Requested meeting</div>
                <div class="mt-2">{submission.requested_meeting_at ? new Date(submission.requested_meeting_at).toLocaleString() : 'No meeting requested'}</div>
                <div class="mt-1 text-xs text-slate-500">{submission.requested_timezone || 'No timezone provided'}</div>
              </div>
              <div class="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm text-slate-400">
                <div class="font-medium text-slate-200">Last contacted</div>
                <div class="mt-2">{submission.last_contacted_at ? new Date(submission.last_contacted_at).toLocaleString() : 'Not yet contacted'}</div>
              </div>
            </div>
          </div>
          <div class="mt-5 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
            <div class="flex items-center justify-between gap-4">
              <div class="text-sm font-medium text-slate-200">Activity</div>
              <button class="rounded-full border border-white/12 bg-white/4 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:border-cyan-300/40" type="button" on:click={() => loadActivity(submission.id)}>
                {loadingActivityId === submission.id ? 'Loading...' : 'Refresh'}
              </button>
            </div>
            <div class="mt-4 space-y-3 text-sm text-slate-300">
              {#if activityBySubmission[submission.id]?.length}
                {#each activityBySubmission[submission.id] as activity}
                  <div class="rounded-xl border border-white/8 bg-slate-950/50 px-4 py-3">
                    <div class="flex items-center justify-between gap-4">
                      <div class="font-medium text-white">{activity.action}</div>
                      <div class="text-xs uppercase tracking-[0.14em] text-slate-500">{new Date(activity.created_at).toLocaleString()}</div>
                    </div>
                    {#if activity.detail}
                      <div class="mt-2 text-slate-400">{activity.detail}</div>
                    {/if}
                  </div>
                {/each}
              {:else}
                <div class="text-slate-500">No activity loaded.</div>
              {/if}
            </div>
          </div>
        </article>
      {/each}
    </div>

    <div class="mt-8 flex items-center justify-between gap-4">
      <button class="rounded-full border border-white/12 bg-white/4 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300/40 disabled:cursor-not-allowed disabled:opacity-50" type="button" on:click={previousPage} disabled={page <= 1 || isLoading}>
        Previous
      </button>
      <button class="rounded-full border border-white/12 bg-white/4 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300/40 disabled:cursor-not-allowed disabled:opacity-50" type="button" on:click={nextPage} disabled={page * pageSize >= total || isLoading}>
        Next
      </button>
    </div>
  </div>
</section>
