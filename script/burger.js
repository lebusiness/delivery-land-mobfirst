const header = document.querySelector('.header')
const burger_btn = document.querySelector('.header__burger-ic');
const menu = document.querySelector('.header__dynamic-menu');
const menuHeight = menu.clientHeight;

const burgerTop = document.querySelector('.burger-top');
const burgerMiddle = document.querySelector('.burger-middle');
const burgerBottom = document.querySelector('.burger-bottom');

burger_btn.addEventListener('click', () => {
    menu.classList.toggle('header-visible');
    burgerTop.classList.toggle('burger-top-active');
    burgerMiddle.classList.toggle('burger-middle-active');
    burgerBottom.classList.toggle('burger-bottom-active');
    header.classList.toggle('header-dark');
})