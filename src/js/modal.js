// $('.phone-mask').mask('+7 (999)999-99-99');

$('.loader--js').on('click', function (event) {
    event.preventDefault();

    // Получаем значение выбранного радиобаттона в момент открытия модального окна
    var selectedGenderInModal = $('.quiz__step input[type="radio"]:checked').val();

    // Проверяем, есть ли выбранные чекбоксы в блоке
    var $checkboxes = $('.quiz__step.active .checkbox input[type="checkbox"]:checked');
    if ($checkboxes.length > 0) {
        // Если есть выбранные чекбоксы, открываем модальное окно
        $.fancybox.close();
        $.fancybox.open({
            loop: false,
            src: '#modal-loader',
            baseClass: 'dark-fancybox',
            touch: false,
        });

        // Закрываем модальное окно через 1.5 секунды
        setTimeout(function () {
            $.fancybox.close();

            // Проверяем значение selectedGenderInModal и выполняем переход на соответствующую страницу
            if (selectedGenderInModal === 'Female') {
                window.location.href = 'product.html';
            } else if (selectedGenderInModal === 'Male') {
                window.location.href = 'product-man.html';
            }
        }, 1500);
    } else {
        console.log("Выберите хотя бы один вариант ответа");
    }
});



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
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#final-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.thank--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#thank-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});