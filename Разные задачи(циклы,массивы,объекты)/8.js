// Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:

let pyramid = '*',
    n = 20;

for(let i = 2; i <= n; i+=2){

    for(let j = 1; j <= i; j++){

        document.write(pyramid);
    }
    document.write('<br>');
}