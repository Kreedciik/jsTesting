// Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.

'use strict'

let arr = [],
    x = 'x',
    n = 5;

for(let i = 1; i <= n; i++){

  for(let j = 1; j < i; j++){

    x += 'x';
  }

  arr[i-1] = x;
  x = 'x';
   
}

console.log(arr);

