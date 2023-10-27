const MENU_BTN = document.querySelector('.menu-btn')
const NAV_MENU = document.querySelector('.nav-menu')

MENU_BTN.addEventListener('click', () => {
    NAV_MENU.classList.toggle('top-[74px]')
    NAV_MENU.classList.toggle('-top-[100vh]')
    NAV_MENU.classList.toggle('opacity-100')
    NAV_MENU.classList.toggle('opacity-40')
})

// Slider
const swiper = new Swiper('.swiper', {
    grabCursor: true,
    spaceBetween:30,
    pagination:{
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints:{
        767:{
            slidesPerView: 2
        }
    }
});