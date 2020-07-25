// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

'use strict'

let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    i = 0;

for(i; i < week.length; i++){

    if(i < week.length - 2)
    document.write(week[i] + '<br>');
    else
    document.write(`<b>${week[i]}</b> <br>`);
}