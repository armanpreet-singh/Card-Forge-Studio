import { state } from '../state.js';
import { renderCard, buildTemplateGrid } from './render.js';
import { saveState } from '../storage.js';

/* ================================================================
   FONT PILLS
================================================================ */
export function bindFonts() {
  document.querySelectorAll('.font-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      state.font = pill.dataset.font;
      document.querySelectorAll('.font-pill').forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      renderCard();
      buildTemplateGrid();
      saveState();
    });
  });
}
