// Small progressive enhancements. The page works without JavaScript.
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    menuToggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
    navLinks.classList.toggle('is-open', !open);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
    });
  });
}

const year = document.querySelector('#current-year');
if (year) year.textContent = new Date().getFullYear();

// Always scroll fully to the top when the KB brand is activated.
// The previous #top target was on the sticky header and could resolve
// to its current on-screen position instead of the document start.
const homeLink = document.querySelector('.brand');
if (homeLink) {
  homeLink.addEventListener('click', event => {
    event.preventDefault();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({top: 0, left: 0, behavior: reducedMotion ? 'auto' : 'smooth'});
  });
}
