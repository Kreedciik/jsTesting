'use strict'

let askMoney = +prompt("Ваш бюджет на месяц?", '');
    

    if(askMoney !== '' && isNaN(askMoney) === false && askMoney !== null){

    let typeDate = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {

    budget: askMoney,
    time: typeDate,
    expenses: {},
    optionalExpense: {},
    income: [],
    savings: false

};

// Method for

for(let i = 0; i < 2; i++){

    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = +prompt("Во сколько обойдется?", '');

    if(typeof(a) === 'string' && typeof(a) !== null && a !== '' && b !== null && b !== '' && isNaN(b) === false && a.length < 50){

        console.log('Done');
        appData.expenses[a] = b;
    } else{

        console.log('Bad result :(');
        i--;
    }
}

// Method while

// let i = 0;
// while(i < 2){

//     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let b = prompt("Во сколько обойдется?", '');

//     if(typeof(a) === 'string' && typeof(a) !== null && a !== '' && typeof(b) !== null && b !== '' && a.length < 50){

//         console.log('Done');
//         appData.expenses[a] = b;
        
//     } else{

//         console.log('Bad result :(');
//         i--;

//     }

//     i++;

// }

// Method do while

// let i = 0;

// do{

//     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let b = prompt("Во сколько обойдется?", '');

//     if(typeof(a) === 'string' && typeof(a) !== null && a !== '' && typeof(b) !== null && b !== '' && a.length < 50){

//         console.log('Done');
//         appData.expenses[a] = b;

//     } else{

//         console.log('Bad result :(');
//         i--;
//     }

//     i++;


// } while(i < 2)







appData.moneyPerDay = appData.budget / 30;


alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");


if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}
    } else{

        alert('Wrong dates :(');
    }

