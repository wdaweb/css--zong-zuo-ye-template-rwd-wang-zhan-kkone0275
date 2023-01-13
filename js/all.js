const btnClose = document.querySelector(".xmark")
const btnOpen = document.querySelector('.title-icon')
const slideBar = document.querySelector('.slide-bar')

btnOpen.addEventListener('click', () => {
    slideBar.classList.add('slide-bar-active')
})

btnClose.addEventListener('click', () => {
    slideBar.classList.remove('slide-bar-active')
})

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    if (width > 768) {
        slideBar.classList.remove('slide-bar-active')
    }
})