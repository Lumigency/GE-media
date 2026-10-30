/* Jauge — comportements du site (menu, filtres, sommaire, formulaires) */
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


async function postJSON(url, data) {
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.message || "Une erreur est survenue. Réessaie dans un instant.");
  return json;
}

function initNewsletterForms() {
  document.querySelectorAll("form.newsletter-form, form[data-newsletter]").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type=\"email\"]");
      const btn = form.querySelector("button[type=\"submit\"]");
      if (!input || !btn) return;
      const original = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Envoi…";
      try {
        await postJSON("/api/newsletter", { email: input.value, source: location.pathname });
        btn.textContent = "✓ C’est noté, à très vite !";
        input.value = "";
      } catch (err) {
        btn.textContent = original;
        alert(err.message);
      } finally {
        setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 5000);
      }
    });
  });
}

function initContactForm() {
  const form = document.querySelector("form.contact-form");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type=\"submit\"]");
    const data = Object.fromEntries(new FormData(form).entries());
    const original = btn ? btn.textContent : "";
    if (btn) { btn.disabled = true; btn.textContent = "Envoi…"; }
    try {
      await postJSON("/api/contact", data);
      form.reset();
      if (btn) btn.textContent = "✓ Message envoyé, on te répond vite";
    } catch (err) {
      if (btn) btn.textContent = original;
      alert(err.message);
    } finally {
      setTimeout(() => { if (btn) { btn.textContent = original; btn.disabled = false; } }, 6000);
    }
  });
}

setActiveNavLink();
initNavScroll();
initBurger();
initDropdown();
initMobileAccordion();
initReadingProgress();
initFilters();
initTocScroll();
initNewsletterForms();
initContactForm();
