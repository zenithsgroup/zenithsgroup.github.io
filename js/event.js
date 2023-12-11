"use strict";

var ScrollHandler = (function() {
    function init() {
        // Disini anda bisa akses document
        // Anda bisa set up event handler di sini
    }

    function load() {
        document.addEventListener("DOMContentLoaded", function () {
            var navbar = document.querySelector('.navbar');

            window.addEventListener('scroll', function () {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        });
    }

    // Fungsi lainnya bisa ditambahkan di sini

    return {
        init: init,
        load: load
    };
})();

window.addEventListener("load", ScrollHandler.load);
