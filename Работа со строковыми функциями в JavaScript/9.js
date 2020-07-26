// Дана строка 'я учу javascript!'.
//  С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

'use strict'

let str = 'я учу javascript!',
    arr = [];

arr = str.split('');

console.log(arr);