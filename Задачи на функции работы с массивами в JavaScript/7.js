// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

'use strict'

let arr = [1, 2, 3, 4, 5],
    newArr;

newArr = arr.slice(0, 3);

console.log(newArr);