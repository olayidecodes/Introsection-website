const menu = document.querySelector('.menu_bar');
const close = document.querySelector('.close_bar');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    nav.classList.add('open_nav')
})

close.addEventListener('click', () => {
    nav.classList.remove('open_nav')
})