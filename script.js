$( document ).ready(function() {
    $('.scroll').click(function() {
	    $('body').animate({
	        scrollTop: eval($('#' + $(this).attr('target')).offset().top)
	    }, 1000);
	});
});