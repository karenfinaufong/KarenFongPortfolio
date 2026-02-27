// Smooth scroll for in-page nav links & close mobile nav after click
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Close navbar on mobile after click
        const nav = document.getElementById('nav');
        if (nav && nav.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getOrCreateInstance(nav);
          bsCollapse.hide();
        }
      }
    }
  });
});