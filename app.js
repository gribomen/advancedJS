'use strict';

const User = function (email, password){
    this.email = email;
    this.password = password;
};

const user1 = new User('ader@lu.ru','123');
console.log(user1);
const user2 = new User('ader2@lu.ru','123');
console.log(user2)
console.log(user2 instanceof User);

// Создается пустой объект
// Вызывается User функция
// this = пустому объекту
// объект связывается с prototype
// возвращается объект