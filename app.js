$(document).ready(function(){
    $('.burger').click(function(){
        $(this).toggleClass('burger-open');
        $('.mobile-menu').toggleClass('menu-open');
    });
});

//Rellax.JS


var controller = new ScrollMagic.Controller();

$('h1').each(function(i){

    var titles = $(this);

    var animateTitles = new TimelineMax();
    animateTitles
    .from(titles, 0.5, { skewX: 10, autoAlpha: 0, y: 30 });



   new ScrollMagic.Scene({
       triggerElement : this,
       triggerHook: 0.8
       
   })
   .setTween(animateTitles).addTo(controller);

});


$('h5').each(function(i){

    var subTitles = $(this);

    var animateTitles = new TimelineMax();
    animateTitles
    .from(subTitles, 0.5, { skewX: -10, autoAlpha: 0, y: 40 });



   new ScrollMagic.Scene({
       triggerElement : this,
       triggerHook: 0.8
       
   })
   .setTween(animateTitles).addTo(controller);

});


$('.list-item').each(function(i){

    var listItem = $(this);

    var animateTitles = new TimelineMax();
    animateTitles
    .from(listItem, 0.5, { skewX: 10, autoAlpha: 0, y: 30, stagger: 0.4 });



   new ScrollMagic.Scene({
       triggerElement : this,
       triggerHook: 0.8
       
   })
   .setTween(animateTitles).addTo(controller);

});
$('.product').each(function(i){

    var product = $(this);

    var animateTitles = new TimelineMax();
    animateTitles
    .from(product, 0.5, { skewX: 10, autoAlpha: 0, y: 30, stagger: 0.4 });



   new ScrollMagic.Scene({
       triggerElement : this,
       triggerHook: 0.8
       
   })
   .setTween(animateTitles).addTo(controller);

});

