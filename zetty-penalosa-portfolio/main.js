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
  // World Time Buddy-style comparison using the browser's IANA time-zone rules.
  // Manila stays UTC+8; America/New_York changes automatically between EDT and EST.
  const clockEls = [...document.querySelectorAll('[data-clock]')];
  const clockFormatters = new Map();
  clockEls.forEach(el => {
    try {
      const timeZone = el.dataset.clock;
      clockFormatters.set(el, {
        time: new Intl.DateTimeFormat('en-US', {
          timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
        }),
        date: new Intl.DateTimeFormat('en-US', {
          timeZone, weekday: 'short', month: 'short', day: 'numeric'
        }),
        dateEl: document.querySelector('[data-clock-date="' + timeZone + '"]')
      });
    } catch (_) {
      el.textContent = 'Time unavailable';
    }
  });
  const easternZoneEl = document.querySelector('[data-eastern-zone]');
  const differenceEl = document.querySelector('[data-time-difference]');
  let easternZoneFormatter = null;
  try {
    easternZoneFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York', timeZoneName: 'short'
    });
  } catch (_) { /* Keep the general ET label if zone rules are unavailable. */ }
  const updateClocks = () => {
    const now = new Date();
    clockFormatters.forEach((formatters, el) => {
      el.textContent = formatters.time.format(now);
      if (formatters.dateEl) formatters.dateEl.textContent = formatters.date.format(now);
    });
    if (easternZoneFormatter) {
      const zonePart = easternZoneFormatter.formatToParts(now).find(part => part.type === 'timeZoneName');
      const easternZone = zonePart ? zonePart.value : 'ET';
      if (easternZoneEl) easternZoneEl.textContent = easternZone;
      if (differenceEl) {
        const differenceHours = easternZone === 'EDT' ? 12 : easternZone === 'EST' ? 13 : null;
        differenceEl.textContent = differenceHours
          ? 'The Philippines is ' + differenceHours + ' hours ahead of U.S. Eastern Time.'
          : 'The Philippines is 12–13 hours ahead of U.S. Eastern Time, depending on daylight saving time.';
      }
    }
  };
  if (clockFormatters.size) {
    updateClocks();
    window.setInterval(updateClocks, 1000);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) updateClocks();
    });
    window.addEventListener('pageshow', updateClocks);
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