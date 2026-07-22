import { state } from './state.js';
import { loadState, saveState } from './storage.js';
import { renderCard, buildTemplateGrid } from './ui/render.js';
import { bindInputs } from './ui/inputs.js';
import { bindColors } from './ui/colors.js';
import { bindFonts } from './ui/fonts.js';
import { bindAccordions } from './ui/accordion.js';
import { applyTheme, bindDarkMode } from './ui/darkMode.js';
import { bindFlip } from './ui/flip.js';
import { bindPrint } from './ui/print.js';
import { bindExport } from './export.js';
import { bindKeyboard } from './ui/keyboard.js';

/* ================================================================
   INIT
================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  buildTemplateGrid();
  renderCard();
  bindInputs();
  bindColors();
  bindFonts();
  bindAccordions();
  bindDarkMode();
  bindFlip();
  bindPrint();
  bindExport();
  bindKeyboard();
  applyTheme(state.dark);
});
