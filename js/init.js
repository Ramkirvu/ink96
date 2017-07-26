
// reveal
window.sr = ScrollReveal();

sr.reveal('.rev', {
    duration: 1800,
    origin: 'top',
    distance: '50px',
    reset: true,
    viewFactor: 0.5,
    // mobile: false
});
sr.reveal('.rev-bot', {
    duration: 1800,
    origin: 'bottom',
    distance: '50px',
    reset: true,
    viewFactor: 0.5,
    // mobile: false
});
sr.reveal('.rev-d', {
    duration: 2000,
    delay: 400,
    origin: 'top',
    distance: '60px',
    scale: 0.1,
    reset: true,
    viewFactor: 0.5,
    // mobile: false
});
// sr.reveal('.carousel', {
//     duration: 1200,
//     origin: 'bottom',
//     distance: '50px',
//     scale: 0.1,
//     reset: true,
//     viewFactor: 0.5,
// });

if (sr.isSupported()) {
    document.documentElement.classList.add('sr');
}

(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  });
})(jQuery);


