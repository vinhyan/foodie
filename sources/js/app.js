const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.links li');
const socialMedia = document.querySelectorAll('.social-media li');


const app = () => {
    burger.addEventListener('click', () => {

        // burger animation:
        burger.classList.toggle('activate');

        // nav menu mobile:
        navMenu.classList.toggle('nav-active');

        // nav links animation:
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `linksFade 0.5s ease forwards ${index / 7 + 0.3}s`
                }
        })
        socialMedia.forEach((link) => {
            // To reset the link.style.animation when click:
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `linksFade 0.5s ease forwards ${(navLinks.length + 1) / 7 + 0.3}s`
                }
        })
        const navActive = document.querySelector('.nav-active')
        if (navActive) {
            body.style.overflowY = "hidden";
        } else {
            body.style.overflowY = "visible";
        }
        
    });
}

app();
