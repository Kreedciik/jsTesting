// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
//  Какое число получится? Посчитайте количество итераций, 
// необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

'use strict'

let n = 1000,
    num,
    i = 0;

while(n > 50){

    n /= 2;
    i++;
}

num = n;

console.log('Полученное число: ' + num);
console.log('К-во итераций: ' + i);