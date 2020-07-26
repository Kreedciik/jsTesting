// Дана строка 'я учу javascript!'. 
// Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

'use strict'

let str = 'я учу javascript!';

.substr()
console.log('Вырезанное слово: ' + str.substr(2, 3));
console.log('Вырезанное слово: ' + str.substr(6, 10));

// .substring()
// console.log('Вырезанное слово: ' + str.substring(2, 5));
// console.log('Вырезанное слово: ' + str.substring(6, 16));

// .slice()

// console.log('Вырезанное слово: ' + str.slice(2, 5));
// console.log('Вырезанное слово: ' + str.slice(6, 16));
