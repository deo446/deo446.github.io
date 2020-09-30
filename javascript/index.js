//navigation bar
const navSlide = () => {
    const mobileNav = document.querySelector('.mobileNav');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');

    //toggle Nav
    mobileNav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            }
            else {
                link.getElementsByClassName.animation = 'navLinkFade 0.5s ease forwards ${index/5 + 16}s'
                console.log(index);
            }
    })

    
    })
}

navSlide();