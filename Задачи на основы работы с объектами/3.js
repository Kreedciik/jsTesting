// У нас есть объект, в котором хранятся зарплаты нашей команды:

'use strict'

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

let sum = 0;

for(let key in salaries){

    sum += salaries[key];
}

console.log('Сумма свойств объекта: ' + sum);
