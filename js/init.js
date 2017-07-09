

//reveal
window.sr = ScrollReveal();
sr.reveal('.row');
sr.reveal('.col');



(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

//slider
$('.carousel.carousel-slider').carousel({fullWidth: true});