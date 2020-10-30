const hamburgerMenu = document.querySelector('.hamburger-menu');
const headerNav = document.querySelector('.header__nav');
const headerNavItems = document.querySelectorAll('.header__list > *')

function animateHamburgerMenu() {
    hamburgerMenu.classList.toggle('hamburger-menu--open')
}

function showNav() {
    headerNav.classList.toggle('header__nav--active');
}

function animateNavItems() {
    headerNavItems.forEach((item, index) => {
        if (item.style.animation) {
            item.style.animation = '';
        } else {
            item.style.animation = `fadeInRight 1s ease forwards ${index / 7}s`
        }
    })
}

function toggleNav() {
    animateHamburgerMenu();
    showNav();
    animateNavItems();
}

hamburgerMenu.addEventListener('click', toggleNav);