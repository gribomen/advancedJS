'use strict';

const first = new Date(2024, 10, 15);
const second = new Date(2024, 10, 15);

console.log(first < second);
console.log(first == second);
console.log(first === second);

console.log(first.getTime() == second.getTime());
console.log(first.getTime() === second.getTime());
console.log(Number(first) === Number(second));
console.log(+first === +second);