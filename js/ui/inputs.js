import { state } from '../state.js';
import { renderCard, buildTemplateGrid } from './render.js';
import { saveState } from '../storage.js';

/* ================================================================
   INPUT BINDINGS
================================================================ */
export function bindInputs() {
  const map = [
    ['iName',    'name'],
    ['iTitle',   'title'],
    ['iCompany', 'company'],
    ['iPhone',   'phone'],
    ['iEmail',   'email'],
    ['iWeb',     'web'],
    ['iTag',     'tag'],
    ['iLI',      'li'],
    ['iX',       'x'],
    ['iGH',      'gh'],
    ['iIG',      'ig'],
  ];
  map.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', () => {
      state[key] = el.value;
      renderCard();
      buildTemplateGrid();
      saveState();
    });
  });
}
