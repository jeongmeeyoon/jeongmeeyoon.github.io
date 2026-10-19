/* =====================================================================
   윤정미 홈페이지 — 화면 동작 (script.js)
   내용 수정은 data.js에서 하세요. 이 파일은 보통 고칠 필요가 없습니다.
   ===================================================================== */
(function () {
  'use strict';

  let lang = 'ko';
  try { lang = localStorage.getItem('jmy-lang') || 'ko'; } catch (e) {}

  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const num = i => String(i + 1).padStart(2, '0');
  const wTitle = w => (w.t && w.t[lang]) || PH[lang];
  const wMedium = w => (w.m && w.m[lang]) || MEDIUM_DEFAULT[lang];
  const toneOf = (s, i) => s.tone[i % s.tone.length];
  const srcOf = (s, w, i) => w.src || `images/${s.id}/${s.id}-${num(i)}.jpg`;

  /* 이미지 칸: 사진이 있으면 사진, 없으면(불러오기 실패) 빈칸 + 번호 */
  function frame(src, tone, label, ar, eager) {
    const cls = tone ? ' ' + tone : '';
    const st = ar ? ` style="--ar:${ar}"` : '';
    const img = src ? `<img src="${esc(src)}" alt="" ${eager ? '' : 'loading="lazy"'} onerror="this.remove()">` : '';
    return `<div class="ph${cls}"${st}><span class="tag">${esc(label || '')}</span>${img}</div>`;
  }

  /* ---------- 메뉴 ---------- */
  function renderNav(route) {
    const t = T[lang];
    const inWorks = route === 'works' || SERIES.some(s => s.id === route);
    const sub = SERIES.map(s =>
      `<li><a href="#${s.id}" class="${route === s.id ? 'on' : ''}">${esc(s.title[lang])}${s.year ? `<span class="yr">${s.year}</span>` : ''}</a></li>`
    ).join('');
    $('#nav').innerHTML =
      `<li><a href="#works" class="${inWorks ? 'on' : ''}">${t.works}</a><ul class="sub">${sub}</ul></li>` +
      ['cv', 'texts', 'books', 'contact'].map(k => `<li><a href="#${k}" class="${route === k ? 'on' : ''}">${t[k]}</a></li>`).join('');
    document.querySelectorAll('[data-k]').forEach(el => { el.textContent = t[el.dataset.k]; });
    document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
    document.documentElement.lang = lang;
  }

  /* ---------- 첫 화면 ---------- */
  const HOME = HOME_PICKS.map(([id, n]) => {
    const s = SERIES.find(x => x.id === id);
    return s && s.works[n - 1] ? { s, w: s.works[n - 1], i: n - 1 } : null;
  }).filter(Boolean);
  let homeIdx = 0, homeTimer = null;

  function viewHome() {
    if (!HOME.length) return '';
    const h = HOME[homeIdx];
    return `<div class="home view">
      <a href="#${h.s.id}" aria-label="${esc(h.s.title[lang])}">${frame(srcOf(h.s, h.w, h.i), toneOf(h.s, h.i), h.s.title.en + ' — ' + num(h.i), null, true)}</a>
      <div class="cap"><span><i>${esc(wTitle(h.w))}</i>, ${esc(h.s.title[lang])}</span>
        <span class="dots">${HOME.map((_, i) => `<button aria-label="${i + 1}" class="${i === homeIdx ? 'on' : ''}" data-home="${i}"></button>`).join('')}</span></div>
      <footer>${T[lang].born}</footer></div>`;
  }

  /* ---------- 작업 목록 / 연작 ---------- */
  function viewWorks() {
    return `<div class="view"><h1 class="h">${T[lang].works}</h1><ul class="index">${SERIES.map(s => `
      <li><a href="#${s.id}">${frame(s.works[0] ? srcOf(s, s.works[0], 0) : '', s.tone[0], '')}
        <span class="t"><span>${esc(s.title[lang])}</span><small>${esc(s.lead[lang])}</small></span>
        <span class="y">${s.year || '—'}</span></a></li>`).join('')}</ul></div>`;
  }

  function viewSeries(s) {
    const other = lang === 'ko' ? 'en' : 'ko';
    return `<div class="view">
      <div class="series-head"><h2>${esc(s.title[lang])}<small>${esc(s.title[other])}${s.year ? ' · ' + s.year : ''}</small></h2>
        <div>${s.text[lang].map(p => `<p>${esc(p)}</p>`).join('')}</div></div>
      <div class="grid">${s.works.map((w, i) => `<button data-open="${i}" aria-label="${esc(wTitle(w))}">
        ${frame(srcOf(s, w, i), toneOf(s, i), num(i), w.ar)}
        <span class="ct">${esc(wTitle(w))}<span>${esc(wMedium(w))}</span></span></button>`).join('')}</div>
      <a class="back" href="#works">${T[lang].back}</a></div>`;
  }

  /* ---------- 약력 / 글 / 출판 / 연락처 ---------- */
  function viewCV() {
    const list = CV[lang], half = Math.ceil(list.length / 2);
    const col = arr => arr.map(([h, rows]) => `<section><h3>${esc(h)}</h3><dl>${rows.map(([y, d]) =>
      `<dt>${esc(y)}</dt><dd class="${d.includes('[') ? 'todo' : ''}">${esc(d)}</dd>`).join('')}</dl></section>`).join('');
    return `<div class="view cv"><h1 class="h">${T[lang].cv}</h1><p style="margin:0 0 36px">${T[lang].born}</p>
      <div class="cols"><div>${col(list.slice(0, half))}</div><div>${col(list.slice(half))}</div></div></div>`;
  }

  function viewTexts() {
    return `<div class="view prose"><h1 class="h">${T[lang].texts}</h1>${T[lang].textList.map(x => `
      <h4>${esc(x.h)}</h4><div class="by">${esc(x.by)}</div>${x.p.map(p => `<p class="${p.startsWith('[') ? 'todo' : ''}">${esc(p)}</p>`).join('')}`).join('')}</div>`;
  }

  function viewBooks() {
    return `<div class="view"><h1 class="h">${T[lang].books}</h1><div class="books">${T[lang].bookList.map(([a, b], i) => `
      <div>${frame(`images/books/book-${num(i)}.jpg`, '', num(i))}<span>${esc(a)}</span><small>${esc(b)}</small></div>`).join('')}</div></div>`;
  }

  function viewContact() {
    const t = T[lang];
    return `<div class="view"><h1 class="h">${t.contact}</h1><div class="contact">${t.contactList.map(([h, v, c]) => `
      <div><h3>${esc(h)}</h3><p><span${c ? ' id="mail"' : ''}>${esc(v)}</span>${c ? `<button class="copy" id="copyBtn">${t.copy}</button>` : ''}</p></div>`).join('')}
      <p class="todo" style="font-size:12px">${t.rights}</p></div></div>`;
  }

  /* ---------- 주소(#)에 따라 화면 바꾸기 ---------- */
  const current = () => (location.hash || '#home').slice(1) || 'home';

  function route() {
    const r = current();
    const s = SERIES.find(x => x.id === r);
    clearInterval(homeTimer);
    let html;
    if (s) html = viewSeries(s);
    else if (r === 'works') html = viewWorks();
    else if (r === 'cv') html = viewCV();
    else if (r === 'texts') html = viewTexts();
    else if (r === 'books') html = viewBooks();
    else if (r === 'contact') html = viewContact();
    else {
      html = viewHome();
      if (HOME.length > 1 && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        homeTimer = setInterval(() => {
          homeIdx = (homeIdx + 1) % HOME.length;
          if (current() === 'home') $('#main').innerHTML = viewHome();
        }, HOME_INTERVAL);
      }
    }
    $('#main').innerHTML = html;
    renderNav(s ? s.id : r);
    $('#drawer').classList.remove('open');
    $('#menuBtn').setAttribute('aria-expanded', 'false');
    document.title = (s ? s.title[lang] + ' — ' : '') + (lang === 'ko' ? '윤정미 JeongMee Yoon' : 'JeongMee Yoon 윤정미');
    window.scrollTo(0, 0);
  }

  /* ---------- 크게 보기 (라이트박스) ---------- */
  let lbS = null, lbI = 0, lastFocus = null;
  function lbRender() {
    const w = lbS.works[lbI];
    $('#lb').innerHTML = `<div class="lb-top"><span>${esc(lbS.title[lang])} — ${lbI + 1} / ${lbS.works.length}</span><button id="lbClose">${T[lang].close}</button></div>
      <div class="lb-stage"><button id="lbPrev" aria-label="Previous">‹</button><div class="lb-img">${frame(srcOf(lbS, w, lbI), toneOf(lbS, lbI), num(lbI), w.ar, true)}</div><button id="lbNext" aria-label="Next">›</button></div>
      <div class="lb-cap">${esc(wTitle(w))}<span>${esc(wMedium(w))}</span></div>`;
  }
  function lbOpen(s, i) { lbS = s; lbI = i; lastFocus = document.activeElement; lbRender(); $('#lb').hidden = false; document.body.style.overflow = 'hidden'; $('#lbClose').focus(); }
  function lbClose() { $('#lb').hidden = true; document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
  function lbStep(d) { lbI = (lbI + d + lbS.works.length) % lbS.works.length; lbRender(); }

  /* ---------- 클릭·키보드·터치 ---------- */
  document.addEventListener('click', e => {
    const o = e.target.closest('[data-open]');
    if (o) { const s = SERIES.find(x => x.id === current()); if (s) lbOpen(s, +o.dataset.open); return; }
    const h = e.target.closest('[data-home]');
    if (h) { homeIdx = +h.dataset.home; route(); return; }
    const l = e.target.closest('[data-lang]');
    if (l) {
      lang = l.dataset.lang;
      try { localStorage.setItem('jmy-lang', lang); } catch (_) {}
      route(); if (!$('#lb').hidden) lbRender(); return;
    }
    const id = e.target.id;
    if (id === 'lbClose') lbClose();
    if (id === 'lbPrev') lbStep(-1);
    if (id === 'lbNext') lbStep(1);
    if (id === 'menuBtn') { const d = $('#drawer'); d.classList.toggle('open'); e.target.setAttribute('aria-expanded', d.classList.contains('open')); }
    if (id === 'copyBtn') {
      const btn = e.target, txt = $('#mail').textContent;
      const done = () => { btn.textContent = T[lang].copied; setTimeout(() => { btn.textContent = T[lang].copy; }, 1600); };
      const sel = () => { const r = document.createRange(); r.selectNodeContents($('#mail')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
      try { navigator.clipboard.writeText(txt).then(done, sel); } catch (_) { sel(); }
    }
  });

  document.addEventListener('keydown', e => {
    if ($('#lb').hidden) return;
    if (e.key === 'Escape') lbClose();
    if (e.key === 'ArrowLeft') lbStep(-1);
    if (e.key === 'ArrowRight') lbStep(1);
  });

  let tx = null;
  $('#lb').addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  $('#lb').addEventListener('touchend', e => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) lbStep(dx < 0 ? 1 : -1);
    tx = null;
  });

  window.addEventListener('hashchange', route);
  route();
})();
