

//reveal
window.sr = ScrollReveal();
// sr.reveal('.row', { duration: 2000 });
sr.reveal('.col', { duration: 1800 });
sr.reveal('.col-d', { duration: 2000, delay: 400 });

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


