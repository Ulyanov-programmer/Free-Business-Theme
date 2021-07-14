'use strict'

let body = document.body;
let innerWindowWigth = window.innerWidth;
let innerWindowHeight = window.innerWidth;

// ? If you see an error here, it's normal.

@@include('_isMobile.js');

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
    let scrollData = eventData.target;

    let scrollElement = document.querySelector(`.${scrollData.dataset.scrollTo}`);

    if (scrollData.dataset.scrollTo === 'about-us') {
        scrollElement.scrollIntoView({ block: "center", behavior: "smooth" });
    } else {
        scrollElement.scrollIntoView({ block: "start", behavior: "smooth" });
    }
}
let scrollButtons = document.querySelectorAll('[data-scroll-to]');
for (const scrollButton of scrollButtons) {
    scrollButton.addEventListener('click', scrollToElement);
}