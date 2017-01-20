var isSubmitted = false;

$( document ).ready(function() {

	$('.side-nav-bar.sidebar').sidebar({
		onChange: function(){
			$('#sticky').transition('fade');
		},
		scrollLock: true,
		transition: 'overlay'
	});

	$('.ui.sticky').sticky({
		offset: 50,
		context: '#footer'
	});

    $('.scroll').click(function() {
	    $('body').animate({
	        scrollTop: eval($('#' + $(this).attr('target')).offset().top)

	    }, 1000);

	   	if ($(thisattr('target') === 'resume')) {
	        $('#field-name').focus();
	        setTimeout(function(){
		        $('#field-name').transition('tada');
	        }, 500);
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

function toggleButton() {
	
	var formData = $('form').serializeArray();

	if (isSubmitted) {
		$('#field-name-div').removeClass('disabled');
	    $('#field-email-div').removeClass('disabled');
	    $('#field-message-div').removeClass('disabled');

	    $('#toggle-button').removeClass('active');
	    $('#toggle-button').text('Submit');

	    isSubmitted = false;

	} else if (formData[0].value != '' && (validateEmail(formData[1].value)) && formData[2].value != '') {
		
 		$('#field-name-div').addClass('disabled');
	    $('#field-email-div').addClass('disabled');
	    $('#field-message-div').addClass('disabled');

	    $('#toggle-button').addClass('active');
	    $('#toggle-button').text('Submitted');

		isSubmitted = true;

	}	

	setTimeout(function(){
		$(':input').val('');
	}, 1);

}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function toggleSideNav(){
	$('.ui.labeled.icon.sidebar').sidebar('toggle');
}