$( document ).ready(function() {
    $('.scroll').click(function() {
	    $('body').animate({
	        scrollTop: eval($('#' + $(this).attr('target')).offset().top)

	    }, 1000);

	   	if ($(this).attr('target') === 'resume') {
	        $('#field-name').focus();
	    }
	});

	// Activities Card Shake
	$('#card-robot')
	  .visibility({
	    onTopVisible: function(calculations) {
	    	$('#card-robot').transition('tada');
	    	$('#card-web').transition('tada');
			$('#card-hack').transition('tada');
	    },
	    onTopPassed: function(calculations) {
	      	// Trigger for skills

			$('#skill-html').progress();
			$('#skill-css').progress();
			$('#skill-js').progress();
			$('#skill-emberjs').progress();
			$('#skill-java').progress();
			$('#skill-linux').progress();
			$('#skill-vba').progress();
			$('#skill-photoshop').progress();

			setTimeout(function(){
				$('#skill-html').progress('remove active');
				$('#skill-css').progress('remove active');
				$('#skill-js').progress('remove active');
				$('#skill-emberjs').progress('remove active');
				$('#skill-java').progress('remove active');
				$('#skill-linux').progress('remove active');
				$('#skill-vba').progress('remove active');
				$('#skill-photoshop').progress('remove active');
			}, 2000);
	    },
	    onUpdate: function(calculations) {
	    }
	});
});

