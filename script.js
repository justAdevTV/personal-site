$( document ).ready(function() {
    $('.scroll').click(function() {
	    $('body').animate({
	        scrollTop: eval($('#' + $(this).attr('target')).offset().top)
	    }, 1000);
	});

	// Trigger for skills

	$('#skill-html').progress();
	$('#skill-css').progress();
	$('#skill-js').progress();
	$('#skill-emberjs').progress();
	$('#skill-java').progress();
	$('#skill-linux').progress();
	$('#skill-vba').progress();
	$('#skill-photoshop').progress();

});

