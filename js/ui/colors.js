import { state } from '../state.js';
import { renderCard, buildTemplateGrid } from './render.js';
import { saveState } from '../storage.js';

/* ================================================================
   COLOR SWATCHES
================================================================ */
export function bindColors() {
  // Accent
  document.querySelectorAll('#accentRow .color-swatch[data-accent]').forEach(sw => {
    sw.addEventListener('click', () => {
      state.accent = sw.dataset.accent;
      document.querySelectorAll('#accentRow .color-swatch').forEach(s => s.classList.remove('is-active'));
      sw.classList.add('is-active');
      renderCard();
      buildTemplateGrid();
      saveState();
    });
  });
  document.getElementById('customAccent').addEventListener('input', e => {
    state.accent = e.target.value;
    document.querySelectorAll('#accentRow .color-swatch').forEach(s => s.classList.remove('is-active'));
    e.target.closest('.color-swatch').classList.add('is-active');
    renderCard();
    buildTemplateGrid();
    saveState();
  });

  // Background
  document.querySelectorAll('#bgRow .color-swatch[data-bg]').forEach(sw => {
    sw.addEventListener('click', () => {
      state.bg = sw.dataset.bg;
      document.querySelectorAll('#bgRow .color-swatch').forEach(s => s.classList.remove('is-active'));
      sw.classList.add('is-active');
      renderCard();
      buildTemplateGrid();
      saveState();
    });
  });
  document.getElementById('customBg').addEventListener('input', e => {
    state.bg = e.target.value;
    document.querySelectorAll('#bgRow .color-swatch').forEach(s => s.classList.remove('is-active'));
    e.target.closest('.color-swatch').classList.add('is-active');
    renderCard();
    buildTemplateGrid();
    saveState();
  });
}
