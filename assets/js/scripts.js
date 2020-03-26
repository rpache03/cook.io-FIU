// AOS Library Init
$('[data-aos]')
	.parent()
	.addClass('hideOverflowOnMobile');
AOS.init();

//Smooth scrolling when clicked on a link to an element on page
$(document).on('click', 'a[href^="#"]', function(event) {
	event.preventDefault();

	$('html, body').animate(
		{
			scrollTop: $($.attr(this, 'href')).offset().top
		},
		500
	);
});

// Granim Library Init
var granimInstance = new Granim({
	element: '#canvas-basic',
	direction: 'diagonal',
	isPausedWhenNotInView: true,
	states: {
		'default-state': {
			gradients: [
				['#ff9966', '#ff5e62'],
				['#00F260', '#0575E6'],
				['#e1eec3', '#f05053']
			]
		}
	}
});

// Type up script
var options = {
	strings: [
		'',
		'Welcome to Cook.io ^1000 <br> This is a placeholder while we work on the website! <br> Stay tuned!'
	],
	typeSpeed: 90
};

var typed = new Typed('.element', options);

//for shopping cart quantity values
$(document).ready(function(){
	$('.quantity').prop('disabled', true);
	   	$(document).on('click','.plus',function(){
			$('.quantity').val(parseInt($('.quantity').val()) + 1 );
		});
	$(document).on('click','.minus',function(){
		$('.quantity').val(parseInt($('.quantity').val()) - 1 );
			if ($('.quantity').val() == 0) {
				$('.quantity').val(1); //placeholder, needs to remove item from cart
			}
		});
 });
//function increaseQuantity() {
//	$('.quantity').val(parseInt($('.quantity').val()) + 1 );
//}
