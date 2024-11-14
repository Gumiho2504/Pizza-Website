/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

//show menu

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

// hide menu
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
   
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
    // when we click on each nav_link , we remove the show-menu class
}
navLink.forEach(n=> n.addEventListener('click',linkAction))

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = ()=>{
    const header = document.getElementById('header')
    // add a class if the bottom offset is greater then 50 of
    this.scrollY >=50 ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
    
}


window.addEventListener('scroll',shadowHeader)

/*=============== SWIPER POPULAR ===============*/

const swiperPopular = new Swiper('.popular_swiper', {
    loop: true,
    grapCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto'
  })

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
