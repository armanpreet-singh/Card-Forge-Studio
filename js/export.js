import { state } from './state.js';
import { flipCard } from './ui/flip.js';
import { showToast } from './ui/toast.js';

/* ================================================================
   EXPORT (PNG / JPG)
================================================================ */
export async function exportCard(format = 'png') {
  // Temporarily show front face
  const wasFlipped = state.flipped;
  if (wasFlipped) flipCard();

  const el = document.getElementById('card-front');
  try {
    const canvas = await html2canvas(el, {
      scale: 3,
      useCORS: true,
      backgroundColor: null,
      logging: false,
    });
    const mime = format === 'jpg' ? 'image/jpeg' : 'image/png';
    const quality = format === 'jpg' ? 0.95 : undefined;
    const dataUrl = canvas.toDataURL(mime, quality);
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `business-card-${state.name.replace(/\s+/g,'-').toLowerCase()}.${format}`;
    a.click();
    showToast(`Exported as ${format.toUpperCase()}`);
  } catch (err) {
    showToast('Export failed — try again', true);
    console.error(err);
  }
  if (wasFlipped) flipCard();
}

export function bindExport() {
  document.getElementById('btnExportPng').addEventListener('click', () => exportCard('png'));
  document.getElementById('btnExportJpg').addEventListener('click', () => exportCard('jpg'));
}
