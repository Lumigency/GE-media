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
          <a href="/" class="nav-logo" aria-label="Jauge — Accueil"><img src="/jauge.png" alt="" width="28" height="28" style="border-radius:6px;" />Jauge</a>

          <div class="nav-dropdown" role="listitem">
            <button class="nav-menu-trigger nav-dropdown-trigger" aria-haspopup="true" aria-expanded="false" aria-controls="dropdown-categories">
              menu
            </button>

            <div class="nav-dropdown-menu" id="dropdown-categories" role="menu" aria-label="Les jauges">
              <a href="/ia-automatisation" class="nav-dropdown-item" role="menuitem">
                <span class="nav-dropdown-icon" style="background:#FFE0D6;" aria-hidden="true"><svg class="icon" aria-hidden="true"><use href="#icon-cpu"/></svg></span>
                <span class="nav-dropdown-text">
                  <span class="nav-dropdown-title">Outils &amp; IA</span>
                  <span class="nav-dropdown-desc">IA, no-code, automatisation</span>
                </span>
              </a>

              <a href="/acquisition-growth" class="nav-dropdown-item" role="menuitem">
                <span class="nav-dropdown-icon" style="background:#EEFAC7;" aria-hidden="true"><svg class="icon" aria-hidden="true"><use href="#icon-target"/></svg></span>
                <span class="nav-dropdown-text">
                  <span class="nav-dropdown-title">Acquisition &amp; Growth</span>
                  <span class="nav-dropdown-desc">SEO, paid, CRM, prospection</span>
                </span>
              </a>

              <a href="/finance-assurances" class="nav-dropdown-item" role="menuitem">
                <span class="nav-dropdown-icon" style="background:#e7e5de;" aria-hidden="true"><svg class="icon" aria-hidden="true"><use href="#icon-wallet"/></svg></span>
                <span class="nav-dropdown-text">
                  <span class="nav-dropdown-title">Argent &amp; Trésorerie</span>
                  <span class="nav-dropdown-desc">Compte pro, compta, fiscalité</span>
                </span>
              </a>

              <a href="/la-jauge" class="nav-dropdown-item" role="menuitem">
                <span class="nav-dropdown-icon" style="background:#FDF3D9;" aria-hidden="true"><svg class="icon" aria-hidden="true"><use href="#icon-brain"/></svg></span>
                <span class="nav-dropdown-text">
                  <span class="nav-dropdown-title">La Jauge</span>
                  <span class="nav-dropdown-desc">Charge mentale, solitude, burnout</span>
                </span>
              </a>

              <div class="nav-dropdown-footer">
                <a href="/categories" class="nav-dropdown-all">Voir toutes les jauges →</a>
              </div>
            </div>
          </div>

          <div class="nav-links" role="list">
            <a href="/ia-automatisation" class="nav-link nav-link--cat" role="listitem"><span class="nav-link-icon" aria-hidden="true"><svg class="icon" aria-hidden="true"><use href="#icon-cpu"/></svg></span>Outils &amp; IA</a>
            <span class="nav-dot" aria-hidden="true">·</span>
            <a href="/acquisition-growth" class="nav-link nav-link--cat" role="listitem"><span class="nav-link-icon" aria-hidden="true"><svg class="icon" aria-hidden="true"><use href="#icon-target"/></svg></span>Growth</a>
            <span class="nav-dot" aria-hidden="true">·</span>
            <a href="/finance-assurances" class="nav-link nav-link--cat" role="listitem"><span class="nav-link-icon" aria-hidden="true"><svg class="icon" aria-hidden="true"><use href="#icon-wallet"/></svg></span>Argent</a>
            <span class="nav-dot" aria-hidden="true">·</span>
            <a href="/la-jauge" class="nav-link nav-link--cat" role="listitem"><span class="nav-link-icon" aria-hidden="true"><svg class="icon" aria-hidden="true"><use href="#icon-brain"/></svg></span>La Jauge</a>
          </div>

          <div class="nav-links nav-links--secondary" role="list">
            <a href="/bons-plans" class="nav-link nav-link--highlight" role="listitem">Bons plans</a>
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
              <a href="/ia-automatisation" class="nav-mobile-sublink" role="menuitem"><svg class="icon" aria-hidden="true"><use href="#icon-cpu"/></svg> Outils &amp; IA</a>
              <a href="/acquisition-growth" class="nav-mobile-sublink" role="menuitem"><svg class="icon" aria-hidden="true"><use href="#icon-target"/></svg> Acquisition &amp; Growth</a>
              <a href="/finance-assurances" class="nav-mobile-sublink" role="menuitem"><svg class="icon" aria-hidden="true"><use href="#icon-wallet"/></svg> Argent &amp; Trésorerie</a>
              <a href="/la-jauge" class="nav-mobile-sublink" role="menuitem"><svg class="icon" aria-hidden="true"><use href="#icon-brain"/></svg> La Jauge</a>
              <a href="/categories" class="nav-mobile-sublink nav-mobile-sublink--all" role="menuitem">Toutes les jauges →</a>
            </div>
          </div>

          <a href="/bons-plans" class="nav-link nav-link--highlight" role="menuitem">Bons plans</a>
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
              <img src="/jauge.png" alt="" width="28" height="28" style="border-radius:6px;" />
              Jauge
            </a>
            <p class="footer-desc">
              Jauge parle de trésorerie, d'outils IA, d'acquisition client et de charge mentale d'entrepreneur. Des avis tranchés, pas des tops génériques.
            </p>
          </div>

          <div class="footer-col">
            <p class="footer-col-title">Les jauges</p>
            <ul>
              <li><a href="/ia-automatisation">Outils &amp; IA</a></li>
              <li><a href="/acquisition-growth">Acquisition &amp; Growth</a></li>
              <li><a href="/finance-assurances">Argent &amp; Trésorerie</a></li>
              <li><a href="/la-jauge">La Jauge</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <p class="footer-col-title">Articles incontournables</p>
            <ul class="footer-col-nowrap">
              <li><a href="/ia-automatisation/claude-vs-chatgpt-2026">Claude vs ChatGPT 2026</a></li>
              <li><a href="/acquisition-growth/meilleur-crm-freelance">Meilleur CRM 2026</a></li>
              <li><a href="/finance-assurances/meilleur-compte-pro-freelance-2026">Meilleur compte pro 2026</a></li>
              <li><a href="/la-jauge/charge-mentale-entrepreneur">Charge mentale entrepreneur</a></li>
              <li><a href="/la-jauge/syndrome-imposteur-entrepreneuriat">Syndrome de l'imposteur</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <p class="footer-col-title">Le site</p>
            <ul>
              <li><a href="/bons-plans">Bons plans</a></li>
              <li><a href="/guides">Tous les guides</a></li>
              <li><a href="/newsletter">Newsletter</a></li>
              <li><a href="/a-propos">À propos</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/mentions-legales">Mentions légales</a></li>
              <li><a href="/mentions-legales#rgpd">RGPD</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="footer-copy">© 2026 Jauge. Tous droits réservés.</p>
          <nav class="footer-legal" aria-label="Liens légaux">
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/mentions-legales#rgpd">RGPD</a>
          </nav>
        </div>
      </div>
    </footer>
  `;

  /* ---- ICON SPRITE (ligne, style éditorial — remplace les emojis) ---- */
  const ICONS_SPRITE = `
    <svg width="0" height="0" style="position:absolute;overflow:hidden;" aria-hidden="true">
      <defs>
        <symbol id="icon-cpu" viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="10" y="10" width="4" height="4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9 2v3M12 2v3M15 2v3M9 19v3M12 19v3M15 19v3M2 9h3M2 12h3M2 15h3M19 9h3M19 12h3M19 15h3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>

        <symbol id="icon-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></symbol>

        <symbol id="icon-wallet" viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="3" y="7" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="16.5" cy="13" r="1.4" fill="currentColor"/></symbol>

        <symbol id="icon-brain" viewBox="0 0 24 24"><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5h1a3 3 0 0 0 2-1V6a3 3 0 0 0-0-2Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5h-1a3 3 0 0 1-2-1V6a3 3 0 0 1 0-2Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 6v13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></symbol>

        <symbol id="icon-zap" viewBox="0 0 24 24"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></symbol>

        <symbol id="icon-bot" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="12" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 8V4M9 4h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="9" cy="14" r="1.3" fill="currentColor"/><circle cx="15" cy="14" r="1.3" fill="currentColor"/><path d="M9 17.5h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>

        <symbol id="icon-layout" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9 3v18" stroke="currentColor" stroke-width="1.6"/></symbol>

        <symbol id="icon-file-text" viewBox="0 0 24 24"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 2v5h5M8 13h8M8 17h8M8 9h3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>

        <symbol id="icon-mail" viewBox="0 0 24 24"><rect x="2.5" y="5" width="19" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m3.5 6.5 8.5 6 8.5-6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>

        <symbol id="icon-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3 20a6 6 0 0 1 12 0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M16 9a2.6 2.6 0 1 0 0-5.2M18 20a5 5 0 0 0-3.2-4.7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>

        <symbol id="icon-shield" viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5l-8-3Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></symbol>

        <symbol id="icon-lock" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 11V7a4 4 0 0 1 8 0v4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>

        <symbol id="icon-star" viewBox="0 0 24 24"><path d="M12 3.5 14.7 9l6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.9l6-.9L12 3.5Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></symbol>

        <symbol id="icon-tag" viewBox="0 0 24 24"><path d="M11 3h6a2 2 0 0 1 2 2v6a2 2 0 0 1-.6 1.4l-8 8a2 2 0 0 1-2.8 0l-6-6a2 2 0 0 1 0-2.8l8-8A2 2 0 0 1 11 3Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="15.5" cy="8.5" r="1.4" fill="currentColor"/></symbol>

        <symbol id="icon-settings" viewBox="0 0 24 24"><path d="M3 6h9M16 6h5M3 12h3M10 12h11M3 18h13M20 18h1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12.5" cy="6" r="2.3" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="6.5" cy="12" r="2.3" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="16.5" cy="18" r="2.3" fill="none" stroke="currentColor" stroke-width="1.6"/></symbol>

        <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m20 20-4.6-4.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>

        <symbol id="icon-rocket" viewBox="0 0 24 24"><path d="M12 2c3.5 1.5 6 6 5.5 11-1.8.3-3.6.1-5.5-1-1.9 1.1-3.7 1.3-5.5 1C6 8 8.5 3.5 12 2Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="12" cy="8.5" r="1.6" fill="currentColor"/><path d="M8.5 15c-1 .5-1.8 1.8-2 4 2.2-.2 3.5-1 4-2M15.5 15c1 .5 1.8 1.8 2 4-2.2-.2-3.5-1-4-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></symbol>

        <symbol id="icon-sparkles" viewBox="0 0 24 24"><path d="M11 2c.3 3 1.2 5 4.5 5.5C12.2 8 11.3 10 11 13c-.3-3-1.2-5-4.5-5.5C9.8 7 10.7 5 11 2Z" fill="currentColor"/><path d="M18.5 13c.2 1.6.7 2.6 2.5 3-1.8.4-2.3 1.4-2.5 3-.2-1.6-.7-2.6-2.5-3 1.8-.4 2.3-1.4 2.5-3Z" fill="currentColor"/></symbol>

        <symbol id="icon-trending-up" viewBox="0 0 24 24"><path d="M3 16 9.5 9.5 14 14 21 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 6H21v5.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>

        <symbol id="icon-briefcase" viewBox="0 0 24 24"><rect x="2.5" y="7.5" width="19" height="12.5" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M2.5 13h19" stroke="currentColor" stroke-width="1.6"/></symbol>

        <symbol id="icon-funnel" viewBox="0 0 24 24"><path d="M3 4h18l-7 9v6l-4 2v-8L3 4Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></symbol>

        <symbol id="icon-bank" viewBox="0 0 24 24"><path d="M12 2 22 8H2L12 2Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 8v10M9 8v10M15 8v10M20 8v10M2 21h20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>

        <symbol id="icon-bar-chart" viewBox="0 0 24 24"><path d="M4 20V11M12 20V4M20 20v-7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></symbol>

        <symbol id="icon-credit-card" viewBox="0 0 24 24"><rect x="2.5" y="5" width="19" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M2.5 10h19" stroke="currentColor" stroke-width="1.6"/><path d="M6 15h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>

        <symbol id="icon-waves" viewBox="0 0 24 24"><path d="M2 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M2 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>

        <symbol id="icon-mask" viewBox="0 0 24 24"><path d="M3 5c3 3 3 5 0 8 3 3 8 3 9 0M21 5c-3 3-3 5 0 8-3 3-8 3-9 0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="8" cy="9" r="1.1" fill="currentColor"/><circle cx="16" cy="9" r="1.1" fill="currentColor"/></symbol>

        <symbol id="icon-battery" viewBox="0 0 24 24"><rect x="2" y="7" width="17" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M21 10v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M6 10v4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></symbol>

        <symbol id="icon-ban" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m6 6 12 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>

        <symbol id="icon-check-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m8 12.5 2.5 2.5L16 9.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>

        <symbol id="icon-flask" viewBox="0 0 24 24"><path d="M9 2h6M10 2v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3.5L14 8V2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M7.5 15h9" stroke="currentColor" stroke-width="1.6"/></symbol>

        <symbol id="icon-message" viewBox="0 0 24 24"><path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-5 4v-4H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></symbol>
      </defs>
    </svg>
  `;

  function injectIconSprite() {
    if (document.getElementById('jauge-icon-sprite')) return;
    const wrap = document.createElement('div');
    wrap.id = 'jauge-icon-sprite';
    wrap.innerHTML = ICONS_SPRITE;
    document.body.insertBefore(wrap, document.body.firstChild);
  }

  function injectComponents() {
    injectIconSprite();

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

    const categoryPaths = ['/ia-automatisation', '/acquisition-growth', '/finance-assurances', '/la-jauge', '/categories'];
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
