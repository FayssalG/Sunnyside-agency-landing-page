const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('nav')
hamburger.addEventListener('click' , ()=>{
    console.log(nav)

    if (nav.classList.contains('nav-active')) {
        nav.classList.remove('nav-active')
    }
    else{
        nav.classList.add('nav-active')
    }
})

window.addEventListener('resize' , ()=>{
    nav.classList.remove('nav-active');
})