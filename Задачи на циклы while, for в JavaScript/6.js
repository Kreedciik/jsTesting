//  Дан массив с элементами [1, 2, 3, 4, 5]. 
// С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

'use strict'

let arr = [1, 2, 3, 4, 5],
    i = 0,
    result = 0;

for(i; i < arr.length; i++){

    result += arr[i];
}

console.log('Sum: ' + result);