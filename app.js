const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    const toTop = document.querySelector('.to-top');
        toTop.classList.toggle('active', window.scrollY > 150);
});