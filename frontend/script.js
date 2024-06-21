const menu =  document.querySelector('.menu');
const menuOpener = document.querySelector('.menuOpener');

menuOpener.addEventListener('click', () => {
    menuOpener.classList.toggle('active');
    menu.classList.toggle('active');
});