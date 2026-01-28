'use strict'

//Изучаю блок Расчеты и математика

/*Первый урок */
// console.log(10 === 10.0);
// //0.1
// console.log(0.1+0.2 === 0.3);
// console.log(0.1+0.2);

// console.log(Number('10'));
// console.log(+'20');
// console.log(Number.parseInt('11',10));
// console.log(Number.parseInt('11 sec',10));
// console.log(Number.parseInt('sec 11',10));

// console.log(Number.parseFloat('11.5',10));
// console.log(Number.parseFloat('11.5 sec',10));
// console.log(Number.parseFloat('sec 11.5',10));

// console.log(Number.isNaN(Number('10sdfs')));
// console.log(Number.isNaN(10/0));
// console.log(Number.isFinite(10/0));
// console.log(Number.isFinite(Number('10sdfs')));
// console.log(Number.isFinite(10));

/*Второй урок  */
console.log(Math.sqrt(36));
console.log(36 ** (1/2));
console.log(Math.cbrt(27));
console.log(16 ** (1/4));

console.log(Math.sign(-100));
console.log(Math.sign(35));
console.log(Math.abs(-100));
console.log(Math.abs(35));

console.log(Math.exp(3));

console.log(Math.max(1, -2, 10, 0, 19));
console.log(Math.max(1, -2, '10', true, '19'));
console.log(Math.max(1, -2, '10', true, 1.2));
console.log(Math.min(1, -2, 10, 0, 19));

const arr = [1, -2, 10, 0, 19];
console.log(Math.max(...arr));

console.log(Math.random());
