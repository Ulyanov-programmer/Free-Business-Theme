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


function headerToFixed(e) {
    // Calculating the degree of scrolling in pixels, 
    // multiply the innerWindowHeight by the desired scrolling percentage as 0.percent.
    /* Example:
        25 percent of innerWindowHeight = innerWindowHeight * 0.25 
        5 percent of 700 = 700 * 0.05
    */
    var scrollPercentage = innerWindowHeight * 0.15;

    if (pageYOffset > scrollPercentage) {
        burger.classList.add('burger-black');
        header.classList.add('fixed-header');
    } else {
        burger.classList.remove('burger-black');
        header.classList.remove('fixed-header');
    }
}
const header = document.querySelector('.header__body');
window.addEventListener('scroll', headerToFixed);
