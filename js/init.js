

//reveal
window.sr = ScrollReveal();
sr.reveal('.row');
sr.reveal('.col');
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


