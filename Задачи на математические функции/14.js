// Напишите скрипт, который будет находить факториал числа. 
// Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. 
// Например, 4! = 1*2*3*4.

let n = 4,
    p = 1;

function fact(x){

    for(let i = 1; i <= x; i++){

        p *= i;
    }

    console.log(x + '!= ' + p);
}

fact(n);