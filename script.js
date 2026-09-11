document.documentElement.classList.add('js');

const path = location.pathname.split('/').pop() || 'index.html';
const currentSection = path === 'index.html' || path === '404.html' ? 'index.html'
  : path === 'about.html' ? 'about.html'
  : path === 'space.html' || path === 'world.html' ? 'space.html'
  : path === 'letters.html' ? 'letters.html'
  : ['works.html', 'a-space-of-my-own.html', 'no-rush-time-is-waiting.html', 'i-met-auntie-zoe-in-my-dream.html'].includes(path) ? 'works.html'
  : '';

const navigation = [['index.html','Home'],['about.html','About'],['space.html','Space'],['works.html','Works'],['letters.html','Letters']]
  .map(([href,label]) => `<a href="${href}"${currentSection === href ? ' aria-current="page"' : ''}>${label}</a>`).join('');

const oldHeader = document.querySelector('.site-header:not(.shell)');
if (oldHeader) {
  oldHeader.className = 'site-header shell';
  oldHeader.innerHTML = `<a class="brand-lockup" href="index.html" aria-label="Tree Spirit Worlds, home"><img src="assets/tree-spirit-worlds-symbol.webp" width="160" height="184" alt=""><span>Tree Spirit Worlds</span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" data-menu-toggle>Menu</button><nav class="site-nav" id="primary-navigation" aria-label="Primary navigation">${navigation}</nav>`;
}

const oldFooter = document.querySelector('.site-footer');
if (oldFooter && !oldFooter.querySelector('.footer-grid')) {
  oldFooter.innerHTML = `<div class="footer-grid shell"><div class="footer-brand"><p>Tree Spirit Worlds</p><img src="assets/tree-spirit-worlds-symbol.webp" width="160" height="184" alt="Tree Spirit Worlds symbol"></div><nav class="footer-column" aria-label="Work and social links"><a class="footer-primary-link" href="work-with-tree-spirit-worlds.html">Work With Tree Spirit Worlds</a><a href="shop.html">Shop</a><a href="https://www.instagram.com/treespiritworlds/" target="_blank" rel="noopener noreferrer">Instagram<span class="sr-only"> opens in a new tab</span></a><a href="https://www.tiktok.com/@treespiritworlds?lang=en" target="_blank" rel="noopener noreferrer">TikTok<span class="sr-only"> opens in a new tab</span></a></nav><nav class="footer-column footer-legal" aria-label="Information links"><a href="contact.html">Contact</a><a href="privacy.html">Privacy</a><p>© 2026 Tree Spirit Worlds.<br>All rights reserved.</p></nav></div>`;
}

const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('#primary-navigation');

const setMenu = open => {
  if (!menuToggle || !menu) return;
  menu.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? 'Close' : 'Menu';
};

menuToggle?.addEventListener('click', () => {
  setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.classList.contains('is-open')) {
    setMenu(false);
    menuToggle.focus();
  }
});

window.matchMedia('(min-width: 851px)').addEventListener?.('change', event => {
  if (event.matches) setMenu(false);
});
