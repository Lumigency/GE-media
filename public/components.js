/* ==============================================
   JAUGE — components.js
   Shared navbar + footer injected on every page
   ============================================== */

(function () {
  'use strict';

  /* ---- NAV TEMPLATE ---- */
  const NAV_HTML = `
    <nav id="navbar" role="navigation" aria-label="Navigation principale">
      <div class="container">
        <div class="nav-inner">
          <a href="/" class="nav-logo" aria-label="Jauge — Accueil">Jauge</a>

          <div class="nav-dropdown" role="listitem">
            <button class="nav-menu-trigger nav-dropdown-trigger" aria-haspopup="true" aria-expanded="false" aria-controls="dropdown-categories">
              menu
            </button>

            <div class="nav-dropdown-menu" id="dropdown-categories" role="menu" aria-label="Les jauges">
              <a href="/outils-ia" class="nav-dropdown-item" role="menuitem">
                <span class="nav-dropdown-icon" style="background:#FFE0D6;" aria-hidden="true">🤖</span>
                <span class="nav-dropdown-text">
                  <span class="nav-dropdown-title">Outils &amp; IA</span>
                  <span class="nav-dropdown-desc">Testé, pas hypé</span>
                </span>
              </a>

              <a href="/acquisition-growth" class="nav-dropdown-item" role="menuitem">
                <span class="nav-dropdown-icon" style="background:#EEFAC7;" aria-hidden="true">🎯</span>
                <span class="nav-dropdown-text">
                  <span class="nav-dropdown-title">Acquisition &amp; Growth</span>
                  <span class="nav-dropdown-desc">Les vrais chiffres</span>
                </span>
              </a>

              <a href="/finance-assurances" class="nav-dropdown-item" role="menuitem">
                <span class="nav-dropdown-icon" style="background:#e7e5de;" aria-hidden="true">💰</span>
                <span class="nav-dropdown-text">
                  <span class="nav-dropdown-title">Argent &amp; Trésorerie</span>
                  <span class="nav-dropdown-desc">Sans langue de bois</span>
                </span>
              </a>

              <a href="/la-jauge" class="nav-dropdown-item" role="menuitem">
                <span class="nav-dropdown-icon" style="background:#FDF3D9;" aria-hidden="true">🧠</span>
                <span class="nav-dropdown-text">
                  <span class="nav-dropdown-title">La Jauge</span>
                  <span class="nav-dropdown-desc">La tête, pour de vrai</span>
                </span>
              </a>

              <div class="nav-dropdown-footer">
                <a href="/categories" class="nav-dropdown-all">Voir toutes les jauges →</a>
              </div>
            </div>
          </div>

          <div class="nav-links" role="list">
            <a href="/ia-automatisation" class="nav-link nav-link--cat" role="listitem"><span class="nav-link-icon" aria-hidden="true">🤖</span>Outils &amp; IA</a>
            <span class="nav-dot" aria-hidden="true">·</span>
            <a href="/acquisition-growth" class="nav-link nav-link--cat" role="listitem"><span class="nav-link-icon" aria-hidden="true">🎯</span>Growth</a>
            <span class="nav-dot" aria-hidden="true">·</span>
            <a href="/argent-tresorerie" class="nav-link nav-link--cat" role="listitem"><span class="nav-link-icon" aria-hidden="true">💰</span>Argent</a>
            <span class="nav-dot" aria-hidden="true">·</span>
            <a href="/la-jauge" class="nav-link nav-link--cat" role="listitem"><span class="nav-link-icon" aria-hidden="true">🧠</span>La Jauge</a>
          </div>

          <div class="nav-links nav-links--secondary" role="list">
            <a href="/outils" class="nav-link" role="listitem">Outils testés</a>
            <a href="/newsletter" class="nav-link" role="listitem">Newsletter</a>
            <a href="/a-propos" class="nav-link" role="listitem">À propos</a>
          </div>

          <a href="/newsletter" class="btn btn-primary btn-sm nav-cta">
            Rejoindre la newsletter
          </a>

          <button class="nav-burger" id="navBurger" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="navMobile">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div class="nav-mobile" id="navMobile" role="menu" aria-label="Menu mobile">
          <a href="/" class="nav-link" role="menuitem">Accueil</a>

          <div class="nav-mobile-accordion">
            <button class="nav-link nav-mobile-accordion-trigger" aria-expanded="false" aria-controls="mobile-categories">
              Les jauges
              <svg class="nav-dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <div class="nav-mobile-submenu" id="mobile-categories">
              <a href="/outils-ia" class="nav-mobile-sublink" role="menuitem">🤖 Outils &amp; IA</a>
              <a href="/acquisition-growth" class="nav-mobile-sublink" role="menuitem">🎯 Acquisition &amp; Growth</a>
              <a href="/argent-tresorerie" class="nav-mobile-sublink" role="menuitem">💰 Argent &amp; Trésorerie</a>
              <a href="/la-jauge" class="nav-mobile-sublink" role="menuitem">🧠 La Jauge</a>
              <a href="/categories" class="nav-mobile-sublink nav-mobile-sublink--all" role="menuitem">Toutes les jauges →</a>
            </div>
          </div>

          <a href="/outils" class="nav-link" role="menuitem">Outils testés</a>
          <a href="/newsletter" class="nav-link" role="menuitem">Newsletter</a>
          <a href="/a-propos" class="nav-link" role="menuitem">À propos</a>
          <a href="/newsletter" class="btn btn-primary">Rejoindre la newsletter</a>
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
            <a href="/" class="footer-logo" aria-label="Accueil Jauge">
              <span class="footer-logo-icon" aria-hidden="true">J</span>
              Jauge
            </a>
            <p class="footer-desc">
              Jauge parle de trésorerie, d'outils IA, d'acquisition client et de charge mentale d'entrepreneur. Des avis tranchés, pas des tops génériques.
            </p>
            <ul>
              <li><a href="/newsletter">Newsletter</a></li>
              <li><a href="/a-propos">À propos</a></li>
              <li><a href="/a-propos#contact">Contact</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <p class="footer-col-title">Les jauges</p>
            <ul>
              <li><a href="/outils-ia">Outils &amp; IA</a></li>
              <li><a href="/acquisition-growth">Acquisition &amp; Growth</a></li>
              <li><a href="/argent-tresorerie">Argent &amp; Trésorerie</a></li>
              <li><a href="/la-jauge">La Jauge</a></li>
              <li><a href="/guides">Tous les articles</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <p class="footer-col-title">Articles incontournables</p>
            <ul>
              <li><a href="/outils-ia/meilleurs-outils-ia">Meilleurs outils IA</a></li>
              <li><a href="/outils-ia/automatiser-son-entreprise">Automatiser son entreprise</a></li>
              <li><a href="/acquisition-growth/crm/meilleur-crm-pme">Meilleur CRM pour PME</a></li>
              <li><a href="/acquisition-growth/email-marketing/meilleur-logiciel-emailing">Meilleur logiciel emailing</a></li>
              <li><a href="/argent-tresorerie/banques-professionnelles/meilleure-banque-professionnelle">Meilleure banque professionnelle</a></li>
              <li><a href="/la-jauge/charge-mentale-entrepreneur">La charge mentale, ça se travaille</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <p class="footer-col-title">Le site</p>
            <ul>
              <li><a href="/a-propos">À propos</a></li>
              <li><a href="/a-propos#contact">Contact</a></li>
              <li><a href="/a-propos#mentions-legales">Mentions légales</a></li>
              <li><a href="/a-propos#politique-affiliation">Politique d'affiliation</a></li>
              <li><a href="/a-propos#rgpd">RGPD</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="footer-copy">© 2026 Jauge. Tous droits réservés.</p>
          <nav class="footer-legal" aria-label="Liens légaux">
            <a href="/a-propos#mentions-legales">Mentions légales</a>
            <a href="/a-propos#politique-affiliation">Politique d’affiliation</a>
            <a href="/a-propos#rgpd">RGPD</a>
          </nav>
        </div>
      </div>
    </footer>
  `;

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

      if ((isHome && isHomePath) || (!isHome && currentPath === normalizedHrefPath)) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });

    const categoryPaths = ['/outils-ia', '/acquisition-growth', '/argent-tresorerie', '/la-jauge', '/categories'];
    const isCategoryPath = categoryPaths.some(categoryPath => path === categoryPath || path.startsWith(`${categoryPath}/`));
    if (isCategoryPath) {
      const trigger = document.querySelector('.nav-dropdown-trigger');
      if (trigger) {
        trigger.classList.add('active');
        trigger.setAttribute('aria-current', 'page');
      }
    }
  }

  function initNavScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

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

  function initDropdown() {
    const dropdown = document.querySelector('.nav-dropdown');
    const trigger = document.querySelector('.nav-dropdown-trigger');
    const menu = document.querySelector('.nav-dropdown-menu');
    if (!dropdown || !trigger || !menu) return;

    let closeTimer = null;

    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      menu.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    });

    dropdown.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => {
        menu.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }, 200);
    });

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = menu.classList.toggle('open');
      trigger.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        menu.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      }
    });
  }

  function initMobileAccordion() {
    const accTrigger = document.querySelector('.nav-mobile-accordion-trigger');
    const accMenu = document.querySelector('.nav-mobile-submenu');
    if (!accTrigger || !accMenu) return;

    accTrigger.addEventListener('click', () => {
      const isOpen = accMenu.classList.toggle('open');
      accTrigger.setAttribute('aria-expanded', isOpen);
      accTrigger.querySelector('.nav-dropdown-arrow').style.transform = isOpen ? 'rotate(180deg)' : '';
    });
  }

  function initReadingProgress() {
    const bar = document.querySelector('.reading-progress');
    if (!bar) return;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = Math.min(progress, 100) + '%';
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
  }

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
        const items = document.querySelectorAll('[data-category]');

        items.forEach(item => {
          const categories = (item.dataset.category || '').split(/\s+/).filter(Boolean);
          const show = filter === 'all' || categories.includes(filter);
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }

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

  function initNewsletterForms() {
    document.querySelectorAll('.newsletter-form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const input = form.querySelector('input[type="email"]');
        const btn = form.querySelector('button[type="submit"]');
        if (!input || !btn) return;

        const original = btn.textContent;
        btn.textContent = '✓ Inscription enregistrée !';
        btn.disabled = true;
        input.value = '';

        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
        }, 4000);
      });
    });
  }

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
