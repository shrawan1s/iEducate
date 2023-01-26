let burger = document.querySelector('.burger')
let navbar = document.querySelector('.navbar')
let navlist = document.querySelector('.nav-list')
let rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', () => {
    navlist.classList.toggle('v-class-resp')
    rightNav.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})
