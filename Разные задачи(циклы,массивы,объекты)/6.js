// Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов

'use strict'

let pyramid = '*',
    n = 20;

for(let i = 1; i <= n; i++){

    for(let j = 1; j <= i; j++){

        document.write(pyramid);
    }
    document.write('<br>');
}