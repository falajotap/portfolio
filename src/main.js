import './styles.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { site, knowledge, experience, clients, projects, contacts } from './config.js';
gsap.registerPlugin(ScrollTrigger);

const BASE = import.meta.env.BASE_URL;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

// Arte topográfica gerada por código (linhas de contorno) — também é a reserva das imagens
function topo(seed = 1, n = 14) {
  // viewBox cresce com o nº de linhas e as curvas ficam sempre dentro dele (sem trechos cortados)
  const H = 48 + n * 14;
  let p = '';
  for (let i = 0; i < n; i++) {
    const y = 24 + i * 14, a = 6 + (i * seed * 3) % 12;
    p += `<path d="M0 ${y} C 60 ${y - a}, 90 ${y + a}, 150 ${y} S 240 ${y - a}, 300 ${y + a}" />`;
  }
  return `<svg class="topo" viewBox="0 0 300 ${H}" preserveAspectRatio="none" aria-hidden="true" fill="none" stroke="currentColor" stroke-width=".6" vector-effect="non-scaling-stroke">${p}</svg>`;
}
const star = `<svg class="star" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 0l1.6 8.4L20 10l-8.4 1.6L10 20l-1.6-8.4L0 10l8.4-1.6z" fill="currentColor"/></svg>`;

// Imagem configurável com reserva gráfica (nunca mostra imagem quebrada)
function pic(c, cls = '') {
  const ph = `<div class="ph" aria-hidden="true">${topo(c.ratio.length + 2, 10)}${star}</div>`;
  const im = c.src ? `<img src="${BASE}assets/images/${esc(c.src)}" alt="${esc(c.alt)}" width="${c.w}" height="${c.h}" loading="lazy" decoding="async" style="object-fit:${c.fit};object-position:${c.pos}" onerror="this.remove()">` : '';
  const st = `aspect-ratio:${c.ratio}`;
  return c.link
    ? `<a class="pic ${cls}" style="${st}" data-mask href="${esc(c.link)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(c.alt || 'Abrir link')} (abre em nova aba)">${ph}${im}</a>`
    : `<figure class="pic ${cls}" style="${st}" data-mask>${ph}${im}</figure>`;
}

const ytId = v => { const m = String(v || '').match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/); return m ? m[1] : (/^[\w-]{11}$/.test(v || '') ? v : ''); };
const nav = [['mywork','My Work'],['experience','Work Experience'],['knowledge','Knowledge'],['about','About Me'],['cover','Cover']];
const visibleProjects = projects.filter(p => p.thumb?.src && p.url);

document.querySelector('#app').innerHTML = `
<header class="nav"><nav aria-label="Principal"><ul>${nav.map(([id,l]) => `<li><a href="#${id}" data-link="${id}">${l}</a></li>`).join('')}</ul></nav></header>

<section id="cover" class="s cover tone-deep" data-section>
  ${pic(site.cover, 'cover-img')}${topo(2, 18)}${star}
  <h1 class="display" data-split>${site.title}</h1>
  <p class="mono handle">${site.handle}</p>
  <p class="mono coords">${site.coords.join('<br>')}</p>
  <a class="scroll mono" href="#about" data-link="about">role</a>
</section>

<section id="about" class="s about tone-black" data-section>
  ${topo(3)}
  <div class="about-photo">${pic(site.about.photo, 'round')}</div>
  <div class="about-text"><h2 class="display" data-split>${site.about.title}</h2><p class="mono" data-fade>${esc(site.about.text)}</p></div>
</section>

<section id="knowledge" class="s knowledge tone-sand" data-section>
  <h2 class="display" data-split>KNOWLEDGE</h2>
  <div class="kn-list">${knowledge.map((k, i) => `
    <details class="kn kn-${k.tone}" ${i === 0 ? 'open' : ''}>
      <summary><span class="display">${esc(k.title)}</span><b aria-hidden="true">+</b></summary>
      <ul>${k.items.map(t => `<li class="mono">${esc(t)}</li>`).join('')}</ul>
    </details>`).join('')}</div>
</section>

<section id="experience" class="s experience tone-terracotta" data-section>
  ${topo(5)}
  <h2 class="display" data-split>WORK<br>EXPERIENCE</h2>
  <ol class="timeline"><i class="line" aria-hidden="true"></i>${experience.map(e => `
    <li data-fade><span class="dot" aria-hidden="true"></span>
      <h3 class="mono">${esc(e.company)}</h3><p class="mono">${esc(e.role)}</p><p class="mono dim">${esc(e.period)}</p>
      ${pic({ ...e.image, link: e.image.link || e.url })}</li>`).join('')}</ol>
</section>

<section id="mywork" class="s intro tone-black" data-section>
  ${topo(7, 20)}
  <h2 class="display" data-split>MY WORK</h2>
  <p class="mono">Alguns clientes produzidos durante minhas experiências de trabalho no audiovisual.</p>
</section>

${clients.map((c, i) => `
<section class="s client" data-section data-bg="${c.bg}" data-ink="${c.ink}" aria-label="${esc(c.name)}">
  ${topo(i + 2)}
  <h3 class="blacka">${c.url ? `<a href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">${esc(c.name)}</a>` : esc(c.name)}</h3>
  ${c.description ? `<p class="mono desc">${esc(c.description)}</p>` : ''}
  <div class="logo">${pic({ ...c.logo, link: c.logo.link || c.url }, 'logo-pic')}</div>
  <div class="gal g${i % 2}">${pic({ ...c.main, link: c.main.link || c.url }, 'm')}${c.extra.map((x, j) => pic({ ...x, link: x.link || c.url }, 'x x' + j)).join('')}</div>
