// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.

'use strict'

let arr = [1, 2, 3, 4, 2, 2],
    bool = false;

for(let i = 0; i < arr.length; i++){

    if(arr[i] === arr[i+1]){

        bool = true;
    }
}

if(bool){

    console.log('да');
} else{

    console.log('нет');
}

