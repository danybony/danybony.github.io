(function () {
  'use strict';

  var root = document.documentElement;
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  // ---- Theme toggle -------------------------------------------------------
  // Without a saved choice the site follows the system setting. Clicking the
  // toggle saves the opposite of what is currently shown.

  function notifyTheme() {
    document.dispatchEvent(new CustomEvent('themechange', { detail: { dark: window.siteTheme.isDark() } }));
  }

  document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
    button.addEventListener('click', function () {
      var next = window.siteTheme.isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      notifyTheme();
    });
  });

  darkQuery.addEventListener('change', function () {
    if (!root.hasAttribute('data-theme')) notifyTheme();
  });

  // ---- Header: shadow on scroll and mobile menu ---------------------------

  var header = document.querySelector('[data-header]');
  var onScroll = function () {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var navToggle = document.querySelector('[data-nav-toggle]');
  var setNavOpen = function (open) {
    header.classList.toggle('nav-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  navToggle.addEventListener('click', function () {
    setNavOpen(!header.classList.contains('nav-open'));
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setNavOpen(false);
  });

  // ---- External links in a new tab ----------------------------------------

  document.querySelectorAll('a[href^="http"]').forEach(function (link) {
    if (link.hostname !== location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // ---- Copy link button ---------------------------------------------------

  document.querySelectorAll('[data-copy-link]').forEach(function (button) {
    button.addEventListener('click', function () {
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(button.getAttribute('data-copy-link')).then(function () {
        button.classList.add('is-copied');
        button.setAttribute('title', 'Link copied');
        setTimeout(function () {
          button.classList.remove('is-copied');
          button.setAttribute('title', 'Copy link');
        }, 2000);
      });
    });
  });

  // ---- Lightbox -----------------------------------------------------------
  // Opens gallery images and any image in a post that links to a larger image.

  var dialog = document.querySelector('[data-lightbox]');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  var dialogImg = dialog.querySelector('[data-lightbox-img]');
  var dialogCaption = dialog.querySelector('[data-lightbox-caption]');
  var isImage = /\.(jpe?g|png|gif|webp|avif)(\?.*)?$/i;
  var items = [];
  var current = 0;

  document.querySelectorAll('[data-lightbox-group], .prose a').forEach(function (link) {
    if (!isImage.test(link.getAttribute('href') || '') || !link.querySelector('img')) return;
    if (items.indexOf(link) !== -1) return;
    items.push(link);
    link.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      open(items.indexOf(link));
    });
  });

  function groupOf(link) {
    var name = link.getAttribute('data-lightbox-group');
    return name ? items.filter(function (l) { return l.getAttribute('data-lightbox-group') === name; }) : [link];
  }

  function show(index) {
    current = index;
    var link = items[index];
    var thumb = link.querySelector('img');
    dialogImg.src = link.href;
    dialogImg.alt = thumb ? thumb.alt : '';
    var caption = link.getAttribute('data-caption') || link.getAttribute('title') || '';
    dialogCaption.textContent = caption;
    dialogCaption.hidden = !caption;
    var multiple = groupOf(link).length > 1;
    dialog.classList.toggle('lightbox--single', !multiple);
  }

  function open(index) {
    show(index);
    dialog.showModal();
  }

  function step(delta) {
    var group = groupOf(items[current]);
    var pos = group.indexOf(items[current]);
    var next = group[(pos + delta + group.length) % group.length];
    show(items.indexOf(next));
  }

  dialog.querySelector('[data-lightbox-close]').addEventListener('click', function () { dialog.close(); });
  dialog.querySelector('[data-lightbox-prev]').addEventListener('click', function () { step(-1); });
  dialog.querySelector('[data-lightbox-next]').addEventListener('click', function () { step(1); });
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog || e.target.classList.contains('lightbox__figure')) dialog.close();
  });
  dialog.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
  dialog.addEventListener('close', function () {
    dialogImg.removeAttribute('src');
  });
})();
