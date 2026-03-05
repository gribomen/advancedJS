'use strict';

const contur1 = document.querySelector('.contur1');
console.log(contur1);

const contur2 = contur1.querySelector('.contur3');
const button = document.querySelector('button');
console.log(contur2);
console.log(contur2.childNodes);
console.log(contur2.children);

console.log(contur2.parentElement);
console.log(contur2.parentNode);

console.log(button.closest('.wrapper'));

console.log(button.previousElementSibling);
console.log(button.previousSibling);
console.log(button.nextElementSibling);
console.log(button.nextSibling);

console.log(button.parentElement.children);