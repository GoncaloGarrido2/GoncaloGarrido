/**
* Template Name: Personal
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Updated: Nov 04 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    document.documentElement.classList.add('aos-ready');
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  let typedInstance = null;

  function initTyped() {
    if (!selectTyped || !window.Typed) return;

    if (typedInstance && typeof typedInstance.destroy === 'function') {
      typedInstance.destroy();
    }

    let typed_strings = selectTyped.getAttribute('data-typed-items');
    if (!typed_strings) return;

    typed_strings = typed_strings.split(',');
    selectTyped.textContent = '';

    typedInstance = new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 48,
      backSpeed: 28,
      backDelay: 2400,
      smartBackspace: true,
      showCursor: true,
      cursorChar: '|',
      fadeOut: false
    });
  }

  window.portfolioRefreshTyped = initTyped;
  initTyped();

  /**
   * Calculate and render age from birthdate
   */
  function updateAge() {
    const ageElement = document.querySelector('#current-age');
    if (!ageElement) return;

    const birthdateValue = ageElement.getAttribute('data-birthdate');
    if (!birthdateValue) return;

    const birthdate = new Date(`${birthdateValue}T00:00:00`);
    if (Number.isNaN(birthdate.getTime())) return;

    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > birthdate.getMonth() ||
      (today.getMonth() === birthdate.getMonth() && today.getDate() >= birthdate.getDate());

    if (!hasHadBirthdayThisYear) {
      age -= 1;
    }

    const currentLanguage = document.documentElement.dataset.language || document.documentElement.lang || 'pt';
    const isEnglish = currentLanguage.toLowerCase().startsWith('en');
    const ageLabel = isEnglish ? (age === 1 ? 'year old' : 'years old') : 'anos';

    ageElement.textContent = `${age} ${ageLabel}`;
  }

  updateAge();
  window.addEventListener('portfolio:languageChanged', updateAge);

  /**
   * Initiate Pure Counter
   */
  if (window.PureCounter) {
    new PureCounter();
  }

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  if (window.Waypoint) {
    skillsAnimation.forEach((item) => {
      new Waypoint({
        element: item,
        offset: '80%',
        handler: function(direction) {
          let progress = item.querySelectorAll('.progress .progress-bar');
          progress.forEach(el => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        }
      });
    });
  }

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    if (!window.Swiper) return;

    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab") && typeof initSwiperWithCustomPagination === 'function') {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  if (window.GLightbox) {
    GLightbox({
      selector: '.glightbox'
    });
  }

  /**
   * Stack «Tecnologias utilizadas» chips under the label (not inline).
   * Re-run after i18n language switches.
   */
  function stackTechElement(el, chipClass) {
    const raw = (el.getAttribute('data-tech-raw') || el.textContent || '').trim();
    if (!raw) return;
    el.setAttribute('data-tech-raw', raw);
    const parts = raw.split(/\s*[·,]\s*/).map(function(part) {
      return part.trim();
    }).filter(Boolean);
    el.textContent = '';
    el.classList.add('tech-stack-list');
    const list = parts.length ? parts : [raw];
    list.forEach(function(part) {
      const chip = document.createElement('span');
      chip.className = chipClass;
      chip.textContent = part;
      el.appendChild(chip);
    });
  }

  function stackPortfolioTechLists(root) {
    const scope = root || document;
    scope.querySelectorAll('.proj-tech-list').forEach(function(el) {
      stackTechElement(el, 'proj-tech-chip');
    });
    scope.querySelectorAll('.case-body > h2[data-i18n="case.technologies"] + p, .case-stack .case-tech').forEach(function(el) {
      stackTechElement(el, 'case-tech-chip');
    });
  }

  function restackPortfolioTechLists() {
    document.querySelectorAll('.proj-tech-list, .case-body > h2[data-i18n="case.technologies"] + p, .case-stack .case-tech').forEach(function(el) {
      const text = el.textContent.trim();
      if (text) el.setAttribute('data-tech-raw', text);
    });
    stackPortfolioTechLists(document);
  }

  restackPortfolioTechLists();
  window.addEventListener('portfolio:languageChanged', restackPortfolioTechLists);

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    if (!window.imagesLoaded || !window.Isotope) return;

    let layout = isotopeItem.getAttribute('data-layout') ?? 'fitRows';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
    const container = isotopeItem.querySelector('.isotope-container');
    if (!container) return;

    let initIsotope = null;
    let pendingFilter = null;

    function sortForFilter(nextFilter) {
      // Sites: clientes / 2S / 4 Em Linha primeiro; Smile (featured+web) depois
      return nextFilter === '.filter-web' ? 'sitesOrder' : (sort || 'original-order');
    }

    function arrange(nextFilter) {
      if (!initIsotope) {
        pendingFilter = nextFilter;
        return;
      }
      initIsotope.arrange({
        filter: nextFilter,
        sortBy: sortForFilter(nextFilter)
      });
      // Keep container height in sync after images/fonts
      requestAnimationFrame(function() {
        if (initIsotope) initIsotope.layout();
      });
    }

    imagesLoaded(container, function() {
      const initialFilter = pendingFilter || filter;
      initIsotope = new Isotope(container, {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        percentPosition: true,
        filter: initialFilter,
        sortBy: sortForFilter(initialFilter),
        getSortData: {
          sitesOrder: '[data-sites-order] parseInt'
        },
        fitRows: { gutter: 0 },
        masonry: {
          columnWidth: '.portfolio-item',
          gutter: 0
        }
      });
      pendingFilter = null;
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.setAttribute('role', 'button');
      filters.setAttribute('tabindex', '0');
      if (!filters.getAttribute('aria-pressed')) {
        filters.setAttribute('aria-pressed', filters.classList.contains('filter-active') ? 'true' : 'false');
      }

      function applyFilter(el) {
        isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(item) {
          item.classList.remove('filter-active');
          item.setAttribute('aria-pressed', 'false');
        });
        el.classList.add('filter-active');
        el.setAttribute('aria-pressed', 'true');
        arrange(el.getAttribute('data-filter'));
        // Do not re-init AOS here — it collapses/shifts the grid
      }

      filters.addEventListener('click', function() {
        applyFilter(this);
      }, false);

      filters.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          applyFilter(this);
        }
      }, false);
    });

  });

})();

