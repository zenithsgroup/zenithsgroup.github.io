"use strict";

(function() {
  function init() {
    const switchers = [...document.querySelectorAll('.switcher')];

    switchers.forEach(item => {
      item.addEventListener('click', function () {
        switchers.forEach(item => item.parentElement.classList.remove('is-active'));
        this.parentElement.classList.add('is-active');
      });
    });

    document.querySelectorAll('.form').forEach(form => {
      form.addEventListener('submit', function (event) {
        const emailInput = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');

        if (!emailInput.value || !passwordInput.value) {
          alert('Harap isi semua kolom formulir!');
          event.preventDefault();
        }
      });
    });
  }

  window.addEventListener("load", init);
})();
