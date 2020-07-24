// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

'use strict'

let a = 379,
round, toPr1, toPr2;

round = Math.round(Math.sqrt(a));
toPr1 = Math.sqrt(a).toFixed(1);
toPr2 = Math.sqrt(a).toFixed(2);

console.log('Math.round() = ' + round);
console.log('toFixed(1) = ' + toPr1);
console.log('toFixed(2) = ' + toPr2);