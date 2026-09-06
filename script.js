document.documentElement.classList.add('js');
const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('[data-nav]');

document.querySelectorAll('[data-year]').forEach((year) => {
  year.textContent = new Date().getFullYear();
});

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  navigation?.classList.toggle('is-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  });
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
  revealItems.forEach((item) => observer.observe(item));
}

const rootyDialog = document.querySelector('[data-rooty-dialog]');
const rootyOpen = document.querySelector('[data-rooty-open]');
const rootyClose = document.querySelector('[data-rooty-close]');
const rootyNext = document.querySelector('[data-rooty-next]');
const rootyLine = document.querySelector('[data-rooty-line]');
const rootyWorld = document.querySelector('[data-rooty-world]');
const rootyLines = [
  'I am not exactly the owner of this place.',
  'I am closer to its psyche.',
  'When something changes here, I usually feel it first.',
  'But you do not have to understand me yet.'
];
let rootyStep = 0;

const resetRooty = () => {
  rootyStep = 0;
  if (rootyLine) rootyLine.textContent = rootyLines[0];
  if (rootyNext) rootyNext.hidden = false;
  if (rootyWorld) rootyWorld.hidden = false;
};

const closeRooty = () => {
  if (!rootyDialog) return;
  rootyDialog.hidden = true;
  document.body.classList.remove('rooty-active');
  document.querySelectorAll('body > header, body > main, body > footer').forEach(el => el.inert = false);
  rootyOpen?.focus();
};

rootyOpen?.addEventListener('click', () => {
  resetRooty();
  if (!rootyDialog) return;
  rootyDialog.hidden = false;
  document.body.classList.add('rooty-active');
  document.querySelectorAll('body > header, body > main, body > footer').forEach(el => el.inert = true);
  rootyClose?.focus();
});

rootyClose?.addEventListener('click', closeRooty);
rootyDialog?.addEventListener('click', (event) => {
  if (event.target === rootyDialog) closeRooty();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && rootyDialog && !rootyDialog.hidden) closeRooty();
});

rootyNext?.addEventListener('click', () => {
  rootyStep += 1;
  if (rootyLine) rootyLine.textContent = rootyLines[rootyStep];
  if (rootyStep === rootyLines.length - 1) {
    rootyNext.hidden = true;
    rootyWorld.hidden = false;
    rootyWorld.focus();
  }
});

// Modal focus is contained; an exit path never depends on finishing the dialogue.
rootyDialog?.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const items = [...rootyDialog.querySelectorAll('button, a[href]')].filter(el => !el.hidden);
  const first = items[0], last = items[items.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation?.classList.contains('is-open')) {
    navigation.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.focus();
  }
});
// Notice → touch → immediate response → revealed identity → optional entry.
document.querySelectorAll('[data-encounter]').forEach(encounter => {
  const touch = encounter.querySelector('[data-object-touch]');
  const work = encounter.querySelector('[data-object-work]');
  const cue = encounter.querySelector('[data-object-cue]');
  touch.hidden = false; work.hidden = true;
  touch.addEventListener('click', () => {
    const revealed = touch.getAttribute('aria-expanded') !== 'true';
    touch.setAttribute('aria-expanded', String(revealed));
    encounter.dataset.state = revealed ? 'revealed' : 'rest';
    work.hidden = !revealed;
    cue.textContent = revealed ? 'Time need not be a line.' : 'Touch the clock';
    touch.setAttribute('aria-label', revealed ? 'Hide the clock’s story' : 'Touch the clock to discover the work');
  });
});
