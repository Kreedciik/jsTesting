// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

'use strict'

let arr = [1, 2, 3, 4, 5],
    newArr;

newArr = arr.slice(3);

console.log(newArr);