// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

'use strict'

let arr = [3, 4, 1, 2, 7];

arr.sort(test);

function test(a, b){

    return a - b;
}

console.log(arr);