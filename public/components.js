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
          <a href="/" class="nav-logo" aria-label="Le Guide de l'Entrepreneur — Accueil">
            <span class="nav-logo-icon" aria-hidden="true">GE</span>
            Le Guide de l'Entrepreneur
          </a>
          <div class="nav-links" role="list">
            <a href="/" class="nav-link" role="listitem">Accueil</a>
            <a href="/categories" class="nav-link" role="listitem">Catégories</a>
            <a href="/articles" class="nav-link" role="listitem">Articles</a>
            <a href="/outils" class="nav-link" role="listitem">Outils</a>
            <a href="/newsletter" class="nav-link" role="listitem">Newsletter</a>
            <a href="/a-propos" class="nav-link" role="listitem">À propos</a>
          </div>
          <a href="/newsletter" class="btn btn-primary btn-sm nav-cta">
            S'abonner gratuitement
          </a>
          <button class="nav-burger" id="navBurger" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="navMobile">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="nav-mobile" id="navMobile" role="menu" aria-label="Menu mobile">
          <a href="/" class="nav-link" role="menuitem">Accueil</a>
          <a href="/categories" class="nav-link" role="menuitem">Catégories</a>
          <a href="/articles" class="nav-link" role="menuitem">Articles</a>
          <a href="/outils" class="nav-link" role="menuitem">Outils</a>
          <a href="/newsletter" class="nav-link" role="menuitem">Newsletter</a>
          <a href="/a-propos" class="nav-link" role="menuitem">À propos</a>
          <a href="/newsletter" class="btn btn-primary">S'abonner gratuitement</a>
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
            <a href="/" class="footer-logo" aria-label="Accueil">
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
              <li><a href="/categories">Toutes les catégories</a></li>
              <li><a href="/articles">Tous les articles</a></li>
              <li><a href="/outils">Outils recommandés</a></li>
              <li><a href="/newsletter">Newsletter</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <p class="footer-col-title">Catégories</p>
            <ul>
              <li><a href="/categories#ia">Intelligence Artificielle</a></li>
              <li><a href="/categories#n8n">Workflows N8N</a></li>
              <li><a href="/categories#outils">Outils & Apps</a></li>
              <li><a href="/categories#business">Business & Stratégie</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <p class="footer-col-title">Le site</p>
            <ul>
              <li><a href="/a-propos">À propos</a></li>
              <li><a href="/a-propos#contact">Contact</a></li>
              <li><a href="/a-propos#mentions-legales">Mentions légales</a></li>
              <li><a href="/a-propos#politique-affiliation">Politique d'affiliation</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copy">© 2025 Le Guide de l'Entrepreneur. Tous droits réservés.</p>
          <nav class="footer-legal" aria-label="Liens légaux">
            <a href="/a-propos#mentions-legales">Mentions légales</a>
            <a href="/a-propos#politique-affiliation">Affiliation</a>
            <a href="/a-propos#rgpd">RGPD</a>
          </nav>
        </div>
      </div>
    </footer>
  `;

  /* ---- INJECT NAV & FOOTER ---- */
  function injectComponents() {
    // Inject navbar at top of body
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
      navPlaceholder.outerHTML = NAV_HTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
    }

    // Inject footer at end of body (before scripts)
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
      if (
        (href === '/' && path === '/') ||
        (href !== '/' && path.startsWith(href))
      ) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
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
    const burger  = document.getElementById('navBurger');
    const mobile  = document.getElementById('navMobile');
    if (!burger || !mobile) return;

    burger.addEventListener('click', () => {
      const isOpen = mobile.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen);
      burger.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!burger.contains(e.target) && !mobile.contains(e.target)) {
        mobile.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Ouvrir le menu');
      }
    });
  }

  /* ---- READING PROGRESS BAR (article page) ---- */
  function initReadingProgress() {
    const bar = document.querySelector('.reading-progress');
    if (!bar) return;
    const update = () => {
      const scrollTop  = window.scrollY;
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      const progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width  = Math.min(progress, 100) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ---- FILTER BUTTONS (articles / tools page) ---- */
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

  /* ---- NEWSLETTER FORM (demo feedback) ---- */
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
    initReadingProgress();
    initFilters();
    initTocScroll();
    initNewsletterForms();
  });
})();
