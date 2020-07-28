// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

'use strict'

let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    n = 7;

function day(a){

    let result;
    result = week[a-1];
    console.log(result);
    return result;
}

day(0);