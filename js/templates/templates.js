import { state } from '../state.js';
import { isLight, mixHex } from '../utils/color.js';
import { getInitials, socialsHTML, contactRowsHTML } from './helpers.js';

/* ================================================================
   TEMPLATES — 20 designs
   Each template is an object with:
     id   {string}   — unique slug
     lbl  {string}   — short display label
     render() {fn}   — returns an HTML string for the card inner
================================================================ */
export const TEMPLATES = [
  // ── 1. Minimal ─────────────────────────────────────────────────
  {
    id: 'minimal', lbl: 'Minimal',
    render() {
      const fg = isLight(state.bg) ? '#18180f' : '#f2f2ee';
      const muted = isLight(state.bg) ? 'rgba(0,0,0,.45)' : 'rgba(255,255,255,.5)';
      return `<div class="c-wrap" style="background:${state.bg};font-family:'${state.font}',sans-serif">
        <div class="c-name" style="color:${fg}">${state.name}</div>
        <div class="c-role" style="color:${state.accent};font-size:12px;margin-bottom:4px">${state.title}${state.company ? ` · ${state.company}` : ''}</div>
        ${state.tag ? `<div style="font-size:10.5px;color:${muted};margin-bottom:auto">${state.tag}</div>` : ''}
        <div class="c-divider" style="background:${state.accent}"></div>
        <div class="c-contacts">${contactRowsHTML(fg, muted, state.accent)}</div>
        <div class="c-socials">${socialsHTML(state.accent)}</div>
      </div>`;
    }
  },
  // ── 2. Bold Left ───────────────────────────────────────────────
  {
    id: 'bold-left', lbl: 'Bold Left',
    render() {
      const fg = isLight(state.bg) ? '#18180f' : '#f2f2ee';
      const muted = isLight(state.bg) ? 'rgba(0,0,0,.45)' : 'rgba(255,255,255,.5)';
      return `<div class="c-wrap" style="background:${state.bg};font-family:'${state.font}',sans-serif;flex-direction:row;gap:0;padding:0">
        <div style="width:8px;background:${state.accent};flex-shrink:0;border-radius:0"></div>
        <div style="padding:28px 28px;display:flex;flex-direction:column;justify-content:space-between;flex:1">
          <div>
            <div class="c-name" style="color:${fg}">${state.name}</div>
            <div style="font-size:11.5px;color:${state.accent};margin-top:3px">${state.title}</div>
            ${state.company ? `<div style="font-size:11px;color:${muted};margin-top:2px">${state.company}</div>` : ''}
          </div>
          <div>
            <div class="c-contacts">${contactRowsHTML(fg, muted, state.accent)}</div>
            <div class="c-socials">${socialsHTML(state.accent)}</div>
          </div>
        </div>
      </div>`;
    }
  },
  // ── 3. Dark Luxury ─────────────────────────────────────────────
  {
    id: 'dark-luxury', lbl: 'Dark',
    render() {
      const bg = state.bg === '#ffffff' ? '#0e0e0c' : state.bg;
      const fg = isLight(bg) ? '#18180f' : '#f2f2ee';
      const muted = isLight(bg) ? 'rgba(0,0,0,.5)' : 'rgba(255,255,255,.45)';
      return `<div class="c-wrap" style="background:${bg};font-family:'${state.font}',sans-serif">
        <div style="flex:1;display:flex;flex-direction:column;justify-content:center">
          <div style="font-size:9.5px;letter-spacing:3px;text-transform:uppercase;color:${state.accent};margin-bottom:12px">${state.company || ''}</div>
          <div style="font-size:26px;font-weight:700;color:${fg};letter-spacing:-.5px;line-height:1.1">${state.name}</div>
          <div style="font-size:12px;color:${muted};margin-top:6px">${state.title}</div>
        </div>
        <div style="border-top:1px solid rgba(255,255,255,.1);padding-top:16px">
          <div class="c-contacts">${contactRowsHTML(fg, muted, state.accent)}</div>
        </div>
      </div>`;
    }
  },
  // ── 4. Split ───────────────────────────────────────────────────
  {
    id: 'split', lbl: 'Split',
    render() {
      const accentFg = isLight(state.accent) ? '#18180f' : '#ffffff';
      const bgFg = isLight(state.bg) ? '#18180f' : '#f2f2ee';
      const muted = isLight(state.bg) ? 'rgba(0,0,0,.45)' : 'rgba(255,255,255,.45)';
      return `<div class="c-wrap" style="padding:0;flex-direction:row;font-family:'${state.font}',sans-serif">
        <div style="flex:0 0 45%;background:${state.accent};padding:26px 22px;display:flex;flex-direction:column;justify-content:flex-end">
          <div style="font-size:22px;font-weight:700;color:${accentFg};line-height:1.1">${state.name}</div>
          <div style="font-size:11px;color:${accentFg};opacity:.75;margin-top:5px">${state.title}</div>
          <div class="c-socials" style="margin-top:12px">${socialsHTML('rgba(255,255,255,.2)', accentFg)}</div>
        </div>
        <div style="flex:1;background:${state.bg};padding:26px 22px;display:flex;flex-direction:column;justify-content:space-between">
          <div style="font-size:11px;font-weight:600;color:${state.accent}">${state.company || ''}</div>
          ${state.tag ? `<div style="font-size:10px;color:${muted};font-style:italic">${state.tag}</div>` : '<div></div>'}
          <div class="c-contacts">${contactRowsHTML(bgFg, muted, state.accent)}</div>
        </div>
      </div>`;
    }
  },
  // ── 5. Geometric ───────────────────────────────────────────────
  {
    id: 'geometric', lbl: 'Geometric',
    render() {
      const fg = isLight(state.bg) ? '#18180f' : '#f2f2ee';
      const muted = isLight(state.bg) ? 'rgba(0,0,0,.45)' : 'rgba(255,255,255,.45)';
      return `<div class="c-wrap" style="background:${state.bg};font-family:'${state.font}',sans-serif;overflow:hidden">
        <div style="position:absolute;top:-60px;right:-60px;width:200px;height:200px;border-radius:50%;background:${state.accent};opacity:.12"></div>
        <div style="position:absolute;bottom:-40px;left:-40px;width:140px;height:140px;border-radius:50%;background:${state.accent};opacity:.08"></div>
        <div style="flex:1;display:flex;flex-direction:column;justify-content:center;position:relative">
          <div class="c-name" style="color:${fg}">${state.name}</div>
          <div style="font-size:12px;color:${state.accent};margin-top:4px">${state.title}</div>
          ${state.company ? `<div style="font-size:11px;color:${muted};margin-top:2px">${state.company}</div>` : ''}
        </div>
        <div style="border-top:1px solid ${state.accent}26;padding-top:14px;position:relative">
          <div class="c-contacts">${contactRowsHTML(fg, muted, state.accent)}</div>
          <div class="c-socials">${socialsHTML(state.accent + '22', state.accent)}</div>
        </div>
      </div>`;
    }
  },
  // ── 6. Editorial ───────────────────────────────────────────────
  {
    id: 'editorial', lbl: 'Editorial',
    render() {
      const fg = isLight(state.bg) ? '#18180f' : '#f2f2ee';
      const muted = isLight(state.bg) ? 'rgba(0,0,0,.4)' : 'rgba(255,255,255,.4)';
      return `<div class="c-wrap" style="background:${state.bg};font-family:'DM Serif Display',serif">
        <div style="border-bottom:2px solid ${state.accent};padding-bottom:10px;margin-bottom:12px">
          <div style="font-size:28px;color:${fg};line-height:1">${state.name}</div>
          <div style="font-size:10.5px;letter-spacing:2.5px;text-transform:uppercase;color:${state.accent};margin-top:6px;font-family:'Inter',sans-serif">${state.title}</div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:flex-end;flex:1">
          <div>
            ${state.company ? `<div style="font-size:11.5px;font-weight:600;color:${fg};font-family:'Inter',sans-serif">${state.company}</div>` : ''}
            ${state.tag ? `<div style="font-size:10px;color:${muted};font-style:italic;margin-top:3px;font-family:'Inter',sans-serif">${state.tag}</div>` : ''}
          </div>
          <div style="text-align:right">
            <div class="c-contacts" style="align-items:flex-end;font-family:'Inter',sans-serif">${contactRowsHTML(fg, muted, state.accent)}</div>
          </div>
        </div>
      </div>`;
    }
  },
  // ── 7. Initials Block ──────────────────────────────────────────
  {
    id: 'initials', lbl: 'Initials',
    render() {
      const fg = isLight(state.bg) ? '#18180f' : '#f2f2ee';
      const muted = isLight(state.bg) ? 'rgba(0,0,0,.45)' : 'rgba(255,255,255,.45)';
      const accentFg = isLight(state.accent) ? '#18180f' : '#ffffff';
      return `<div class="c-wrap" style="background:${state.bg};font-family:'${state.font}',sans-serif;flex-direction:row;align-items:center;gap:22px">
        <div style="flex-shrink:0;width:70px;height:70px;border-radius:12px;background:${state.accent};display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:700;color:${accentFg}">${getInitials()}</div>
        <div style="flex:1;display:flex;flex-direction:column;gap:2px">
          <div class="c-name" style="color:${fg};font-size:20px">${state.name}</div>
          <div style="font-size:11.5px;color:${state.accent}">${state.title}</div>
          ${state.company ? `<div style="font-size:10.5px;color:${muted}">${state.company}</div>` : ''}
          <div style="margin-top:10px">
            <div class="c-contacts" style="gap:3px">${contactRowsHTML(fg, muted, state.accent)}</div>
            <div class="c-socials">${socialsHTML(state.accent + '22', state.accent)}</div>
          </div>
        </div>
      </div>`;
    }
  },
  // ── 8. Gradient ────────────────────────────────────────────────
  {
    id: 'gradient', lbl: 'Gradient',
    render() {
      const mixed = mixHex(state.accent, isLight(state.accent) ? '#000000' : '#ffffff', .35);
      const overlay = `linear-gradient(135deg, ${state.accent} 0%, ${mixed} 100%)`;
      const fg = '#ffffff';
      const muted = 'rgba(255,255,255,.6)';
      return `<div class="c-wrap" style="background:${overlay};font-family:'${state.font}',sans-serif">
        <div style="flex:1;display:flex;flex-direction:column;justify-content:center">
          <div class="c-name" style="color:${fg};font-size:24px">${state.name}</div>
          <div style="font-size:12px;color:${muted};margin-top:5px">${state.title}${state.company ? ` · ${state.company}` : ''}</div>
        </div>
        <div style="border-top:1px solid rgba(255,255,255,.2);padding-top:14px">
          <div class="c-contacts">${contactRowsHTML(fg, muted, 'rgba(255,255,255,.85)')}</div>
          <div class="c-socials">${socialsHTML('rgba(255,255,255,.2)', '#fff')}</div>
        </div>
      </div>`;
    }
  },
  // ── 9. Corner Accent ───────────────────────────────────────────
  {
    id: 'corner', lbl: 'Corner',
    render() {
      const fg = isLight(state.bg) ? '#18180f' : '#f2f2ee';
      const muted = isLight(state.bg) ? 'rgba(0,0,0,.45)' : 'rgba(255,255,255,.45)';
      return `<div class="c-wrap" style="background:${state.bg};font-family:'${state.font}',sans-serif;overflow:hidden">
        <div style="position:absolute;top:0;right:0;width:0;height:0;border-top:110px solid ${state.accent};border-left:110px solid transparent;opacity:.85"></div>
        <div style="flex:1;display:flex;flex-direction:column;justify-content:center">
          <div class="c-name" style="color:${fg}">${state.name}</div>
          <div style="font-size:12px;color:${state.accent};margin-top:3px">${state.title}</div>
          ${state.company ? `<div style="font-size:10.5px;color:${muted};margin-top:2px">${state.company}</div>` : ''}
        </div>
        <div>
          <div class="c-contacts">${contactRowsHTML(fg, muted, state.accent)}</div>
          <div class="c-socials">${socialsHTML(state.accent + '22', state.accent)}</div>
        </div>
      </div>`;
    }
  },
  // ── 10. Stripe Bottom ──────────────────────────────────────────
  {
    id: 'stripe-bottom', lbl: 'Stripe',
    render() {
      const fg = isLight(state.bg) ? '#18180f' : '#f2f2ee';
      const muted = isLight(state.bg) ? 'rgba(0,0,0,.45)' : 'rgba(255,255,255,.45)';
      const accentFg = isLight(state.accent) ? '#18180f' : '#ffffff';
      return `<div class="c-wrap" style="background:${state.bg};font-family:'${state.font}',sans-serif;padding:0;overflow:hidden">
        <div style="flex:1;padding:28px 32px;display:flex;flex-direction:column;justify-content:center">
          <div class="c-name" style="color:${fg}">${state.name}</div>
          <div style="font-size:12px;color:${muted};margin-top:4px">${state.title}${state.company ? ` · ${state.company}` : ''}</div>
        </div>
        <div style="background:${state.accent};padding:14px 32px;display:flex;justify-content:space-between;align-items:center">
          <div class="c-contacts" style="gap:3px">${contactRowsHTML(accentFg, accentFg + 'aa', accentFg)}</div>
          <div class="c-socials" style="margin-top:0">${socialsHTML('rgba(255,255,255,.2)', accentFg)}</div>
        </div>
      </div>`;
    }
  },
  // ── 11. Centered ───────────────────────────────────────────────
  {
    id: 'centered', lbl: 'Centered',
    render() {
      const fg = isLight(state.bg) ? '#18180f' : '#f2f2ee';
      const muted = isLight(state.bg) ? 'rgba(0,0,0,.4)' : 'rgba(255,255,255,.4)';
      return `<div class="c-wrap" style="background:${state.bg};font-family:'${state.font}',sans-serif;align-items:center;justify-content:center;text-align:center;gap:4px">
        <div class="c-name" style="color:${fg};font-size:22px">${state.name}</div>
        <div style="font-size:11.5px;color:${state.accent}">${state.title}</div>
        ${state.company ? `<div style="font-size:10.5px;color:${muted}">${state.company}</div>` : ''}
        <div style="width:30px;height:2px;background:${state.accent};margin:8px auto"></div>
        <div class="c-contacts" style="align-items:center">${contactRowsHTML(fg, muted, state.accent)}</div>
        <div class="c-socials" style="justify-content:center">${socialsHTML(state.accent + '22', state.accent)}</div>
      </div>`;
    }
  },
  // ── 12. Monogram ───────────────────────────────────────────────
  {
    id: 'monogram', lbl: 'Monogram',
    render() {
      const fg = isLight(state.bg) ? '#18180f' : '#f2f2ee';
      const muted = isLight(state.bg) ? 'rgba(0,0,0,.4)' : 'rgba(255,255,255,.4)';
      return `<div class="c-wrap" style="background:${state.bg};font-family:'Cormorant Garamond',serif;flex-direction:row;align-items:stretch;padding:0;overflow:hidden">
        <div style="flex-shrink:0;width:80px;background:${state.accent};display:flex;align-items:center;justify-content:center">
          <span style="font-size:40px;color:${isLight(state.accent)?'#18180f':'#fff'};font-weight:300;letter-spacing:-1px">${getInitials()}</span>
        </div>
        <div style="flex:1;padding:24px 24px;display:flex;flex-direction:column;justify-content:space-between">
          <div>
            <div style="font-size:22px;color:${fg};line-height:1">${state.name}</div>
            <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${muted};margin-top:5px;font-family:'Inter',sans-serif">${state.title}</div>
            ${state.company ? `<div style="font-size:11px;color:${state.accent};margin-top:3px;font-family:'Inter',sans-serif">${state.company}</div>` : ''}
          </div>
          <div style="font-family:'Inter',sans-serif">
            <div class="c-contacts" style="gap:3px">${contactRowsHTML(fg, muted, state.accent)}</div>
          </div>
        </div>
      </div>`;
    }
  },
  // ── 13. Dashed Border ──────────────────────────────────────────
  {
    id: 'dashed', lbl: 'Dashed',
    render() {
      const fg = isLight(state.bg) ? '#18180f' : '#f2f2ee';
      const muted = isLight(state.bg) ? 'rgba(0,0,0,.45)' : 'rgba(255,255,255,.45)';
      return `<div class="c-wrap" style="background:${state.bg};font-family:'${state.font}',sans-serif;overflow:hidden">
        <div style="position:absolute;inset:10px;border:1.5px dashed ${state.accent};opacity:.35;border-radius:4px"></div>
        <div style="flex:1;display:flex;flex-direction:column;justify-content:center;position:relative">
          <div class="c-name" style="color:${fg}">${state.name}</div>
          <div style="font-size:12px;color:${state.accent};margin-top:4px">${state.title}</div>
          ${state.company ? `<div style="font-size:10.5px;color:${muted};margin-top:2px">${state.company}</div>` : ''}
        </div>
        <div style="position:relative">
          <div class="c-contacts">${contactRowsHTML(fg, muted, state.accent)}</div>
          <div class="c-socials">${socialsHTML(state.accent + '22', state.accent)}</div>
        </div>
      </div>`;
    }
  },
  // ── 14. Two-tone ───────────────────────────────────────────────
  {
    id: 'two-tone', lbl: 'Two-tone',
    render() {
      const lightBg = isLight(state.bg) ? state.bg : '#f8f8f6';
      const darkBg = state.accent;
      const accentFg = isLight(darkBg) ? '#18180f' : '#ffffff';
      const lightFg = isLight(lightBg) ? '#18180f' : '#f2f2ee';
      const muted = isLight(lightBg) ? 'rgba(0,0,0,.45)' : 'rgba(255,255,255,.45)';
      return `<div class="c-wrap" style="padding:0;flex-direction:row;font-family:'${state.font}',sans-serif">
        <div style="flex:1;background:${darkBg};padding:28px 24px;display:flex;flex-direction:column;justify-content:center;gap:3px">
          <div style="font-size:9px;letter-spacing:2.5px;text-transform:uppercase;color:${accentFg};opacity:.6;margin-bottom:6px">${state.company || ''}</div>
          <div style="font-size:22px;font-weight:700;color:${accentFg};line-height:1.1">${state.name}</div>
          <div style="font-size:11.5px;color:${accentFg};opacity:.7;margin-top:3px">${state.title}</div>
        </div>
        <div style="flex:0 0 42%;background:${lightBg};padding:22px 20px;display:flex;flex-direction:column;justify-content:center">
          <div class="c-contacts" style="gap:4px">${contactRowsHTML(lightFg, muted, state.accent)}</div>
          <div class="c-socials">${socialsHTML(state.accent + '22', state.accent)}</div>
        </div>
      </div>`;
    }
  },
  // ── 15. Luxury Serif ───────────────────────────────────────────
  {
    id: 'luxury-serif', lbl: 'Luxury',
    render() {
      const bg = state.bg === '#ffffff' ? '#1a0b2e' : state.bg;
      const fg = isLight(bg) ? '#18180f' : '#f0ece8';
      const gold = state.accent === '#18180f' ? '#c9a96e' : state.accent;
      const muted = isLight(bg) ? 'rgba(0,0,0,.45)' : 'rgba(240,236,232,.45)';
      return `<div class="c-wrap" style="background:${bg};font-family:'Cormorant Garamond',serif;align-items:center;text-align:center">
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px">
          <div style="font-size:10px;letter-spacing:4px;text-transform:uppercase;color:${gold};font-family:'Inter',sans-serif;opacity:.8;margin-bottom:8px">${state.company || ''}</div>
          <div style="font-size:30px;font-weight:300;color:${fg};letter-spacing:.5px;line-height:1">${state.name}</div>
          <div style="font-size:12px;color:${muted};font-style:italic;margin-top:4px">${state.title}</div>
        </div>
        <div style="width:60px;height:1px;background:${gold};margin:0 auto;opacity:.5"></div>
        <div style="padding-top:12px;font-family:'Inter',sans-serif">
          <div class="c-contacts" style="align-items:center">${contactRowsHTML(fg, muted, gold)}</div>
        </div>
      </div>`;
    }
  },
  // ── 16. Grid Lines ─────────────────────────────────────────────
  {
    id: 'grid-lines', lbl: 'Grid',
    render() {
      const fg = isLight(state.bg) ? '#18180f' : '#f2f2ee';
      const muted = isLight(state.bg) ? 'rgba(0,0,0,.4)' : 'rgba(255,255,255,.4)';
      return `<div class="c-wrap" style="background:${state.bg};font-family:'${state.font}',sans-serif;overflow:hidden">
        <div style="position:absolute;inset:0;background-image:linear-gradient(${state.accent}10 1px,transparent 1px),linear-gradient(90deg,${state.accent}10 1px,transparent 1px);background-size:30px 30px"></div>
        <div style="position:relative;flex:1;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:14px">
          <div class="c-name" style="color:${fg}">${state.name}</div>
          <div style="font-size:12px;color:${state.accent};margin-top:4px">${state.title}${state.company ? ` · ${state.company}` : ''}</div>
        </div>
        <div style="position:relative;border-top:1px solid ${state.accent}30;padding-top:12px">
          <div class="c-contacts">${contactRowsHTML(fg, muted, state.accent)}</div>
          <div class="c-socials">${socialsHTML(state.accent + '22', state.accent)}</div>
        </div>
      </div>`;
    }
  },
  // ── 17. Pill Badge ─────────────────────────────────────────────
  {
    id: 'pill-badge', lbl: 'Badge',
    render() {
      const fg = isLight(state.bg) ? '#18180f' : '#f2f2ee';
      const muted = isLight(state.bg) ? 'rgba(0,0,0,.45)' : 'rgba(255,255,255,.45)';
      const accentFg = isLight(state.accent) ? '#18180f' : '#ffffff';
      return `<div class="c-wrap" style="background:${state.bg};font-family:'${state.font}',sans-serif">
        <div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:6px">
          <div>
            <span style="display:inline-block;background:${state.accent};color:${accentFg};font-size:9.5px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;padding:3px 10px;border-radius:20px">${state.company || state.title}</span>
          </div>
          <div class="c-name" style="color:${fg}">${state.name}</div>
          ${state.company ? `<div style="font-size:11.5px;color:${muted}">${state.title}</div>` : ''}
          ${state.tag ? `<div style="font-size:10px;color:${muted};font-style:italic">${state.tag}</div>` : ''}
        </div>
        <div>
          <div class="c-contacts">${contactRowsHTML(fg, muted, state.accent)}</div>
          <div class="c-socials">${socialsHTML(state.accent + '22', state.accent)}</div>
        </div>
      </div>`;
    }
  },
  // ── 18. Top Band ───────────────────────────────────────────────
  {
    id: 'top-band', lbl: 'Top Band',
    render() {
      const fg = isLight(state.bg) ? '#18180f' : '#f2f2ee';
      const muted = isLight(state.bg) ? 'rgba(0,0,0,.45)' : 'rgba(255,255,255,.45)';
      const accentFg = isLight(state.accent) ? '#18180f' : '#ffffff';
      return `<div class="c-wrap" style="background:${state.bg};font-family:'${state.font}',sans-serif;padding:0;overflow:hidden">
        <div style="background:${state.accent};padding:14px 28px;display:flex;align-items:center;justify-content:space-between">
          <div style="font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${accentFg}">${state.company || state.name}</div>
          <div class="c-socials" style="margin-top:0">${socialsHTML('rgba(255,255,255,.2)', accentFg)}</div>
        </div>
        <div style="padding:20px 28px;flex:1;display:flex;flex-direction:column;justify-content:space-between">
          <div>
            <div class="c-name" style="color:${fg};font-size:22px">${state.name}</div>
            <div style="font-size:11.5px;color:${muted};margin-top:3px">${state.title}</div>
          </div>
          <div class="c-contacts">${contactRowsHTML(fg, muted, state.accent)}</div>
        </div>
      </div>`;
    }
  },
  // ── 19. Diagonal ───────────────────────────────────────────────
  {
    id: 'diagonal', lbl: 'Diagonal',
    render() {
      const fg = isLight(state.bg) ? '#18180f' : '#f2f2ee';
      const muted = isLight(state.bg) ? 'rgba(0,0,0,.45)' : 'rgba(255,255,255,.45)';
      const accentFg = isLight(state.accent) ? '#18180f' : '#fff';
      return `<div class="c-wrap" style="background:${state.bg};font-family:'${state.font}',sans-serif;overflow:hidden">
        <div style="position:absolute;top:-80px;right:-80px;width:300px;height:300px;background:${state.accent};transform:rotate(30deg);opacity:.95"></div>
        <div style="position:relative;display:flex;flex-direction:column;height:100%;justify-content:space-between">
          <div style="align-self:flex-end;text-align:right;max-width:160px">
            <div style="font-size:22px;font-weight:700;color:${accentFg};line-height:1.1">${state.name}</div>
            <div style="font-size:10.5px;color:${accentFg};opacity:.8;margin-top:4px">${state.title}</div>
          </div>
          <div>
            <div style="font-size:10px;font-weight:600;color:${state.accent};margin-bottom:8px">${state.company || ''}</div>
            <div class="c-contacts">${contactRowsHTML(fg, muted, state.accent)}</div>
            <div class="c-socials">${socialsHTML(state.accent + '22', state.accent)}</div>
          </div>
        </div>
      </div>`;
    }
  },
  // ── 20. Minimal Dark ───────────────────────────────────────────
  {
    id: 'minimal-dark', lbl: 'Pure Dark',
    render() {
      const bg = '#0c0c0b';
      const fg = '#f0f0ec';
      const muted = 'rgba(240,240,236,.4)';
      const accent = state.accent === '#18180f' ? '#8b8b7a' : state.accent;
      return `<div class="c-wrap" style="background:${bg};font-family:'${state.font}',sans-serif">
        <div style="flex:1;display:flex;flex-direction:column;justify-content:center">
          <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${muted};margin-bottom:10px">${state.company || ''}</div>
          <div class="c-name" style="color:${fg};font-size:24px">${state.name}</div>
          <div style="font-size:12px;color:${accent};margin-top:5px">${state.title}</div>
        </div>
        <div style="border-top:1px solid rgba(255,255,255,.08);padding-top:14px">
          <div class="c-contacts">${contactRowsHTML(fg, muted, accent)}</div>
          <div class="c-socials">${socialsHTML('rgba(255,255,255,.07)', accent)}</div>
        </div>
      </div>`;
    }
  },
];
