// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны,
//  запишите результаты округления в объект с ключами 'floor' и 'ceil'.

let a = 587;
let obj = {

    ceil: Math.ceil(Math.sqrt(a)),
    floor: Math.floor(Math.sqrt(a))
};

for(let key in obj){

    console.log(key + ': ' + obj[key]);
}