'use strict'

let body = document.body;
let innerWindowWigth = window.innerWidth;
let innerWindowHeight = window.innerWidth;

// ? If you see an error here, it's normal.

class IsMobile {
    static Android() {
        return navigator.userAgent.match(/Android/i);
    }
    static BlackBerry() {
        return navigator.userAgent.match(/BlackBerry/i);
    }
    static iOS() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }
    static Opera() {
        return navigator.userAgent.match(/Opera Mini/i);
    }
    static Windows() {
        return navigator.userAgent.match(/IEMobile/i);
    }
    static any() {
        return (
            this.Android() || this.BlackBerry() ||
            this.iOS() || this.Opera() || this.Windows()
        );
    }
}
// ? IsMobile before ECMAScript 2015
/* const isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return ( isMobile.Android() || isMobile.BlackBerry() ||
            isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
 }; */

if (IsMobile.any()) {
    body.classList.add('_touch');
} else {
    body.classList.add('_pc');
};

function showOrHideSubmenu(e) {
    const submenu = document.querySelector('.navmenu__submenu');

    if (submenu !== undefined) {
        activateSubmenuButton.classList.toggle('active');
        submenu.classList.toggle('_active');
    }
}
const activateSubmenuButton = document.getElementById('activate-submenu-button');
activateSubmenuButton.addEventListener('click', showOrHideSubmenu);

function scrollToElement(eventData) {
    let scrollElement = document.querySelector('.' + eventData.target.dataset.scrollTo);

    if (scrollElement !== undefined) {
        let scrolltop = window.pageYOffset + scrollElement.getBoundingClientRect().top;

        // If you are using a fixed header, subtract its height from the scroll.
        window.scrollTo({
            top: scrolltop - 70,
            behavior: "smooth"
        });
    }
}
let scrollButtons = document.querySelectorAll('[data-scroll-to]');
for (let scrollButton of scrollButtons) {
    scrollButton.addEventListener('click', scrollToElement);
}

function show_onscroll(e) {
    const posTop = e.getBoundingClientRect().top;
    if (posTop < window.innerHeight) {
        e.classList.add('visible');
    }
}
let nonVisibleElements = document.querySelectorAll('[data-scroll-animated]');
nonVisibleElements.forEach(element => {
    window.addEventListener('scroll', function () {
        show_onscroll(element);
    });
});

window.addEventListener('scroll', function (e) {

    if (show_onscroll())
        sms.classList.add("loud");
});
