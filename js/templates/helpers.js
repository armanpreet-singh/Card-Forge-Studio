import { state } from '../state.js';
import { escapeHTML, sanitizeExternalUrl } from '../utils/sanitize.js';

/* ================================================================
   CARD DATA HELPERS
================================================================ */

/** Returns the first two initials of the person's name as safe HTML text. */
export function getInitials() {
  const initials = (typeof state.name === 'string' ? state.name : 'Your Name')
    .trim()
    .split(/\s+/)
    .map(word => word[0] || '')
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return escapeHTML(initials || 'YN');
}

/** Returns only valid HTTP(S) social links. */
export function getSocials() {
  const platforms = [
    ['li', 'fab fa-linkedin-in'],
    ['x', 'fab fa-x-twitter'],
    ['gh', 'fab fa-github'],
    ['ig', 'fab fa-instagram'],
  ];

  return platforms.flatMap(([key, icon]) => {
    const href = sanitizeExternalUrl(state[key]);
    return href ? [{ href, icon }] : [];
  });
}

/**
 * Renders social link icon buttons.
 * Style values are supplied by the built-in templates, not by user text.
 */
export function socialsHTML(bg, fg = '#fff', extra = '') {
  const safeBg = escapeHTML(bg);
  const safeFg = escapeHTML(fg);
  const safeExtra = escapeHTML(extra);

  return getSocials()
    .map(s => `<a href="${escapeHTML(s.href)}" class="c-sl" style="background:${safeBg};color:${safeFg};${safeExtra}" target="_blank" rel="noopener noreferrer"><i class="${s.icon}" aria-hidden="true"></i></a>`)
    .join('');
}

/**
 * Renders the three contact info rows (phone, email, website).
 * Card details are treated as text and escaped before HTML insertion.
 */
export function contactRowsHTML(tc, mc, ic) {
  const textColor = escapeHTML(tc);
  const mutedColor = escapeHTML(mc);
  const iconColor = escapeHTML(ic);
  let html = '';

  if (state.phone) {
    html += `<div class="c-row" style="color:${mutedColor}"><i class="fas fa-phone" style="color:${iconColor}" aria-hidden="true"></i><span style="color:${textColor}">${escapeHTML(state.phone)}</span></div>`;
  }
  if (state.email) {
    html += `<div class="c-row" style="color:${mutedColor}"><i class="fas fa-envelope" style="color:${iconColor}" aria-hidden="true"></i><span style="color:${textColor}">${escapeHTML(state.email)}</span></div>`;
  }
  if (state.web) {
    html += `<div class="c-row" style="color:${mutedColor}"><i class="fas fa-globe" style="color:${iconColor}" aria-hidden="true"></i><span style="color:${textColor}">${escapeHTML(state.web)}</span></div>`;
  }

  return html;
}
