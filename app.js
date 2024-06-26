const navmenu = document.querySelector('#mobile-menu')
const menuLink = document.querySelector('.navbar__menu')

navmenu.addEventListener('click',function()
{
    navmenu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
});