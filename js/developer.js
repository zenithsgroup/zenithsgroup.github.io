"use strict";

(function () {
    // Anda tidak ada akses ke document disini, anda akses window
    window.addEventListener("load", init);

    function init() {
        // Disini anda bisa akses document
        // Anda bisa set up event handler di sini
        let imgBx = document.querySelectorAll('.imgBx');
        let contentBx = document.querySelectorAll('.contentBx');

        for (let i = 0; i < imgBx.length; i++) {
            imgBx[i].addEventListener('mouseover', function () {
                for (let i = 0; i < contentBx.length; i++) {
                    contentBx[i].className = 'contentBx';
                }
                document.getElementById(this.dataset.id).className = 'contentBx active';

                for (let i = 0; i < imgBx.length; i++) {
                    imgBx[i].className = 'imgBx';
                }
                this.className = 'imgBx active';
            });
        }
    }

    //fungsi anda yang lain
})();
