/* ==========================================================================
   Wrenfold — concept site. Vanilla JS + GSAP (ScrollTrigger, SplitText) + Lenis.
   Everything works without the animation libraries; they only add motion.
   ========================================================================== */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };
  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var reduce = mqReduce.matches;
  var mqDesktop = window.matchMedia('(min-width: 1024px)');
  var hasGsap = !!(window.gsap && window.ScrollTrigger);
  var IMAGES = window.WRENFOLD_IMAGES || {};

  /* ------------------------------------------------------------ data */
  var VENUE = { lat: 51.99, lon: -1.71, tz: 'Europe/London' };
  var USD = 1.33;
  var PRICES = {
    peak:     { sat: 16500, fri: 13500, mid: 9800 },
    shoulder: { sat: 13000, fri: 10500, mid: 7800 },
    winter:   { sat: 9500,  fri: 7500,  mid: 5500 }
  };
  var SEASON_NAME = { peak: 'Peak season', shoulder: 'Shoulder season', winter: 'Winter' };
  function seasonOf(month) { // 0-11
    if (month >= 4 && month <= 8) return 'peak';
    if (month === 3 || month === 9) return 'shoulder';
    return 'winter';
  }
  function dayType(dow) { // 0 Sun .. 6 Sat
    if (dow === 6) return 'sat';
    if (dow === 5 || dow === 0) return 'fri';
    return 'mid';
  }
  var DAY_LABEL = { sat: 'Saturday rate', fri: 'Friday & Sunday rate', mid: 'Midweek rate' };

  var state = { currency: 'GBP', season: 'peak' };

  function money(gbp, opts) {
    opts = opts || {};
    var v = gbp, sym = '£';
    if (state.currency === 'USD') {
      v = gbp * USD;
      v = opts.perHead ? Math.round(v / 5) * 5 : Math.round(v / 50) * 50;
      sym = '$';
    }
    if (opts.short && v >= 1000) {
      var k = v / 1000;
      return sym + (k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)) + 'k';
    }
    return sym + Math.round(v).toLocaleString('en-GB');
  }

  /* ------------------------------------------------------------ pictures from the image registry */
  function picture(name, sizes, alt, cls) {
    var meta = IMAGES[name];
    if (!meta) return '';
    var ws = meta.widths;
    var w = ws[ws.length - 1];
    var h = Math.round(w / meta.aspect);
    var set = function (fmt) { return ws.map(function (x) { return 'assets/img/' + name + '-' + x + '.' + fmt + ' ' + x + 'w'; }).join(', '); };
    return '<picture><source type="image/avif" srcset="' + set('avif') + '" sizes="' + sizes + '">' +
      '<source type="image/webp" srcset="' + set('webp') + '" sizes="' + sizes + '">' +
      '<img class="' + (cls || '') + '" src="assets/img/' + name + '-' + ws[Math.min(1, ws.length - 1)] + '.webp" width="' + w + '" height="' + h + '" alt="' + (alt || '') + '" loading="lazy" decoding="async"></picture>';
  }

  /* ------------------------------------------------------------ sunset (NOAA approximation) */
  function sunTimes(date) {
    var rad = Math.PI / 180;
    var start = Date.UTC(date.getFullYear(), 0, 0);
    var n = Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - start) / 864e5);
    var g = 2 * Math.PI / 365 * (n - 1);
    var eqt = 229.18 * (0.000075 + 0.001868 * Math.cos(g) - 0.032077 * Math.sin(g) - 0.014615 * Math.cos(2 * g) - 0.040849 * Math.sin(2 * g));
    var decl = 0.006918 - 0.399912 * Math.cos(g) + 0.070257 * Math.sin(g) - 0.006758 * Math.cos(2 * g) + 0.000907 * Math.sin(2 * g) - 0.002697 * Math.cos(3 * g) + 0.00148 * Math.sin(3 * g);
    var lat = VENUE.lat * rad;
    var cosH = (Math.cos(90.833 * rad) / (Math.cos(lat) * Math.cos(decl))) - Math.tan(lat) * Math.tan(decl);
    var ha = Math.acos(Math.max(-1, Math.min(1, cosH))) / rad;
    var setMin = 720 - 4 * (VENUE.lon - ha) - eqt; // minutes after UTC midnight
    var utc = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) + setMin * 60000;
    return { sunset: new Date(utc), golden: new Date(utc - 50 * 60000) };
  }
  var fmtTime = new Intl.DateTimeFormat('en-GB', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: VENUE.tz });
  function clock(d) { return fmtTime.format(d).replace(' ', ' ').toLowerCase(); }

  /* ------------------------------------------------------------ availability (deterministic demo data) */
  function hash(n) { // mulberry32 step, 0..1
    var t = (n * 2654435761 + 0x6D2B79F5) | 0;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  function statusOf(date) {
    var m = date.getMonth(), t = dayType(date.getDay()), s = seasonOf(m);
    var r = hash(date.getFullYear() * 10000 + m * 100 + date.getDate());
    var booked = { peak: { sat: .56, fri: .3, mid: .05 }, shoulder: { sat: .42, fri: .18, mid: .03 }, winter: { sat: .3, fri: .08, mid: .02 } }[s][t];
    var held = t === 'mid' ? .02 : .12;
    if (m === 11 && date.getDate() >= 24 && date.getDate() <= 26) return 'booked'; // closed for Christmas
    if (r < booked) return 'booked';
    if (r < booked + held) return 'held';
    return 'open';
  }
  function eachDay(y, m, fn) {
    var d = new Date(y, m, 1);
    while (d.getMonth() === m) { fn(new Date(d)); d.setDate(d.getDate() + 1); }
  }
  function summerSaturdaysLeft() {
    var c = 0;
    [5, 6, 7].forEach(function (m) { eachDay(2027, m, function (d) { if (d.getDay() === 6 && statusOf(d) === 'open') c++; }); });
    return c;
  }
  var WORDS = ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];
  var fmtLong = new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  var fmtShort = new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });

  /* ------------------------------------------------------------ smooth scroll */
  var lenis = null;
  function scrollToTarget(target, immediate) {
    var el = typeof target === 'string' ? $(target) : target;
    if (!el) return;
    var offset = -(parseFloat(getComputedStyle(root).getPropertyValue('--header-h')) || 76) + (el.id === 'top' ? 0 : -4);
    if (lenis) lenis.scrollTo(el, { offset: offset, duration: immediate ? 0 : 1.4, immediate: !!immediate });
    else el.scrollIntoView({ behavior: reduce || immediate ? 'auto' : 'smooth' });
  }
  function initSmooth() {
    if (reduce || !window.Lenis) return;
    lenis = new window.Lenis({ lerp: 0.1, wheelMultiplier: 0.95 });
    window.wrenfoldLenis = lenis;
    root.classList.add('lenis');
    if (hasGsap) {
      lenis.on('scroll', window.ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
    } else {
      var raf = function (t) { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }
  function initAnchors() {
    doc.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var el = $(id);
      if (!el) return;
      e.preventDefault();
      closeMenu();
      scrollToTarget(el);
      if (history.replaceState) history.replaceState(null, '', id);
    });
  }

  /* ------------------------------------------------------------ header, menu, dock */
  var menuOpen = false;
  function closeMenu() {
    if (!menuOpen) return;
    var btn = $('[data-menu-toggle]'), menu = $('[data-menu]');
    menuOpen = false;
    btn.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    root.classList.remove('menu-open');
    $$('main, footer, .notice, .dock').forEach(function (el) { el.inert = false; });
    if (lenis) lenis.start();
  }
  function initMenu() {
    var btn = $('[data-menu-toggle]'), menu = $('[data-menu]');
    if (!btn || !menu) return;
    btn.addEventListener('click', function () {
      if (menuOpen) { closeMenu(); return; }
      menuOpen = true;
      btn.setAttribute('aria-expanded', 'true');
      menu.hidden = false;
      root.classList.add('menu-open');
      $$('main, footer, .notice, .dock').forEach(function (el) { el.inert = true; });
      if (lenis) lenis.stop();
      if (hasGsap && !reduce) gsap.from($$('.menu__list li', menu), { y: 40, autoAlpha: 0, duration: .8, ease: 'expo.out', stagger: .05 });
    });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menuOpen) { closeMenu(); btn.focus(); } });
  }
  function initHeader() {
    var header = $('[data-header]'), dock = $('[data-dock]'), hero = $('.hero'), visit = $('#visit');
    var notice = $('[data-notice]');
    var last = 0, ticking = false;
    function update() {
      ticking = false;
      var y = window.scrollY;
      var nh = notice ? notice.offsetHeight : 0;
      var heroEnd = hero ? hero.offsetHeight - 80 : 400;
      header.classList.toggle('is-solid', y > nh + 10);
      var hide = y > heroEnd && y > last + 4 && !menuOpen;
      if (y < last - 4 || y < heroEnd) header.classList.remove('is-hidden');
      else if (hide) header.classList.add('is-hidden');
      last = y;
      if (dock) {
        var vr = visit ? visit.getBoundingClientRect() : null;
        var nearVisit = vr && vr.top < window.innerHeight * .9;
        dock.classList.toggle('is-visible', y > heroEnd * .6 && !nearVisit);
      }
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();

    // current section in nav
    var links = $$('.nav a');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (l) { l.setAttribute('aria-current', l.getAttribute('href') === '#' + en.target.id ? 'true' : 'false'); });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      links.forEach(function (l) { var s = $(l.getAttribute('href')); if (s) io.observe(s); });
    }
  }

  /* ------------------------------------------------------------ intro + hero */
  function heroIn() {
    var title = $('[data-split-hero]');
    if (!hasGsap || reduce || !title) { if (title) title.style.visibility = 'visible'; return; }
    var run = function () {
      title.style.visibility = 'visible';
      var tl = gsap.timeline();
      if (window.SplitText) {
        var split = SplitText.create(title, { type: 'lines', mask: 'lines', linesClass: 'hl' });
        tl.from(split.lines, { yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: .1 });
      } else {
        tl.from(title, { y: 40, autoAlpha: 0, duration: 1.1, ease: 'expo.out' });
      }
      tl.to('[data-hero-fade]', { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out', stagger: .08 }, '-=0.9');
      tl.fromTo('.hero__img', { scale: 1.12 }, { scale: 1, duration: 2.6, ease: 'expo.out' }, 0);
    };
    (doc.fonts && doc.fonts.ready ? doc.fonts.ready : Promise.resolve()).then(run);
  }
  function initIntro() {
    var intro = $('[data-intro]');
    if (!root.classList.contains('is-intro') || !intro || !hasGsap) {
      root.classList.remove('is-intro');
      heroIn();
      return;
    }
    try { sessionStorage.setItem('wrenfold-intro', '1'); } catch (e) {}
    if (lenis) lenis.stop();
    var tl = gsap.timeline({
      onComplete: function () { root.classList.remove('is-intro'); if (lenis) lenis.start(); }
    });
    tl.to($$('.intro__mark *', intro), { strokeDashoffset: 0, duration: .9, ease: 'power2.inOut', stagger: .08 })
      .from('.intro__word', { yPercent: 60, autoAlpha: 0, duration: .7, ease: 'expo.out' }, .15)
      .from('.intro__tag', { autoAlpha: 0, duration: .5 }, .45)
      .to('.intro__card', { autoAlpha: 0, y: -10, duration: .35, ease: 'power2.in' }, 1.05)
      .to('.intro__half--top', { yPercent: -100, duration: 1, ease: 'expo.inOut' }, 1.15)
      .to('.intro__half--bottom', { yPercent: 100, duration: 1, ease: 'expo.inOut' }, 1.15)
      .add(heroIn, 1.45);
  }
  function initHeroScroll() {
    if (!hasGsap || reduce) return;
    gsap.to('[data-hero-media]', {
      yPercent: 14, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
    gsap.to('.hero__content', {
      yPercent: -18, autoAlpha: .2, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
  }
  function initFilm() {
    var v = $('[data-film]'), btn = $('[data-film-toggle]');
    if (!v) return;
    var conn = navigator.connection || {};
    if (reduce || conn.saveData || window.matchMedia('(max-width: 767px)').matches) return;
    var start = function () {
      var webm = doc.createElement('source'); webm.src = v.dataset.webm; webm.type = 'video/webm';
      var mp4 = doc.createElement('source'); mp4.src = v.dataset.mp4; mp4.type = 'video/mp4';
      v.appendChild(webm); v.appendChild(mp4);
      v.load();
      v.addEventListener('playing', function () { v.classList.add('is-playing'); }, { once: true });
      v.play().catch(function () {});
      if (btn) {
        btn.hidden = false;
        btn.addEventListener('click', function () {
          var paused = btn.getAttribute('aria-pressed') === 'true';
          if (paused) { v.play(); btn.setAttribute('aria-pressed', 'false'); $('[data-film-label]').textContent = 'Pause film'; }
          else { v.pause(); btn.setAttribute('aria-pressed', 'true'); $('[data-film-label]').textContent = 'Play film'; }
        });
      }
    };
    if (doc.readyState === 'complete') setTimeout(start, 600);
    else window.addEventListener('load', function () { setTimeout(start, 600); });
  }

  /* ------------------------------------------------------------ reveals */
  function initReveals() {
    if (!hasGsap || reduce) return;
    ScrollTrigger.batch('[data-reveal]', {
      start: 'top 88%', once: true,
      onEnter: function (els) { gsap.to(els, { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out', stagger: .08, overwrite: true }); }
    });
    $$('[data-reveal-clip]').forEach(function (el) {
      var img = $('img', el);
      var tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
      tl.to(el, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'expo.out' });
      if (img) tl.to(img, { scale: 1, duration: 1.8, ease: 'expo.out' }, 0);
    });
    if (window.SplitText) {
      (doc.fonts && doc.fonts.ready ? doc.fonts.ready : Promise.resolve()).then(function () {
        $$('[data-split]').forEach(function (el) {
          SplitText.create(el, {
            type: 'lines', mask: 'lines', autoSplit: true,
            onSplit: function (self) {
              return gsap.from(self.lines, {
                yPercent: 105, duration: 1.2, ease: 'expo.out', stagger: .08,
                scrollTrigger: { trigger: el, start: 'top 86%', once: true }
              });
            }
          });
        });
        ScrollTrigger.refresh();
      });
    }
  }
  function initManifesto() {
    var p = $('[data-words]');
    if (!p) return;
    var words = p.textContent.trim().split(/\s+/);
    p.innerHTML = words.map(function (w) { return '<span class="w">' + w + '</span>'; }).join(' ');
    var spans = $$('.w', p);
    if (!hasGsap || reduce) { spans.forEach(function (s) { s.style.opacity = 1; }); return; }
    ScrollTrigger.create({
      trigger: p, start: 'top 80%', end: 'bottom 45%', scrub: true,
      onUpdate: function (self) {
        var n = Math.round(self.progress * spans.length);
        spans.forEach(function (s, i) { s.style.opacity = i < n ? 1 : ''; });
      }
    });
  }
  function initCounters() {
    var els = $$('[data-count]');
    if (!hasGsap || reduce) return;
    els.forEach(function (el) {
      var to = +el.dataset.count, o = { v: 0 };
      el.textContent = '0';
      ScrollTrigger.create({
        trigger: el, start: 'top 90%', once: true,
        onEnter: function () { gsap.to(o, { v: to, duration: 1.6, ease: 'power3.out', onUpdate: function () { el.textContent = Math.round(o.v); } }); }
      });
    });
  }

  /* ------------------------------------------------------------ estate map */
  var SPOTS = window.WRENFOLD_HOTSPOTS || {
    house: [0.62, 0.38], barn: [0.38, 0.47], walled_garden: [0.70, 0.62], orangery: [0.52, 0.30], lake_lawn: [0.26, 0.70]
  };
  var PLACES = [
    { key: 'walled_garden', name: 'The Walled Garden', short: 'Walled garden', use: 'Ceremonies under the old pear trees', caps: [['Ceremony', '200'], ['Season', 'May–Sep']], walk: '2 min to the barn', wet: 'If it rains, the ceremony moves to the orangery, already dressed with your flowers.', anchor: '#space-garden' },
    { key: 'barn', name: 'The Tithe Barn', short: 'Tithe barn', use: 'Wedding breakfast, speeches and dancing', caps: [['Seated', '180'], ['Evening', '250']], walk: '1 min to the lake lawn', anchor: '#space-barn' },
    { key: 'orangery', name: 'The Orangery', short: 'Orangery', use: 'Intimate ceremonies and welcome suppers', caps: [['Ceremony', '90'], ['Seated', '60']], walk: '3 min to the barn', anchor: '#space-orangery' },
    { key: 'lake_lawn', name: 'The Lake Lawn', short: 'Lake lawn', use: 'Drinks, canapés and golden-hour portraits', caps: [['Standing', '250'], ['Ceremony', '200']], walk: '1 min to the barn', wet: 'If it rains, drinks move under cover on the barn terrace.', anchor: '#space-lawn' },
    { key: 'house', name: 'The House', short: 'The house', use: 'Getting ready, and 22 bedrooms for the weekend', caps: [['Bedrooms', '22'], ['Sleeps', '44']], walk: '3 min to the walled garden', anchor: '#space-house' }
  ];
  function initMap() {
    var wrap = $('[data-map-pins]'), card = $('[data-map-card]');
    if (!wrap || !card) return;
    var btns = [];
    PLACES.forEach(function (p, i) {
      var xy = SPOTS[p.key];
      if (!xy) return;
      var b = doc.createElement('button');
      b.type = 'button';
      b.className = 'pin';
      b.dataset.x = xy[0]; b.dataset.y = xy[1];
      b.setAttribute('aria-expanded', 'false');
      b.setAttribute('aria-controls', 'map-card');
      b.innerHTML = '<span class="pin__n">' + String(i + 1).padStart(2, '0') + '</span><span class="pin__t">' + p.short + '</span>';
      b.setAttribute('aria-label', p.name);
      b.addEventListener('click', function () { show(i); });
      wrap.appendChild(b);
      btns.push(b);
    });
    card.id = 'map-card';
    var frame = wrap.parentNode, IMG_AR = 16 / 9;
    function place() {
      var fw = frame.clientWidth, fh = frame.clientHeight, ar = fw / fh;
      var visW = Math.min(1, ar / IMG_AR), visH = Math.min(1, IMG_AR / ar);
      btns.forEach(function (b) {
        var x = (+b.dataset.x - (1 - visW) / 2) / visW, y = (+b.dataset.y - (1 - visH) / 2) / visH;
        b.style.left = (Math.max(.06, Math.min(.94, x)) * 100) + '%';
        b.style.top = (Math.max(.08, Math.min(.92, y)) * 100) + '%';
      });
    }
    place();
    window.addEventListener('resize', place);
    function show(i) {
      var p = PLACES[i];
      btns.forEach(function (b, j) { b.setAttribute('aria-expanded', j === i ? 'true' : 'false'); });
      card.innerHTML =
        '<div class="map__card-top"><div><p class="space__kicker">' + String(i + 1).padStart(2, '0') + ' · ' + p.use + '</p><h3>' + p.name + '</h3></div></div>' +
        '<dl class="caps">' + p.caps.map(function (c) { return '<div><dt>' + c[0] + '</dt><dd>' + c[1] + '</dd></div>'; }).join('') + '</dl>' +
        '<p class="map__walk">' + p.walk + ' on foot</p>' +
        (p.wet ? '<button type="button" class="map__wet" role="switch" aria-checked="false" data-wet><span class="sw" aria-hidden="true"></span><span data-wet-text>Wet-weather plan</span></button>' : '') +
        '<a href="' + p.anchor + '">See the space →</a>';
      var sw = $('[data-wet]', card);
      if (sw) sw.addEventListener('click', function () {
        var on = sw.getAttribute('aria-checked') !== 'true';
        sw.setAttribute('aria-checked', on ? 'true' : 'false');
        $('[data-wet-text]', card).textContent = on ? p.wet : 'Wet-weather plan';
      });
      if (hasGsap && !reduce) gsap.fromTo(card.children, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .6, ease: 'power3.out', stagger: .04 });
    }
    show(0);
    if (hasGsap && !reduce) {
      btns.forEach(function (bt, i) { bt.classList.add('is-pending'); bt.style.transitionDelay = (i * 0.09) + 's'; });
      ScrollTrigger.create({ trigger: wrap, start: 'top 75%', once: true, onEnter: function () {
        btns.forEach(function (bt) { bt.classList.remove('is-pending'); });
        setTimeout(function () { btns.forEach(function (bt) { bt.style.transitionDelay = ''; }); }, 1400);
      } });
    }
  }

  /* ------------------------------------------------------------ spaces sticky stage */
  function initSpaces() {
    var items = $$('[data-space]'), imgs = $$('[data-space-img]'), idx = $('[data-space-index]');
    if (!items.length || !('IntersectionObserver' in window)) return;
    var current = 'garden';
    function activate(key, i) {
      if (key === current) return;
      imgs.forEach(function (im) {
        im.classList.remove('was-active');
        if (im.dataset.spaceImg === current) im.classList.add('was-active');
        im.classList.toggle('is-active', im.dataset.spaceImg === key);
      });
      items.forEach(function (it) { it.classList.toggle('is-active', it.dataset.space === key); });
      if (idx) idx.textContent = String(i + 1).padStart(2, '0');
      current = key;
    }
    items[0].classList.add('is-active');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) activate(en.target.dataset.space, items.indexOf(en.target));
      });
    }, { rootMargin: '-48% 0px -48% 0px' });
    items.forEach(function (it) { io.observe(it); });
  }

  /* ------------------------------------------------------------ your day */
  function initDay() {
    var sec = $('[data-day]'), track = $('[data-day-track]'), pin = $('[data-day-pin]');
    if (!sec || !track) return;
    var moments = $$('.moment', track), timeEl = $('[data-day-time]'), sun = $('[data-day-sun]'), bar = $('[data-day-progress]');
    var times = moments.map(function (m) { return m.dataset.time; });
    var mm2 = null;
    function setMoment(i, p) {
      var t = times[i] || times[0];
      if (timeEl && timeEl.textContent !== t) timeEl.textContent = t;
      sec.classList.toggle('is-dusk', i === 2);
      sec.classList.toggle('is-night', i === 3);
      // sun travels the arc from 13:30 to 22:00; on Sunday morning it rises again
      var f = i === 4 ? 0.12 : Math.min(1, Math.max(0, p != null ? p * 1.25 : i / 3));
      if (sun) {
        var a = Math.PI * (1 - f);
        sun.setAttribute('cx', (60 + 52 * Math.cos(a)).toFixed(1));
        sun.setAttribute('cy', (60 - 52 * Math.sin(a)).toFixed(1));
      }
    }
    setMoment(0, 0);
    if (hasGsap && !reduce) {
      var mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', function () {
        var dist = function () { return track.scrollWidth - window.innerWidth; };
        gsap.to(track, {
          x: function () { return -dist(); }, ease: 'none',
          scrollTrigger: {
            trigger: sec, start: 'top top', end: function () { return '+=' + dist() * 1.9; },
            pin: pin, scrub: .6, invalidateOnRefresh: true, anticipatePin: 1,
            onUpdate: function (self) {
              var p = self.progress;
              var i = Math.min(moments.length - 1, Math.floor(p * moments.length * 0.999 + 0.15));
              setMoment(i, p);
              if (bar) bar.style.transform = 'scaleX(' + p.toFixed(4) + ')';
            }
          }
        });
        moments.forEach(function (m) {
          var img = $('img', m);
          if (img) gsap.fromTo(img, { scale: 1.15 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: sec, start: 'top top', end: function () { return '+=' + dist() * 1.9; }, scrub: true } });
        });
        return function () { sec.classList.remove('is-dusk', 'is-night'); };
      });
    }
    // touch / narrow: native horizontal scroll drives the same state
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        if (mqDesktop.matches && !reduce) return;
        entries.forEach(function (en) { if (en.isIntersecting) setMoment(moments.indexOf(en.target)); });
      }, { root: track, threshold: 0.6 });
      moments.forEach(function (m) { io.observe(m); });
    }
  }

  /* ------------------------------------------------------------ real wedding stories */
  var STORIES = {
    'hattie-sam': {
      kicker: 'Summer · Saturday 13 June 2026', title: 'Hattie &amp; Sam', hero: 'arch',
      facts: [['Guests', '120 for the day, 160 in the evening'], ['Ceremony', 'The Walled Garden, 1.30 pm'], ['Wedding breakfast', 'The Tithe Barn, Estate menu'], ['Venue and catering', '£35,100 for the weekend, Estate menu']],
      text: [
        'Hattie and Sam met at a ceilidh in Edinburgh, and they wanted a wedding that felt like one: long tables, a loud band and nobody sitting still. They chose a June Saturday for the light and the walled garden for the vows.',
        'The aisle was lined with meadow flowers in old terracotta pots from the potting shed. After the ceremony everyone spilled onto the lake lawn for Pimm’s and lawn games while the barn was turned for dinner.',
        '<span class="story__pull">“By the time the speeches started, the barn doors were open and the whole valley had turned gold.”</span>',
        'They booked after a Sunday-morning show-round, held the date online for a week and paid the deposit from the car park.'
      ],
      timeline: [['1.30 pm', 'Ceremony in the walled garden'], ['2.15 pm', 'Pimm’s and lawn games by the lake'], ['5.30 pm', 'Wedding breakfast in the barn'], ['9.00 pm', 'Ceilidh band'], ['11.45 pm', 'Sparkler exit on the terrace']],
      gallery: ['ceremony', 'table', 'barn'],
      credits: 'Photography Ellis Rowe · Flowers The Cutting Room · Music The Hollin Ceilidh Band'
    },
    'madison-cole': {
      kicker: 'Autumn · Saturday 3 October 2026', title: 'Madison &amp; Cole', hero: 'barn-night',
      facts: [['Guests', '86, with 41 flying in from the US'], ['Ceremony', 'The Lake Lawn, 2 pm'], ['Stayed', 'All 22 bedrooms, Friday to Sunday'], ['Venue and catering', '£29,300 (about $39,000), Feast menu']],
      text: [
        'Madison and Cole live in Charleston, South Carolina, and wanted an English country wedding without planning it from three thousand miles away. They found Wrenfold at midnight their time, saw the prices and the open dates on the page, and booked a video tour for the next morning.',
        'Charlotte walked the whole estate with her phone while they watched from their kitchen. They held the first Saturday in October that evening.',
        '<span class="story__pull">“We did our show-round on FaceTime at six in the morning. The first time we stood in the barn was the day before the wedding, and it was exactly what we’d seen.”</span>',
        'Friday was a welcome supper in the orangery for everyone who had flown in. On Saturday they married on the lake lawn as the beeches turned, and on Sunday nobody wanted to leave brunch.'
      ],
      timeline: [['Fri 6 pm', 'Welcome supper in the orangery'], ['Sat 2 pm', 'Ceremony on the lake lawn'], ['3 pm', 'Cocktail hour by the water'], ['6 pm', 'Dinner in the barn'], ['10 pm', 'Dancing under the festoon'], ['Sun 10 am', 'Brunch in the house']],
      gallery: ['lawn', 'orangery', 'suite'],
      credits: 'Planning Wrenfold in-house · Photography Juniper &amp; Lane · Band The Late Arrivals'
    },
    'priya-tom': {
      kicker: 'Winter · Saturday 13 December 2025', title: 'Priya &amp; Tom', hero: 'winter',
      facts: [['Guests', '150'], ['Ceremonies', 'Hindu ceremony in the barn, civil ceremony in the orangery'], ['Menu', 'Gujarati feast with a partner caterer'], ['Venue and catering', '£28,300 for the weekend']],
      text: [
        'Priya and Tom wanted two ceremonies, two families and one weekend, so they took the whole estate in December. The mehndi was on Friday night in the orangery, with lanterns among the lemon trees.',
        'On Saturday morning the barn held a mandap dressed in marigolds; by the afternoon it had become a candlelit hall of evergreen garlands for dinner. Our kitchen worked alongside their family’s caterer on a Gujarati feast.',
        '<span class="story__pull">“Winter was our secret. A thousand candles, much less than a June Saturday, and nobody went to bed before midnight.”</span>',
        'Their guests filled the house and the village inns, and the snow held off until Sunday morning, just in time for the photographs.'
      ],
      timeline: [['Fri 7 pm', 'Mehndi in the orangery'], ['Sat 10 am', 'Hindu ceremony in the barn'], ['2 pm', 'Civil ceremony in the orangery'], ['5 pm', 'Wedding feast in the barn'], ['9 pm', 'Sangeet and dancing'], ['Sun 10 am', 'Brunch by the fire']],
      gallery: ['barn', 'orangery', 'table'],
      credits: 'Photography Anand &amp; Wilde · Catering with Saffron Table · Décor Marigold &amp; Moss'
    }
  };
  function initStories() {
    var dlg = $('[data-story]'), body = $('[data-story-body]');
    if (!dlg || !body) return;
    var opener = null;
    function close() {
      if (!dlg.open) return;
      dlg.close();
    }
    var skipFocus = false;
    dlg.addEventListener('close', function () {
      root.style.overflow = '';
      if (lenis) lenis.start();
      if (opener && !skipFocus) opener.focus();
      skipFocus = false;
    });
    dlg.addEventListener('click', function (e) {
      if (e.target.closest('[data-story-close]')) { close(); return; }
      var nx = e.target.closest('[data-story-next]');
      if (nx) { open($('[data-story-open="' + nx.dataset.storyNext + '"]')); return; }
      var a = e.target.closest('a[href^="#"]');
      if (a) {
        e.preventDefault(); e.stopPropagation();
        skipFocus = true;
        var href = a.getAttribute('href');
        if (href === '#visit' && setMode) setMode('tour');
        close();
        if (lenis) lenis.start();
        root.style.overflow = '';
        requestAnimationFrame(function () { scrollToTarget(href); });
      }
    });
    var ORDER = Object.keys(STORIES);
    function open(btn) {
        var s = STORIES[btn.dataset.storyOpen];
        if (!s) return;
        opener = btn;
        var nextKey = ORDER[(ORDER.indexOf(btn.dataset.storyOpen) + 1) % ORDER.length];
        body.innerHTML =
          '<button class="icon-btn story__close" type="button" data-story-close aria-label="Close story"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
          '<header class="story__hero">' + picture(s.hero, '100vw', '', '') + '<div class="story__hero-copy wrap"><p>' + s.kicker + '</p><h2 id="story-title">' + s.title + '</h2></div></header>' +
          '<div class="story__body wrap"><dl class="story__facts">' + s.facts.map(function (f) { return '<div><dt>' + f[0] + '</dt><dd>' + f[1] + '</dd></div>'; }).join('') + '</dl>' +
          '<div class="story__text">' + s.text.map(function (t) { return t.indexOf('story__pull') > -1 ? '<p class="story__pull">' + t.replace(/<\/?span[^>]*>/g, '') + '</p>' : '<p>' + t + '</p>'; }).join('') +
          '<ol class="story__timeline">' + s.timeline.map(function (t) { return '<li><strong>' + t[0] + '</strong>' + t[1] + '</li>'; }).join('') + '</ol>' +
          '<div class="story__gallery">' + s.gallery.map(function (g, i) { return picture(g, i === 0 ? '(min-width: 1024px) 60vw, 92vw' : '(min-width: 1024px) 30vw, 46vw', '', ''); }).join('') + '</div>' +
          '<p class="story__credits">' + s.credits + '. Suppliers are illustrative.</p>' +
          '<div class="story__cta"><a class="btn btn--solid" href="#availability">Find a date like this</a><a class="btn btn--ghost" href="#visit">Book a show-round</a></div>' +
          '<button type="button" class="story__next" data-story-next="' + nextKey + '"><span>Next story</span><strong>' + STORIES[nextKey].title + '</strong></button>' +
          '</div></div>';
        if (!dlg.open) dlg.showModal();
        dlg.scrollTop = 0;
        root.style.overflow = 'hidden';
        if (lenis) lenis.stop();
        $('[data-story-close]', dlg).focus();
    }
    $$('[data-story-open]').forEach(function (btn) {
      btn.addEventListener('click', function () { open(btn); });
    });
  }

  /* ------------------------------------------------------------ pricing, currency, estimator */
  function renderPrices() {
    var p = PRICES[state.season];
    $$('[data-price]').forEach(function (el) { el.textContent = money(p[el.dataset.price]); });
    $$('[data-money]').forEach(function (el) { el.textContent = money(+el.dataset.money, { perHead: true }); });
    var note = $('[data-usd-note]');
    if (note) note.hidden = state.currency !== 'USD';
  }
  function radioGroup(group, onChange) {
    if (!group) return;
    var btns = $$('[role="radio"]', group);
    function select(b, focus) {
      btns.forEach(function (x) { x.setAttribute('aria-checked', x === b ? 'true' : 'false'); x.tabIndex = x === b ? 0 : -1; });
      if (focus) b.focus();
      onChange(b);
    }
    btns.forEach(function (b) {
      b.tabIndex = b.getAttribute('aria-checked') === 'true' ? 0 : -1;
      b.addEventListener('click', function () { select(b); });
      b.addEventListener('keydown', function (e) {
        var i = btns.indexOf(b), n = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = btns[(i + 1) % btns.length];
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = btns[(i - 1 + btns.length) % btns.length];
        if (n) { e.preventDefault(); select(n, true); }
      });
    });
  }
  var onCurrency = [];
  function initPricing() {
    radioGroup($('[data-currency-group]'), function (b) {
      state.currency = b.dataset.currency;
      renderPrices();
      onCurrency.forEach(function (fn) { fn(); });
    });
    var tabs = $$('[role="tab"]', $('[data-tabs]'));
    var panel = $('[data-price-panel]');
    function selectTab(t, focus) {
      tabs.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on ? 'true' : 'false'); x.tabIndex = on ? 0 : -1; });
      panel.setAttribute('aria-labelledby', t.id);
      state.season = t.dataset.season;
      if (focus) t.focus();
      renderPrices();
      if (hasGsap && !reduce) gsap.fromTo('.price-card__amt', { yPercent: 30, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: .6, ease: 'power3.out', stagger: .05 });
    }
    tabs.forEach(function (t) {
      t.addEventListener('click', function () { selectTab(t); });
      t.addEventListener('keydown', function (e) {
        var i = tabs.indexOf(t), n = null;
        if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (n) { e.preventDefault(); selectTab(n, true); }
      });
    });
    renderPrices();
  }
  var estimate = { month: 5, day: 'sat', guests: 100, menu: 155 };
  function initEstimator() {
    var f = $('[data-estimator]');
    if (!f) return;
    var month = $('[data-est-month]', f), range = $('[data-est-guests]', f), out = $('[data-est-guests-out]', f);
    var total = $('[data-est-total]', f), brk = $('[data-est-break]', f), cta = $('[data-est-cta]', f);
    var shown = 0;
    function calc(animate) {
      estimate.month = +month.value;
      estimate.guests = +range.value;
      var s = seasonOf(estimate.month);
      var venue = PRICES[s][estimate.day];
      var t = venue + estimate.guests * estimate.menu;
      out.textContent = estimate.guests;
      brk.textContent = 'Venue ' + money(venue) + ' (' + SEASON_NAME[s].toLowerCase() + ') + ' + estimate.guests + ' guests × ' + money(estimate.menu, { perHead: true });
      var target = state.currency === 'USD' ? Math.round(t * USD / 100) * 100 : Math.round(t / 100) * 100;
      var sym = state.currency === 'USD' ? '$' : '£';
      if (hasGsap && !reduce && animate) {
        var o = { v: shown };
        gsap.to(o, { v: target, duration: .6, ease: 'power3.out', overwrite: true, onUpdate: function () { total.textContent = sym + (Math.round(o.v / 100) * 100).toLocaleString('en-GB'); } });
      } else {
        total.textContent = sym + target.toLocaleString('en-GB');
      }
      shown = target;
      var dep = $('[data-est-deposit]', f);
      if (dep) dep.textContent = 'About ' + money(t / estimate.guests, { perHead: true }) + ' per guest, all in · ' + money(Math.round(venue * .25)) + ' deposit holds the date · balance 8 weeks before';
    }
    month.addEventListener('change', function () { calc(true); });
    range.addEventListener('input', function () { calc(true); });
    radioGroup($('[data-est-day]', f), function (b) { estimate.day = b.dataset.v; calc(true); });
    radioGroup($('[data-est-menu]', f), function (b) { estimate.menu = +b.dataset.v; calc(true); });
    onCurrency.push(function () { calc(false); });
    cta.addEventListener('click', function () {
      var names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var dayName = { sat: 'a Saturday', fri: 'a Friday or Sunday', mid: 'midweek' }[estimate.day];
      prefillEnquiry(dayName.charAt(0).toUpperCase() + dayName.slice(1) + ' in ' + names[estimate.month] + ' 2027', estimate.guests);
    });
    calc(false);
  }
  function initGuide() {
    var dlg = $('[data-guide]'), form = $('[data-guide-form]');
    if (!dlg) return;
    $$('[data-guide-open]').forEach(function (b) { b.addEventListener('click', function () { dlg.showModal(); if (lenis) lenis.stop(); $('#g-email').focus(); }); });
    $('[data-guide-close]').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('close', function () { if (lenis) lenis.start(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = $('#g-email'), err = $('#g-email-err');
      var ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim());
      input.setAttribute('aria-invalid', ok ? 'false' : 'true');
      err.hidden = ok;
      if (ok) input.removeAttribute('aria-describedby'); else input.setAttribute('aria-describedby', 'g-email-err');
      if (!ok) { input.focus(); return; }
      $('[data-guide-note]').textContent = 'Sent. Check your inbox in a minute (concept site: nothing was sent).';
      $('button[type="submit"]', form).textContent = 'Guide on its way';
      $('button[type="submit"]', form).disabled = true;
    });
  }

  /* ------------------------------------------------------------ availability calendar */
  var selectedDate = null;
  function initCalendar() {
    var grid = $('[data-cal-grid]'), title = $('[data-cal-title]'), side = $('[data-cal-side]'), pills = $('[data-cal-months]');
    if (!grid) return;
    var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var view = 5; // June 2027
    var prev = $('[data-cal-prev]'), next = $('[data-cal-next]');

    MONTHS.forEach(function (m, i) {
      var b = doc.createElement('button');
      b.type = 'button';
      var openSat = 0;
      eachDay(2027, i, function (d) { if (d.getDay() === 6 && statusOf(d) === 'open') openSat++; });
      b.innerHTML = m.slice(0, 3) + (openSat ? '<span class="dot" aria-hidden="true"></span>' : '');
      b.setAttribute('aria-label', m + ' 2027, ' + (openSat ? openSat + ' Saturday' + (openSat > 1 ? 's' : '') + ' available' : 'no Saturdays available'));
      b.addEventListener('click', function () { view = i; render(); });
      pills.appendChild(b);
    });

    function render(focusDate) {
      title.textContent = MONTHS[view] + ' 2027';
      prev.disabled = view === 0; next.disabled = view === 11;
      $$('button', pills).forEach(function (b, i) { b.setAttribute('aria-pressed', i === view ? 'true' : 'false'); });
      var html = '<div role="row" style="display:contents">' + ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(function (d) { return '<span class="cal__dow" role="columnheader">' + d + '</span>'; }).join('') + '</div>';
      var first = new Date(2027, view, 1);
      var lead = (first.getDay() + 6) % 7;
      var cells = [];
      for (var i = 0; i < lead; i++) cells.push('<span class="day-btn day-btn--empty" role="gridcell"></span>');
      eachDay(2027, view, function (d) {
        var st = statusOf(d), t = dayType(d.getDay()), price = PRICES[seasonOf(d.getMonth())][t];
        var sel = selectedDate && +selectedDate === +d;
        var label = fmtLong.format(d) + ', ' + (st === 'open' ? 'available, from ' + money(price) : st === 'held' ? 'on hold, join the waiting list' : 'booked');
        cells.push('<span role="gridcell"><button type="button" class="day-btn day-btn--' + st + '" data-d="' + d.getDate() + '" aria-pressed="' + (sel ? 'true' : 'false') + '" aria-label="' + label + '" tabindex="-1">' + d.getDate() +
          (st !== 'booked' ? '<small>' + money(price, { short: true }) + '</small>' : '') + '</button></span>');
      });
      // rows for the grid role
      var rows = [], all = cells;
      for (var r = 0; r < all.length; r += 7) rows.push('<div role="row" style="display:contents">' + all.slice(r, r + 7).join('') + '</div>');
      grid.innerHTML = html + rows.join('');
      var btns = $$('.day-btn[data-d]', grid);
      var focusable = btns.filter(function (b) { return b.getAttribute('aria-pressed') === 'true'; })[0] || btns.filter(function (b) { return !b.classList.contains('day-btn--booked'); })[0] || btns[0];
      if (focusable) focusable.tabIndex = 0;
      if (focusDate) { var fb = btns[focusDate - 1]; if (fb) { btns.forEach(function (b) { b.tabIndex = -1; }); fb.tabIndex = 0; fb.focus(); } }
      if (hasGsap && !reduce && !focusDate && !quiet) gsap.fromTo(btns, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .45, ease: 'power3.out', stagger: .006, overwrite: true, clearProps: 'opacity,transform' });
      quiet = false;
      var ap = $('[aria-pressed="true"]', pills);
      if (ap && pills.scrollWidth > pills.clientWidth) pills.scrollLeft = ap.offsetLeft - pills.clientWidth / 2 + ap.offsetWidth / 2;
    }
    var quiet = false;
    grid.addEventListener('click', function (e) {
      var b = e.target.closest('.day-btn[data-d]');
      if (!b) return;
      choose(new Date(2027, view, +b.dataset.d));
    });
    grid.addEventListener('keydown', function (e) {
      var b = e.target.closest('.day-btn[data-d]');
      if (!b) return;
      var d = +b.dataset.d, n = new Date(2027, view, 0 + d);
      var last = new Date(2027, view + 1, 0).getDate();
      if (e.key === 'PageDown' || e.key === 'PageUp') {
        e.preventDefault();
        var nv = view + (e.key === 'PageDown' ? 1 : -1);
        if (nv < 0 || nv > 11) return;
        view = nv; render(Math.min(d, new Date(2027, view + 1, 0).getDate())); return;
      }
      var delta = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 7, ArrowUp: -7, Home: 1 - d, End: last - d }[e.key];
      if (delta === undefined) return;
      e.preventDefault();
      n.setDate(n.getDate() + delta);
      if (n.getFullYear() !== 2027) return;
      if (n.getMonth() !== view) { view = n.getMonth(); render(n.getDate()); }
      else render(n.getDate());
    });
    prev.addEventListener('click', function () { if (view > 0) { view--; render(); } });
    next.addEventListener('click', function () { if (view < 11) { view++; render(); } });

    function nearestOpen(d) {
      var out = [];
      for (var k = 1; k < 60 && out.length < 3; k++) {
        [k, -k].forEach(function (dd) {
          var x = new Date(d); x.setDate(x.getDate() + dd);
          if (x.getFullYear() === 2027 && dayType(x.getDay()) !== 'mid' && statusOf(x) === 'open' && out.length < 3) out.push(x);
        });
      }
      return out.sort(function (a, b) { return a - b; });
    }
    function choose(d) {
      selectedDate = d;
      quiet = true;
      render();
      renderSide();
      var b = $('.day-btn[aria-pressed="true"]', grid);
      if (b) b.focus({ preventScroll: true });
      if (!mqDesktop.matches) {
        var r = side.getBoundingClientRect();
        if (r.top > window.innerHeight * .6) scrollToTarget(side);
      }
    }
    function renderSide() {
      var d = selectedDate;
      if (!d) return;
      var st = statusOf(d), t = dayType(d.getDay()), s = seasonOf(d.getMonth()), price = PRICES[s][t];
      var sun = sunTimes(d);
      var stLabel = { open: 'Available', held: 'On hold for another couple', booked: 'Booked' }[st];
      var stColor = { open: '#9fd18a', held: '#e3b56c', booked: '#9a9488' }[st];
      var html = '<p class="eyebrow">' + SEASON_NAME[s] + ' · ' + DAY_LABEL[t] + '</p>' +
        '<p class="cal__date">' + fmtLong.format(d).replace(' 2027', '<br>2027') + '</p>' +
        '<p class="cal__status"><i style="background:' + stColor + '"></i>' + stLabel + '</p>' +
        '<dl class="cal__rows">' +
        '<div><dt>Exclusive use from</dt><dd>' + money(price) + '</dd></div>' +
        '<div><dt>Nights in the house</dt><dd>' + (t === 'mid' ? '1' : '2') + '</dd></div>' +
        '<div><dt>Sunset that evening</dt><dd>' + clock(sun.sunset) + '</dd></div>' +
        '<div><dt>Golden hour from</dt><dd>' + clock(sun.golden) + '</dd></div>' +
        '</dl>';
      if (st === 'open') {
        html += '<a class="btn btn--light" href="#visit" data-hold>Hold this date free for 7 days</a>';
      } else {
        var alts = nearestOpen(d);
        html += (st === 'held' ? '<a class="btn btn--light" href="#visit" data-hold>Join the waiting list</a>' : '') +
          '<p class="cal__alt">Nearest open dates: ' + alts.map(function (a) { return '<button type="button" data-alt="' + (+a) + '">' + fmtShort.format(a) + '</button>'; }).join(', ') + '</p>';
      }
      side.innerHTML = html;
      var hold = $('[data-hold]', side);
      if (hold) hold.addEventListener('click', function () { prefillEnquiry(fmtLong.format(d), null, st === 'open' ? d : null); });
      $$('[data-alt]', side).forEach(function (b) {
        b.addEventListener('click', function () { var x = new Date(+b.dataset.alt); view = x.getMonth(); choose(x); });
      });
      if (hasGsap && !reduce) gsap.fromTo(side.children, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: .5, ease: 'power3.out', stagger: .04, overwrite: true });
    }
    onCurrency.push(function () { render(); renderSide(); });

    // default: first open Saturday in June 2027
    var def = null;
    eachDay(2027, 5, function (d) { if (!def && d.getDay() === 6 && statusOf(d) === 'open') def = d; });
    if (!def) for (var mi = 4; mi < 9 && !def; mi++) eachDay(2027, mi, function (d) { if (!def && d.getDay() === 6 && statusOf(d) === 'open') def = d; });
    if (def) view = def.getMonth();
    selectedDate = def;
    render();
    renderSide();

    var left = summerSaturdaysLeft();
    $$('[data-summer-left]').forEach(function (el) { el.textContent = (WORDS[left] || String(left)) + ' summer Saturday' + (left === 1 ? '' : 's') + ' left'; });
  }

  /* ------------------------------------------------------------ enquiry */
  var setMode = null, holdDate = null;
  function prefillEnquiry(dateText, guests, hold) {
    var input = $('[data-date-input]');
    if (setMode) setMode('enquiry');
    holdDate = hold || null;
    var lbl = $('[data-submit-label]');
    if (lbl) lbl.textContent = holdDate ? 'Hold ' + fmtShort.format(holdDate) + ' 2027' : 'Check availability';
    if (input && dateText) input.value = dateText;
    if (guests) {
      var sel = $('#f-guests');
      var v = guests < 60 ? 'Under 60' : guests <= 100 ? '60 – 100' : guests <= 150 ? '100 – 150' : '150 – 180';
      $$('option', sel).forEach(function (o) { o.selected = o.textContent === v; });
    }
    setTimeout(function () { var n = $('#f-names'); if (n) n.focus({ preventScroll: true }); }, 1200);
  }
  function initEnquiry() {
    var form = $('[data-form]');
    if (!form) return;
    var mode = 'enquiry';
    var label = $('[data-submit-label]');
    var slots = $('[data-slots]');
    // next show-round slots: weekdays at 11am / 3pm, Sunday 10am, plus the open day
    var now = new Date(), out = [], d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2);
    while (out.length < 5) {
      var dow = d.getDay();
      if (dow >= 1 && dow <= 4) out.push({ d: new Date(d), t: out.length % 2 ? '3 pm' : '11 am' });
      if (dow === 0) out.push({ d: new Date(d), t: '10 am' });
      d.setDate(d.getDate() + 1);
    }
    var html = out.map(function (s, i) {
      return '<button type="button" class="slot" role="radio" aria-checked="' + (i === 0 ? 'true' : 'false') + '"><b>' + fmtShort.format(s.d) + '</b>' + s.t + ' · private</button>';
    }).join('');
    html += '<button type="button" class="slot slot--open-day" role="radio" aria-checked="false"><b>Open day · Sun 15 Nov</b>Any time 11 am – 3 pm, with suppliers</button>';
    slots.innerHTML = html;
    radioGroup(slots, function () {});

    setMode = function (m) {
      mode = m;
      $$('[data-mode-group] [role="radio"]').forEach(function (b) { var on = b.dataset.mode === m; b.setAttribute('aria-checked', on ? 'true' : 'false'); b.tabIndex = on ? 0 : -1; });
      $$('[data-when]', form).forEach(function (el) { el.hidden = el.dataset.when !== m; });
      label.textContent = m === 'tour' ? 'Book my show-round' : 'Check availability';
      holdDate = null;
    };
    radioGroup($('[data-mode-group]'), function (b) { setMode(b.dataset.mode); });
    $$('[data-dock-tour], .hero__ctas a[href="#visit"], .story__cta a[href="#visit"]').forEach(function (a) {
      a.addEventListener('click', function () { setMode('tour'); });
    });
    doc.addEventListener('click', function (e) { if (e.target.closest('.story__cta a[href="#visit"]')) setMode('tour'); });

    function check(input, test, errId) {
      var ok = test(input.value.trim());
      var err = $('#' + errId);
      input.setAttribute('aria-invalid', ok ? 'false' : 'true');
      if (ok) input.removeAttribute('aria-describedby'); else input.setAttribute('aria-describedby', errId);
      err.hidden = ok;
      return ok;
    }
    var names = $('#f-names'), email = $('#f-email');
    $('#f-date').addEventListener('input', function () { if (holdDate) { holdDate = null; label.textContent = 'Check availability'; } });
    var testName = function (v) { return v.length > 1; };
    var testEmail = function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); };
    names.addEventListener('blur', function () { if (names.value) check(names, testName, 'f-names-err'); });
    email.addEventListener('blur', function () { if (email.value) check(email, testEmail, 'f-email-err'); });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var a = check(names, testName, 'f-names-err');
      var b = check(email, testEmail, 'f-email-err');
      if (!a) { names.focus(); return; }
      if (!b) { email.focus(); return; }
      var btn = $('[data-submit]', form);
      btn.disabled = true;
      label.textContent = 'Sending…';
      setTimeout(function () {
        var first = names.value.trim().split(/\s*(?:&|and|\+)\s*/i)[0].split(' ')[0];
        $('[data-step="1"]', form).hidden = true;
        var done = $('[data-done]', form);
        done.hidden = false;
        if (mode === 'tour') {
          var slot = $('.slot[aria-checked="true"]', slots);
          $('[data-done-title]', form).textContent = 'See you soon, ' + first + '.';
          $('[data-done-text]', form).textContent = 'Your show-round is pencilled in for ' + (slot ? slot.querySelector('b').textContent : 'your chosen time') + '. Charlotte will confirm by email within four working hours, with directions and parking.';
        } else {
          var date = $('#f-date').value.trim();
          $('[data-done-title]', form).textContent = 'Thank you, ' + first + '.';
          if (holdDate) {
            var until = new Date(); until.setDate(until.getDate() + 7);
            $('[data-done-title]', form).textContent = fmtLong.format(holdDate) + ' is held for you.';
            $('[data-done-text]', form).textContent = 'Thank you, ' + first + '. Nobody else can book it until ' + new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long' }).format(until) + '. Charlotte will email within four working hours with the full price guide and a time to visit.';
            done.focus();
            return;
          }
          $('[data-done-text]', form).textContent = (date ? 'We’ve noted ' + date + '. ' : '') + 'Charlotte will reply within four working hours with availability, the full price guide and a time to visit.';
        }
        done.focus();
      }, 900);
    });
  }

  /* ------------------------------------------------------------ live estate clock */
  function initNow() {
    var host = $('[data-now]'), foot = $('[data-footer-now]');
    function tick() {
      var now = new Date();
      var parts = new Intl.DateTimeFormat('en-GB', { timeZone: VENUE.tz, weekday: 'short', hour: 'numeric', hour12: false }).formatToParts(now);
      var wd = parts.filter(function (p) { return p.type === 'weekday'; })[0].value;
      var hr = +parts.filter(function (p) { return p.type === 'hour'; })[0].value;
      var open = wd !== 'Sun' && hr >= 9 && hr < 18;
      var t = clock(now), ss = clock(sunTimes(now).sunset);
      if (host) host.textContent = open ? 'online now, ' + t + ' at Wrenfold' : 'it’s ' + t + ' here, she replies from 9 am UK time';
      if (foot) foot.textContent = 'At Wrenfold now: ' + t + ' · sunset ' + ss;
    }
    tick();
    setInterval(tick, 30000);
  }

  /* ------------------------------------------------------------ boot */
  function boot() {
    if (hasGsap) {
      gsap.registerPlugin(ScrollTrigger);
      if (window.SplitText) gsap.registerPlugin(SplitText);
      ScrollTrigger.config({ ignoreMobileResize: true });
    } else {
      root.classList.remove('motion', 'is-intro');
    }
    initSmooth();
    initAnchors();
    initMenu();
    initHeader();
    initIntro();
    initHeroScroll();
    initFilm();
    initManifesto();
    initCounters();
    initMap();
    initSpaces();
    initDay();
    initStories();
    initPricing();
    initEstimator();
    initGuide();
    initCalendar();
    initEnquiry();
    initNow();
    initReveals();
    if (hasGsap) {
      window.addEventListener('load', function () { ScrollTrigger.refresh(); });
      $$('img[loading="lazy"]').forEach(function (img) { if (!img.complete) img.addEventListener('load', function () { ScrollTrigger.refresh(); }, { once: true }); });
    }
    if (location.hash && $(location.hash)) setTimeout(function () { scrollToTarget(location.hash, true); }, 50);
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
