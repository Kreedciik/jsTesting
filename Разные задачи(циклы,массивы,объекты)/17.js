// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. 
// Если четное - пусть функция возвращает true, если нечетное - false.

'use strict'

let num = 3,
    result;

function isEven(a){

    if(a % 2 === 0)
    return true;
    else
    return false;
}

result = isEven(num);
console.log(result);