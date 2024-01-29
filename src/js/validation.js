/*$("#zip").on('keyup', function(e){
	e.preventDefault();
	const val = $(this).val();
	$.get('https://api.zippopotam.us/US/' + val, function(data) {
		$("#city").val(data.places[0]['place name']);
		$("#state").val(data.places[0]['state abbreviation']);
		$("#select-state").html(data.places[0]['state abbreviation']);
	}, 'json');
});*/

  /*document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('.form');
    var fields = form.querySelectorAll('.form__field');
    var zipField = document.getElementById('zip');
    var cityField = document.getElementById('city');

    form.addEventListener('submit', function (event) {
      var isValid = true;

      fields.forEach(function (field) {
        if (field.value.trim() === '') {
          isValid = false;
          field.closest('.form__box').classList.add('error');
        } else {
          field.closest('.form__box').classList.remove('error');
        }
      });

      if (!isValid) {
        event.preventDefault();
        return;
      }

      $.fancybox.close();
      $.fancybox.open({
        loop: false,
        src: '#final-modal',
        baseClass: 'dark-fancybox',
        touch: false,
      });
    });

    fields.forEach(function (field) {
      field.addEventListener('change', function () {
        // При изменении значения поля проверяем, добавляем или удаляем класс error
        if (field.value.trim() === '') {
          field.closest('.form__box').classList.add('error');
        } else {
          field.closest('.form__box').classList.remove('error');
        }
      });
    });

    // Добавляем обработчик для поля zip
    zipField.addEventListener('keyup', function (e) {
      e.preventDefault();
      const val = $(this).val();
      $.get('https://api.zippopotam.us/US/' + val, function (data) {
        cityField.value = data.places[0]['place name'];

        // Проверяем значение поля city и добавляем/удаляем класс error
        if (cityField.value.trim() === '') {
          cityField.closest('.form__box').classList.add('error');
        } else {
          cityField.closest('.form__box').classList.remove('error');
        }

        $("#state").val(data.places[0]['state abbreviation']);
        $("#select-state").html(data.places[0]['state abbreviation']);
      }, 'json');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Находим форму и второе модальное окно
    var form = document.querySelector('.form');

    // Добавляем обработчик события отправки формы
    form.addEventListener('submit', function(event) {
      // Отменяем стандартное действие формы (отправку на сервер)
      event.preventDefault();

      // Получаем значения из полей формы
      var firstName = document.getElementById('name').value;
      var lastName = document.getElementById('lastname').value;
      var zip = document.getElementById('zip').value;
      var address = document.getElementById('address').value;
      var apt = document.getElementById('apt').value;
      var city = document.getElementById('city').value;
      var state = document.getElementById('select-state').textContent; // Получаем текст выбранного элемента
      var phone = document.getElementById('phone').value;
      var email = document.getElementById('email').value;

      // Вставляем значения во второе модальное окно
      document.getElementById('value-name').textContent = firstName;
      document.getElementById('value-last-name').textContent = lastName;
      document.getElementById('value-zip').textContent = zip;
      document.getElementById('value-address').textContent = address;
      document.getElementById('value-apt').textContent = apt;
      document.getElementById('value-city').textContent = city;
      document.getElementById('value-state').textContent = state;
      document.getElementById('value-phone').textContent = phone;
      document.getElementById('value-email').textContent = email;
    });
  });*/

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('.form');
    var fields = form.querySelectorAll('.form__field');
    var zipField = document.getElementById('zip');
    var cityField = document.getElementById('city');

    form.addEventListener('submit', function (event) {
        var isValid = true;

        fields.forEach(function (field) {
            if (field.value.trim() === '' && field.id !== 'apt') {
                isValid = false;
                field.closest('.form__box').classList.add('error');
            } else {
                field.closest('.form__box').classList.remove('error');
            }
        });

        if (!isValid) {
            console.log("Form submitted");
            event.preventDefault();
            return;
        }

        // Валидация пройдена, сохраняем значения в куках
        saveCookies();

        // Теперь обработка открытия fancybox
        $.fancybox.close();
        $.fancybox.open({
            loop: false,
            src: '#final-modal',
            baseClass: 'dark-fancybox',
            touch: false,
            afterShow: function () {
                // Добавляем обработчик для кнопки с классом thank--js внутри fancybox
                $('.thank--js').on('click', function () {
                    // Переход на страницу thanks.html
                    window.location.href = 'thanks.html';
                });
            },
            afterClose: function () {
                // Очищаем обработчик, чтобы избежать множественных привязок
                $('.thank--js').off('click');
            }
        });
    });

    fields.forEach(function (field) {
        field.addEventListener('change', function () {
            // При изменении значения поля проверяем, добавляем или удаляем класс error
            if (field.value.trim() === '' && field.id !== 'apt') {
                field.closest('.form__box').classList.add('error');
            } else {
                field.closest('.form__box').classList.remove('error');
            }
        });
    });

    zipField.addEventListener('keyup', function (e) {
        e.preventDefault();
        const val = $(this).val();
        $.get('https://api.zippopotam.us/US/' + val, function (data) {
            cityField.value = data.places[0]['place name'];

            if (cityField.value.trim() === '') {
                cityField.closest('.form__box').classList.add('error');
            } else {
                cityField.closest('.form__box').classList.remove('error');
            }

            $("#state").val(data.places[0]['state abbreviation']);
            $("#select-state").html(data.places[0]['state abbreviation']);
        }, 'json');
    });

    function saveCookies() {
        var firstName = document.getElementById('name').value;
        var lastName = document.getElementById('lastname').value;
        var zip = document.getElementById('zip').value;
        var address = document.getElementById('address').value;
        var apt = document.getElementById('apt').value; // Убедитесь, что apt не является обязательным
        var city = document.getElementById('city').value;
        var state = document.getElementById('select-state').textContent;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;

        // Сохраняем значения в куках, только если поле не пустое
        if (apt.trim() !== '') {
            document.cookie = 'apt=' + encodeURIComponent(apt);
        }

        document.cookie = 'firstName=' + encodeURIComponent(firstName);
        document.cookie = 'lastName=' + encodeURIComponent(lastName);
        document.cookie = 'zip=' + encodeURIComponent(zip);
        document.cookie = 'address=' + encodeURIComponent(address);
        document.cookie = 'city=' + encodeURIComponent(city);
        document.cookie = 'state=' + encodeURIComponent(state);
        document.cookie = 'phone=' + encodeURIComponent(phone);
        document.cookie = 'email=' + encodeURIComponent(email);
    }
});

  
  
  


