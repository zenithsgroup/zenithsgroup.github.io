"use strict";

(function() {
  function init() {
    // Disini anda bisa akses document
    // Anda bisa set up event handler di sini

    function togglePassword(inputId) {
      var passwordInput = document.getElementById(inputId);
      var eyeIcon = document.getElementById("show-" + inputId);

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
      } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
      }
    }

    // Memanggil fungsi togglePassword dengan parameter yang sesuai
    togglePassword("yourInputIdHere");
  }

  window.addEventListener("load", init);
})();
