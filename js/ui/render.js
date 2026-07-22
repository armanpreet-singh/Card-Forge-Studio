import { state } from '../state.js';
import { isLight } from '../utils/color.js';
import { TEMPLATES } from '../templates/index.js';
import { saveState } from '../storage.js';

/** Re-renders the card inner HTML for the current template & state. */
export function renderCard() {
  const tpl = TEMPLATES.find(t => t.id === state.template) || TEMPLATES[0];
  document.getElementById('cardInner').innerHTML = tpl.render();
  // Update card back
  const backBg = state.accent;
  const backFg = isLight(backBg) ? '#18180f' : '#ffffff';
  const cardBack = document.getElementById('cardBack');
  cardBack.style.background = backBg;
  cardBack.style.color = backFg;
  document.getElementById('backCompany').textContent = state.company || state.name;
  document.getElementById('backDot').style.background = backFg;
  document.getElementById('backTagline').textContent =
    state.tag || [state.title, state.company].filter(Boolean).join(' · ') || 'excellence · design · vision';
  // Apply font to card back
  cardBack.style.fontFamily = `'${state.font}', sans-serif`;
}

/** Builds the template thumbnail grid in the sidebar. */
export function buildTemplateGrid() {
  const grid = document.getElementById('templateGrid');
  grid.innerHTML = '';
  TEMPLATES.forEach(tpl => {
    const item = document.createElement('div');
    item.className = 'template-item' + (tpl.id === state.template ? ' is-active' : '');
    item.dataset.tplId = tpl.id;
    item.innerHTML = `
      <div class="template-item__preview">
        <div style="position:absolute;inset:0;transform:scale(.42);transform-origin:top left;width:238%;height:238%;border-radius:0">
          ${tpl.render()}
        </div>
      </div>
      <div class="template-item__label">${tpl.lbl}</div>`;
    item.addEventListener('click', () => {
      state.template = tpl.id;
      renderCard();
      document.querySelectorAll('.template-item').forEach(el => el.classList.remove('is-active'));
      item.classList.add('is-active');
      saveState();
    });
    grid.appendChild(item);
  });
}
