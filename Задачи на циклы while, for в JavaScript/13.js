// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. 
// С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

'use strict'

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    i = 0,
    test = '-';

for(i; i < arr.length; i++){

    test += arr[i];
    test += '-';
}

console.log(test);