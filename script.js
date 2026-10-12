// Simple portfolio interactions.
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const menuButton = document.querySelector('.menu-button');
  const navLinks = document.querySelector('.nav-links');
  const progress = document.querySelector('.scroll-line span');

  // Open and close the mobile navigation menu.
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  // Close the menu after clicking a navigation link.
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });

  // Update the header and reading progress while scrolling.
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${(window.scrollY / pageHeight) * 100}%`;
  }, { passive: true });

  document.getElementById('year').textContent = new Date().getFullYear();
});
