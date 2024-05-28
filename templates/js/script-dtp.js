document.addEventListener('DOMContentLoaded', function() {
  var dateInput = document.getElementById('date');
  
  // Получаем текущую дату
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; // Январь - это 0!
  var yyyy = today.getFullYear();
  
  // Добавляем ведущий ноль к месяцу и дню, если это необходимо
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  
  // Устанавливаем минимальную и максимальную дату
  dateInput.setAttribute('min', yyyy + '-' + mm + '-' + dd);
  
  // Устанавливаем максимальную дату на следующий месяц
  var nextMonth = today.getMonth() + 2;
  var nextMonthYear = yyyy;
  if (nextMonth > 12) {
    nextMonth = '01';
    nextMonthYear++;
  } else if (nextMonth < 10) {
    nextMonth = '0' + nextMonth;
  }
  
  dateInput.setAttribute('max', nextMonthYear + '-' + nextMonth + '-31');

  // Получаем модальные окна и кнопку отправки формы
  var modalWrongYear = document.getElementById('modal-wrong-year');
  var modalTimeFree = document.getElementById('modal-time-free');
  var modalTimeBusy = document.getElementById('modal-time-busy');
  var form = document.getElementById('datetime-form');

  // Добавляем обработчик событий для кнопки отправки формы
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Проверяем, выбран ли текущий год
    var selectedDate = new Date(dateInput.value);
    if (selectedDate.getFullYear() != yyyy) {
      modalWrongYear.style.display = "block";
    } else {
      // Здесь вы можете добавить проверку, свободно ли выбранное время
      // Если время свободно
      modalTimeFree.style.display = "block";
      // Если время занято
      // modalTimeBusy.style.display = "block";
    }
  });

  // Добавляем обработчики событий для кнопок закрытия модальных окон
  var closeButtons = document.getElementsByClassName('close');
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
      this.parentElement.parentElement.style.display = "none";
    });
  }
});
