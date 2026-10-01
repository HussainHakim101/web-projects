/**
 * Zodiac — A Celestial Journey
 * Main script:
 *   1. Cosmic background (canvas starfield, constellation lines, parallax)
 *   2. Hero zodiac wheel
 *   3. Navigation + scroll progress
 *   4. Card generation from ZODIAC_DATA
 *   5. Scroll-driven deck (cards interchange as the page scrolls)
 *   6. Hover 3D tilt
 *   7. FLIP expand / collapse (card grows from, and returns to, its exact position)
 */

(function () {
  'use strict';

  /* ===================================================================
     0. Helpers & environment
     =================================================================== */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
  const lerp = (a, b, t) => a + (b - a) * t;
  const easeInOutCubic = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
  let reducedMotion = reducedMotionQuery.matches;
  reducedMotionQuery.addEventListener?.('change', e => { reducedMotion = e.matches; });

  const isSmallScreen = () => window.innerWidth < 768;

  function hexToRgb(hex) {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return m ? `${parseInt(m[1], 16)}, ${parseInt(m[2], 16)}, ${parseInt(m[3], 16)}` : '255, 255, 255';
  }

  /* ===================================================================
     1. Cosmic background
     =================================================================== */
  const canvas = $('#cosmicCanvas');
  const ctx = canvas.getContext('2d');
  let cW = 0, cH = 0, dpr = 1;
  let stars = [], links = [];
  const pointer = { x: 0, y: 0, sx: 0, sy: 0 }; // raw + smoothed (-0.5..0.5)

  function setupCosmic() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    cW = window.innerWidth;
    cH = window.innerHeight;
    canvas.width = cW * dpr;
    canvas.height = cH * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.round(clamp((cW * cH) / 6000, 90, 280));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * cW,
      y: Math.random() * cH,
      r: Math.random() * 1.3 + 0.3,
      a: Math.random() * 0.6 + 0.25,
      speed: Math.random() * 1.5 + 0.4,       // twinkle speed (rad/s)
      phase: Math.random() * Math.PI * 2,
      depth: Math.random() * 0.8 + 0.2        // parallax depth
    }));

    /* A few faint constellation lines between nearby stars */
    links = [];
    const hubs = stars.filter(s => s.r > 1.1).slice(0, 10);
    hubs.forEach(h => {
      stars
        .filter(s => s !== h)
        .map(s => ({ s, d: Math.hypot(s.x - h.x, s.y - h.y) }))
        .filter(o => o.d < 140)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2)
        .forEach(o => links.push({ a: h, b: o.s, phase: Math.random() * Math.PI * 2 }));
    });
  }

  function drawCosmic(time) {
    const t = time / 1000;
    pointer.sx = lerp(pointer.sx, pointer.x, 0.05);
    pointer.sy = lerp(pointer.sy, pointer.y, 0.05);
    const px = pointer.sx * 30, py = pointer.sy * 30;

    ctx.clearRect(0, 0, cW, cH);

    /* Constellation lines — slowly breathing */
    ctx.lineWidth = 0.6;
    links.forEach(l => {
      const alpha = reducedMotion ? 0.08 : (Math.sin(t * 0.4 + l.phase) * 0.5 + 0.5) * 0.14;
      ctx.strokeStyle = `rgba(196, 181, 253, ${alpha})`;
      ctx.beginPath();
      ctx.moveTo(l.a.x + px * l.a.depth, l.a.y + py * l.a.depth);
      ctx.lineTo(l.b.x + px * l.b.depth, l.b.y + py * l.b.depth);
      ctx.stroke();
    });

    /* Stars */
    stars.forEach(s => {
      const tw = reducedMotion ? 1 : Math.sin(t * s.speed + s.phase) * 0.35 + 0.65;
      ctx.fillStyle = `rgba(255, 255, 255, ${s.a * tw})`;
      ctx.beginPath();
      ctx.arc(s.x + px * s.depth, s.y + py * s.depth, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  let lastCosmic = 0;
  function cosmicLoop(time) {
    requestAnimationFrame(cosmicLoop);
    if (reducedMotion && lastCosmic) return;       // static after first frame
    if (time - lastCosmic < 32) return;              // ~30fps is plenty for a backdrop
    lastCosmic = time;
    drawCosmic(time);
  }

  if (finePointerQuery.matches) {
    window.addEventListener('mousemove', e => {
      pointer.x = e.clientX / window.innerWidth - 0.5;
      pointer.y = e.clientY / window.innerHeight - 0.5;
    }, { passive: true });
  }

  /* ===================================================================
     2. Hero zodiac wheel (SVG generated once)
     =================================================================== */
  function buildZodiacWheel() {
    const wheel = $('#zodiacWheel');
    const R = 300, cx = 300, cy = 300;
    let marks = '';
    for (let i = 0; i < 72; i++) {
      const a = (i / 72) * Math.PI * 2;
      const r1 = i % 6 === 0 ? 262 : 270;
      marks += `<line x1="${cx + Math.cos(a) * r1}" y1="${cy + Math.sin(a) * r1}" x2="${cx + Math.cos(a) * 278}" y2="${cy + Math.sin(a) * 278}" />`;
    }
    let spokes = '', glyphs = '';
    ZODIAC_DATA.forEach((sign, i) => {
      const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
      const ga = a + Math.PI / 12;
      spokes += `<line x1="${cx + Math.cos(a) * 170}" y1="${cy + Math.sin(a) * 170}" x2="${cx + Math.cos(a) * 250}" y2="${cy + Math.sin(a) * 250}" />`;
      glyphs += `<text x="${cx + Math.cos(ga) * 212}" y="${cy + Math.sin(ga) * 212}" fill="${sign.accentColor}">${sign.symbol}\uFE0E</text>`;
    });
    wheel.innerHTML = `
      <svg viewBox="0 0 600 600" focusable="false">
        <g class="wheel__rings">
          <circle cx="${cx}" cy="${cy}" r="${R - 20}" />
          <circle cx="${cx}" cy="${cy}" r="250" />
          <circle cx="${cx}" cy="${cy}" r="170" />
          <circle cx="${cx}" cy="${cy}" r="110" stroke-dasharray="2 6" />
        </g>
        <g class="wheel__marks">${marks}</g>
        <g class="wheel__spokes">${spokes}</g>
        <g class="wheel__glyphs">${glyphs}</g>
      </svg>`;
  }

  /* ===================================================================
     3. Navigation & progress
     =================================================================== */
  const nav = $('#mainNav');
  const hamburger = $('#navHamburger');
  const mobileMenu = $('#mobileMenu');
  const progress = $('#scrollProgress');
  const progressBar = $('.scroll-progress__bar');

  function updateChrome() {
    const y = window.scrollY;
    nav.classList.toggle('nav--scrolled', y > 40);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? y / max : 0;
    progressBar.style.transform = `scaleX(${pct})`;
    progress.setAttribute('aria-valuenow', Math.round(pct * 100));

    /* Active nav link */
    const mid = y + window.innerHeight * 0.4;
    let active = null;
    $$('[data-section]').forEach(link => {
      const sec = document.getElementById(link.dataset.section);
      if (sec && sec.offsetTop <= mid && sec.offsetTop + sec.offsetHeight > mid) active = link;
    });
    $$('.nav__link').forEach(l => l.classList.toggle('nav__link--active', l === active));
  }

  function setMobileMenu(open) {
    hamburger.classList.toggle('nav__hamburger--open', open);
    mobileMenu.classList.toggle('mobile-menu--open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
  }

  hamburger.addEventListener('click', () => setMobileMenu(!mobileMenu.classList.contains('mobile-menu--open')));

  /* In-page links: smooth scroll (deck link lands exactly on the first card) */
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href').slice(1);
    const target = id && document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    setMobileMenu(false);
    const top = id === 'zodiac-cards' ? deckTop : target.getBoundingClientRect().top + window.scrollY - 20;
    window.scrollTo({ top, behavior: reducedMotion ? 'auto' : 'smooth' });
  });

  /* ===================================================================
     4. Card generation
     =================================================================== */
  const deck = $('#zodiacDeck');
  const stage = $('#deckStage');
  const counterNum = $('#deckCounterNum');
  const counterName = $('#deckCounterName');
  const dotsWrap = $('#deckDots');
  let cards = [];

  /** Card face markup — shared by deck cards and the expanding "morph" face */
  function cardFaceHTML(sign, i) {
    return `
      <img class="zodiac-card__art" src="images/zodiac/${sign.id}.svg" alt="" loading="lazy" decoding="async" width="400" height="400" />
      <span class="zodiac-card__index">${String(i + 1).padStart(2, '0')} / 12</span>
      <div class="zodiac-card__symbol" aria-hidden="true">${sign.symbol}\uFE0E</div>
      <h3 class="zodiac-card__name">${sign.name}</h3>
      <p class="zodiac-card__dates">${sign.dateRange}</p>
      <span class="zodiac-card__element"><span aria-hidden="true">${sign.elementIcon}</span> ${sign.element}</span>
      <p class="zodiac-card__tagline">${sign.tagline}</p>
      <span class="zodiac-card__hint" aria-hidden="true">Tap to reveal</span>`;
  }

  /** Per-sign CSS variables that give each card its own identity */
  function applySignTheme(el, sign) {
    const rgb = hexToRgb(sign.accentColor);
    const el2 = ELEMENT_COLORS[sign.element];
    el.style.setProperty('--accent', sign.accentColor);
    el.style.setProperty('--accent-rgb', rgb);
    el.style.setProperty('--card-glow', sign.glowColor);
    el.style.setProperty('--element-bg', el2.bg);
    el.style.setProperty('--element-border', el2.border);
    el.style.setProperty('--element-text', el2.text);
  }

  function buildCards() {
    const frag = document.createDocumentFragment();
    ZODIAC_DATA.forEach((sign, i) => {
      const card = document.createElement('div');
      card.className = 'zodiac-card';
      card.dataset.index = i;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `${sign.name}, ${sign.dateRange}, ${sign.element} sign. Open details`);
      applySignTheme(card, sign);
      card.innerHTML = `<div class="zodiac-card__inner">${cardFaceHTML(sign, i)}</div>`;
      card.state = { ty: 0, s: 1, r: 0, o: 1 };
      frag.appendChild(card);

      /* Progress dot */
      const dot = document.createElement('button');
      dot.className = 'deck-dot';
      dot.setAttribute('aria-label', `Go to ${sign.name}`);
      dot.style.setProperty('--accent', sign.accentColor);
      dot.addEventListener('click', () => scrollToCard(i));
      dotsWrap.appendChild(dot);
    });
    stage.insertBefore(frag, stage.firstChild);
    cards = $$('.zodiac-card', stage);

    cards.forEach((card, i) => {
      card.addEventListener('click', () => onCardActivate(i));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCard(i); }
        else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); focusCard(i + 1); }
        else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); focusCard(i - 1); }
      });
      /* Keyboard users tabbing onto a card bring it into focus in the deck */
      card.addEventListener('focus', () => {
        if (!card.matches(':focus-visible')) return;
        if (Math.round(deckProgress) !== i) scrollToCard(i);
      });
    });
  }

  /* ===================================================================
     5. Scroll-driven deck
     -------------------------------------------------------------------
     The deck is a tall section containing one sticky, full-viewport stage.
     Scroll distance inside the deck is mapped to a continuous "progress"
     value (0 → 11). Each card's distance from that value (d = i - progress)
     determines its transform:
       d > 0   upcoming  → stacked behind, lower, smaller, alternately tilted
       d = 0   focused   → centered, full size, brightest
       d < 0   leaving   → lifts up, rotates away and fades out
     Everything is transform/opacity only, updated once per frame.
     =================================================================== */
  let deckTop = 0, spacing = 600, deckProgress = 0, focusedIndex = -1;
  let deckTicking = false;
  const snapWrap = $('#deckSnaps');

  function measureDeck() {
    spacing = Math.round(window.innerHeight * (isSmallScreen() ? 0.7 : 0.8));
    deck.style.height = `${spacing * (ZODIAC_DATA.length - 1) + window.innerHeight}px`;
    deckTop = deck.getBoundingClientRect().top + window.scrollY;

    /* Invisible snap anchors let the deck gently settle on each card */
    snapWrap.innerHTML = ZODIAC_DATA.map((_, i) => `<span class="deck-snap" style="top:${i * spacing}px"></span>`).join('');
  }

  function scrollToCard(i) {
    i = clamp(i, 0, cards.length - 1);
    window.scrollTo({ top: deckTop + i * spacing, behavior: reducedMotion ? 'auto' : 'smooth' });
  }

  function focusCard(i) {
    if (i < 0 || i >= cards.length) return;
    cards[i].focus({ preventScroll: true });
    scrollToCard(i);
  }

  /** Clicking a background card brings it forward; clicking the focused card opens it */
  function onCardActivate(i) {
    if (Math.abs(i - deckProgress) < 0.35) openCard(i);
    else scrollToCard(i);
  }

  function updateDeck() {
    deckTicking = false;
    if (overlayOpen) return; // freeze the deck while a card is expanded

    const small = isSmallScreen();
    const vh = window.innerHeight;
    deckProgress = clamp((window.scrollY - deckTop) / spacing, 0, cards.length - 1);

    cards.forEach((card, i) => {
      const d = i - deckProgress;
      let ty, s, r, o, dim, z;

      if (d >= 0) {
        /* Upcoming: waiting in the deck behind the focused card */
        const dd = Math.min(d, 3);
        const side = i % 2 ? 1 : -1;
        ty = dd * (small ? 18 : 26);
        s = 1 - dd * 0.06;
        r = reducedMotion ? 0 : side * dd * 2.2;
        o = d > 3 ? 0 : 1 - Math.max(0, d - 2);
        dim = Math.min(dd * 0.28, 0.7);
        z = 100 - i;
      } else {
        /* Leaving: flies up and away as the next card takes focus */
        const t = Math.min(-d, 1);
        const e = t * t * (3 - 2 * t);
        ty = -e * vh * (small ? 0.55 : 0.62);
        s = 1 - e * 0.08;
        r = reducedMotion ? 0 : (i % 2 ? 1 : -1) * -e * 7;
        o = 1 - e;
        dim = 0;
        z = 200 + i;
      }

      card.state = { ty, s, r, o };
      card.style.transform = `translate3d(0, ${ty.toFixed(2)}px, 0) rotate(${r.toFixed(3)}deg) scale(${s.toFixed(4)})`;
      card.style.opacity = o.toFixed(3);
      card.style.zIndex = z;
      card.style.setProperty('--dim', dim.toFixed(3));
      card.style.visibility = o < 0.01 ? 'hidden' : 'visible';
      card.classList.toggle('is-focused', Math.abs(d) < 0.5);
    });

    const idx = Math.round(deckProgress);
    if (idx !== focusedIndex) {
      focusedIndex = idx;
      const sign = ZODIAC_DATA[idx];
      counterNum.textContent = String(idx + 1).padStart(2, '0');
      counterName.textContent = sign.name;
      stage.style.setProperty('--stage-accent-rgb', hexToRgb(sign.accentColor));
      $$('.deck-dot', dotsWrap).forEach((dot, j) => {
        dot.classList.toggle('is-active', j === idx);
        dot.setAttribute('aria-current', j === idx ? 'true' : 'false');
      });
    }
  }

  function requestDeckUpdate() {
    if (!deckTicking) {
      deckTicking = true;
      requestAnimationFrame(updateDeck);
    }
  }

  /* ===================================================================
     6. Hover 3D tilt (fine pointers only)
     Tilt lives on .zodiac-card__inner via CSS variables, so it never
     conflicts with the scroll transform on the outer .zodiac-card.
     =================================================================== */
  function initTilt() {
    cards.forEach(card => {
      const inner = card.firstElementChild;
      card.addEventListener('pointermove', e => {
        if (e.pointerType !== 'mouse' || reducedMotion || !card.classList.contains('is-focused')) return;
        const rect = inner.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        inner.style.setProperty('--ry', `${(x * 12).toFixed(2)}deg`);
        inner.style.setProperty('--rx', `${(-y * 12).toFixed(2)}deg`);
        inner.style.setProperty('--mx', `${((x + 0.5) * 100).toFixed(1)}%`);
        inner.style.setProperty('--my', `${((y + 0.5) * 100).toFixed(1)}%`);
      });
      card.addEventListener('pointerleave', () => resetTilt(card));
    });
  }

  function resetTilt(card) {
    const inner = card.firstElementChild;
    inner.style.setProperty('--rx', '0deg');
    inner.style.setProperty('--ry', '0deg');
  }

  /* ===================================================================
     7. Expand / collapse (FLIP, driven by requestAnimationFrame)
     -------------------------------------------------------------------
     First:  read the card's exact on-screen geometry (center, size,
             scale, rotation) from the deck state.
     Last:   the expanded panel's natural, centered layout.
     Invert: transform the panel so it sits exactly on top of the card.
     Play:   interpolate to identity. A copy of the card face inside the
             panel is counter-scaled every frame so text never stretches,
             and the border radius is compensated so corners stay round.
     Closing runs the same animation in reverse, re-measuring the card
     so it lands precisely where it is.
     =================================================================== */
  const overlay = $('#cardOverlay');
  const backdrop = $('#overlayBackdrop');
  const panel = $('#expandedCard');
  const morphFace = $('#expandedFace');
  const content = $('#expandedContent');
  const closeBtn = $('#expandedClose');
  let overlayOpen = false;
  let animating = false;
  let activeIndex = -1;
  let lastFocused = null;

  const CARD_RADIUS = 24;
  const PANEL_RADIUS = 28;

  /** Geometry of the card exactly as it currently appears */
  function getCardGeometry(card) {
    const stageRect = stage.getBoundingClientRect();
    const w = card.offsetWidth, h = card.offsetHeight;
    const { ty, s, r } = card.state;
    return {
      cx: stageRect.left + card.offsetLeft + w / 2,
      cy: stageRect.top + card.offsetTop + h / 2 + ty,
      w: w * s,
      h: h * s,
      r,
      baseW: w,
      baseH: h
    };
  }

  function applyFrame(from, p) {
    const W = panel.offsetWidth, H = panel.offsetHeight;
    const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    const w = lerp(from.w, W, p);
    const h = lerp(from.h, H, p);
    const x = lerp(from.cx - cx, 0, p);
    const y = lerp(from.cy - cy, 0, p);
    const r = lerp(from.r, 0, p);
    const sx = w / W, sy = h / H;
    const radius = lerp(CARD_RADIUS * (from.w / from.baseW), PANEL_RADIUS, p);

    panel.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${r}deg) scale(${sx}, ${sy})`;
    panel.style.borderRadius = `${radius / sx}px / ${radius / sy}px`;

    /* Face keeps the card's natural size & uniform scale while the panel morphs */
    const faceScale = from.w / from.baseW;
    morphFace.style.transform = `translate(-50%, -50%) scale(${faceScale / sx}, ${faceScale / sy})`;
    morphFace.style.opacity = String(clamp(1 - p * 1.6, 0, 1));

    content.style.opacity = String(clamp((p - 0.55) / 0.45, 0, 1));
    backdrop.style.opacity = String(p);
  }

  function runAnimation(from, dir, duration, done) {
    const start = performance.now();
    const step = now => {
      const t = duration ? clamp((now - start) / duration, 0, 1) : 1;
      const eased = easeInOutCubic(t);
      applyFrame(from, dir > 0 ? eased : 1 - eased);
      if (t < 1) requestAnimationFrame(step);
      else done();
    };
    requestAnimationFrame(step);
  }

  function lockScroll() {
    const sbw = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = sbw ? `${sbw}px` : '';
    nav.style.paddingRight = sbw ? `calc(clamp(1.5rem, 4vw, 3rem) + ${sbw}px)` : '';
    document.body.classList.add('no-scroll');
  }

  function unlockScroll() {
    document.body.classList.remove('no-scroll');
    document.body.style.paddingRight = '';
    nav.style.paddingRight = '';
  }

  function openCard(i) {
    if (overlayOpen || animating) return;
    const card = cards[i];
    const sign = ZODIAC_DATA[i];
    activeIndex = i;
    lastFocused = document.activeElement;
    resetTilt(card);

    /* Measure first, then lock scroll (scrollbar width is compensated, so nothing shifts) */
    const from = getCardGeometry(card);
    lockScroll();

    applySignTheme(panel, sign);
    morphFace.innerHTML = cardFaceHTML(sign, i);
    morphFace.style.width = `${from.baseW}px`;
    morphFace.style.height = `${from.baseH}px`;
    content.innerHTML = buildExpandedContent(sign);
    content.scrollTop = 0;
    overlay.setAttribute('aria-labelledby', 'expandedTitle');

    overlay.hidden = false;
    overlayOpen = true;
    animating = true;
    card.classList.add('is-hidden'); // the panel *is* the card now
    applyFrame(from, 0);

    runAnimation(from, 1, reducedMotion ? 0 : 650, () => {
      animating = false;
      overlay.classList.add('is-open');
      closeBtn.focus({ preventScroll: true });
    });
  }

  function closeCard() {
    if (!overlayOpen || animating) return;
    const card = cards[activeIndex];
    animating = true;
    overlay.classList.remove('is-open');

    /* Re-measure: returns to the card's exact current position */
    const from = getCardGeometry(card);
    content.style.opacity = '0';

    runAnimation(from, -1, reducedMotion ? 0 : 560, () => {
      card.classList.remove('is-hidden');
      overlay.hidden = true;
      overlayOpen = false;
      animating = false;
      unlockScroll();
      content.innerHTML = '';
      morphFace.innerHTML = '';
      (lastFocused && document.contains(lastFocused) ? lastFocused : card).focus({ preventScroll: true });
      requestDeckUpdate();
    });
  }

  function listTags(items) {
    return items.map(v => `<li class="expanded__tag">${v}</li>`).join('');
  }

  function buildExpandedContent(sign) {
    return `
      <header class="expanded__header">
        <div class="expanded__art" aria-hidden="true">
          <img src="images/zodiac/${sign.id}.svg" alt="" width="400" height="400" decoding="async" />
        </div>
        <div class="expanded__symbol" aria-hidden="true">${sign.symbol}\uFE0E</div>
        <h2 class="expanded__name" id="expandedTitle">${sign.name}</h2>
        <p class="expanded__dates">${sign.dateRange}</p>
        <p class="expanded__tagline">${sign.tagline}</p>
      </header>

      <dl class="expanded__meta">
        <div class="expanded__meta-item"><dt>Element</dt><dd>${sign.elementIcon} ${sign.element}</dd></div>
        <div class="expanded__meta-item"><dt>Ruling Planet</dt><dd>${sign.rulingPlanet}</dd></div>
        <div class="expanded__meta-item"><dt>Modality</dt><dd>${sign.modality}</dd></div>
        <div class="expanded__meta-item"><dt>Symbol</dt><dd>${sign.symbolName}</dd></div>
      </dl>

      <section class="expanded__section">
        <h3 class="expanded__section-title">Personality</h3>
        <p>${sign.personality}</p>
      </section>

      <div class="expanded__columns">
        <section class="expanded__section">
          <h3 class="expanded__section-title">Strengths</h3>
          <ul class="expanded__tags">${listTags(sign.strengths)}</ul>
        </section>
        <section class="expanded__section">
          <h3 class="expanded__section-title">Weaknesses</h3>
          <ul class="expanded__tags expanded__tags--muted">${listTags(sign.weaknesses)}</ul>
        </section>
      </div>

      <hr class="expanded__divider" />

      <section class="expanded__section">
        <h3 class="expanded__section-title">Love &amp; Relationships</h3>
        <p>${sign.love}</p>
      </section>

      <section class="expanded__section">
        <h3 class="expanded__section-title">Career</h3>
        <p>${sign.career}</p>
      </section>

      <div class="expanded__columns expanded__columns--three">
        <section class="expanded__section">
          <h3 class="expanded__section-title">Compatibility</h3>
          <ul class="expanded__tags">${listTags(sign.compatibility)}</ul>
        </section>
        <section class="expanded__section">
          <h3 class="expanded__section-title">Lucky Colors</h3>
          <ul class="expanded__tags">${listTags(sign.luckyColors)}</ul>
        </section>
        <section class="expanded__section">
          <h3 class="expanded__section-title">Lucky Numbers</h3>
          <ul class="expanded__tags">${listTags(sign.luckyNumbers)}</ul>
        </section>
      </div>

      <hr class="expanded__divider" />

      <section class="expanded__section">
        <h3 class="expanded__section-title">Interesting Facts</h3>
        <ul class="expanded__facts">${sign.facts.map(f => `<li>${f}</li>`).join('')}</ul>
      </section>`;
  }

  /* Close: × button, backdrop click, Escape. Tab is trapped inside the dialog. */
  closeBtn.addEventListener('click', closeCard);
  backdrop.addEventListener('click', closeCard);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (overlayOpen) closeCard();
      else if (mobileMenu.classList.contains('mobile-menu--open')) setMobileMenu(false);
    }
    if (e.key === 'Tab' && overlayOpen) {
      const focusables = [closeBtn, content];
      const idx = focusables.indexOf(document.activeElement);
      e.preventDefault();
      focusables[(idx + (e.shiftKey ? -1 : 1) + focusables.length) % focusables.length].focus();
    }
  });

  /* ===================================================================
     8. Init
     =================================================================== */
  function onScroll() {
    updateChrome();
    requestDeckUpdate();
  }

  let resizeTimer;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      setupCosmic();
      if (overlayOpen) return;
      measureDeck();
      updateChrome();
      requestDeckUpdate();
    }, 120);
  }

  function init() {
    setupCosmic();
    requestAnimationFrame(cosmicLoop);
    buildZodiacWheel();
    buildCards();
    measureDeck();
    initTilt();
    updateChrome();
    updateDeck();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    /* Web fonts can change layout above the deck — re-measure once they load */
    document.fonts?.ready.then(() => { measureDeck(); requestDeckUpdate(); });
  }

  init();
})();
