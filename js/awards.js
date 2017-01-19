$( document ).ready(function() {
	$('.side-nav-bar.sidebar').sidebar({
		onChange: function(){
			$('#sticky').transition('fade');
		},
		scrollLock: true,
		transition: 'overlay'
	});

	$('.ui.sticky').sticky({
		offset: 32
	});

})

function toggleSideNav(){
	$('.ui.labeled.icon.sidebar').sidebar('toggle');
}