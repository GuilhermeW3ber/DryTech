window.addEventListener("load", ()=>{
    const loader=document.querySelector(".loader")
    loader.classList.add("loader-hidden")

    loader.addEventListener("transition", ()=>{
        documento.body.removeChild("loader")
    })
})

// Menu mobile
const menu = document.querySelector('#mobile-menu');
const menuPages = document.querySelector('.navbarMenu');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuPages.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

//  Fechar menu mobile
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);