//  Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.

'use strict'

let str = 'Я-учу-javascript!';

str = str.replace(/-/g, '!');

console.log(str);