//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

'use strict'

let arr = [1, 2, 3, 4, 5],
    newArr;

newArr = arr.splice(1, 3);

console.log(newArr);