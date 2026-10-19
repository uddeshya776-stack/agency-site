/* ==========================================================================
   Solenne Private Estates — interactions
   GSAP + ScrollTrigger + SplitText for motion, Lenis for smooth scrolling.
   The page is complete without JS; with reduced motion it stays calm.
   ========================================================================== */
(() => {
  'use strict';

  const doc = document.documentElement;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const mq = (query) => window.matchMedia(query);
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const pad = (n) => String(n).padStart(2, '0');

  const reduceMotion = mq('(prefers-reduced-motion: reduce)').matches;
  const finePointer = mq('(hover: hover) and (pointer: fine)').matches;
  const hasGSAP = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  const hasSplit = typeof window.SplitText !== 'undefined';
  const motion = hasGSAP && !reduceMotion && doc.classList.contains('motion');

  // JS has taken over: cancels the CSS failsafes that would otherwise reveal content.
  if (!motion) doc.classList.remove('motion', 'is-intro');
  doc.classList.add('js-ready');

  // One broken module should never take the rest of the page down with it.
  const run = (name, fn) => {
    try { fn(); } catch (err) { console.error(`[solenne] ${name}:`, err); }
  };

  if (hasGSAP) {
    gsap.registerPlugin(ScrollTrigger);
    if (hasSplit) gsap.registerPlugin(SplitText);
  }

  /* ------------------------------------------------------------ smooth scroll */
  let lenis = null;
  if (motion && typeof window.Lenis !== 'undefined') {
    lenis = new Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 0.95 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const scrollToTarget = (target, onDone) => {
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.6, easing: easeInOutCubic, onComplete: onDone });
      return;
    }
    const top = typeof target === 'number' ? target : target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
    if (onDone) onDone();
  };

  const focusWithoutScroll = (el) => {
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
  };

  /* ------------------------------------------------------------ header */
  const header = $('[data-header]');
  let menuOpen = false;
  let lastY = window.scrollY;

  const onScroll = (y) => {
    header.classList.toggle('is-scrolled', y > 40);
    const keep = menuOpen || header.contains(document.activeElement);
    if (y > lastY + 4 && y > 640 && !keep) header.classList.add('is-hidden');
    else if (y < lastY - 4 || y <= 640) header.classList.remove('is-hidden');
    lastY = y;
  };

  run('header', () => {
    if (lenis) lenis.on('scroll', (l) => onScroll(l.scroll));
    else window.addEventListener('scroll', () => onScroll(window.scrollY), { passive: true });
    header.addEventListener('focusin', () => header.classList.remove('is-hidden'));
    onScroll(window.scrollY);
  });

  /* ------------------------------------------------------------ office clocks */
  run('clocks', () => {
    const clocks = $$('[data-clock]');
    const formats = {};
    const tick = () => {
      const now = new Date();
      clocks.forEach((el) => {
        const zone = el.dataset.clock;
        formats[zone] = formats[zone] || new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: zone });
        el.textContent = formats[zone].format(now);
      });
    };
    tick();
    setTimeout(() => { tick(); setInterval(tick, 60000); }, 60000 - (Date.now() % 60000) + 50);
  });

  /* ------------------------------------------------------------ menu (small screens) */
  const toggle = $('[data-menu-toggle]');
  const menu = $('[data-menu]');

  const closeMenu = (returnFocus = true) => {
    if (!menuOpen) return;
    menuOpen = false;
    toggle.setAttribute('aria-expanded', 'false');
    $('.menu-toggle__label', toggle).textContent = 'Menu';
    [$('main'), $('footer')].forEach((el) => { if (el) el.inert = false; });
    if (lenis) lenis.start();
    if (motion) {
      gsap.killTweensOf(menu);
      gsap.to(menu, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.7, ease: 'expo.inOut', onComplete: () => { menu.hidden = true; } });
    } else {
      menu.hidden = true;
    }
    if (returnFocus) toggle.focus();
  };

  const openMenu = () => {
    menuOpen = true;
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    $('.menu-toggle__label', toggle).textContent = 'Close';
    [$('main'), $('footer')].forEach((el) => { if (el) el.inert = true; });
    header.classList.remove('is-hidden');
    if (lenis) lenis.stop();
    if (motion) {
      gsap.killTweensOf(menu);
      gsap.fromTo(menu, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'expo.inOut' });
      gsap.fromTo($$('.menu__list a, .menu__foot', menu), { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: 'expo.out', stagger: 0.06, delay: 0.3 });
    }
    const first = $('.menu__list a', menu);
    if (first) first.focus({ preventScroll: true });
  };

  run('menu', () => {
    toggle.addEventListener('click', () => (menuOpen ? closeMenu() : openMenu()));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menuOpen) closeMenu(); });
    mq('(min-width: 961px)').addEventListener('change', (e) => { if (e.matches) closeMenu(false); });
  });

  /* ------------------------------------------------------------ enquiry prefill */
  const prefillEnquiry = (link) => {
    const message = $('#f-msg');
    const text = link.dataset.message || (link.dataset.enquire ? `I would like to arrange a private viewing of ${link.dataset.enquire}.` : '');
    if (text && message && (!message.value.trim() || message.dataset.autofill === 'true')) {
      message.value = text;
      message.dataset.autofill = 'true';
    }
    if (link.dataset.city) {
      const radio = $(`input[name="city"][value="${link.dataset.city}"]`);
      if (radio) radio.checked = true;
    }
  };

  /* ------------------------------------------------------------ in-page links */
  run('anchors', () => {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const id = link.getAttribute('href').slice(1);
      const target = id && document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      if (menuOpen) closeMenu(false);
      if (link.dataset.enquire || link.dataset.message || link.dataset.city) prefillEnquiry(link);
      scrollToTarget(id === 'top' ? 0 : target, () => focusWithoutScroll(target));
    });
  });

  /* ------------------------------------------------------------ hero film */
  const video = $('[data-hero-video]');
  const videoToggle = $('[data-video-toggle]');
  let userPaused = false;

  const syncVideoToggle = () => {
    videoToggle.toggleAttribute('data-paused', userPaused);
    $('[data-video-label]', videoToggle).textContent = userPaused ? 'Play film' : 'Pause film';
  };

  const startVideo = () => {
    const conn = navigator.connection || {};
    const allowed = motion && mq('(min-width: 768px)').matches && !conn.saveData && !/(^|-)2g$/.test(conn.effectiveType || '');
    if (!video || !allowed || video.dataset.loaded) return;
    video.dataset.loaded = 'true';
    video.muted = true;
    const webm = video.dataset.srcWebm;
    video.src = webm && video.canPlayType('video/webm; codecs="vp9"') ? webm : video.dataset.src;
    video.addEventListener('playing', () => {
      video.classList.add('is-playing');
      videoToggle.hidden = false;
    }, { once: true });
    const attempt = video.play();
    if (attempt && attempt.catch) attempt.catch(() => {}); // autoplay refused: the poster stays

    videoToggle.addEventListener('click', () => {
      userPaused = !video.paused;
      if (userPaused) video.pause();
      else video.play().catch(() => {});
      syncVideoToggle();
    });

    // Only decode frames while the hero is on screen.
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !userPaused) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.02 }).observe($('.hero'));
  };

  const queueVideo = () => {
    if (document.readyState === 'complete') setTimeout(startVideo, 400);
    else window.addEventListener('load', () => setTimeout(startVideo, 400), { once: true });
  };

  /* ------------------------------------------------------------ intro: preloader + hero */
  const heroTitle = $('[data-hero-title]');
  const heroPoster = $('.hero__poster');
  const heroFades = $$('[data-hero-fade]');

  const fontsReady = () => Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), wait(1600)]);
  const heroImageReady = () => {
    const img = $('img', heroPoster);
    if (!img || img.complete) return Promise.resolve();
    return Promise.race([
      new Promise((resolve) => {
        img.addEventListener('load', resolve, { once: true });
        img.addEventListener('error', resolve, { once: true });
      }),
      wait(2600),
    ]);
  };

  const heroIntro = () => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.fromTo(heroPoster, { scale: 1.2 }, { scale: 1, duration: 3 }, 0);
    if (heroTitle && hasSplit) {
      const split = SplitText.create(heroTitle, { type: 'lines', mask: 'lines', linesClass: 'line' });
      gsap.set(heroTitle, { opacity: 1 });
      tl.from(split.lines, { yPercent: 118, duration: 1.7, stagger: 0.13, onComplete: () => split.revert() }, 0.3);
    } else if (heroTitle) {
      tl.fromTo(heroTitle, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.6 }, 0.3);
    }
    tl.fromTo(heroFades, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 1.5, stagger: 0.12 }, 0.75);
    tl.add(queueVideo, 1.4);
    return tl;
  };

  const runPreloader = () => {
    const pre = $('[data-preloader]');
    const marks = $$('.preloader__mark path', pre);
    const letters = $$('.preloader__word span', pre);
    const count = $('[data-count]', pre);
    const bar = $('[data-progress]', pre);
    const counter = { v: 0 };
    let finished = false;

    if (lenis) lenis.stop();
    gsap.set(marks, { attr: { 'stroke-dasharray': '1 1', 'stroke-dashoffset': 1 } });

    const enter = gsap.timeline({ defaults: { ease: 'expo.out' } })
      .to(marks, { attr: { 'stroke-dashoffset': 0 }, duration: 1.5, stagger: 0.2, ease: 'power2.inOut' }, 0)
      .from(letters, { yPercent: 115, duration: 1.2, stagger: 0.07 }, 0.15)
      .from('.preloader__tag', { opacity: 0, y: 10, duration: 1 }, 0.75)
      .to(counter, {
        v: 100,
        duration: 2.1,
        ease: 'power2.inOut',
        onUpdate: () => { count.textContent = String(Math.round(counter.v)).padStart(3, '0'); },
      }, 0)
      .to(bar, { scaleX: 1, duration: 2.1, ease: 'power2.inOut' }, 0);

    const finish = () => {
      if (finished) return;
      finished = true;
      try { sessionStorage.setItem('solenne-intro', '1'); } catch (e) { /* private mode */ }
      if (lenis) lenis.start();
      gsap.timeline({
        onComplete: () => {
          pre.classList.add('is-done');
          doc.classList.remove('is-intro');
        },
      })
        .to(letters, { yPercent: -115, duration: 0.7, stagger: 0.035, ease: 'power3.in' }, 0)
        .to($$('.preloader__mark, .preloader__tag, .preloader__foot', pre), { opacity: 0, duration: 0.5 }, 0.1)
        .fromTo(pre, { clipPath: 'inset(0% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 100% 0%)', duration: 1.25, ease: 'expo.inOut' }, 0.45)
        .add(heroIntro(), 0.95);
    };

    Promise.all([fontsReady(), heroImageReady(), new Promise((resolve) => enter.eventCallback('onComplete', resolve))])
      .then(finish);
    setTimeout(finish, 5200); // never hold the visitor hostage
  };

  run('intro', () => {
    if (!motion) {
      queueVideo();
      return;
    }
    if (doc.classList.contains('is-intro')) runPreloader();
    else fontsReady().then(() => heroIntro());
  });

  /* Everything below is scroll choreography; it only runs when motion is welcome. */
  if (!motion) {
    run('collection', () => setupCollection(false));
    run('quotes', setupQuotes);
    run('forms', setupForms);
    return;
  }

  /* ------------------------------------------------------------ hero on scroll */
  run('hero-scroll', () => {
    gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
      .to('[data-hero-media]', { yPercent: 22, scale: 1.06, ease: 'none' }, 0)
      .to('.letterbox', { scaleY: 1, ease: 'none', duration: 0.6 }, 0)
      .to('.hero__content', { yPercent: -18, opacity: 0, ease: 'none', duration: 0.7 }, 0);
  });

  /* ------------------------------------------------------------ headline line reveals */
  run('split-headings', () => {
    $$('[data-split]').forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          if (!hasSplit) {
            gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out' });
            return;
          }
          const split = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'line' });
          gsap.set(el, { opacity: 1 });
          gsap.from(split.lines, { yPercent: 118, duration: 1.5, ease: 'expo.out', stagger: 0.11, onComplete: () => split.revert() });
        },
      });
    });
  });

  /* ------------------------------------------------------------ simple reveals */
  run('reveals', () => {
    ScrollTrigger.batch('[data-reveal]', {
      start: 'top 90%',
      once: true,
      onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 1.3, ease: 'expo.out', stagger: 0.1, overwrite: true }),
    });
  });

  /* ------------------------------------------------------------ manifesto: words light up as you read */
  run('manifesto', () => {
    const text = $('[data-words]');
    if (!text || !hasSplit) return;
    const split = SplitText.create(text, { type: 'words', wordsClass: 'w' });
    gsap.fromTo(split.words, { opacity: 0.14 }, {
      opacity: 1,
      ease: 'none',
      stagger: 0.1,
      scrollTrigger: { trigger: text, start: 'top 80%', end: 'bottom 50%', scrub: true },
    });
  });

  /* ------------------------------------------------------------ counters */
  run('counters', () => {
    $$('[data-counter]').forEach((el) => {
      const target = parseFloat(el.dataset.counter);
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const format = (v) => (el.dataset.prefix || '') + v.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + (el.dataset.suffix || '');
      const state = { v: 0 };
      el.textContent = format(0);
      ScrollTrigger.create({
        trigger: el,
        start: 'top 92%',
        once: true,
        onEnter: () => gsap.to(state, { v: target, duration: 2.4, ease: 'power3.out', onUpdate: () => { el.textContent = format(state.v); } }),
      });
    });
  });

  /* ------------------------------------------------------------ collection + focus (layout dependent) */
  run('responsive', () => {
    const mm = gsap.matchMedia();
    mm.add({
      any: 'all', // matchMedia only runs the callback while at least one condition matches
      wide: '(min-width: 1024px) and (min-height: 680px)',
      fine: '(hover: hover) and (pointer: fine)',
    }, (ctx) => {
      const { wide, fine } = ctx.conditions;
      const cleanups = [];
      run('collection', () => cleanups.push(setupCollection(wide && fine)));
      run('focus', () => setupFocus(wide));
      ScrollTrigger.sort();
      return () => cleanups.forEach((fn) => fn && fn());
    });
  });

  /* ------------------------------------------------------------ parallax images */
  run('parallax', () => {
    $$('[data-parallax]').forEach((el) => {
      gsap.fromTo(el, { yPercent: -6 }, {
        yPercent: 6,
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    });
  });

  /* ------------------------------------------------------------ services: image follows the cursor */
  run('services', () => {
    const list = $('[data-services]');
    const preview = $('[data-preview]');
    if (!list || !preview || !finePointer) return;
    const imgs = $$('img', preview);
    const xTo = gsap.quickTo(preview, 'x', { duration: 0.75, ease: 'power3' });
    const yTo = gsap.quickTo(preview, 'y', { duration: 0.75, ease: 'power3' });
    let active = -1;
    let on = false;
    preview.classList.add('is-ready');

    const place = (e, instant) => {
      const w = preview.offsetWidth;
      const h = preview.offsetHeight;
      let x = e.clientX + 36;
      if (x + w > window.innerWidth - 20) x = e.clientX - w - 36;
      const y = Math.min(window.innerHeight - h - 20, Math.max(20, e.clientY - h * 0.55));
      if (instant) gsap.set(preview, { x, y });
      xTo(x);
      yTo(y);
    };

    list.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const row = e.target.closest('.service');
      if (!row) return;
      const index = Number(row.dataset.index);
      if (!on) {
        place(e, true);
        on = true;
        preview.classList.add('is-on');
      } else {
        place(e, false);
      }
      if (index !== active) {
        imgs.forEach((img, i) => img.classList.toggle('is-active', i === index));
        active = index;
      }
    });
    list.addEventListener('pointerleave', () => {
      on = false;
      preview.classList.remove('is-on');
    });
  });

  /* ------------------------------------------------------------ custom cursor + magnetic buttons */
  run('cursor', () => {
    if (!finePointer) return;
    const cursor = $('[data-cursor-el]');
    const label = $('[data-cursor-label]');
    doc.classList.add('has-cursor');
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.4, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.4, ease: 'power3' });
    let shown = false;
    cursor.classList.add('is-hidden');

    window.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      if (!shown) {
        gsap.set(cursor, { x: e.clientX, y: e.clientY });
        cursor.classList.remove('is-hidden');
        shown = true;
      }
      xTo(e.clientX);
      yTo(e.clientY);
    }, { passive: true });
    doc.addEventListener('mouseleave', () => {
      cursor.classList.add('is-hidden');
      shown = false;
    });
    document.addEventListener('pointerover', (e) => {
      const t = e.target;
      const labelled = t.closest('[data-cursor]');
      const field = t.closest('input:not([type="radio"]):not([type="checkbox"]), textarea, select');
      const interactive = t.closest('a, button, label, [role="button"]');
      cursor.classList.toggle('is-label', !!labelled);
      cursor.classList.toggle('is-link', !labelled && !!interactive && !field);
      cursor.classList.toggle('is-text', !!field);
      label.textContent = labelled ? labelled.dataset.cursor : '';
    });

    $$('[data-magnetic]').forEach((el) => {
      const mx = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3' });
      const my = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3' });
      el.addEventListener('pointermove', (e) => {
        if (e.pointerType !== 'mouse') return;
        const r = el.getBoundingClientRect();
        mx((e.clientX - (r.left + r.width / 2)) * 0.25);
        my((e.clientY - (r.top + r.height / 2)) * 0.35);
      });
      el.addEventListener('pointerleave', () => { mx(0); my(0); });
    });
  });

  /* ------------------------------------------------------------ footer signature */
  run('footer', () => {
    const word = $('[data-footer-word]');
    if (!word) return;
    gsap.fromTo($$('span', word), { yPercent: 105 }, {
      yPercent: 0,
      duration: 1.6,
      ease: 'expo.out',
      stagger: 0.07,
      scrollTrigger: { trigger: word, start: 'top 96%', once: true },
    });
  });

  /* ------------------------------------------------------------ active section in the nav */
  run('nav-spy', () => {
    $$('.site-nav a').forEach((a) => {
      const section = document.querySelector(a.getAttribute('href'));
      if (!section) return;
      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        end: 'bottom 50%',
        onToggle: (self) => a.classList.toggle('is-active', self.isActive),
      });
    });
  });

  run('quotes', setupQuotes);
  run('forms', setupForms);

  run('refresh', () => {
    if (document.fonts) document.fonts.ready.then(() => ScrollTrigger.refresh());
    ScrollTrigger.sort();
  });

  /* ==========================================================================
     Function declarations (hoisted)
     ========================================================================== */

  /* Collection: pinned horizontal gallery on desktop, native swipe elsewhere. */
  function setupCollection(horizontal) {
    const section = $('.collection');
    const pin = $('[data-collection]');
    const viewport = $('[data-viewport]');
    const track = $('[data-track]');
    const cards = $$('.estate', track);
    const current = $('[data-current]');
    const bar = $('[data-bar]');
    const prevBtn = $('[data-col-prev]');
    const nextBtn = $('[data-col-next]');

    const setProgress = (p) => {
      const index = Math.min(cards.length - 1, Math.round(p * (cards.length - 1)));
      current.textContent = pad(index + 1);
      bar.style.transform = `scaleX(${0.25 + 0.75 * p})`;
      if (prevBtn) prevBtn.disabled = p <= 0.01;
      if (nextBtn) nextBtn.disabled = p >= 0.99;
    };

    // Load card images just before the section arrives so nothing pops in mid-scroll.
    if (hasGSAP) {
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom+=60%',
        once: true,
        onEnter: () => $$('img[loading="lazy"]', track).forEach((img) => { img.loading = 'eager'; }),
      });
    }

    if (horizontal) {
      section.classList.add('is-horizontal');
      const distance = () => Math.max(0, track.offsetWidth - viewport.clientWidth);
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.9,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 2,
          onUpdate: (self) => setProgress(self.progress),
        },
      });

      // A gentle drift inside each frame as it travels across the screen.
      cards.forEach((card) => {
        const pic = $('picture', card);
        if (!pic) return;
        gsap.fromTo(pic, { xPercent: -2 }, {
          xPercent: 2,
          ease: 'none',
          scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true },
        });
      });

      // Keyboard users: bring the focused card on screen by scrolling to its spot.
      const onFocus = (e) => {
        const card = e.target.closest('.estate');
        const st = tween.scrollTrigger;
        if (!card || !st) return;
        const x = card.offsetLeft + card.offsetWidth / 2 - viewport.clientWidth / 2;
        const y = st.start + Math.min(distance(), Math.max(0, x));
        if (lenis) lenis.scrollTo(y, { immediate: true });
        else window.scrollTo(0, y);
      };
      track.addEventListener('focusin', onFocus);
      setProgress(0);

      return () => {
        track.removeEventListener('focusin', onFocus);
        section.classList.remove('is-horizontal');
        gsap.set(track, { clearProps: 'transform' });
      };
    }

    // Swipe mode
    const onSwipe = () => {
      const max = viewport.scrollWidth - viewport.clientWidth;
      setProgress(max > 0 ? viewport.scrollLeft / max : 0);
    };
    const step = (dir) => {
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      viewport.scrollBy({ left: dir * (cards[0].offsetWidth + gap), behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    const onPrev = () => step(-1);
    const onNext = () => step(1);
    viewport.addEventListener('scroll', onSwipe, { passive: true });
    if (prevBtn) prevBtn.addEventListener('click', onPrev);
    if (nextBtn) nextBtn.addEventListener('click', onNext);
    onSwipe();
    return () => {
      viewport.removeEventListener('scroll', onSwipe);
      if (prevBtn) prevBtn.removeEventListener('click', onPrev);
      if (nextBtn) nextBtn.removeEventListener('click', onNext);
    };
  }

  /* In focus: the frame opens from a window to full bleed. */
  function setupFocus(pinned) {
    const stage = $('[data-focus]');
    const frame = $('[data-focus-frame]');
    const img = $('[data-focus-img]');
    const copy = $('[data-focus-copy]');
    const items = Array.from(copy.children).filter((el) => !el.matches('.btn'));
    const btn = $('.btn', copy);

    if (pinned) {
      gsap.timeline({
        scrollTrigger: { trigger: stage, start: 'top top', end: '+=110%', pin: true, scrub: 0.9, anticipatePin: 1, refreshPriority: 1 },
      })
        .fromTo(frame, { clipPath: 'inset(15% 21% 15% 21% round 6px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'power2.inOut', duration: 1 }, 0)
        .fromTo(img, { scale: 1.32 }, { scale: 1, ease: 'power2.inOut', duration: 1 }, 0)
        .fromTo(items, { y: 46, opacity: 0 }, { y: 0, opacity: 1, ease: 'power3.out', duration: 0.42, stagger: 0.07 }, 0.62)
        .fromTo(btn, { opacity: 0 }, { opacity: 1, ease: 'power2.out', duration: 0.4 }, 0.9);
      return;
    }

    gsap.fromTo(frame, { clipPath: 'inset(7% 5% 7% 5% round 6px)' }, {
      clipPath: 'inset(0% 0% 0% 0% round 0px)',
      ease: 'none',
      scrollTrigger: { trigger: stage, start: 'top 90%', end: 'top 10%', scrub: true },
    });
    gsap.fromTo(img, { scale: 1.22 }, {
      scale: 1,
      ease: 'none',
      scrollTrigger: { trigger: stage, start: 'top bottom', end: 'bottom top', scrub: true },
    });
    gsap.fromTo([...items, btn], { y: 34, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: stage, start: 'top 45%', once: true },
    });
  }

  /* Client voices: accessible carousel, autoplay only while visible and untouched. */
  function setupQuotes() {
    const root = $('[data-quotes]');
    if (!root) return;
    const slides = $$('.quote', root);
    const live = $('.quotes__slides', root);
    const counter = $('[data-q-current]', root);
    const media = $$('[data-voice-media] picture');
    const place = $('[data-voice-place]');
    let index = 0;
    let timer = null;
    let hovered = false;
    let inView = false;
    let stopped = !motion;

    const show = (next, dir) => {
      if (next === index) return;
      const from = slides[index];
      const to = slides[next];
      index = next;
      counter.textContent = pad(index + 1);
      media.forEach((pic, i) => pic.classList.toggle('is-active', i === index));
      if (place) place.textContent = to.dataset.place || '';
      if (motion) {
        gsap.killTweensOf([from, to]);
        gsap.to(from, {
          opacity: 0,
          x: -36 * dir,
          duration: 0.55,
          ease: 'power3.in',
          onComplete: () => {
            from.hidden = true;
            from.classList.remove('is-active');
            gsap.set(from, { clearProps: 'opacity,transform' });
          },
        });
        to.hidden = false;
        to.classList.add('is-active');
        gsap.fromTo(to, { opacity: 0, x: 56 * dir }, { opacity: 1, x: 0, duration: 1.2, ease: 'expo.out', delay: 0.4 });
      } else {
        from.hidden = true;
        from.classList.remove('is-active');
        to.hidden = false;
        to.classList.add('is-active');
      }
    };
    const next = () => show((index + 1) % slides.length, 1);
    const prev = () => show((index - 1 + slides.length) % slides.length, -1);

    const schedule = () => {
      clearTimeout(timer);
      if (!stopped && !hovered && inView) timer = setTimeout(() => { next(); schedule(); }, 7000);
    };
    const stop = () => {
      stopped = true;
      clearTimeout(timer);
      live.setAttribute('aria-live', 'polite');
    };

    live.setAttribute('aria-live', stopped ? 'polite' : 'off');
    $('[data-next]', root).addEventListener('click', () => { stop(); next(); });
    $('[data-prev]', root).addEventListener('click', () => { stop(); prev(); });
    root.addEventListener('mouseenter', () => { hovered = true; schedule(); });
    root.addEventListener('mouseleave', () => { hovered = false; schedule(); });
    root.addEventListener('focusin', stop);

    let startX = null;
    root.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') startX = e.clientX; });
    root.addEventListener('pointercancel', () => { startX = null; });
    root.addEventListener('pointerup', (e) => {
      if (startX === null) return;
      const dx = e.clientX - startX;
      startX = null;
      if (Math.abs(dx) > 48) {
        stop();
        if (dx < 0) next();
        else prev();
      }
    });

    new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      schedule();
    }, { threshold: 0.35 }).observe(root);
  }

  /* Enquiry form + newsletter: friendly validation, simulated send (no backend in the demo). */
  function setupForms() {
    const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    const form = $('[data-form]');
    if (form) {
      const name = $('#f-name', form);
      const email = $('#f-email', form);
      const consent = $('input[name="consent"]', form);
      const message = $('#f-msg', form);
      const status = $('[data-status]', form);
      const submit = $('[type="submit"]', form);
      let attempted = false;

      const rules = [
        [name, $('#f-name-err'), () => (name.value.trim() ? '' : 'Please tell us your name.')],
        [email, $('#f-email-err'), () => {
          const v = email.value.trim();
          if (!v) return 'Please enter your email address.';
          return emailOk(v) ? '' : 'That email address looks incomplete.';
        }],
        [consent, $('#f-consent-err'), () => (consent.checked ? '' : 'Please confirm we may contact you.')],
      ];

      const check = (input, errEl, test) => {
        const msg = test();
        const field = input.closest('.field');
        if (field) field.classList.toggle('is-invalid', !!msg);
        if (msg) input.setAttribute('aria-invalid', 'true');
        else input.removeAttribute('aria-invalid');
        errEl.textContent = msg;
        return !msg;
      };

      rules.forEach(([input, errEl, test]) => {
        input.addEventListener(input.type === 'checkbox' ? 'change' : 'input', () => { if (attempted) check(input, errEl, test); });
      });
      if (message) message.addEventListener('input', () => { delete message.dataset.autofill; });

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        attempted = true;
        const results = rules.map(([input, errEl, test]) => check(input, errEl, test));
        const firstBad = rules.find((_, i) => !results[i]);
        if (firstBad) {
          firstBad[0].focus();
          return;
        }
        const label = $('span', submit);
        submit.disabled = true;
        label.textContent = 'Sending…';
        setTimeout(() => {
          const first = name.value.trim().split(/\s+/)[0];
          form.classList.add('is-sent');
          label.textContent = 'Request received';
          status.textContent = `Thank you, ${first}. A senior advisor will reply within one business day.`;
        }, 900);
      });
    }

    const nl = $('[data-newsletter]');
    if (nl) {
      const input = $('#nl-email', nl);
      const status = $('[data-nl-status]', nl);
      nl.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!emailOk(input.value.trim())) {
          input.setAttribute('aria-invalid', 'true');
          status.textContent = 'Please enter a valid email address.';
          input.focus();
          return;
        }
        input.removeAttribute('aria-invalid');
        status.textContent = 'Thank you. You are on the Private List.';
        nl.reset();
      });
    }
  }
})();
