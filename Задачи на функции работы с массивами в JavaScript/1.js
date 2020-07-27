// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

'use strict'

let arr1 = [1, 2, 3],
    arr2 = [4, 5, 6],
    newArr = [];

newArr = arr1.concat(arr2);

console.log(newArr);