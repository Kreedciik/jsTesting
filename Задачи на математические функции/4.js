// Найдите квадратный корень из 245.

'use strict'

let n = 245,
    s;

s = Math.sqrt(n);

if(isNaN(s) === false){

    console.log('квадратный корень равен: ' + s);
} else{

    console.log('Пожалуйста вводите натуральное число!');
}