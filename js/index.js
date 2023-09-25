'use strict';

let textContainer = document.querySelector('.text-container');

(function active() {
    setTimeout(() => {
        textContainer.classList.toggle('text-container-active');
    }, 1200);
    setTimeout(active, 4000);
})();