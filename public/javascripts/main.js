(function($) {

	$(function() {

			// Toggle Menu Icon
		$( ".menu-icon" ).click(function() {
		$( ".main-nav-list" ).toggleClass( "visible" );
	})

		$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						// $target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
						//   $target.focus(); // Set focus again
					};
				});
			}
		}
	});
	});

	formSuccess = () => {
		$($msgSubmit).removeClass('hidden')
	}

	submitForm = () => {
		var name = $('#name').val();
		var email = $('#email').val();
		var message = $$('#message').val();

		$.ajax({
			type: 'POST',
			url: 'php/mailer.php',
			data: 'name=' + name + '&email=' + email + '&message=' + message,
			success: (text) => {
				if (text == 'success') {
					formSuccess();
				};
			}
		});
	};

	$('#contactForm').submit((event) => {
		event.preventDefault();
		submitForm()
	})
})(jQuery);