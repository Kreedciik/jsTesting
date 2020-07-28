// Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.

'use strict'

let str = '123456';

str = str.split('');
str.reverse();
str = str.join('');

console.log(str)