import { state } from '../state.js';

/* ================================================================
   FLIP CARD
================================================================ */
export function flipCard() {
  state.flipped = !state.flipped;
  document.getElementById('flipCard').classList.toggle('is-flipped', state.flipped);
}

export function bindFlip() {
  document.getElementById('btnFlip').addEventListener('click', flipCard);
}
