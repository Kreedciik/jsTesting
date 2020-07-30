// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр

'use strict'

let num = 123,
    sum = 0;


function getDigitsSum(a){

    a = a.toString().split('');
    for(let i = 0; i < a.length; i++){

        sum += +a[i];
    }

    return sum;
    
}

console.log('Сумма цифр числа ' + num + ' равна ' + getDigitsSum(num));