// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

'use strict'

let equal = function(a, b){

    if(a === b)
    return true;
    else
    return false;
}

console.log(equal(2, 2));