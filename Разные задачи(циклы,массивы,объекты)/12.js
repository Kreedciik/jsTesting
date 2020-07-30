// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

'use strict'

let arr = [1, 0, 3, 4, 5, 6, 7, 8, 9, 10],
    sum = 0,
    iter = 0;

for(let i = 0; i < arr.length; i++){

   sum += arr[i];
   iter ++;
   if(sum > 10)
   break;
   
}

console.log('К-во итераций: ' + iter);
console.log('Сумма: ' + sum);