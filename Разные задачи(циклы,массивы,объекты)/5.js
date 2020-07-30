//  С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

'use strict'

let str = '';

for(let i = 1; i <= 9; i++){

    str += i;
}

console.log(str);