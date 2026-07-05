import { browser } from '$app/environment';
import { env } from '$env/dynamic/public';

export function getPublicSiteUrl() {
  return env.PUBLIC_SITE_URL || 'https://aistack.codes';
}

export function getApiBaseUrl() {
  if (env.PUBLIC_API_BASE_URL) {
    return env.PUBLIC_API_BASE_URL;
  }

  if (browser) {
    const host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') {
      return 'http://127.0.0.1:8000';
    }
  }

  return '';
}

export function trackEvent(name: string, props?: Record<string, string | number | boolean>) {
  if (!browser) {
    return;
  }

  const plausible = (window as Window & {
    plausible?: (event: string, options?: { props?: Record<string, string | number | boolean> }) => void;
  }).plausible;

  if (typeof plausible === 'function') {
    plausible(name, props ? { props } : undefined);
  }
}
