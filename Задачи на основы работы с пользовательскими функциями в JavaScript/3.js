// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

'use strict'

let a = 33,
    b = 10,
    c = 9;

let action = function(x, y, z){

    let result;
    result = (x - y) / z;
    result = result.toFixed(3);
    return result;
}

console.log(action(a, b, c));