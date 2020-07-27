// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

'use strict'

let arr = ['js', 'css', 'jq'],
    deletedElement;

deletedElement = arr.shift();

console.log(deletedElement);