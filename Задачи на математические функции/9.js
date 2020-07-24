// Выведите на экран случайное целое число от 1 до 100.

'use strict'

let min = 1,
    max = 100,
    result;

function randomNumber(min, max){

    result = Math.floor(Math.random()*(max - min + 1)) + min;
    console.log(result);
    return result;
}

randomNumber(1, 100);