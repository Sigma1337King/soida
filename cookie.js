// Получаем форму и чекбокс "Запомнить меня"
var loginForm = document.querySelector('form[action=""]');
var rememberMeCheckbox = document.querySelector('input[type="checkbox"]');

// При отправке формы проверяем, отмечен ли чекбокс "Запомнить меня"
loginForm.addEventListener('submit', function(event) {
  if (rememberMeCheckbox.checked) {
    var username = document.querySelector('input[placeholder="Имя аккаунта"]').value;
    var password = document.querySelector('input[placeholder="Пароль"]').value;

    // Устанавливаем cookie с именем пользователя и паролем
    document.cookie = "username=" + username + "; max-age=" + 60*60*24*30; // Сохраняем на 30 дней
    document.cookie = "password=" + password + "; max-age=" + 60*60*24*30; // Сохраняем на 30 дней
  }
});
