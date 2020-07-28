// Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения

'use strict'

let str = 'hello';

// 1
str = str.split('');
str[0] = str[0].toUpperCase();
str = str.join('');

// 2
// str = str.replace(str[0], str[0].toUpperCase());
console.log(str);