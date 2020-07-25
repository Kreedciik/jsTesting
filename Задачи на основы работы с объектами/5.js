// Создайте объект с днями недели. 
// Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). 
// Выведите на экран текущий день недели.

'use strict'

let date = {

    '1': 'Monday',
    '2': 'Tuesday',
    '3': 'Wednesday',
    '4': 'Thursday',
    '5': 'Friday',
    '6': 'Saturday',
    '7': 'Sunday'
};

let currentDay = new Date().getDay();

console.log( date[currentDay] );