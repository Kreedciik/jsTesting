// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. 
// Если это так - пусть функция возвращает true, если не так - false.

'use strict'

let num = 5;

let isNumberInRange = function(n){

    if(n > 0 && n < 10)
    return true;
    else
    return false;
};

console.log(isNumberInRange(num));