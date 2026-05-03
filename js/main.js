/* ===============================================
   ملتقى الأثرياء — main.js
   =============================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- إشعار المقالة الجديدة ---- */
  /* يعمل هذا تلقائياً: كل ما تضيف مقالة جديدة في articles.js
     سيظهر للزوار إشعار "مقالة جديدة" في أول زيارة لهم */
  if (typeof window.ARTICLES !== 'undefined' && window.ARTICLES.length > 0) {
    // رتّب المقالات حسب الأحدث
    const sorted = [...window.ARTICLES].sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO));
    const latest = sorted[0];
    const storageKey = 'last_seen_article_id';
    const lastSeenId = parseInt(localStorage.getItem(storageKey) || '0');

    if (latest.id !== lastSeenId) {
      // خزّن الـ ID حتى لا يشوف الإشعار مرة ثانية
      localStorage.setItem(storageKey, latest.id);
      // أخّر الإشعار حتى تُعرّف showToast
      setTimeout(() => {
        showToast({
          icon: '🟢',
          title: 'مقالة جديدة على الملتقى!',
          message: `<a href="article.html?id=${latest.id}" style="color:var(--gold-light); text-decoration:underline; font-weight:700;">${latest.title}</a>`,
          duration: 9000,
          type: 'gold',
          isHTML: true
        });
      }, 1500);
    }
  }


  /* ---- نجوم الخلفية ---- */
  const starsBg = document.querySelector('.stars-bg');
  if (starsBg) {
    for (let i = 0; i < 60; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.setProperty('--d', (2 + Math.random() * 4) + 's');
      star.style.setProperty('--delay', (Math.random() * 4) + 's');
      star.style.top  = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      const size = Math.random() * 2.5 + 0.5;
      star.style.width = star.style.height = size + 'px';
      starsBg.appendChild(star);
    }
  }

  /* ---- Navbar scroll ---- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 80);
    });
  }

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const spans = navToggle.querySelectorAll('span');
      if (navLinks.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const spans = navToggle.querySelectorAll('span');
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      });
    });
  }

  /* ---- Fade-in on scroll ---- */
  const fadeEls = document.querySelectorAll('.fade-up');
  window._fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => window._fadeObserver.observe(el));

  /* ---- شريط التقدم (صفحة المقالة) ---- */
  const readingBar = document.querySelector('.reading-bar');
  if (readingBar) {
    window.addEventListener('scroll', () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop;
      const total = doc.scrollHeight - doc.clientHeight;
      readingBar.style.width = (scrolled / total * 100) + '%';
    });
  }

  /* ---- Scroll to top ---- */
  const scrollBtn = document.querySelector('.scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- TOC active link (صفحة المقالة) ---- */
  const tocLinks = document.querySelectorAll('.toc-link');
  if (tocLinks.length) {
    const headings = document.querySelectorAll('.article-content h2, .article-content h3');
    const ioToc = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tocLinks.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.toc-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -75%' });
    headings.forEach(h => { if (h.id) ioToc.observe(h); });

    tocLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ---- Mini chart SVG (Hero) ---- */
  const miniChart = document.querySelector('.mini-chart');
  if (miniChart) {
    const points = [35,60,42,70,55,80,62,75,82,65,90,72,85];
    const w = 300, h = 70;
    const max = Math.max(...points), min = Math.min(...points);
    const coords = points.map((p, i) => ({
      x: (i / (points.length - 1)) * w,
      y: h - ((p - min) / (max - min)) * (h - 10) - 5
    }));
    const polyline = coords.map(c => `${c.x},${c.y}`).join(' ');
    const area = `M0,${h} ` + coords.map(c => `L${c.x},${c.y}`).join(' ') + ` L${w},${h} Z`;

    miniChart.innerHTML = `
      <svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#C9A84C" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#C9A84C" stop-opacity="0"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <path d="${area}" fill="url(#chartGrad)"/>
        <polyline points="${polyline}" fill="none" stroke="#C9A84C" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" filter="url(#glow)"/>
        <circle cx="${coords[coords.length-1].x}" cy="${coords[coords.length-1].y}" r="4" fill="#C9A84C" filter="url(#glow)">
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
        </circle>
      </svg>`;
  }

  /* ---- Hero background chart SVG ---- */
  const heroChart = document.querySelector('.hero-chart');
  if (heroChart) {
    const pts = [20,50,35,65,55,45,75,60,85,70,90,80,100];
    const w2 = 1200, h2 = 180;
    const mx = Math.max(...pts), mn = Math.min(...pts);
    const c2 = pts.map((p, i) => ({
      x: (i / (pts.length - 1)) * w2,
      y: h2 - ((p - mn) / (mx - mn)) * (h2 - 20) - 10
    }));
    const line2 = c2.map(c => `${c.x},${c.y}`).join(' ');
    heroChart.innerHTML = `
      <svg viewBox="0 0 ${w2} ${h2}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="${line2}" fill="none" stroke="#C9A84C" stroke-width="1.5"/>
      </svg>`;
  }

  /* ---- Toast Notification System ---- */
  function showToast({ icon = '💠', title = '', message = '', duration = 5000, type = 'default', isHTML = false }) {
    // إزالة أي toast موجود مسبقاً
    document.querySelectorAll('.toast-notification').forEach(t => t.remove());

    const toast = document.createElement('div');
    toast.className = 'toast-notification toast-' + type;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    toast.innerHTML = `
      <div class="toast-icon">${icon}</div>
      <div class="toast-body">
        <div class="toast-title">${title}</div>
        <div class="toast-msg">${isHTML ? message : message.replace(/</g,'&lt;')}</div>
      </div>
      <button class="toast-close" aria-label="إغلاق">✕</button>
      <div class="toast-progress"></div>
    `;
    document.body.appendChild(toast);

    // تشغيل الأنيميشن بعد لحظة
    requestAnimationFrame(() => {
      requestAnimationFrame(() => toast.classList.add('toast-visible'));
    });

    // شريط التقدم
    const bar = toast.querySelector('.toast-progress');
    bar.style.animationDuration = duration + 'ms';
    bar.classList.add('toast-progress-run');

    // زر الإغلاق
    toast.querySelector('.toast-close').addEventListener('click', () => closeToast(toast));

    // إغلاق تلقائي
    const timer = setTimeout(() => closeToast(toast), duration);
    toast._timer = timer;
  }

  function closeToast(toast) {
    clearTimeout(toast._timer);
    toast.classList.remove('toast-visible');
    setTimeout(() => toast.remove(), 400);
  }

  /* ---- إشعار عند الوصول لقسم الاشتراك ---- */
  const newsletterSection = document.querySelector('#newsletter');
  if (newsletterSection) {
    const notifShown = sessionStorage.getItem('newsletter_notif_shown');
    if (!notifShown) {
      const ioNewsletter = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          sessionStorage.setItem('newsletter_notif_shown', '1');
          showToast({
            icon: '🎁',
            title: 'رؤية حصرية بانتظارك!',
            message: 'اشترك الآن واحصل على أحدث التحليلات المالية مجاناً كل أسبوع.',
            duration: 6000,
            type: 'gold'
          });
          ioNewsletter.disconnect();
        }
      }, { threshold: 0.4 });
      ioNewsletter.observe(newsletterSection);
    }
  }

  /* ---- Newsletter form ---- */
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('.newsletter-input');
      if (input && input.value.trim()) {
        const btn = newsletterForm.querySelector('.btn-primary');
        btn.textContent = '⏳ جاري التسجيل...';
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = '✓ تم التسجيل!';
          btn.style.background = 'linear-gradient(135deg, #4ade80, #22c55e)';
          input.value = '';
          showToast({
            icon: '🎉',
            title: 'مرحباً بك في النخبة!',
            message: 'تم تسجيل بريدك بنجاح. ستصلك أولى التحليلات المالية قريباً.',
            duration: 6000,
            type: 'success'
          });
          setTimeout(() => {
            btn.textContent = 'اشترك الآن ✦';
            btn.style.background = '';
            btn.disabled = false;
          }, 3500);
        }, 800);
      } else {
        showToast({
          icon: '⚠️',
          title: 'تنبيه',
          message: 'يرجى إدخال بريدك الإلكتروني أولاً.',
          duration: 4000,
          type: 'warning'
        });
      }
    });
  }

  /* ---- Ticker duplication ---- */
  const tickerTrack = document.querySelector('.ticker-track');
  if (tickerTrack) {
    tickerTrack.innerHTML += tickerTrack.innerHTML;
  }

  /* ---- Counter animation ---- */
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();
    const ioCounter = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const animate = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = eased * target;
          el.textContent = (Number.isInteger(target) ? Math.round(value) : value.toFixed(1)) + suffix;
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        ioCounter.disconnect();
      }
    });
    ioCounter.observe(el);
  });

});
