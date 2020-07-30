// С помощью двух вложенных циклов нарисуйте следующую пирамидку:

'use strict'

let pyramid = 'x',
    n = 9;

for(let i = 1; i <= n; i++){

    for(let j = 1; j <= i; j++){

        document.write(i);
    }
    document.write('<br>');
}