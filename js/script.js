const navbarNav = document.querySelector('.navbar-nav')

const hamburgerMenu = document.querySelector('#hamburger-menu')

hamburgerMenu.addEventListener('click', (e) => {
    navbarNav.classList.toggle('active')
    e.preventDefault()
})

// klik diluat side bar untuk menghilangkan nav
document.addEventListener('click', (e) => {
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})

// Search Form
const searchForm = document.querySelector('.search-form')
const searchBox = document.getElementById('search-box')

document.querySelector('#search').onclick = (e) => {
    searchForm.classList.toggle('active')
    searchBox.focus()
    e.preventDefault()
}

// click untuk menghilangkan form search di luar button search
document.addEventListener('click', (e) => {
    if(!search.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active')
    }
})


