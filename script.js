document.documentElement.classList.add('js');
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
// About is a disclosure beside a normal navigation link, not an application menu.
const aboutNav = document.querySelector('[data-about-nav]');
const aboutToggle = document.querySelector('[data-about-toggle]');
let aboutPinned = false;
const setAbout = open => {
  if (!open) aboutPinned = false;
  aboutNav?.classList.toggle('is-open', open);
  aboutToggle?.setAttribute('aria-expanded', String(open));
};
aboutToggle?.addEventListener('click', () => { const open = !aboutPinned; setAbout(open); aboutPinned = open; });
aboutNav?.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') setAbout(true); });
aboutNav?.addEventListener('pointerleave', () => { if (!aboutPinned && !aboutNav.contains(document.activeElement)) setAbout(false); });
aboutNav?.addEventListener('focusin', event => { if (event.target.matches('.about-nav-heading > a')) setAbout(true); });
aboutNav?.addEventListener('focusout', event => { if (!aboutNav.contains(event.relatedTarget)) setAbout(false); });
document.addEventListener('click', event => { if (!aboutNav?.contains(event.target)) setAbout(false); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && aboutNav?.classList.contains('is-open')) { setAbout(false); aboutToggle.focus(); } });
// One encounter begins the dialogue. Further touches can advance it; nothing blocks scrolling.
const rooty = document.querySelector('[data-rooty-touch]');
const rootyLine = document.querySelector('[data-rooty-line]');
const invitation = document.querySelector('[data-rooty-invitation]');
const lines = ['Hello, I am Rooty.', 'Welcome to Tree Spirit Worlds.', 'I am the psyche of this place, and your guide while you are here.', 'Where would you like to go?'];
let lineIndex = -1, dialogueTimer, responseTimer;
const speak = () => {
  clearTimeout(dialogueTimer); clearTimeout(responseTimer);
  rooty.classList.add('is-aware');
  responseTimer = setTimeout(() => rooty.classList.remove('is-aware'), 220);
  rooty.setAttribute('aria-expanded', 'true');
  if (reducedMotion.matches) { rootyLine.textContent = lines.join(' '); invitation.hidden = false; lineIndex = lines.length - 1; return; }
  lineIndex = Math.min(lineIndex + 1, lines.length - 1);
  rootyLine.textContent = lines[lineIndex];
  invitation.hidden = lineIndex !== lines.length - 1;
  rooty.setAttribute('aria-label', lineIndex === lines.length - 1 ? 'Rooty, your guide' : 'Continue listening to Rooty');
  if (lineIndex < lines.length - 1) dialogueTimer = setTimeout(speak, lineIndex === 2 ? 4500 : 2500);
};
rooty?.addEventListener('click', speak);
// Progressive enhancement: all narrative text and work links remain available without JS.
const reveals = document.querySelectorAll('.reveal');
const farewell = document.querySelector('[data-farewell]');
const show = element => element.classList.add(element.matches('[data-farewell]') ? 'is-present' : 'is-visible');
if (reducedMotion.matches || !('IntersectionObserver' in window)) { reveals.forEach(show); if (farewell) show(farewell); }
else {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { show(entry.target); observer.unobserve(entry.target); } }), {threshold:.15});
  reveals.forEach(el => observer.observe(el)); if (farewell) observer.observe(farewell);
}
reducedMotion.addEventListener?.('change', event => { if (event.matches) { reveals.forEach(show); if (farewell) show(farewell); if (rooty && lineIndex >= 0) speak(); } });
document.querySelectorAll('[data-encounter]').forEach(encounter => {
  const touch = encounter.querySelector('[data-object-touch]'), work = encounter.querySelector('[data-object-work]'), cue = encounter.querySelector('[data-object-cue]');
  touch.hidden = false; work.hidden = true;
  touch.addEventListener('click', () => {
    const revealed = touch.getAttribute('aria-expanded') !== 'true';
    touch.setAttribute('aria-expanded', String(revealed)); encounter.dataset.state = revealed ? 'revealed' : 'rest'; work.hidden = !revealed;
    cue.textContent = revealed ? 'Time need not be a line.' : 'Touch the clock';
    touch.setAttribute('aria-label', revealed ? 'Hide the clock’s story' : 'Touch the clock to discover the work');
  });
});
const material = document.querySelector('[data-material]');
const materialTouch = document.querySelector('[data-material-touch]');
if (materialTouch) {
  materialTouch.hidden = false;
  materialTouch.addEventListener('click', () => {
    const changed = material.classList.toggle('is-changed');
    material.querySelector('[data-material-line]').textContent = changed ? 'A place to return to.' : 'An experience.';
    materialTouch.textContent = changed ? 'Return to its first shape →' : 'Give it another shape →';
  });
}
