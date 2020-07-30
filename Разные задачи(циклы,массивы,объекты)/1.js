// Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.

'use strict'

let arr = [1, 5, 3, 4, 0],
    bool = false;

arr.forEach(function(item){

    if(item === 5){

        bool = true;
    }
});

if(bool){

    console.log('да');
} else{

    console.log('нет'); 
}