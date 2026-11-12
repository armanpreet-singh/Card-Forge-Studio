import { state, STORAGE_KEY } from './state.js';
import {
  normalizeFontFamily,
  normalizeHexColor,
} from './utils/sanitize.js';

/* ================================================================
   PERSISTENCE (localStorage)
================================================================ */

const TEXT_FIELD_LIMITS = Object.freeze({
  name: 120,
  title: 120,
  company: 120,
  phone: 40,
  email: 254,
  web: 2048,
  tag: 180,
  li: 2048,
  x: 2048,
  gh: 2048,
  ig: 2048,
});

const TEMPLATE_ID_PATTERN = /^[a-z0-9-]{1,80}$/;

export function sanitizeSavedState(saved) {
  if (!saved || typeof saved !== 'object' || Array.isArray(saved)) {
    return {};
  }

  const sanitized = {};

  for (const [key, maxLength] of Object.entries(TEXT_FIELD_LIMITS)) {
    if (typeof saved[key] === 'string') {
      sanitized[key] = saved[key].slice(0, maxLength);
    }
  }

  sanitized.accent = normalizeHexColor(saved.accent, state.accent);
  sanitized.bg = normalizeHexColor(saved.bg, state.bg);
  sanitized.font = normalizeFontFamily(saved.font, state.font);

  if (typeof saved.template === 'string' && TEMPLATE_ID_PATTERN.test(saved.template)) {
    sanitized.template = saved.template;
  }

  if (typeof saved.dark === 'boolean') {
    sanitized.dark = saved.dark;
  }

  // "flipped" is transient UI state; always start with the front face visible.
  sanitized.flipped = false;

  return sanitized;
}

export function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (_) {
    return false;
  }
}

export function loadState() {
  try {
    const rawSaved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    const saved = sanitizeSavedState(rawSaved);
    Object.assign(state, saved);

    // Restore inputs from the validated allowlist only.
    const inputMap = {
      iName: 'name',
      iTitle: 'title',
      iCompany: 'company',
      iPhone: 'phone',
      iEmail: 'email',
      iWeb: 'web',
      iTag: 'tag',
      iLI: 'li',
      iX: 'x',
      iGH: 'gh',
      iIG: 'ig',
    };

    Object.entries(inputMap).forEach(([id, key]) => {
      const el = document.getElementById(id);
      if (el && typeof state[key] === 'string') {
        el.value = state[key];
      }
    });

    // Restore swatches by comparing data attributes, not by interpolating
    // saved values into CSS selectors.
    const accentSwatches = document.querySelectorAll('#accentRow .color-swatch[data-accent]');
    const accentSwatch = [...accentSwatches].find(sw => sw.dataset.accent === state.accent);
    accentSwatches.forEach(sw => sw.classList.toggle('is-active', sw === accentSwatch));

    const bgSwatches = document.querySelectorAll('#bgRow .color-swatch[data-bg]');
    const bgSwatch = [...bgSwatches].find(sw => sw.dataset.bg === state.bg);
    bgSwatches.forEach(sw => sw.classList.toggle('is-active', sw === bgSwatch));

    const fontPills = document.querySelectorAll('.font-pill[data-font]');
    const fontPill = [...fontPills].find(pill => pill.dataset.font === state.font);
    fontPills.forEach(pill => pill.classList.toggle('is-active', pill === fontPill));
  } catch (_) {
    // Malformed, inaccessible, or unavailable local storage is non-fatal.
  }
}
