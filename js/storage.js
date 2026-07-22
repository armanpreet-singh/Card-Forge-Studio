import { state, STORAGE_KEY } from './state.js';

/* ================================================================
   PERSISTENCE (localStorage)
================================================================ */
export function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
}

export function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (!saved) return;
    Object.assign(state, saved);
    // Restore inputs
    const inputMap = { iName:'name', iTitle:'title', iCompany:'company', iPhone:'phone', iEmail:'email', iWeb:'web', iTag:'tag', iLI:'li', iX:'x', iGH:'gh', iIG:'ig' };
    Object.entries(inputMap).forEach(([id, key]) => {
      const el = document.getElementById(id);
      if (el && state[key] !== undefined) el.value = state[key];
    });
    // Restore accent swatch
    const accentSw = document.querySelector(`#accentRow .color-swatch[data-accent="${state.accent}"]`);
    if (accentSw) { document.querySelectorAll('#accentRow .color-swatch').forEach(s => s.classList.remove('is-active')); accentSw.classList.add('is-active'); }
    // Restore bg swatch
    const bgSw = document.querySelector(`#bgRow .color-swatch[data-bg="${state.bg}"]`);
    if (bgSw) { document.querySelectorAll('#bgRow .color-swatch').forEach(s => s.classList.remove('is-active')); bgSw.classList.add('is-active'); }
    // Restore font pill
    const fontPill = document.querySelector(`.font-pill[data-font="${state.font}"]`);
    if (fontPill) { document.querySelectorAll('.font-pill').forEach(p => p.classList.remove('is-active')); fontPill.classList.add('is-active'); }
  } catch (_) {}
}
