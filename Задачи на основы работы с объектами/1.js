// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

'use strict'

let user = {};

user["name"] = 'John',
user["surname"] = 'Smith';
user["name"] = 'Pete';
delete user["name"];

console.log(user);