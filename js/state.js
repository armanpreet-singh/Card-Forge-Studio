/* ================================================================
   STATE
   Central source of truth for all card properties.
================================================================ */
export const state = {
  template:  'minimal',
  accent:    '#18180f',
  bg:        '#ffffff',
  font:      'Inter',
  // Contact fields
  name:      'Alex Morgan',
  title:     'Product Designer',
  company:   'Studio One',
  phone:     '+1 234 567 8900',
  email:     'alex@studio.com',
  web:       'www.studio.com',
  tag:       '',
  // Social links
  li: '', x: '', gh: '', ig: '',
  // UI state
  dark:    false,
  flipped: false,
};

export const STORAGE_KEY = 'bc-studio-v4';
