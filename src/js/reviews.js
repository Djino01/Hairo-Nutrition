if ($(".reviews").length > 0) {
	var swiper = new Swiper(".reviews__swiper", {
		slidesPerView: 1.34,
		spaceBetween: 9,
		pagination: {
			el: ".reviews .swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},
		navigation: {
			nextEl: ".reviews .arrow_next",
			prevEl: ".reviews .arrow_prev",
		},
	});
}