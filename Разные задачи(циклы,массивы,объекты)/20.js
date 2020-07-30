// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. 
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. 
// Функция должна возвращать true или false.

'use strict'

let str = ['Hi', 'my', 'name', 'is', 'John'],
    text = 'my';

function inArray(text, arr){

    if(arr.indexOf(text) !== -1)
    return true;
    else
    return false;
}

console.log(inArray(text, str));