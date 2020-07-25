// Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
// let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}

'use strict'

let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};

for(let key in obj){

    console.log(key);
}