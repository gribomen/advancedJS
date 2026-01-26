'use strict'

const arr = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
];

const arrId =[...new Set(arr.map(item=> item.id))];
const universalArr = arrId.map(id => arr.find(item => item.id == id));
console.log(universalArr);