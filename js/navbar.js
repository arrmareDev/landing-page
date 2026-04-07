/**
 * navbar.js — ARRMARE GROUP
 * Gestiona: scroll effect, hamburger menu, cierre al click en links
 */

function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  if (!navbar || !hamburger || !navMenu) return;

  // ── Scroll effect ──────────────────────────────────────
  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // estado inicial

  // ── Hamburger toggle ───────────────────────────────────
  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // ── Cerrar al hacer click en un enlace ────────────────
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ── Cerrar al hacer click fuera del menú ─────────────
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  function closeMenu() {
    navMenu.classList.remove('active');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}