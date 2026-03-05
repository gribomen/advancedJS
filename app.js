'use strict';

const btn = document.querySelector(".button");
const contur1 = document.querySelector(".contur1");
const contur2 = document.querySelector(".contur2");
const contur3 = document.querySelector(".contur3");


btn.addEventListener('click',function(event){
    console.log("Я кнопка");
    console.log(event.target);
},true);

contur1.addEventListener('click',function(event){
    console.log("Я 1 контур");
},);

contur2.addEventListener('click',function(event){
    console.log("Я 2 контур");
});

contur3.addEventListener('click',function(event){
    console.log("Я 3 контур");
});