// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. 
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

'use strict'

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    newArr = [];

    function isEven(a){

        if(a % 2 === 0)
        return true;
        else
        return false;
    };

for(let i = 0; i < arr.length; i++){

    if(isEven(arr[i]))
    newArr.push(arr[i]);
}

console.log(newArr);