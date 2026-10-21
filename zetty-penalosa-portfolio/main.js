(() => {
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('menu-toggle');
  const closeNav = () => {
    if (!nav || !toggle) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('nav-open');
  };
  if (nav && toggle) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      document.body.classList.toggle('nav-open', isOpen);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeNav(); });
    document.addEventListener('click', event => {
      if (nav.classList.contains('is-open') && !nav.contains(event.target) && !toggle.contains(event.target)) closeNav();
    });
  }
  const clockEls = document.querySelectorAll('[data-clock]');
  const updateClocks = () => {
    clockEls.forEach(el => {
      try {
        const fmt = new Intl.DateTimeFormat('en-US', {timeZone: el.dataset.clock, hour:'2-digit',minute:'2-digit',hour12:true});
        el.textContent = fmt.format(new Date());
      } catch (_) { el.textContent = 'Time unavailable'; }
    });
  };
  if (clockEls.length) {
    updateClocks();
    setInterval(updateClocks, 60000);
  }
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealables = document.querySelectorAll('.section:not(.dark-section), .work-card, .service-card, .skill-column, .timeline-item');
  if ('IntersectionObserver' in window && !reducedMotion) {
    revealables.forEach(el => el.classList.add('will-reveal'));
    const ob = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); ob.unobserve(entry.target); }
      });
    }, {rootMargin:'0px 0px -25px 0px',threshold:0.04});
    revealables.forEach(el => ob.observe(el));
  }
})();