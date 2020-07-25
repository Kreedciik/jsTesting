// С помощью цикла найдите сумму чисел от 1 до 100.

'use strict'

let a = 1,
    b = 100,
    sum = 0,
    i = a;

    // for
for(i; i <= b; i++){

    sum += i;
}

// while
// while(i <= b){

//     sum += i;
//     i ++;
// }

// do{while}
// do{
//     sum += i;
//     i ++;
// } while(i <= b);

console.log(sum);