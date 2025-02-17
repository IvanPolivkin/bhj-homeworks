let time; // пока пустая переменная
let x =59; // стартовое значение обратного отсчета
countdown(); // вызов функции
function countdown(){  // функция обратного отсчета
  document.getElementById('timer').innerHTML = x;
  x--; // уменьшаем число на единицу
  if (x<0){
    clearTimeout(time); // таймер остановится на нуле
    alert('Вы победили в конкурсе!');
  }
  else {
    timer = setTimeout(countdown, 1000);
  }
}