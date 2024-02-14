const menu = document.querySelector('.menu')
const menuList = document.querySelector('.main-nav ul')
menu.addEventListener('click', ()=>{
    menuList.classList.toggle('showmenu');
})