</section>`).join('')}

<section id="videoclips" class="s clips tone-black" data-section>
  <h2 class="display" data-split>VIDEOCLIP'S</h2>
  <div class="clip-grid">${(projects.length ? projects : [{ title: 'Em breve', artist: '', youtube: '' }]).map((p, i) => {
    const id = ytId(p.youtube);
    return `<figure class="clip c${i % 4}">
      <div class="yt" style="aspect-ratio:${p.ratio || '16/9'}">${id
        ? `<iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0" title="${esc(p.title)}" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
        : `<div class="ph" aria-hidden="true">${topo(i + 3, 10)}<svg class="bigplay" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></div>`}</div>
      <figcaption class="mono">${esc(p.title)}${p.artist ? ' · ' + esc(p.artist) : ''}${p.url ? ` · <a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">Instagram ↗</a>` : ''}</figcaption></figure>`;
  }).join('')}</div>
</section>

<section id="thanks" class="s cover thanks tone-deep" data-section>
  ${topo(4, 18)}${star}
  <h2 class="display" data-split>OBRIGADO</h2>
  <p class="mono handle">Entre em contato!</p>
  <p class="mono coords">${site.coords.join('<br>')}</p>
  <ul class="contacts mono">${contacts.filter(c => c.href).map(c => `<li><a href="${esc(c.href)}" target="_blank" rel="noopener noreferrer">${esc(c.label)}</a></li>`).join('')}</ul>
