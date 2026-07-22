import { state } from '../state.js';

/* ================================================================
   CARD DATA HELPERS
================================================================ */

/** Returns the first 2 initials of the person's name. */
export function getInitials() {
  return (state.name || 'YN')
    .split(' ')
    .map(w => w[0] || '')
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

/** Returns an array of social link objects that have values. */
export function getSocials() {
  const links = [];
  if (state.li) links.push({ href: state.li, icon: 'fab fa-linkedin-in' });
  if (state.x)  links.push({ href: state.x,  icon: 'fab fa-x-twitter' });
  if (state.gh) links.push({ href: state.gh,  icon: 'fab fa-github' });
  if (state.ig) links.push({ href: state.ig,  icon: 'fab fa-instagram' });
  return links;
}

/**
 * Renders social link icon buttons.
 * @param {string} bg   - background colour
 * @param {string} fg   - icon colour
 * @param {string} extra - extra inline style string
 */
export function socialsHTML(bg, fg = '#fff', extra = '') {
  return getSocials()
    .map(s => `<a href="${s.href}" class="c-sl" style="background:${bg};color:${fg};${extra}" target="_blank" rel="noopener"><i class="${s.icon}"></i></a>`)
    .join('');
}

/**
 * Renders the three contact info rows (phone, email, website).
 * @param {string} tc - text colour
 * @param {string} mc - muted/label colour
 * @param {string} ic - icon colour
 */
export function contactRowsHTML(tc, mc, ic) {
  let html = '';
  if (state.phone) html += `<div class="c-row" style="color:${mc}"><i class="fas fa-phone" style="color:${ic}"></i><span style="color:${tc}">${state.phone}</span></div>`;
  if (state.email) html += `<div class="c-row" style="color:${mc}"><i class="fas fa-envelope" style="color:${ic}"></i><span style="color:${tc}">${state.email}</span></div>`;
  if (state.web)   html += `<div class="c-row" style="color:${mc}"><i class="fas fa-globe" style="color:${ic}"></i><span style="color:${tc}">${state.web}</span></div>`;
  return html;
}
