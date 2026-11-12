(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');

  if (header && toggle && nav) {
    var setMenu = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      nav.classList.toggle('is-open', open);
    };

    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', function (event) {
      var link = event.target.closest('a');

      if (!link) {
        return;
      }

      setMenu(false);

      var hash = link.getAttribute('href');
      var target = hash && hash.charAt(0) === '#' && hash.length > 1
        ? document.getElementById(hash.slice(1))
        : null;
      var heading = target ? target.querySelector('h1, h2') : null;

      if (heading) {
        heading.setAttribute('tabindex', '-1');
        window.setTimeout(function () {
          heading.focus({ preventScroll: true });
        }, 0);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });

    document.addEventListener('click', function (event) {
      if (toggle.getAttribute('aria-expanded') === 'true' && !header.contains(event.target)) {
        setMenu(false);
      }
    });

    var desktop = window.matchMedia('(min-width: 960px)');
    var closeOnDesktop = function (event) {
      if (event.matches) {
        setMenu(false);
      }
    };

    if (desktop.addEventListener) {
      desktop.addEventListener('change', closeOnDesktop);
    } else {
      desktop.addListener(closeOnDesktop);
    }
  }

  var tablist = document.querySelector('[role="tablist"]');

  if (tablist) {
    var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
    var panels = tabs.map(function (tab) {
      return document.getElementById(tab.getAttribute('aria-controls'));
    });

    var activate = function (index, moveFocus) {
      tabs.forEach(function (tab, i) {
        var selected = i === index;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;

        if (panels[i]) {
          panels[i].classList.toggle('is-active', selected);
          panels[i].hidden = !selected;
        }
      });

      if (moveFocus) {
        tabs[index].focus();
      }
    };

    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        activate(index, false);
      });

      tab.addEventListener('keydown', function (event) {
        var next = null;

        if (event.key === 'ArrowRight') {
          next = (index + 1) % tabs.length;
        } else if (event.key === 'ArrowLeft') {
          next = (index - 1 + tabs.length) % tabs.length;
        } else if (event.key === 'Home') {
          next = 0;
        } else if (event.key === 'End') {
          next = tabs.length - 1;
        }

        if (next !== null) {
          event.preventDefault();
          activate(next, true);
        }
      });
    });

    activate(0, false);
  }
})();
