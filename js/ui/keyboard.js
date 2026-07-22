import { state } from '../state.js';
import { exportCard } from '../export.js';
import { flipCard } from './flip.js';
import { applyTheme } from './darkMode.js';
import { saveState } from '../storage.js';

/* ================================================================
   KEYBOARD SHORTCUTS
================================================================ */
export function bindKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if ((e.metaKey || e.ctrlKey) && e.key === 's') { e.preventDefault(); exportCard('png'); }
    if ((e.metaKey || e.ctrlKey) && e.key === 'e') { e.preventDefault(); exportCard('jpg'); }
    if (e.code === 'Space') { e.preventDefault(); flipCard(); }
    if (e.key === 'd' || e.key === 'D') { applyTheme(!state.dark); saveState(); }
  });
}
