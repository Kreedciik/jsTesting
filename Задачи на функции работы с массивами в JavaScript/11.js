//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

'use strict'

let arr = [1, 2, 3, 4, 5];

arr.splice(3, 0, 'a', 'b', 'c');

console.log(arr);