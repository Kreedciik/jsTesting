// Проверьте, что строка заканчивается на .html.

'use strict'

let file = 'index.html';

if(file.substr(-5) === '.html'){

    console.log('Это html файл');
} else{

    console.log('Это не html файл'); 
}

