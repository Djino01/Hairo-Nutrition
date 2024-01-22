$('.page-quiz__btn').on("click", function () {
	$(".page-quiz__button").addClass("hidden");
	$(".page-quiz__container").slideToggle(400);
});

// Quiz
if ($(".step--js").length > 0) {
    $('.step--js').on("click", function (e) {
        e.preventDefault();
        var step = $(this).data("next-step");
        $(".quiz__step").removeClass("active");
        $(this).parent().parent().parent().find('.quiz__step[data-step="' + step + '"]').addClass("active");
        
        // Устанавливаем ширину span до значения step
        var spanWidth = step * 10; // Пример: умножаем на 10 для получения ширины в 10 пикселях на шаг
        $(".quizStepCount").css("width", spanWidth + "%");
    });
}


/*Focus*/
if ($(".quiz__field").length > 0) {
	$('.quiz__field').on('focus', function () {
		$(this).parent().find('.quiz__label-caption').addClass("active");
	});
	$('.quiz__field').on('blur', function () {
	  let email = $(this).val();
	  if (email.length == 0) {
		$(this).parent().find('.quiz__label-caption').removeClass("active");
	  } else {
		$(this).parent().find('.quiz__label-caption').addClass("active");
	  }
	});
  }