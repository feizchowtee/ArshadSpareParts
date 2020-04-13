$(document).ready(function(){
    $('.burger').click(function(){
        $(this).toggleClass('burger-open');
        $('.mobile-menu').toggleClass('menu-open');
    });
});

//Rellax.JS



//ScrollReveal Options

ScrollReveal({
    reset: true,
    easing: 'cubic-bezier(0,.69,.42,.98)',
    rotate: {
        x: 5,
        y: 5,
        z: 5
    }
});

ScrollReveal().reveal('h1', {
    delay: 0,
    duration: 800,
    origin: 'bottom',
    distance: '20px'
});
ScrollReveal().reveal('h5', {
    delay: 0,
    duration: 800,
    origin: 'bottom',
    distance: '30px'
});
ScrollReveal().reveal('p', {
    delay: 0,
    duration: 800,
    origin: 'bottom',
    distance: '40px'
});
ScrollReveal().reveal('.links', {
    delay: 0,
    duration: 800,
    origin: 'bottom',
    distance: '80px'
});
ScrollReveal().reveal('.btn', {
    delay: 0,
    duration: 800,
    origin: 'bottom',
    distance: '80px'
});
ScrollReveal().reveal('.image-anim', {
    delay: 310,
    duration: 600,
    origin: 'top',
    distance: '80px'
});
ScrollReveal().reveal('.product', {
    delay: 0,
    duration: 800,
    origin: 'bottom',
    distance: '50px',
    interval: 300
});
ScrollReveal().reveal('.review', {
    delay: 0,
    duration: 800,
    origin: 'bottom',
    distance: '30px',
    interval: 300
});
ScrollReveal().reveal('.list-item', {
    delay: 0,
    duration: 800,
    origin: 'bottom',
    distance: '30px',
    interval: 300
});