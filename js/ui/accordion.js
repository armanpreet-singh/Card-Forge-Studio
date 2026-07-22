/* ================================================================
   ACCORDION SECTIONS
================================================================ */
export function bindAccordions() {
  document.querySelectorAll('.section__header').forEach(hdr => {
    hdr.addEventListener('click', () => {
      const section = hdr.dataset.section;
      const body = document.getElementById('body-' + section);
      if (!body) return;
      const isOpen = !body.classList.contains('is-hidden');
      body.classList.toggle('is-hidden', isOpen);
      hdr.classList.toggle('is-open', !isOpen);
    });
  });
}
