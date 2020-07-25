// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом.
//  Текущий день должен храниться в переменной day.

'use strict'

let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    currentday = new Date().getDay(),
    i = 0;

for(i; i < week.length; i++){

    if(i + 1 === currentday)
    document.write(`<i>${week[i]}</i> <br>`);
    else
    document.write(`${week[i]} <br>`);
}

console.log(currentday)