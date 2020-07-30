// Найдите все года от 1 до 2020, сумма цифр которых равна 13. 
// Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

'use strict'

let start = 1,
    finish = 2020,
    sum = 0;

    function getDigitsSum(a, sum){

        a = a.toString().split('');
        for(let i = 0; i < a.length; i++){
    
            sum += +a[i];
        }
    
        return sum;
    
    }

    for(let i = start; i <= finish; i++){

        if(getDigitsSum(i, sum) === 13)
        console.log(i);
        
    }

    