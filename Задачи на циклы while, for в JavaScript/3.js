// Выведите столбец четных чисел в промежутке от 0 до 100.

'use strict'

let a = 0,
    b = 100,
    i = a;

// for
for(i; i <= b; i++){

    if(i % 2 === 0 && i !== 0)
    console.log(i);
}

// while
// while(i <= b){

//     if(i % 2 === 0 && i !== 0)
//     console.log(i);
//     i ++;    
// }

// do{while}
// do{
//     if(i % 2 === 0 && i !== 0)
//     console.log(i);
//     i ++;
// } while(i <= b);
