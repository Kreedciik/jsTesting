// Преобразуйте первую букву строки в верхний регистр.

'use strict'

let str = 'верхний';

str = str.split('');
str[0] = str[0].toUpperCase();
str = str.join('');

console.log(str);