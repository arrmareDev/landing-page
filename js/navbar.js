/**
 * navbar.js — ARRMARE GROUP
 * Gestiona: scroll effect, off-canvas menu, cierre al click en links
 */

function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const sideMenu  = document.getElementById('side-menu');
  const closeBtn  = document.getElementById('close-btn');

  if (!navbar || !hamburger || !sideMenu || !closeBtn) return;

  // ── Scroll effect ──────────────────────────────────────
  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // estado inicial

  // ── Función para cerrar menú ──────────────────────
  function closeMenu() {
    sideMenu.classList.remove('active');
    sideMenu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = ''; // Restaura el scroll de la página
  }

  // ── Abrir menú ───────────────────────────────────
  hamburger.addEventListener('click', () => {
    sideMenu.classList.add('active');
    sideMenu.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Bloquea el scroll del fondo
  });

  // ── Cerrar menú con el botón X ───────────────────
  closeBtn.addEventListener('click', closeMenu);

  // ── Cerrar al hacer click en un enlace ────────────────
  sideMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ── Cerrar al hacer click fuera del menú ─────────────
  document.addEventListener('click', (e) => {
    if (sideMenu.classList.contains('active') &&
        !sideMenu.contains(e.target) &&
        !hamburger.contains(e.target)) {
      closeMenu();
    }
  });
}