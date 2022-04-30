const navCloseEl = document.querySelector('.nav_close');
const navList = document.querySelector('.nav_list');
const navIconEl = document.querySelector('.nav_icon');
const navbgOverlayEl = document.querySelector('.nav_bgOverlay');


window.addEventListener('DOMContentLoaded', () => {
    document.body.style.visibility = 'visible';
});

const navOpen = () => {
    navList.classList.add('show');
    navbgOverlayEl.classList.add('active');
    document.body.style = 'visibility: visible; height: 100vh; width:100vw; overflow:hidden;';
}

const navClose = () => {
    navList.classList.remove('show');
    navbgOverlayEl.classList.remove('active');
    document.body.style = 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}

navIconEl.addEventListener('click', navOpen);

navCloseEl.addEventListener('click', navClose);

navbgOverlayEl.addEventListener('click', navClose)