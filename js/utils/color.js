/* ================================================================
   COLOUR UTILITIES
================================================================ */

/**
 * Returns true if the hex colour is perceived as light.
 * Uses ITU-R BT.601 luminance formula.
 */
export function isLight(hex) {
  if (!hex || hex.length < 7) return true;
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 145;
}

/**
 * Mix two hex colours by a ratio p (0 = c1, 1 = c2).
 */
export function mixHex(c1, c2, p) {
  const parse = s => {
    const x = s.replace('#', '');
    return [parseInt(x.slice(0,2),16), parseInt(x.slice(2,4),16), parseInt(x.slice(4,6),16)];
  };
  const a = parse(c1), b = parse(c2);
  return '#' + a.map((v, i) => Math.round(v * (1 - p) + b[i] * p).toString(16).padStart(2, '0')).join('');
}
