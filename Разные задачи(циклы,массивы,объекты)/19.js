// Сделайте функцию getDivisors, 
// которая параметром принимает число и возвращает 
// массив его делителей (чисел, на которое делится данное число).

'use strict'

let num = 35,
    arr = [];

function getDivisors(a){

    if(num % a === 0)
    return true;
    else
    return false;
}

for(let i = 1; i <= num; i++){

    if(getDivisors(i))
    arr.push(i);
}

console.log(arr);