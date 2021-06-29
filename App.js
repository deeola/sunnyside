const hamburger = document.getElementById('hamIcons');
const backgroundLayer = document.getElementById('background')

const navbar = document.getElementById('nav-lang-container');

gsap.registerPlugin(ScrollTrigger);


hamburger.addEventListener('click', () => {
    navbar.classList.toggle('showNav')
    backgroundLayer.classList.toggle('showNav')

    //ANIMATE NAVBAR ON CLICK
    gsap.from('.nav-lang-container', {
        duration:1,
        x:300
    })

    //ANIMATE DARK LAYER ON CLICK

    gsap.from('.background', {
        duration:1,
        opacity:0
    })


})


const windowWidth = window.innerWidth

windowWidth < 750 ? gsap.from('.header', {
    x:100,
    duration:1,
    ease:'easeInOut'
}) : ''





gsap.from('.logo', {
    duration: 1.5,
    x:-300,
    ease: 'power2'
    // rotation : 360
}, windowWidth < 750 ? 1.2 : '')

gsap.from('.hamIcons', {
    duration:1.5,
    x:300,
    ease: 'power2'
},windowWidth < 750 ? 1.2 : '')

gsap.from('.nav-lang-container', {
    duration:1.5,
    x:300,
    ease: 'power2'
},windowWidth < 750 ? 1.2 : '')





gsap.timeline()
    .from('.hero-text', {
        duration:3,
        ease:'back',
        scale:0,
        opacity:0
    },windowWidth < 750 ? 1.2 : '')

    .from('.hero-icon',{
        duration:1,
        ease:'bounce',
        scale:0,
        rotation:360
    })


    //SECTION ANIMATIONS



const eggDiv = document.getElementById('section-image');

gsap.timeline()
    .from(eggDiv,{
        duration:1.2,
        x:-300,
        ease: 'easeOut'
    })
    .from( windowWidth < 750 ? eggDiv.firstElementChild : eggDiv.firstElementChild.nextElementSibling ,{
        scale:0.9,
        duration: 1.2,
        ease : 'easeOut'

    },.2)


    let tl = gsap.timeline({
        scrollTrigger: {
            trigger : '.first-section-main-text'
        }

    })

    tl.to('.first-section-main-text',{
        
        // scrollTrigger: {
        //     trigger : '.first-section-main-text'
        // },

        x:0,
        ease:'easeOut',
        opacity:1,
        duration: 2
    })



