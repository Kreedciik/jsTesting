// Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

'use strict'

let str = 'var_test_text';

str = str.split('_');

for(let i = 1; i < str.length; i++){

    str[i] = str[i].split('');
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join('');
}

str = str.join('');
console.log(str);