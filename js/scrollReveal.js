/**
 * scrollReveal.js — ARRMARE GROUP
 * Anima secciones al entrar en el viewport usando IntersectionObserver
 */

function initScrollReveal() {
  const sections = document.querySelectorAll('.reveal-section');

  if (!sections.length) return;

  // Sin soporte o protocolo file:// → mostrar todo directamente
  if (!('IntersectionObserver' in window) || location.protocol === 'file:') {
    sections.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: '0px 0px 0px 0px',
    }
  );

  sections.forEach(section => observer.observe(section));
}