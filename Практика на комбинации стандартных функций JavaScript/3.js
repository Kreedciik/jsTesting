// Проверьте, что строка начинается на http://

'use strict'

let str = 'http://some text';

if(str.substr(0, 7) === 'http://'){

console.log('Строка начинается на http://');

} else{

    console.log('Строка не начинается на http://');
}

