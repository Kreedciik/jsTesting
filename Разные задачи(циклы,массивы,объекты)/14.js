// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. 
// Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

'use strict'

let arr = [1, 4, 9, 11, 5, 24],
    newArr = [];

function isNumberInRange(elem){

    if(elem > 0 && elem < 10)

    newArr.push(elem);
}

for(let i = 0; i < arr.length; i++){

    isNumberInRange(arr[i]);
    
}

console.log(newArr);