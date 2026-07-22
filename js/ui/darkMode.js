import { state } from '../state.js';
import { saveState } from '../storage.js';

/* ================================================================
   DARK MODE
================================================================ */
export function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  state.dark = dark;
  const icon = document.getElementById('dmIcon');
  const label = document.getElementById('dmLabel');
  const toggle = document.getElementById('dmToggle');
  icon.className = dark ? 'fas fa-moon dm-toggle__icon' : 'fas fa-sun dm-toggle__icon';
  label.textContent = dark ? 'Dark' : 'Light';
  toggle.setAttribute('aria-checked', String(dark));
}

export function bindDarkMode() {
  document.getElementById('dmToggle').addEventListener('click', () => {
    applyTheme(!state.dark);
    saveState();
  });
}