</section>
<button class="totop mono" aria-label="Voltar ao topo">↑</button>`;

// ---------- Palco fixo: fundo e cor do texto mudam suavemente ao rolar ----------
const root = getComputedStyle(document.documentElement);
const res = v => v.startsWith('var(') ? root.getPropertyValue(v.slice(4, -1)).trim() : v;
const tones = { 'tone-black': ['--black', '--sand'], 'tone-deep': ['--deep', '--sand'], 'tone-sand': ['--sand', '--deep'], 'tone-terracotta': ['--terracotta', '--sand'] };
const toneOf = el => {
  if (el.dataset.bg) return [res(el.dataset.bg), res(el.dataset.ink)];
  const k = Object.keys(tones).find(t => el.classList.contains(t));
  return tones[k].map(v => res(`var(${v})`));
};
const stage = document.createElement('div');
stage.className = 'stage'; stage.setAttribute('aria-hidden', 'true');
document.body.prepend(stage);
const dur = reduce ? 0 : 1.4;
const paint = ([bg, ink]) => {
  gsap.to(stage, { backgroundColor: bg, duration: dur, ease: 'power2.inOut', overwrite: true });
  gsap.to(document.body, { '--ink': ink, duration: dur, ease: 'power2.inOut', overwrite: true });
};
const first = toneOf(document.querySelector('[data-section]'));
gsap.set(stage, { backgroundColor: first[0] }); gsap.set(document.body, { '--ink': first[1] });
document.querySelectorAll('[data-section]').forEach(sec => {
  const t = toneOf(sec);
  ScrollTrigger.create({ trigger: sec, start: 'top 55%', end: 'bottom 55%', onEnter: () => paint(t), onEnterBack: () => paint(t) });
});

// ---------- Interações ----------
document.querySelectorAll('[data-link]').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  document.getElementById(a.dataset.link).scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
}));
document.querySelector('.totop').onclick = () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
const bar = document.querySelector('.progress i'), toTop = document.querySelector('.totop');
addEventListener('scroll', () => {
  const h = document.documentElement;
  bar.style.transform = `scaleX(${scrollY / (h.scrollHeight - innerHeight || 1)})`;
  toTop.classList.toggle('on', scrollY > innerHeight);
}, { passive: true });

const ids = ['cover','about','knowledge','experience','mywork'];
const links = Object.fromEntries([...document.querySelectorAll('.nav [data-link]')].map(a => [a.dataset.link, a]));
const setActive = id => Object.entries(links).forEach(([k, a]) => a.toggleAttribute('aria-current', k === id));
document.querySelectorAll('[data-section]').forEach(s => {
  const id = ids.includes(s.id) ? s.id : (s.classList.contains('client') || s.id === 'videoclips' ? 'mywork' : 'cover');
  ScrollTrigger.create({ trigger: s, start: 'top 50%', end: 'bottom 50%', onToggle: self => self.isActive && setActive(id) });
});

if (!reduce) {
  // 'play reverse play reverse': as animações tocam ao descer E de novo ao subir
  const TA = 'play reverse play reverse';
  document.querySelectorAll('[data-split]').forEach(el => {
    el.innerHTML = el.innerHTML.split(/(<br>)/).map(part => part === '<br>' ? part :
      [...part].map(ch => `<span class="ch"><span>${ch === ' ' ? '&nbsp;' : ch}</span></span>`).join('')).join('');
    gsap.from(el.querySelectorAll('.ch > span'), { yPercent: 110, duration: 1, ease: 'power4.out', stagger: .035,
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: TA } });
  });
  document.querySelectorAll('[data-mask]').forEach(f => {
    gsap.fromTo(f, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power3.inOut',
      scrollTrigger: { trigger: f, start: 'top 88%', toggleActions: TA } });
    gsap.fromTo(f.querySelector('img, .ph'), { yPercent: -6, scale: 1.12 }, { yPercent: 6, ease: 'none',
      scrollTrigger: { trigger: f, scrub: true, start: 'top bottom', end: 'bottom top' } });
  });
  document.querySelectorAll('[data-fade], .about-text p').forEach(el =>
    gsap.from(el, { opacity: 0, x: 40, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: TA } }));
  gsap.from('.timeline .line', { scaleY: 0, transformOrigin: 'top', ease: 'none',
    scrollTrigger: { trigger: '.timeline', start: 'top 70%', end: 'bottom 70%', scrub: true } });
  gsap.from('#cover .topo, #cover .star, #cover .handle, #cover .coords', { opacity: 0, duration: 1.6, delay: .6, stagger: .15 });
  document.querySelectorAll('.client .x').forEach((x, i) =>
    gsap.from(x, { x: i % 2 ? 120 : -120, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: x, start: 'top 90%', toggleActions: TA } }));
}
// ---------- Knowledge: caixas com expansão/recolhimento suave ----------
document.querySelectorAll('.kn').forEach(d => {
  const sum = d.querySelector('summary'), list = d.querySelector('ul'), items = list.querySelectorAll('li');
  d.classList.toggle('is-open', d.open);
  let tw;
  sum.addEventListener('click', e => {
    e.preventDefault();
    tw?.kill();
    const opening = !d.classList.contains('is-open');
    d.classList.toggle('is-open', opening);
    if (reduce) { d.open = opening; ScrollTrigger.refresh(); return; }
    if (opening) {
      d.open = true;
      tw = gsap.timeline({ onComplete: () => { list.style.height = 'auto'; ScrollTrigger.refresh(); } })
        .fromTo(list, { height: 0, paddingTop: 0 }, { height: 'auto', paddingTop: '1.4rem', duration: .7, ease: 'power3.inOut' })
        .fromTo(items, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .45, stagger: .05, ease: 'power2.out' }, .2);
    } else {
      tw = gsap.timeline({ onComplete: () => { d.open = false; gsap.set([list, items], { clearProps: 'all' }); ScrollTrigger.refresh(); } })
        .to(items, { opacity: 0, duration: .2, stagger: { each: .02, from: 'end' } })
        .to(list, { height: 0, paddingTop: 0, duration: .5, ease: 'power3.inOut' }, .1);
    }
  });
});
document.fonts?.ready.then(() => ScrollTrigger.refresh());
