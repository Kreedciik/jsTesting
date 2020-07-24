// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10.
//  Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr = [4, 2, 5, 19, 13, 0, 10],
    st,
    sum = 0;

for(let i = 0; i < arr.length; i++){

    sum += Math.pow(arr[i], 3);

}

st = Math.round(Math.sqrt(sum));

if(isNaN(st) === false){

    console.log('Сумма кубов равна: ' + sum);
    console.log('Квадратный корень из суммы кубов равна: ' + st);
} else{

    console.log(st + 'не натуральное число!');
}