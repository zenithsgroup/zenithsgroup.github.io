"use strict";

(function () {
    // Setelah halaman dimuat, atur scroll ke atas
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 500); // Ubah angka 500 sesuai kebutuhan, ini adalah waktu penundaan dalam milidetik
    });
})();
