

// reveal
window.sr = ScrollReveal();
sr.reveal('.col', {
    duration: 1800,
    origin: 'top',
    distance: '100px',
    reset: false,
    viewFactor: 0.4
});
sr.reveal('.col-d', {
    duration: 2000,
    delay: 400,
    origin: 'top',
    distance: '100px',
    scale: 0.2,
    reset: false,
    viewFactor: 0.4
});

if (sr.isSupported()) {
    document.documentElement.classList.add('sr');
}


(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  }); // end of document ready
})(jQuery); // end of jQuery name space


