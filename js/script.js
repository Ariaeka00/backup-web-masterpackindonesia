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

document.addEventListener('scroll', (e) => {
    if(!search.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active')
    }
})

// slider
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide')
    let currentSlide = 0;
    const slideInterval = 7000;

    function showslide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev')
            if(i === index) {
                slide.classList.add('active')
            } else if(i === (index - 1 + slides.length) % slide.length) {
                slide.classList.add('prev')
            }
        })
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showslide(currentSlide)
    }

    // Set Background Images
    slides.forEach(slide => {
        const imgUrl = slide.getAttribute('data-image')
        slide.style.backgroundImage = `url(${imgUrl})`
    })

    setInterval(nextSlide, slideInterval)

    showslide(currentSlide)
});


// shopping cart
const shoppingCartButton = document.getElementById('shopping-cart')
const shoppingCart = document.querySelector('.shopping-cart')

shoppingCartButton.addEventListener('click', (e) => {
    shoppingCart.classList.toggle('active')
    e.preventDefault()
})

// klik untuk menghilangkan shopping cart 
document.addEventListener('click', (e) => {
    if(!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active')
    }
})

// modal detail
const detail = document.querySelectorAll('.btn-detail')
const modals = document.querySelectorAll('.modal')

detail.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const modalNumber = btn.dataset.modal
        const modalshow = modals[modalNumber - 1]
        modalshow.style.display = 'flex'
        e.preventDefault()
    })
})

// close detail
modals.forEach((modal) => {
    const close = modal.querySelector('.close-icon')
    close.addEventListener('click', (e) => {
        modal.style.display = 'none'
        e.preventDefault()
    })
})

// klik diluar detail
window.addEventListener('click', (e) => {
    if(e.target == modals) {
        modals.style.display = 'none'
    }
})


