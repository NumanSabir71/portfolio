export function initUI() {
  const cleanups = [];

  /* ── Typed effect ── */
  const roles = ['WordPress Developer', 'WooCommerce Expert', 'PHP Developer', 'Theme & Plugin Builder'];
  let ri = 0, ci = 0, del = false, stopped = false;
  const typedEl = document.getElementById('typedText');
  let typedTm;

  function type() {
    if (stopped) return;
    const w = roles[ri];
    typedEl.textContent = del ? w.slice(0, ci--) : w.slice(0, ci++);
    if (!del && ci > w.length) { del = true; typedTm = setTimeout(type, 1600); return; }
    if (del && ci < 0) { del = false; ri = (ri + 1) % roles.length; typedTm = setTimeout(type, 400); return; }
    typedTm = setTimeout(type, del ? 55 : 90);
  }
  typedTm = setTimeout(type, 1000);
  cleanups.push(() => { stopped = true; clearTimeout(typedTm); });

  /* ── Navbar scroll ── */
  const navbar = document.getElementById('navbar');
  const btt = document.getElementById('btt');
  function onScroll() {
    navbar.classList.toggle('stuck', window.scrollY > 55);
    btt.classList.toggle('show', window.scrollY > 450);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  cleanups.push(() => window.removeEventListener('scroll', onScroll));

  /* ── Back to top ── */
  function onBttClick() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
  btt.addEventListener('click', onBttClick);
  cleanups.push(() => btt.removeEventListener('click', onBttClick));

  /* ── Mobile menu ── */
  const hBtn = document.getElementById('hamburgerBtn');
  const mMenu = document.getElementById('mobileMenu');
  const mOverlay = document.getElementById('mobileOverlay');

  function closeMenu() {
    hBtn.classList.remove('open');
    mMenu.classList.remove('open');
    mOverlay.classList.remove('open');
    hBtn.setAttribute('aria-expanded', 'false');
  }
  function openMenu() {
    hBtn.classList.add('open');
    mMenu.classList.add('open');
    mOverlay.classList.add('open');
    hBtn.setAttribute('aria-expanded', 'true');
  }
  function onHamburger() { mMenu.classList.contains('open') ? closeMenu() : openMenu(); }

  hBtn.addEventListener('click', onHamburger);
  mOverlay.addEventListener('click', closeMenu);
  cleanups.push(() => {
    hBtn.removeEventListener('click', onHamburger);
    mOverlay.removeEventListener('click', closeMenu);
  });

  document.querySelectorAll('.ml').forEach(l => {
    l.addEventListener('click', closeMenu);
    cleanups.push(() => l.removeEventListener('click', closeMenu));
  });

  /* ── Smooth scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    function onAnchorClick(e) {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }
    a.addEventListener('click', onAnchorClick);
    cleanups.push(() => a.removeEventListener('click', onAnchorClick));
  });

  /* ── Scroll reveal ── */
  const srObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' });
  document.querySelectorAll('.sr').forEach(el => srObs.observe(el));
  cleanups.push(() => srObs.disconnect());

  /* ── Skill bars ── */
  const fillObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('go'); fillObs.unobserve(e.target); } });
  }, { threshold: 0.3 });
  document.querySelectorAll('.sk-fill').forEach(el => fillObs.observe(el));
  cleanups.push(() => fillObs.disconnect());

  /* ── Counters ── */
  const cntObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.target, suffix = el.dataset.suffix || '';
      let v = 0;
      const step = target / 60;
      const tick = () => { v = Math.min(v + step, target); el.textContent = Math.floor(v) + suffix; if (v < target) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
      cntObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-n[data-target]').forEach(el => cntObs.observe(el));
  cleanups.push(() => cntObs.disconnect());

  /* ── Tabs ── */
  document.querySelectorAll('.tbtn').forEach(btn => {
    const handler = () => {
      document.querySelectorAll('.tbtn').forEach(b => b.classList.remove('on'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('on'));
      btn.classList.add('on');
      document.getElementById(btn.dataset.target).classList.add('on');
    };
    btn.addEventListener('click', handler);
    cleanups.push(() => btn.removeEventListener('click', handler));
  });

  /* ── Project filter ── */
  document.querySelectorAll('.fbtn').forEach(btn => {
    const handler = () => {
      document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      const f = btn.dataset.filter;
      document.querySelectorAll('.proj-card').forEach(c => {
        const match = f === 'all' || c.dataset.cat === f;
        c.style.transition = 'opacity .3s,transform .3s';
        c.style.opacity = match ? '1' : '0.2';
        c.style.transform = match ? 'scale(1)' : 'scale(.97)';
        c.style.pointerEvents = match ? '' : 'none';
      });
    };
    btn.addEventListener('click', handler);
    cleanups.push(() => btn.removeEventListener('click', handler));
  });

  /* ── Testimonials slider ── */
  const track = document.getElementById('sliderTrack');
  const cards = Array.from(track.children);
  const dotsEl = document.getElementById('sliderDots');
  let cur = 0, spv = 3, autoTm;

  function calcSpv() { return window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1; }

  function buildDots() {
    dotsEl.innerHTML = '';
    const total = Math.ceil(cards.length / spv);
    for (let i = 0; i < total; i++) {
      const d = document.createElement('button');
      d.className = 'sdot' + (i === 0 ? ' on' : '');
      d.setAttribute('aria-label', `Slide ${i + 1}`);
      d.addEventListener('click', () => { goTo(i); resetAuto(); });
      dotsEl.appendChild(d);
    }
  }

  function goTo(idx) {
    const total = Math.ceil(cards.length / spv);
    cur = (idx + total) % total;
    const cardW = cards[0].offsetWidth;
    track.style.transform = `translateX(-${cur * spv * (cardW + 20)}px)`;
    dotsEl.querySelectorAll('.sdot').forEach((d, i) => d.classList.toggle('on', i === cur));
  }

  function resetAuto() { clearInterval(autoTm); autoTm = setInterval(() => goTo(cur + 1), 5000); }

  function onPrev() { goTo(cur - 1); resetAuto(); }
  function onNext() { goTo(cur + 1); resetAuto(); }
  function onResize() { spv = calcSpv(); buildDots(); goTo(0); }

  document.getElementById('prevBtn').addEventListener('click', onPrev);
  document.getElementById('nextBtn').addEventListener('click', onNext);
  window.addEventListener('resize', onResize);
  cleanups.push(() => {
    document.getElementById('prevBtn').removeEventListener('click', onPrev);
    document.getElementById('nextBtn').removeEventListener('click', onNext);
    window.removeEventListener('resize', onResize);
    clearInterval(autoTm);
  });

  spv = calcSpv(); buildDots(); resetAuto();

  /* ── Contact form ── */
  const contactForm = document.getElementById('contactForm');
  function onFormSubmit(e) {
    e.preventDefault();
    const btn = this.querySelector('.form-submit'), orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending…';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      btn.style.background = 'linear-gradient(135deg,#34D399,#059669)';
      setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; btn.disabled = false; contactForm.reset(); }, 3000);
    }, 1400);
  }
  contactForm.addEventListener('submit', onFormSubmit);
  cleanups.push(() => contactForm.removeEventListener('submit', onFormSubmit));

  return () => cleanups.forEach(fn => fn());
}
