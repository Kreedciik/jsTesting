// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

'use strict'

let arr = [1, 2, 3, 4, 5];

arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.push('e');

console.log(arr);