/* ==============================================
   LE GUIDE DE L'ENTREPRENEUR — components.js
   Shared navbar + footer injected on every page
   ============================================== */
 
(function () {
  'use strict';
 
  /* ---- NAV TEMPLATE ---- */
  const NAV_HTML = `
    <nav id="navbar" role="navigation" aria-label="Navigation principale">
      <div class="container">
        <div class="nav-inner">
          <a href="index.html" class="nav-logo" aria-label="Le Guide de l'Entrepreneur — Accueil">
            <span class="nav-logo-icon" aria-hidden="true">GE</span>
            Le Guide de l'Entrepreneur
          </a>
          <div class="nav-links" role="list">
            <a href="index.html" class="nav-link" role="listitem">Accueil</a>
 
            <!-- Catégories avec dropdown -->
            <div class="nav-dropdown" role="listitem">
              <button class="nav-link nav-dropdown-trigger" aria-haspopup="true" aria-expanded="false" aria-controls="dropdown-categories">
                Catégories
                <svg class="nav-dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="nav-dropdown-menu" id="dropdown-categories" role="menu" aria-label="Catégories">
                <a href="/categorie-ia-automatisation" class="nav-dropdown-item" role="menuitem">
                  <span class="nav-dropdown-icon" style="background:#f0fdf4;" aria-hidden="true">🤖</span>
                  <span class="nav-dropdown-text">
                    <span class="nav-dropdown-title">IA &amp; Automatisation</span>
                    <span class="nav-dropdown-desc">Outils IA, prompts, comparatifs</span>
                  </span>
                </a>
                <a href="/categorie-outils-app" class="nav-dropdown-item" role="menuitem">
                  <span class="nav-dropdown-icon" style="background:#fefce8;" aria-hidden="true">🛠️</span>
                  <span class="nav-dropdown-text">
                    <span class="nav-dropdown-title">Outils coup de ❤️ &amp; Apps</span>
                    <span class="nav-dropdown-desc">Comparatifs et avis honnêtes</span>
                  </span>
                </a>
                <a href="/categorie-acquisition" class="nav-dropdown-item" role="menuitem">
                  <span class="nav-dropdown-icon" style="background:#fff7ed;" aria-hidden="true">🎯</span>
                  <span class="nav-dropdown-text">
                    <span class="nav-dropdown-title">Acquisition &amp; Stratégie</span>
                    <span class="nav-dropdown-desc">SEO, LinkedIn, Pinterest, email</span>
                  </span>
                </a>
                <a href="/categorie-assurances-finances" class="nav-dropdown-item" role="menuitem">
                  <span class="nav-dropdown-icon" style="background:#f0fdfa;" aria-hidden="true">💰</span>
                  <span class="nav-dropdown-text">
                    <span class="nav-dropdown-title">Finance &amp; Assurances</span>
                    <span class="nav-dropdown-desc">Comptabilité, fiscalité, RC pro</span>
                  </span>
                </a>
                <div class="nav-dropdown-footer">
                  <a href="categories.html" class="nav-dropdown-all">Voir toutes les catégories →</a>
                </div>
              </div>
            </div>
 
            <a href="articles.html" class="nav-link" role="listitem">Articles</a>
            <a href="outils.html" class="nav-link" role="listitem">Outils</a>
            <a href="newsletter.html" class="nav-link" role="listitem">Newsletter</a>
            <a href="a-propos.html" class="nav-link" role="listitem">À propos</a>
          </div>
          <a href="newsletter.html" class="btn btn-primary btn-sm nav-cta">
            S'abonner gratuitement
          </a>
          <button class="nav-burger" id="navBurger" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="navMobile">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
 
        <!-- Menu mobile -->
        <div class="nav-mobile" id="navMobile" role="menu" aria-label="Menu mobile">
          <a href="index.html" class="nav-link" role="menuitem">Accueil</a>
 
          <!-- Accordion catégories mobile -->
          <div class="nav-mobile-accordion">
            <button class="nav-link nav-mobile-accordion-trigger" aria-expanded="false" aria-controls="mobile-categories">
              Catégories
              <svg class="nav-dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="nav-mobile-submenu" id="mobile-categories">
              <a href="/categorie-ia-automatisation" class="nav-mobile-sublink" role="menuitem">🤖 IA &amp; Automatisation</a>
              <a href="/categorie-outils-app" class="nav-mobile-sublink" role="menuitem">🛠️ Outils &amp; Apps</a>
              <a href="/categorie-acquisition" class="nav-mobile-sublink" role="menuitem">🎯 Acquisition &amp; Stratégie</a>
              <a href="/categorie-assurances-finances" class="nav-mobile-sublink" role="menuitem">💰 Finance &amp; Assurances</a>
              <a href="categories.html" class="nav-mobile-sublink nav-mobile-sublink--all" role="menuitem">Toutes les catégories →</a>
            </div>
          </div>
 
          <a href="articles.html" class="nav-link" role="menuitem">Articles</a>
          <a href="outils.html" class="nav-link" role="menuitem">Outils</a>
          <a href="newsletter.html" class="nav-link" role="menuitem">Newsletter</a>
          <a href="a-propos.html" class="nav-link" role="menuitem">À propos</a>
          <a href="newsletter.html" class="btn btn-primary">S'abonner gratuitement</a>
        </div>
      </div>
    </nav>
  `;
 
  /* ---- FOOTER TEMPLATE ---- */
  const FOOTER_HTML = `
    <footer id="footer" role="contentinfo">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="footer-logo" aria-label="Accueil">
              <span class="footer-logo-icon" aria-hidden="true">GE</span>
              Le Guide de l'Entrepreneur
            </a>
            <p class="footer-desc">
              Le blog de référence pour les entrepreneurs qui veulent automatiser leur business,
              maîtriser les outils IA et gagner du temps grâce aux workflows intelligents.
            </p>
          </div>
          <div class="footer-col">
            <p class="footer-col-title">Explorer</p>
            <ul>
              <li><a href="categories.html">Toutes les catégories</a></li>
              <li><a href="articles.html">Tous les articles</a></li>
              <li><a href="outils.html">Outils recommandés</a></li>
              <li><a href="newsletter.html">Newsletter</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <p class="footer-col-title">Catégories</p>
            <ul>
              <li><a href="/categorie-ia-automatisation">IA &amp; Automatisation</a></li>
              <li><a href="/categorie-outils-app">Outils &amp; Apps</a></li>
              <li><a href="/categorie-acquisition">Acquisition &amp; Stratégie</a></li>
              <li><a href="/categorie-assurances-finances">Finance &amp; Assurances</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <p class="footer-col-title">Le site</p>
            <ul>
              <li><a href="a-propos.html">À propos</a></li>
              <li><a href="a-propos.html#contact">Contact</a></li>
              <li><a href="a-propos.html#mentions-legales">Mentions légales</a></li>
              <li><a href="a-propos.html#politique-affiliation">Politique d'affiliation</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copy">© 2025 Le Guide de l'Entrepreneur. Tous droits réservés.</p>
          <nav class="footer-legal" aria-label="Liens légaux">
            <a href="a-propos.html#mentions-legales">Mentions légales</a>
            <a href="a-propos.html#politique-affiliation">Affiliation</a>
            <a href="a-propos.html#rgpd">RGPD</a>
          </nav>
        </div>
      </div>
    </footer>
  `;
 
  /* ---- INJECT NAV & FOOTER ---- */
  function injectComponents() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
      navPlaceholder.outerHTML = NAV_HTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
    }
 
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = FOOTER_HTML;
    } else {
      document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }
  }
 
  /* ---- ACTIVE NAV LINK ---- */
  function setActiveNavLink() {
    const path = window.location.pathname;
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const normalizedHrefPath = new URL(href, window.location.origin).pathname;
      const currentPath = window.location.pathname;
      const isHome = normalizedHrefPath.endsWith('/index.html') || normalizedHrefPath === '/';
      const isHomePath = currentPath === '/' || currentPath.endsWith('/index.html');
      if (
        (isHome && isHomePath) ||
        (!isHome && currentPath === normalizedHrefPath)
      ) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
 
    // Highlight "Catégories" trigger si on est sur une page cat-*
    if (path.includes('/categorie-') || path.includes('/categories')) {
      const trigger = document.querySelector('.nav-dropdown-trigger');
      if (trigger) trigger.classList.add('active');
    }
  }
 
  /* ---- STICKY NAV SHADOW ---- */
  function initNavScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
 
  /* ---- MOBILE BURGER MENU ---- */
  function initBurger() {
    const burger = document.getElementById('navBurger');
    const mobile = document.getElementById('navMobile');
    if (!burger || !mobile) return;
 
    burger.addEventListener('click', () => {
      const isOpen = mobile.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen);
      burger.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    });
 
    document.addEventListener('click', (e) => {
      if (!burger.contains(e.target) && !mobile.contains(e.target)) {
        mobile.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Ouvrir le menu');
      }
    });
  }
 
  /* ---- DROPDOWN CATÉGORIES (desktop hover + keyboard) ---- */
  function initDropdown() {
    const dropdown = document.querySelector('.nav-dropdown');
    const trigger  = document.querySelector('.nav-dropdown-trigger');
    const menu     = document.querySelector('.nav-dropdown-menu');
    if (!dropdown || !trigger || !menu) return;
 
    let closeTimer = null;
 
    // Ouvrir au hover
    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      menu.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    });
 
    // Fermer avec délai (évite fermeture accidentelle)
    dropdown.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => {
        menu.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }, 200);
    });
 
    // Toggle au clic (accessibilité)
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = menu.classList.toggle('open');
      trigger.setAttribute('aria-expanded', isOpen);
    });
 
    // Fermer au clic extérieur
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        menu.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
 
    // Navigation clavier (Escape)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      }
    });
  }
 
  /* ---- ACCORDION MOBILE CATÉGORIES ---- */
  function initMobileAccordion() {
    const accTrigger = document.querySelector('.nav-mobile-accordion-trigger');
    const accMenu    = document.querySelector('.nav-mobile-submenu');
    if (!accTrigger || !accMenu) return;
 
    accTrigger.addEventListener('click', () => {
      const isOpen = accMenu.classList.toggle('open');
      accTrigger.setAttribute('aria-expanded', isOpen);
      accTrigger.querySelector('.nav-dropdown-arrow').style.transform = isOpen ? 'rotate(180deg)' : '';
    });
  }
 
  /* ---- READING PROGRESS BAR ---- */
  function initReadingProgress() {
    const bar = document.querySelector('.reading-progress');
    if (!bar) return;
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress  = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = Math.min(progress, 100) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }
 
  /* ---- FILTER BUTTONS ---- */
  function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!filterBtns.length) return;
 
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.dataset.filterGroup || 'default';
        document.querySelectorAll(`.filter-btn[data-filter-group="${group}"]`).forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
 
        const filter = btn.dataset.filter;
        const items  = document.querySelectorAll('[data-category]');
        items.forEach(item => {
          const show = filter === 'all' || item.dataset.category === filter;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }
 
  /* ---- TOC SMOOTH SCROLL ---- */
  function initTocScroll() {
    document.querySelectorAll('.toc a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
          window.scrollTo({ top: target.offsetTop - navH - 16, behavior: 'smooth' });
        }
      });
    });
  }
 
  /* ---- NEWSLETTER FORM ---- */
  function initNewsletterForms() {
    document.querySelectorAll('.newsletter-form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        const btn   = form.querySelector('button[type="submit"]');
        if (!input || !btn) return;
        const original = btn.textContent;
        btn.textContent = '✓ Inscription enregistrée !';
        btn.disabled = true;
        input.value  = '';
        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
        }, 4000);
      });
    });
  }
 
  /* ---- INIT ---- */
  document.addEventListener('DOMContentLoaded', () => {
    injectComponents();
    setActiveNavLink();
    initNavScroll();
    initBurger();
    initDropdown();
    initMobileAccordion();
    initReadingProgress();
    initFilters();
    initTocScroll();
    initNewsletterForms();
  });
})();
