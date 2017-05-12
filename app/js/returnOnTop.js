$(document).ready( function () {
    //	Add return on top button
    $('body').append('<div id="returnOnTop" title="Retour en haut"><i class="fa fa-arrow-up" aria-hidden="true"></i></div>');

    //	On button click, let's scroll up to top
    $('#returnOnTop').click( function() {
	$('html,body').animate({scrollTop: 0}, 'slow');
    });
});

$(window).scroll(function() {
    //	If on top fade the bouton out, else fade it in

  if ( $(window).scrollTop() == 0 )
  $('#returnOnTop').fadeOut();
    else
  $('#returnOnTop').fadeIn();


  if ( $(window).scrollTop() == 0 )
  $('#aaa').fadeOut();
  else
  $('#aaa').fadeIn();
});
