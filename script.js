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

	// Activities Card Shake
	$('#card-robot')
	  .visibility({
	    onTopVisible: function(calculations) {
	    	$('#card-robot').transition('tada');
	    	$('#card-web').transition('tada');
			$('#card-hack').transition('tada');
	    },
	    onTopPassed: function(calculations) {
	      // top of element passed
	    },
	    onUpdate: function(calculations) {
	      // do something whenever calculations adjust
	      
	    }
	});
});

