/**
 * hero.js — ARRMARE GROUP
 * Gestiona: slideshow automático de imágenes + dots de navegación
 */

function initHeroSlider() {
  const images   = document.querySelectorAll('.hero-img');
  const dots     = document.querySelectorAll('.dot');

  if (!images.length) return;

  let current   = 0;
  let interval  = null;
  const DELAY   = 5000; // ms entre slides

  // ── Activar slide ──────────────────────────────────────
  function goTo(index) {
    images[current].classList.remove('active');
    dots[current]?.classList.remove('active');

    current = (index + images.length) % images.length;

    images[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  // ── Autoplay ───────────────────────────────────────────
  function startAutoplay() {
    interval = setInterval(() => goTo(current + 1), DELAY);
  }

  function stopAutoplay() {
    clearInterval(interval);
  }

  // ── Dots manuales ──────────────────────────────────────
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      stopAutoplay();
      goTo(i);
      startAutoplay();
    });
  });

  // ── Pausa al hover sobre el hero ──────────────────────
  const hero = document.getElementById('hero');
  hero?.addEventListener('mouseenter', stopAutoplay);
  hero?.addEventListener('mouseleave', startAutoplay);

  // ── Iniciar ────────────────────────────────────────────
  startAutoplay();
}