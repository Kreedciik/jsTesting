// Заполните массив 10-ю случайными целыми числами.

let arr = [],
    n = 10,
    i = 0;

// for

for(i; i < n; i++){

    arr[i] = Math.floor(Math.random()*10);
    console.log(arr[i]);
}

// while

// while(i < n){

//     arr[i] = Math.floor(Math.random()*10);
//     console.log(arr[i]);
//     i++;

// };