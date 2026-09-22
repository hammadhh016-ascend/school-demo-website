document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var bannerCloseBtn = document.querySelector('.banner button');
  var banner = document.querySelector('.banner');
  if (bannerCloseBtn && banner) {
    if (sessionStorage.getItem('bannerDismissed') === '1') {
      banner.style.display = 'none';
    }
    bannerCloseBtn.addEventListener('click', function () {
      banner.style.display = 'none';
      sessionStorage.setItem('bannerDismissed', '1');
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var form = document.querySelector('form[data-demo-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var confirmation = form.querySelector('.form-confirmation');
      form.querySelectorAll('input, select, textarea, button[type="submit"]').forEach(function (el) {
        el.disabled = true;
      });
      if (confirmation) confirmation.hidden = false;
    });
  }
});
