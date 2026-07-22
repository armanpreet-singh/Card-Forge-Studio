/* ================================================================
   TOAST
================================================================ */
let toastTimer;

export function showToast(msg, isError = false) {
  const toast = document.getElementById('toast');
  const icon = document.getElementById('toastIcon');
  document.getElementById('toastMsg').textContent = msg;
  icon.className = isError ? 'fas fa-exclamation-circle' : 'fas fa-check-circle';
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2800);
}
