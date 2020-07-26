// Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

'use strict'

let str = 'я учу javascript!',
    pos;

pos = str.indexOf('учу');

if(pos !== -1){

console.log('Позиция подстроки: ' + pos);}
else{

    console.log('Нет такой подстроки!');
}