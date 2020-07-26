// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

'use strict'

let date = '2025-12-31',
    newStr;

.split()
date = date.split('-');
newStr = date[2] + '.' + date[1] + '.' + date[0];

console.log(newStr);