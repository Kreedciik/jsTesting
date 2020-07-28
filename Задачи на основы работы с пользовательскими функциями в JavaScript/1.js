// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

'use strict'

let num = -5;

function square(x){

    let result;
    result = Math.pow(x, 2);
    console.log('Result: ' + result);
    return result;
}

square(num);