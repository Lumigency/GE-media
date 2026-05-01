/* ==============================================
   LE GUIDE DE L'ENTREPRENEUR — components.js
   ============================================== */

(function () {
  'use strict';

  /* ---- NAV TEMPLATE ---- */
  const NAV_HTML = `
    <nav id="navbar" role="navigation" aria-label="Navigation principale">
      <div class="container">
        <div class="nav-inner">

          <a href="/" class="nav-logo" aria-label="Accueil">
            <span class="nav-logo-icon">GE</span>
            Le Guide de l'Entrepreneur
          </a>

          <div class="nav-links" role="list">
            <a href="/" class="nav-link">Accueil</a>

            <!-- Dropdown -->
            <div class="nav-dropdown">
              <button class="nav-link nav-dropdown-trigger">
                Catégories
              </button>

              <div class="nav-dropdown-menu">

                <a href="/categorie-ia-automatisation" class="nav-dropdown-item">
                  🤖 IA & Automatisation
                </a>

                <a href="/categorie-acquisition" class="nav-dropdown-item">
                  🎯 Acquisition & Growth
                </a>

                <a href="/categorie-assurances-finances" class="nav-dropdown-item">
                  💰 Finances & Assurances
                </a>

                <a href="/categorie-outils-logiciels" class="nav-dropdown-item">
                  🛠️ Outils & Logiciels
                </a>

                <div class="nav-dropdown-footer">
                  <a href="/categories">Voir toutes les catégories →</a>
                </div>

              </div>
            </div>

            <a href="/articles" class="nav-link">Articles</a>
            <a href="/outils" class="nav-link">Outils coup de cœur ❤️</a>
            <a href="/newsletter" class="nav-link">Newsletter</a>
            <a href="/a-propos" class="nav-link">À propos</a>
          </div>

          <a href="/newsletter" class="btn btn-primary btn-sm">
            S'abonner gratuitement
          </a>

          <button class="nav-burger" id="navBurger">
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

        <!-- MOBILE -->
        <div class="nav-mobile" id="navMobile">
          <a href="/" class="nav-link">Accueil</a>

          <div class="nav-mobile-accordion">
            <button class="nav-link nav-mobile-accordion-trigger">
              Catégories
            </button>

            <div class="nav-mobile-submenu">
              <a href="/categorie-ia-automatisation" class="nav-mobile-sublink">🤖 IA</a>
              <a href="/categorie-acquisition" class="nav-mobile-sublink">🎯 Acquisition</a>
              <a href="/categorie-assurances-finances" class="nav-mobile-sublink">💰 Finances</a>
              <a href="/categorie-outils-logiciels" class="nav-mobile-sublink">🛠️ Outils</a>
            </div>
          </div>

          <a href="/articles" class="nav-link">Articles</a>
          <a href="/outils" class="nav-link">Outils coup de cœur ❤️</a>
          <a href="/newsletter" class="nav-link">Newsletter</a>
          <a href="/a-propos" class="nav-link">À propos</a>

          <a href="/newsletter" class="btn btn-primary">S'abonner</a>
        </div>

      </div>
    </nav>
  `;

  /* ---- FOOTER ---- */
  const FOOTER_HTML = `
    <footer id="footer">
      <div class="container">

        <div class="footer-grid">

          <div>
            <strong>Le Guide de l'Entrepreneur</strong>
            <p>
              Le média pour automatiser ton business,
              choisir les bons outils et scaler intelligemment.
            </p>
          </div>

          <div>
            <p><strong>Explorer</strong></p>
            <ul>
              <li><a href="/categories">Toutes les catégories</a></li>
              <li><a href="/articles">Articles</a></li>
              <li><a href="/outils">Outils coup de cœur ❤️</a></li>
              <li><a href="/newsletter">Newsletter</a></li>
            </ul>
          </div>

          <div>
            <p><strong>Catégories</strong></p>
            <ul>
              <li><a href="/categorie-ia-automatisation">IA & Automatisation</a></li>
              <li><a href="/categorie-acquisition">Acquisition</a></li>
              <li><a href="/categorie-assurances-finances">Finances</a></li>
              <li><a href="/categorie-outils-logiciels">Outils</a></li>
            </ul>
          </div>

          <div>
            <p><strong>Le site</strong></p>
            <ul>
              <li><a href="/a-propos">À propos</a></li>
              <li><a href="/a-propos#contact">Contact</a></li>
              <li><a href="/a-propos#mentions-legales">Mentions légales</a></li>
              <li><a href="/a-propos#politique-affiliation">Affiliation</a></li>
            </ul>
          </div>

        </div>

        <div class="footer-bottom">
          <p>© 2026 Le Guide de l'Entrepreneur</p>
          <div>
            <a href="/a-propos#mentions-legales">Mentions</a>
            <a href="/a-propos#rgpd">RGPD</a>
          </div>
        </div>

      </div>
    </footer>
  `;

  /* ---- INJECT ---- */
  function injectComponents() {
    document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
    document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  }

  /* ---- BURGER ---- */
  function initBurger() {
    const burger = document.getElementById('navBurger');
    const mobile = document.getElementById('navMobile');

    if (!burger || !mobile) return;

    burger.addEventListener('click', () => {
      mobile.classList.toggle('open');
    });
  }

  /* ---- INIT ---- */
  document.addEventListener('DOMContentLoaded', () => {
    injectComponents();
    initBurger();
  });

})();
