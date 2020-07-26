// Преобразуйте первую букву каждого слова строки в верхний регистр.

'use strict'

let str = 'Преобразуйте первую букву каждого слова строки в верхний регистр.';

str = str.split(' ');

for(let i = 0; i <str.length; i++){

    str[i] = str[i].split('');
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join('');
}

str = str.join(' ');

console.log(str);
 