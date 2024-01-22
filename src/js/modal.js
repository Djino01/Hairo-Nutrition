$('.order--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#order-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.final--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#final-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.thank--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#thank-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});